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

import React, { HTMLAttributes, Ref, forwardRef } from 'react';
import classNames from 'classnames';
import { CommonProps, keysOf } from '../common';

export type FlexGroupAlignItems = keyof typeof alignItemsToClassNameMap;
export type FlexGroupComponentType = 'div' | 'span';
export type FlexGroupDirection = keyof typeof directionToClassNameMap;
export type FlexGroupGutterSize = keyof typeof gutterSizeToClassNameMap;
export type FlexGroupJustifyContent = keyof typeof justifyContentToClassNameMap;

export interface OuiFlexGroupProps
  extends CommonProps,
    HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  alignItems?: FlexGroupAlignItems;
  component?: FlexGroupComponentType;
  direction?: FlexGroupDirection;
  gutterSize?: FlexGroupGutterSize;
  justifyContent?: FlexGroupJustifyContent;
  responsive?: boolean;
  wrap?: boolean;
}

const gutterSizeToClassNameMap = {
  none: null,
  xs: 'ouiFlexGroup--gutterExtraSmall',
  s: 'ouiFlexGroup--gutterSmall',
  m: 'ouiFlexGroup--gutterMedium',
  l: 'ouiFlexGroup--gutterLarge',
  xl: 'ouiFlexGroup--gutterExtraLarge',
};

export const GUTTER_SIZES = keysOf(gutterSizeToClassNameMap);
export type OuiFlexGroupGutterSize = keyof typeof gutterSizeToClassNameMap;

const alignItemsToClassNameMap = {
  stretch: null,
  flexStart: 'ouiFlexGroup--alignItemsFlexStart',
  flexEnd: 'ouiFlexGroup--alignItemsFlexEnd',
  center: 'ouiFlexGroup--alignItemsCenter',
  baseline: 'ouiFlexGroup--alignItemsBaseline',
};

export const ALIGN_ITEMS = keysOf(alignItemsToClassNameMap);

const justifyContentToClassNameMap = {
  flexStart: null,
  flexEnd: 'ouiFlexGroup--justifyContentFlexEnd',
  center: 'ouiFlexGroup--justifyContentCenter',
  spaceBetween: 'ouiFlexGroup--justifyContentSpaceBetween',
  spaceAround: 'ouiFlexGroup--justifyContentSpaceAround',
  spaceEvenly: 'ouiFlexGroup--justifyContentSpaceEvenly',
};

export const JUSTIFY_CONTENTS = keysOf(justifyContentToClassNameMap);

const directionToClassNameMap = {
  row: 'ouiFlexGroup--directionRow',
  rowReverse: 'ouiFlexGroup--directionRowReverse',
  column: 'ouiFlexGroup--directionColumn',
  columnReverse: 'ouiFlexGroup--directionColumnReverse',
};

export const DIRECTIONS = keysOf(directionToClassNameMap);

const isValidElement = (
  component: string
): component is FlexGroupComponentType => {
  return ['div', 'span'].includes(component);
};

export const OuiFlexGroup = forwardRef<
  HTMLDivElement | HTMLSpanElement,
  OuiFlexGroupProps
>(
  (
    {
      children,
      className,
      gutterSize = 'l',
      alignItems = 'stretch',
      responsive = true,
      justifyContent = 'flexStart',
      direction = 'row',
      wrap = false,
      component = 'div',
      ...rest
    },
    ref: Ref<HTMLDivElement> | Ref<HTMLSpanElement>
  ) => {
    const classes = classNames(
      'ouiFlexGroup',
      gutterSizeToClassNameMap[gutterSize as FlexGroupGutterSize],
      alignItemsToClassNameMap[alignItems as FlexGroupAlignItems],
      justifyContentToClassNameMap[justifyContent as FlexGroupJustifyContent],
      directionToClassNameMap[direction as FlexGroupDirection],
      {
        'ouiFlexGroup--responsive': responsive,
        'ouiFlexGroup--wrap': wrap,
      },
      className
    );

    if (!isValidElement(component)) {
      throw new Error(
        `${component} is not a valid element type. Use \`div\` or \`span\`.`
      );
    }

    return component === 'span' ? (
      <span
        className={classes}
        ref={ref as Ref<HTMLSpanElement>}
        {...(rest as HTMLAttributes<HTMLSpanElement>)}>
        {children}
      </span>
    ) : (
      <div
        className={classes}
        ref={ref as Ref<HTMLDivElement>}
        {...(rest as HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }
);
OuiFlexGroup.displayName = 'OuiFlexGroup';
