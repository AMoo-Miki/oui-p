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

import React, { Component, ReactNode, MouseEventHandler } from 'react';
import classNames from 'classnames';

import { CommonProps } from '../common';

import { OuiSideNavItem, RenderItem } from './side_nav_item';
import { OuiSideNavItemType } from './side_nav_types';
import { OuiButtonEmpty } from '../button';
import { OuiTitle, OuiTitleProps } from '../title';
import { OuiScreenReaderOnly } from '../accessibility';
import { OuiBreakpointSize, htmlIdGenerator } from '../../services';
import { OuiHideFor, OuiShowFor } from '../responsive';

export type OuiSideNavHeadingProps = Partial<OuiTitleProps> & {
  /**
   * The actual HTML heading element to wrap the `heading`.
   * Default is `h2`
   */
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  /**
   * For best accessibility, `<nav>` elements should have a nested heading. But you can hide this element if it's redundent from something else (except on mobile).
   */
  screenReaderOnly?: boolean;
};

export type OuiSideNavProps<T = {}> = T &
  CommonProps & {
    /**
     * `children` are not rendered. Use `items` to specify navigation items instead.
     */
    children?: never;
    /**
     * Class names to be merged into the final `className` property.
     */
    className?: string;
    /**
     * Creates an associated heading element and uses the same node as default for `mobileTitle`
     */
    heading?: ReactNode;
    /**
     * Adds a couple extra #OuiSideNavHeading props and extends the props of OuiTitle that wraps the `heading`
     */
    headingProps?: OuiSideNavHeadingProps;
    /**
     * When called, toggles visibility of the navigation menu at mobile responsive widths. The callback should set the `isOpenOnMobile` prop to actually toggle navigation visibility.
     */
    toggleOpenOnMobile?: MouseEventHandler<HTMLButtonElement>;
    /**
     * If `true`, the navigation menu will be open at mobile device widths. Use in conjunction with the `toggleOpenOnMobile` prop.
     */
    isOpenOnMobile?: boolean;
    /**
     * A React node to render at mobile responsive widths, representing the title of this navigation menu.
     */
    mobileTitle?: ReactNode;
    /**
     * Array of breakpoint names for when to show the mobile version.
     * Set to `undefined` to remove responsive behavior
     */
    mobileBreakpoints?: OuiBreakpointSize[];
    /**
     *  An array of #OuiSideNavItem objects. Lists navigation menu items.
     */
    items: Array<OuiSideNavItemType<T>>;
    /**
     * Overrides default navigation menu item rendering. When called, it should return a React node representing a replacement navigation item.
     */
    renderItem?: RenderItem<T>;
    /**
     * Truncates the text of all items to stick to a single line
     */
    truncate?: boolean;
  };

export class OuiSideNav<T> extends Component<OuiSideNavProps<T>> {
  static defaultProps = {
    items: [],
    mobileBreakpoints: ['xs', 's'],
  };

  isItemOpen = (item: OuiSideNavItemType<T>) => {
    // The developer can force the item to be open.
    if (item.forceOpen) {
      return true;
    }

    // Of course a selected item is open.
    if (item.isSelected) {
      return true;
    }

    // The item has to be open if it has a child that's open.
    if (item.items) {
      return item.items.some(this.isItemOpen);
    }

    return false;
  };

  renderTree = (items: Array<OuiSideNavItemType<T>>, depth = 0) => {
    const { renderItem, truncate } = this.props;

    return items.map((item) => {
      const {
        id,
        name,
        isSelected,
        items: childItems,
        icon,
        onClick,
        href,
        forceOpen,
        ...rest
      } = item;

      // Root items are always open.
      const isOpen = depth === 0 ? true : this.isItemOpen(item);

      let renderedItems;

      if (childItems) {
        renderedItems = this.renderTree(childItems, depth + 1);
      }

      // Act as an accordion only if item is not linked but has children (and not the root)
      const childrenOnly = depth > 0 && !onClick && !href && !!childItems;

      return (
        <OuiSideNavItem
          isOpen={isOpen}
          isSelected={!childrenOnly && isSelected}
          isParent={!!childItems}
          icon={icon}
          onClick={onClick}
          href={href}
          items={renderedItems}
          key={id}
          depth={depth}
          renderItem={renderItem}
          truncate={truncate}
          childrenOnly={childrenOnly}
          {...rest}>
          {name}
        </OuiSideNavItem>
      );
    });
  };

