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

import { Comparators } from './comparators';
import { Random } from '../random';
import { SortDirection } from './sort_direction';

describe('comparators - default', () => {
  test('asc', () => {
    expect(Comparators.default(SortDirection.ASC)(5, 10)).toBeLessThan(0);
  });
  test('desc', () => {
    expect(Comparators.default(SortDirection.DESC)(5, 10)).toBeGreaterThan(0);
  });
  test('asc/desc when the two values equal', () => {
    const dir = new Random().oneOf([SortDirection.ASC, SortDirection.DESC]);
    expect(Comparators.default(dir)(5, 5)).toBe(0);
  });
});

describe('comparators - reverse', () => {
  const comparator = jest.fn();
  test('proper delegation to provided comparator', () => {
    const reverseComparator = Comparators.reverse(comparator);
    reverseComparator('v1', 'v2');
    expect(comparator.mock.calls.length).toBe(1);
    expect(comparator.mock.calls[0][0]).toBe('v2');
    expect(comparator.mock.calls[0][1]).toBe('v1');
  });
});

describe('comparators - property', () => {
  test('proper delegation to provided comparator', () => {
    const comparator = jest.fn();
    const propComparator = Comparators.property('name', comparator);
    propComparator({ name: 'n1' }, { name: 'n2' });
    expect(comparator.mock.calls.length).toBe(1);
    expect(comparator.mock.calls[0][0]).toBe('n1');
    expect(comparator.mock.calls[0][1]).toBe('n2');
  });

  test('resolving nested props', () => {
    const comparator = jest.fn();
    const propComparator = Comparators.property('person.name', comparator);
    propComparator({ person: { name: 'n1' } }, { person: { name: 'n2' } });
    expect(comparator.mock.calls.length).toBe(1);
    expect(comparator.mock.calls[0][0]).toBe('n1');
    expect(comparator.mock.calls[0][1]).toBe('n2');
  });
});

describe('default comparator', () => {
  test('null/undefined values are sorted to the end', () => {
    const sorted = [undefined, '7', 3, null, 5, undefined].sort(
      Comparators.default()
    );
    expect(sorted).toEqual([3, 5, '7', null, undefined, undefined]);
  });
});
