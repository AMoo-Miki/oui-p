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

import { OuiTableRowCell } from './table_row_cell';

import { RIGHT_ALIGNMENT, CENTER_ALIGNMENT } from '../../services/alignment';
import { WARNING_MESSAGE } from './utils';

test('renders OuiTableRowCell', () => {
  const component = (
    <OuiTableRowCell {...requiredProps}>children</OuiTableRowCell>
  );

  expect(render(component)).toMatchSnapshot();
});

describe('align', () => {
  test('defaults to left', () => {
    const component = <OuiTableRowCell />;

    expect(render(component)).toMatchSnapshot();
  });

  test('renders right when specified', () => {
    const component = <OuiTableRowCell align={RIGHT_ALIGNMENT} />;

    expect(render(component)).toMatchSnapshot();
  });

  test('renders center when specified', () => {
    const component = <OuiTableRowCell align={CENTER_ALIGNMENT} />;

    expect(render(component)).toMatchSnapshot();
  });
});

describe('textOnly', () => {
  test('defaults to true', () => {
    const component = <OuiTableRowCell />;

    expect(render(component)).toMatchSnapshot();
  });

  test('is rendered when specified', () => {
    const component = <OuiTableRowCell textOnly={false} />;

    expect(render(component)).toMatchSnapshot();
  });
});

describe('truncateText', () => {
  test('defaults to false', () => {
    const component = <OuiTableRowCell />;

    expect(render(component)).toMatchSnapshot();
  });

  test('is rendered when specified', () => {
    const component = <OuiTableRowCell truncateText={true} />;

    expect(render(component)).toMatchSnapshot();
  });
});

describe("children's className", () => {
  test('merges new classnames into existing ones', () => {
    const component = (
      <OuiTableRowCell textOnly={false} showOnHover={true}>
        <div className="testClass" />
      </OuiTableRowCell>
    );

    expect(render(component)).toMatchSnapshot();
  });
});

describe('width and style', () => {
  const _consoleWarn = console.warn;
  beforeAll(() => {
    console.warn = (...args: [any?, ...any[]]) => {
      // Suppress an expected warning
      if (args.length === 1 && args[0] === WARNING_MESSAGE) return;
      _consoleWarn.apply(console, args);
    };
  });
  afterAll(() => {
    console.warn = _consoleWarn;
  });

  test('accepts style attribute', () => {
    const component = (
      <OuiTableRowCell style={{ width: '20%' }}>Test</OuiTableRowCell>
    );

    expect(render(component)).toMatchSnapshot();
  });

  test('accepts width attribute', () => {
    const component = <OuiTableRowCell width="10%">Test</OuiTableRowCell>;

    expect(render(component)).toMatchSnapshot();
  });

  test('accepts width attribute as number', () => {
    const component = <OuiTableRowCell width={100}>Test</OuiTableRowCell>;

    expect(render(component)).toMatchSnapshot();
  });

  test('resolves style and width attribute', () => {
    const component = (
      <OuiTableRowCell width="10%" style={{ width: '20%' }}>
        Test
      </OuiTableRowCell>
    );

    expect(render(component)).toMatchSnapshot();
  });
});
