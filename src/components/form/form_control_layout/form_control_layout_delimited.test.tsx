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
import { requiredProps } from '../../../test/required_props';

import { OuiFormControlLayoutDelimited } from './form_control_layout_delimited';
import { OuiIcon } from '../../icon';

describe('OuiFormControlLayoutDelimited', () => {
  test('is rendered', () => {
    const component = render(
      <OuiFormControlLayoutDelimited
        startControl={<span>start</span>}
        endControl={<span>end</span>}
        {...requiredProps}
      />
    );

    expect(component).toMatchSnapshot();
  });

  describe('props', () => {
    describe('delimiter', () => {
      describe('is rendered', () => {
        test('as a string', () => {
          const component = render(
            <OuiFormControlLayoutDelimited
              startControl={<span>start</span>}
              endControl={<span>end</span>}
              delimiter="+"
            />
          );

          expect(component).toMatchSnapshot();
        });

        test('as a node', () => {
          const icon = <OuiIcon type="alert" />;

          const component = render(
            <OuiFormControlLayoutDelimited
              startControl={<span>start</span>}
              endControl={<span>end</span>}
              delimiter={icon}
            />
          );

          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});
