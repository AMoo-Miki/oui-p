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

import React, { Fragment, Component } from 'react';

import { OuiLoadingSpinner } from '../../loading';
import {
  OuiFormControlLayoutClearButton,
  OuiFormControlLayoutClearButtonProps,
} from './form_control_layout_clear_button';
import {
  OuiFormControlLayoutCustomIcon,
  OuiFormControlLayoutCustomIconProps,
} from './form_control_layout_custom_icon';
import { IconType } from '../../icon';
import { DistributiveOmit } from '../../common';

export const ICON_SIDES: ['left', 'right'] = ['left', 'right'];

type IconShape = DistributiveOmit<
  OuiFormControlLayoutCustomIconProps,
  'type' | 'iconRef'
> & {
  type: IconType;
  side?: typeof ICON_SIDES[number];
  ref?: OuiFormControlLayoutCustomIconProps['iconRef'];
};

function isIconShape(
  icon: OuiFormControlLayoutIconsProps['icon']
): icon is IconShape {
  return !!icon && icon.hasOwnProperty('type');
}

export interface OuiFormControlLayoutIconsProps {
  icon?: IconType | IconShape;
  clear?: OuiFormControlLayoutClearButtonProps;
  isLoading?: boolean;
  compressed?: boolean;
}

export class OuiFormControlLayoutIcons extends Component<
  OuiFormControlLayoutIconsProps
> {
  render() {
    const { icon } = this.props;
    const iconSide = isIconShape(icon) && icon.side ? icon.side : 'left';
    const customIcon = this.renderCustomIcon();
    const loadingSpinner = this.renderLoadingSpinner();
    const clearButton = this.renderClearButton();

    let leftIcons;

    if (customIcon && iconSide === 'left') {
      leftIcons = <div className="ouiFormControlLayoutIcons">{customIcon}</div>;
    }

    let rightIcons;

    // If the icon is on the right, it should be placed after the clear button in the DOM.
    if (clearButton || loadingSpinner || (customIcon && iconSide === 'right')) {
      rightIcons = (
        <div className="ouiFormControlLayoutIcons ouiFormControlLayoutIcons--right">
          {clearButton}
          {loadingSpinner}
          {iconSide === 'right' ? customIcon : undefined}
        </div>
      );
    }

    return (
      <Fragment>
        {leftIcons}
        {rightIcons}
      </Fragment>
    );
  }

  renderCustomIcon() {
    const { icon, compressed } = this.props;

    if (!icon) {
      return null;
    }

    // Normalize the icon to an object if it's a string.
    const iconProps: IconShape = isIconShape(icon)
      ? icon
      : {
          type: icon,
        };
    const { ref: iconRef, side, ...iconRest } = iconProps;

    return (
      <OuiFormControlLayoutCustomIcon
        size={compressed ? 's' : 'm'}
        iconRef={iconRef}
        {...iconRest}
      />
    );
  }

  renderLoadingSpinner() {
    const { isLoading } = this.props;

    if (!isLoading) {
      return null;
    }

    return <OuiLoadingSpinner size="m" />;
  }

  renderClearButton() {
    const { clear, compressed } = this.props;
    if (!clear) {
      return null;
    }

    return (
      <OuiFormControlLayoutClearButton
        size={compressed ? 's' : 'm'}
        {...clear}
      />
    );
  }
}
