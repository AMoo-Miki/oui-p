/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { useReducer } from 'react';
import { assertNever } from '../common';
import { OuiTourStepProps } from './tour_step';
import { OuiTourAction, OuiTourActions, OuiTourState } from './types';

export type OuiStatelessTourStep = Omit<OuiTourStepProps, keyof OuiTourState> &
  Partial<OuiTourState>;

export const useOuiTour = (
  stepsArray: OuiStatelessTourStep[],
  initialState: OuiTourState
): [OuiTourStepProps[], OuiTourActions, OuiTourState] => {
  function reducer(state: OuiTourState, action: OuiTourAction): OuiTourState {
    switch (action.type) {
      case 'OUI_TOUR_FINISH': {
        const currentTourStep = action.payload.resetTour
          ? 1
          : state.currentTourStep;
        return {
          ...state,
          currentTourStep,
          isTourActive: false,
        };
      }
      case 'OUI_TOUR_RESET':
        return {
          ...state,
          currentTourStep: 1,
          isTourActive: true,
        };
      case 'OUI_TOUR_NEXT': {
        const nextStep =
          state.currentTourStep === stepsArray.length
            ? state.currentTourStep
            : state.currentTourStep + 1;
        return {
          ...state,
          currentTourStep: nextStep,
        };
      }
      case 'OUI_TOUR_PREVIOUS': {
        const prevStep =
          state.currentTourStep === 1
            ? state.currentTourStep
            : state.currentTourStep - 1;
        return {
          ...state,
          currentTourStep: prevStep,
        };
      }
      case 'OUI_TOUR_GOTO': {
        const step = action.payload.step;
        const isTourActive =
          typeof action.payload.isTourActive !== 'undefined'
            ? action.payload.isTourActive
            : state.isTourActive;
        const goTo =
          step <= stepsArray.length && step > 0 ? step : state.currentTourStep;
        return {
          ...state,
          currentTourStep: goTo,
          isTourActive,
        };
      }
      default:
        assertNever(action);
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: OuiTourActions = {
    finishTour: (resetTour: boolean = true) =>
      dispatch({ type: 'OUI_TOUR_FINISH', payload: { resetTour } }),
    resetTour: () => dispatch({ type: 'OUI_TOUR_RESET' }),
    decrementStep: () => dispatch({ type: 'OUI_TOUR_PREVIOUS' }),
    incrementStep: () => dispatch({ type: 'OUI_TOUR_NEXT' }),
    goToStep: (step: number, isTourActive?: boolean) =>
      dispatch({ type: 'OUI_TOUR_GOTO', payload: { step, isTourActive } }),
  };

  const steps = stepsArray.map((step) => ({
    ...step,
    isStepOpen: state.currentTourStep === step.step && state.isTourActive,
    minWidth: state.tourPopoverWidth,
    onFinish: actions.finishTour,
    stepsTotal: stepsArray.length,
    subtitle: state.tourSubtitle,
  }));

  return [steps, actions, state];
};
