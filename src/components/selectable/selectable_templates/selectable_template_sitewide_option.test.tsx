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

import { requiredProps } from '../../../test/required_props';

import {
  OuiSelectableTemplateSitewideOption,
  ouiSelectableTemplateSitewideFormatOptions,
  ouiSelectableTemplateSitewideRenderOptions,
} from './selectable_template_sitewide_option';

const options: OuiSelectableTemplateSitewideOption[] = [
  {
    label: 'Basic data application',
    avatar: {
      name: 'Default Space',
    },
    meta: [
      {
        text: 'Application',
        type: 'application',
      },
    ],
    url: 'welcome-dashboards',
    ...requiredProps,
    'data-test-subj': 'test-this',
  },
  {
    label: 'Platform with deployment highlighted',
    icon: {
      type: 'user',
    },
    meta: [
      {
        text: 'Account',
        type: 'platform',
      },
      {
        text: 'personal-databoard',
        type: 'deployment',
        highlightSearchString: true,
      },
    ],
  },
  {
    label: 'Other metas',
    searchableLabel: 'Totally custom with pink metadata',
    icon: {
      type: 'alert',
      color: 'accent',
    },
    meta: [
      {
        text: 'Article',
        type: 'article',
      },
      {
        text: 'Case',
        type: 'case',
      },
      {
        text: 'Text',
      },
      {
        text: 'I have a custom type',
        type: 'PINK',
      },
    ],
  },
];

describe('OuiSelectableTemplateSitewideOptions', () => {
  const formattedOptions = ouiSelectableTemplateSitewideFormatOptions(options);

  test('different configurations are formatted with ouiSelectableTemplateSitewideFormatOptions()', () => {
    expect(formattedOptions).toMatchSnapshot();
  });

  test('different configurations are rendered with ouiSelectableTemplateSitewideRenderOptions()', () => {
    options.forEach((option) => {
      const component = ouiSelectableTemplateSitewideRenderOptions(option, '');

      expect(component).toMatchSnapshot();
    });
  });

  test('different configurations are rendered with ouiSelectableTemplateSitewideRenderOptions() and search text', () => {
    options.forEach((option) => {
      const component = ouiSelectableTemplateSitewideRenderOptions(
        option,
        'data'
      );

      expect(component).toMatchSnapshot();
    });
  });
});
