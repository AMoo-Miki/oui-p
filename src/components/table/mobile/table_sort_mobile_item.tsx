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

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { CommonProps } from '../../common';

import { OuiContextMenuItem } from '../../context_menu';

export interface OuiTableSortMobileItemProps extends CommonProps {
  /**
   * Callback to know when an item has been clicked
   */
  onSort?: () => void;
  /**
   * Indicates current option is the sorted on column
   */
  isSorted?: boolean;
  /**
   * Indicates which direction the current column is sorted on
   */
  isSortAscending?: boolean;

  ariaLabel?: string;
}

export const OuiTableSortMobileItem: FunctionComponent<OuiTableSortMobileItemProps> = ({
  children,
  onSort,
  isSorted,
  isSortAscending,
  className,
  ariaLabel,
  ...rest
}) => {
  let sortIcon = 'empty';
  if (isSorted) {
    sortIcon = isSortAscending ? 'sortUp' : 'sortDown';
  }

  const buttonClasses = classNames('ouiTableSortMobileItem', className, {
    'ouiTableSortMobileItem-isSorted': isSorted,
  });

  const columnTitle = ariaLabel ? ariaLabel : children;
  const statefulAriaLabel = `Sort ${columnTitle} ${
    isSortAscending ? 'descending' : 'ascending'
  }`;

  return (
    <OuiContextMenuItem
      className={buttonClasses}
      icon={sortIcon}
      onClick={onSort}
      aria-label={statefulAriaLabel}
      {...rest}>
      {children}
    </OuiContextMenuItem>
  );
};
