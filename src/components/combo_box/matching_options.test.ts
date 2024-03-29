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

import { OuiComboBoxOptionOption } from './types';
import {
  flattenOptionGroups,
  getMatchingOptions,
  getSelectedOptionForSearchValue,
} from './matching_options';

const options = [
  {
    label: 'Titan',
    'data-test-subj': 'titanOption',
  },
  {
    label: 'Saturn',
    'data-test-subj': 'saturnOption',
  },
  {
    label: 'Mimas',
  },
];

describe('flattenOptionGroups', () => {
  test('it flattens one level of options', () => {
    // Assemble
    const input = [
      {
        label: 'Titan',
        'data-test-subj': 'titanOption',
      },
      {
        label: 'Enceladus',
        options: [
          {
            label: 'Saturn',
            'data-test-subj': 'saturnOption',
          },
        ],
      },
      {
        label: 'Mimas',
      },
    ];
    const expected = options;
    // Act
    const got = flattenOptionGroups(input);
    // Assert
    expect(got).toMatchObject(expected);
  });
});

describe('getSelectedOptionForSearchValue', () => {
  test('gets the first matching selected option for search value', () => {
    // Assemble
    const expected = {
      label: 'Saturn',
      'data-test-subj': 'saturnOption',
    };
    // Act
    const got = getSelectedOptionForSearchValue('saturn', options);
    // Assert
    expect(got).toMatchObject(expected);
  });
});

describe('getSelectedOptionForSearchValue', () => {
  test('returns undefined when no matching option found for search value', () => {
    // Act
    const got = getSelectedOptionForSearchValue('Pluto', options);
    // Assert
    expect(got).toBeUndefined();
  });
  test('gets the first matching selected option for search value', () => {
    // Assemble
    const expected = {
      label: 'Saturn',
      'data-test-subj': 'saturnOption',
    };
    // Act
    const got = getSelectedOptionForSearchValue('saturn', options);
    // Assert
    expect(got).toMatchObject(expected);
  });
});

interface GetMatchingOptionsTestCase {
  expected: OuiComboBoxOptionOption[];
  isPreFiltered: boolean;
  options: OuiComboBoxOptionOption[];
  searchValue: string;
  selectedOptions: OuiComboBoxOptionOption[];
  showPrevSelected: boolean;
  sortMatchesBy: string;
}

const testCases: GetMatchingOptionsTestCase[] = [
  {
    options,
    selectedOptions: [
      {
        label: 'Saturn',
        'data-test-subj': 'saturnOption',
      },
    ],
    searchValue: 'saturn',
    isPreFiltered: false,
    showPrevSelected: false,
    expected: [],
    sortMatchesBy: 'none',
  },
  {
    options,
    selectedOptions: [
      {
        label: 'Saturn',
        'data-test-subj': 'saturnOption',
      },
    ],
    searchValue: 'saturn',
    isPreFiltered: true,
    showPrevSelected: false,
    expected: [
      { 'data-test-subj': 'titanOption', label: 'Titan' },
      { label: 'Mimas' },
    ],
    sortMatchesBy: 'none',
  },
  {
    options,
    selectedOptions: [
      {
        label: 'Saturn',
        'data-test-subj': 'saturnOption',
      },
    ],
    searchValue: 'saturn',
    isPreFiltered: false,
    showPrevSelected: true,
    expected: [{ 'data-test-subj': 'saturnOption', label: 'Saturn' }],
    sortMatchesBy: 'none',
  },
  {
    options,
    selectedOptions: [
      {
        label: 'Saturn',
        'data-test-subj': 'saturnOption',
      },
    ],
    searchValue: 'saturn',
    isPreFiltered: true,
    showPrevSelected: true,
    expected: [
      { 'data-test-subj': 'titanOption', label: 'Titan' },
      { 'data-test-subj': 'saturnOption', label: 'Saturn' },
      { label: 'Mimas' },
    ],
    sortMatchesBy: 'none',
  },
  {
    options: [{ label: 'Titan' }, { label: 'Titan' }],
    selectedOptions: [
      {
        label: 'Titan',
      },
    ],
    searchValue: 'titan',
    isPreFiltered: true,
    showPrevSelected: false,
    expected: [
      // Duplicate options without an key will be treated as the same option
    ],
    sortMatchesBy: 'none',
  },
  {
    options: [
      { label: 'Titan', key: 'titan1' },
      { label: 'Titan', key: 'titan2' },
    ],
    selectedOptions: [
      {
        label: 'Titan',
        key: 'titan2',
      },
    ],
    searchValue: 'titan',
    isPreFiltered: true,
    showPrevSelected: false,
    expected: [
      // Duplicate options with an key will be treated as different items
      { label: 'Titan', key: 'titan1' },
    ],
    sortMatchesBy: 'none',
  },
];

describe('getMatchingOptions', () => {
  test.each(testCases)(
    '.getMatchingOptions(%o)',
    (testCase: typeof testCases[number]) => {
      expect(
        getMatchingOptions(
          testCase.options,
          testCase.selectedOptions,
          testCase.searchValue,
          testCase.isPreFiltered,
          testCase.showPrevSelected,
          testCase.sortMatchesBy
        )
      ).toMatchObject(testCase.expected);
    }
  );
});
