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

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';

import { OuiContainedStepProps, OuiSteps } from './steps';

const steps: OuiContainedStepProps[] = [
  {
    title: 'first title',
    children: <p>Do this first</p>,
  },
  {
    title: 'second title',
    children: <p>Then this</p>,
  },
  {
    title: 'third title',
    children: <p>And finally, do this</p>,
    status: 'incomplete',
  },
];

describe('OuiSteps', () => {
  test('renders steps', () => {
    const component = render(<OuiSteps {...requiredProps} steps={steps} />);

    expect(component).toMatchSnapshot();
  });

  test('renders steps with firstStepNumber', () => {
    const component = render(
      <OuiSteps {...requiredProps} steps={steps} firstStepNumber={10} />
    );

    expect(component).toMatchSnapshot();
  });

  test('renders steps with titleSize', () => {
    const component = render(
      <OuiSteps {...requiredProps} steps={steps} titleSize="xs" />
    );

    expect(component).toMatchSnapshot();
  });

  test('renders step title inside "headingElement" element', () => {
    const component = render(
      <OuiSteps {...requiredProps} steps={steps} headingElement="h2" />
    );

    expect(component).toMatchSnapshot();
  });
});
