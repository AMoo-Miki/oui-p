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

import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CommonProps, keysOf } from '../common';

const colorsToClassNameMap = {
  default: 'ouiTextColor--default',
  subdued: 'ouiTextColor--subdued',
  secondary: 'ouiTextColor--secondary',
  success: 'ouiTextColor--success',
  accent: 'ouiTextColor--accent',
  danger: 'ouiTextColor--danger',
  warning: 'ouiTextColor--warning',
  ghost: 'ouiTextColor--ghost',
};

export type TextColor = keyof typeof colorsToClassNameMap;

export const COLORS = keysOf(colorsToClassNameMap);

export type OuiTextColorProps = CommonProps &
  Omit<
    HTMLAttributes<HTMLDivElement> & HTMLAttributes<HTMLSpanElement>,
    'color'
  > & {
    /**
     * **`secondary` color is DEPRECATED, use `success` instead**
     */
    color?: TextColor;
    /**
     * Determines the root element
     */
    component?: 'div' | 'span';
  };

export const OuiTextColor: FunctionComponent<OuiTextColorProps> = ({
  children,
  color = 'default',
  className,
  component = 'span',
  ...rest
}) => {
  const classes = classNames(
    'ouiTextColor',
    colorsToClassNameMap[color],
    className
  );
  const Component = component;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};