  render() {
    const {
      className,
      items,
      toggleOpenOnMobile,
      isOpenOnMobile,
      mobileTitle,
      mobileBreakpoints,
      // Extract this one out so it isn't passed to <nav>
      renderItem,
      truncate,
      heading,
      headingProps = {},
      ...rest
    } = this.props;

    const classes = classNames('ouiSideNav', className, {
      'ouiSideNav-isOpenMobile': isOpenOnMobile,
    });

    // To support the extra CSS needed to show/hide/animate the content,
    // We add a className for every breakpoint supported
    const contentClasses = classNames(
      'ouiSideNav__content',
      mobileBreakpoints?.map(
        (breakpointName) => `ouiSideNav__contentMobile-${breakpointName}`
      )
    );
    const sideNavContentId = htmlIdGenerator('ouiSideNavContent')();
    const navContent = (
      <div id={sideNavContentId} className={contentClasses}>
        {this.renderTree(items)}
      </div>
    );

    const {
      screenReaderOnly: headingScreenReaderOnly = false,
      element: HeadingElement = 'h2',
      ...titleProps
    } = headingProps!;

    const hasMobileVersion = mobileBreakpoints && mobileBreakpoints.length > 0;
    const hasHeader = !!heading;
    let headingNode;

    const sharedHeadingProps = {
      id: headingProps?.id || htmlIdGenerator('ouiSideNavHeading')(),
      className: headingProps?.className,
      'data-test-subj': headingProps?.['data-test-subj'],
      'aria-label': headingProps?.['aria-label'],
    };

    if (hasHeader) {
      headingNode = (
        <HeadingElement {...sharedHeadingProps}>{heading}</HeadingElement>
      );

      if (headingScreenReaderOnly) {
        headingNode = <OuiScreenReaderOnly>{headingNode}</OuiScreenReaderOnly>;
      } else {
        headingNode = (
          <OuiTitle
            size="xs"
            {...titleProps}
            className={classNames(
              'ouiSideNav__heading',
              headingProps?.className
            )}>
            <HeadingElement {...sharedHeadingProps}>{heading}</HeadingElement>
          </OuiTitle>
        );
      }
    }

    let mobileNode;
    const breakpoints: OuiBreakpointSize[] | undefined = mobileBreakpoints;
    if (hasMobileVersion) {
      mobileNode = (
        <OuiShowFor sizes={breakpoints || 'none'}>
          <nav
            aria-labelledby={sharedHeadingProps.id}
            className={classes}
            {...rest}>
            <HeadingElement {...sharedHeadingProps}>
              <OuiButtonEmpty
                className="ouiSideNav__mobileToggle"
                textProps={{ className: 'ouiSideNav__mobileToggleText' }}
                contentProps={{
                  className: 'ouiSideNav__mobileToggleContent',
                }}
                onClick={toggleOpenOnMobile}
                iconType="apps"
                iconSide="right"
                aria-controls={sideNavContentId}
                aria-expanded={isOpenOnMobile}>
                {mobileTitle || heading}
              </OuiButtonEmpty>
            </HeadingElement>
            {navContent}
          </nav>
        </OuiShowFor>
      );
    }

    return (
      <>
        {mobileNode}
        <OuiHideFor sizes={breakpoints || 'none'}>
          <nav
            aria-labelledby={headingNode ? sharedHeadingProps.id : undefined}
            className={classes}
            {...rest}>
            {headingNode}
            {navContent}
          </nav>
        </OuiHideFor>
      </>
    );
  }
}
