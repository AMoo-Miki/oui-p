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

import React, {
  MouseEventHandler,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FunctionComponent,
} from 'react';
import classNames from 'classnames';
import { CommonProps, ExclusiveUnion } from '../common';
import { getSecureRelForTarget } from '../../services';
import { validateHref } from '../../services/security/href_validator';

export interface OuiTabProps extends CommonProps {
  isSelected?: boolean;
  disabled?: boolean;
}

type OuiTabPropsForAnchor = OuiTabProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick' | 'href'> & {
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
  };

type OuiTabPropsForButton = OuiTabProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };

export type Props = ExclusiveUnion<OuiTabPropsForAnchor, OuiTabPropsForButton>;

export const OuiTab: FunctionComponent<Props> = ({
  isSelected,
  children,
  className,
  disabled: _disabled,
  href,
  target,
  rel,
  ...rest
}) => {
  const isHrefValid = !href || validateHref(href);
  const disabled = _disabled || !isHrefValid;

  const classes = classNames('ouiTab', className, {
    'ouiTab-isSelected': isSelected,
    'ouiTab-isDisabled': disabled,
  });

  //  <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
  //  this is a button and piggyback off its disabled styles.
  if (href && !disabled) {
    const secureRel = getSecureRelForTarget({ href, target, rel });

    return (
      <a
        role="tab"
        aria-selected={!!isSelected}
        className={classes}
        href={href}
        target={target}
        rel={secureRel}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <span className="ouiTab__content">{children}</span>
      </a>
    );
  }

  return (
    <button
      role="tab"
      aria-selected={!!isSelected}
      type="button"
      className={classes}
      disabled={disabled}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <span className="ouiTab__content">{children}</span>
    </button>
  );
};
