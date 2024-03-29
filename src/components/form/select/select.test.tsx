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
/* eslint-disable no-irregular-whitespace */

import React from 'react';
import { render, mount } from 'enzyme';
import { requiredProps } from '../../../test/required_props';

import { OuiSelect } from './select';

jest.mock('../form_control_layout', () => ({
  OuiFormControlLayout: 'oui-form-control-layout',
}));
jest.mock('../validatable_control', () => ({
  OuiValidatableControl: 'oui-validatable-control',
}));

describe('OuiSelect', () => {
  it('is rendered', () => {
    const component = render(
      <OuiSelect id="id" name="name" {...requiredProps} />
    );

    expect(component).toMatchSnapshot();
  });

  describe('props', () => {
    it('options are rendered', () => {
      const component = render(
        <OuiSelect
          options={[
            { value: '1', text: 'Option #1' },
            { value: '2', text: 'Option #2' },
          ]}
        />
      );

      expect(component).toMatchSnapshot();
    });

    it('isInvalid is rendered', () => {
      const component = render(<OuiSelect isInvalid />);

      expect(component).toMatchSnapshot();
    });

    it('fullWidth is rendered', () => {
      const component = render(<OuiSelect fullWidth />);

      expect(component).toMatchSnapshot();
    });

    it('isLoading is rendered', () => {
      const component = render(<OuiSelect isLoading />);

      expect(component).toMatchSnapshot();
    });

    it('disabled options are rendered', () => {
      const component = render(
        <OuiSelect
          options={[
            { value: '1', text: 'Option #1', disabled: false },
            { value: '2', text: 'Option #2', disabled: true },
          ]}
        />
      );

      expect(component).toMatchSnapshot();
    });

    it('value option is rendered', () => {
      const component = render(
        <OuiSelect
          options={[
            { value: '1', text: 'Option #1' },
            { value: '2', text: 'Option #2' },
          ]}
          value={'1'}
          onChange={() => {}}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('hasNoInitialSelection', () => {
    it('renders with an extra option at the top', () => {
      const component = mount(
        <OuiSelect
          hasNoInitialSelection
          options={[
            { value: '1', text: 'Option #1' },
            { value: '2', text: 'Option #2' },
          ]}
          onChange={() => {}}
        />
      );

      expect(component.find('option').length).toBe(3);
      expect(component.find('option').at(0)).toMatchInlineSnapshot(`
        <option
          disabled={true}
          hidden={true}
          style={
            Object {
              "display": "none",
            }
          }
          value=""
        >
           
        </option>
`);
    });

    it('can be reset to an empty initial selection', () => {
      const component = mount(
        <OuiSelect
          hasNoInitialSelection
          value="1"
          options={[
            { value: '1', text: 'Option #1' },
            { value: '2', text: 'Option #2' },
          ]}
          onChange={() => {}}
        />
      );

      expect(
        component.find('select').getDOMNode<HTMLSelectElement>().value
      ).toBe('1');

      component.setProps({ value: '' });
      expect(
        component.find('select').getDOMNode<HTMLSelectElement>().value
      ).toBe('');

      component.setProps({ value: '1' });
      expect(
        component.find('select').getDOMNode<HTMLSelectElement>().value
      ).toBe('1');

      component.setProps({ value: undefined });
      expect(
        component.find('select').getDOMNode<HTMLSelectElement>().value
      ).toBe('');
    });
  });
});
