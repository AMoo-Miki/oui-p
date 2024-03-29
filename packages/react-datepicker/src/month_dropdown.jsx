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

import React from "react";
import PropTypes from "prop-types";
import MonthDropdownOptions from "./month_dropdown_options";
import onClickOutside from "react-onclickoutside";
import * as utils from "./date_utils";

const WrappedMonthDropdownOptions = onClickOutside(MonthDropdownOptions);

export default class MonthDropdown extends React.Component {
  static propTypes = {
    dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
    locale: PropTypes.string,
    dateFormat: PropTypes.string.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    useShortMonthInDropdown: PropTypes.bool,
    accessibleMode: PropTypes.bool,
    onDropdownToggle: PropTypes.func,
    buttonRef: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.localeData = utils.getLocaleDataForLocale(this.props.locale);
    this.monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
      this.props.useShortMonthInDropdown
        ? M =>
            utils.getMonthShortInLocale(this.localeData, utils.newDate({ M }))
        : M =>
            utils.getMonthInLocale(
              this.localeData,
              utils.newDate({ M }),
              this.props.dateFormat
            )
    );

    this.state = {
      dropdownVisible: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.accessibleMode && // in accessibleMode
      prevState.dropdownVisible !== this.state.dropdownVisible && // dropdown visibility changed
      this.state.dropdownVisible === false // dropdown is no longer visible
    ) {
      this.readViewref.focus();
    }

    if (prevProps.locale !== this.props.locale) {
      this.localeData = utils.getLocaleDataForLocale(this.props.locale);
      this.monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
        this.props.useShortMonthInDropdown
          ? M =>
              utils.getMonthShortInLocale(this.localeData, utils.newDate({ M }))
          : M =>
              utils.getMonthInLocale(
                this.localeData,
                utils.newDate({ M }),
                this.props.dateFormat
              )
      );
      this.forceUpdate();
    }
  }

  setReadViewRef = ref => {
    this.readViewref = ref;
    this.props.buttonRef(ref);
  };

  onReadViewKeyDown = event => {
    const eventKey = event.key;
    switch (eventKey) {
      case " ":
      case "Enter":
        event.preventDefault();
        event.stopPropagation();
        this.toggleDropdown();
        break;
    }
  };

  onDropDownKeyDown = event => {
    const eventKey = event.key;
    switch (eventKey) {
      case " ":
      case "Enter":
        event.preventDefault();
        event.stopPropagation();
        this.toggleDropdown();
        break;
    }
  };

  renderSelectOptions = monthNames =>
    monthNames.map((M, i) => (
      <option key={i} value={i}>
        {M}
      </option>
    ));

  renderSelectMode = monthNames => (
    <select
      value={this.props.month}
      className="react-datepicker__month-select"
      onChange={e => this.onChange(e.target.value)}
    >
      {this.renderSelectOptions(monthNames)}
    </select>
  );

  renderReadView = (visible, monthNames) => (
    <div
      key="read"
      ref={this.setReadViewRef}
      style={{ visibility: visible ? "visible" : "hidden" }}
      className="react-datepicker__month-read-view"
      onClick={this.toggleDropdown}
      onKeyDown={this.onReadViewKeyDown}
      tabIndex={this.props.accessibleMode ? "0" : undefined}
      aria-label={`Button. Open the month selector. ${
        monthNames[this.props.month]
      } is currently selected.`}
    >
      <span className="react-datepicker__month-read-view--down-arrow" />
      <span className="react-datepicker__month-read-view--selected-month">
        {monthNames[this.props.month]}
      </span>
    </div>
  );

  renderDropdown = monthNames => (
    <WrappedMonthDropdownOptions
      key="dropdown"
      ref="options"
      month={this.props.month}
      monthNames={monthNames}
      onChange={this.onChange}
      onCancel={this.toggleDropdown}
      accessibleMode={this.props.accessibleMode}
    />
  );

  renderScrollMode = monthNames => {
    const { dropdownVisible } = this.state;
    let result = [this.renderReadView(!dropdownVisible, monthNames)];
    if (dropdownVisible) {
      result.unshift(this.renderDropdown(monthNames));
    }
    return result;
  };

  onChange = month => {
    this.toggleDropdown();
    if (month !== this.props.month) {
      this.props.onChange(month);
    }
  };

  toggleDropdown = () => {
    const isOpen = !this.state.dropdownVisible
    this.setState({
      dropdownVisible: isOpen
    });
    this.props.onDropdownToggle(isOpen, 'month');
  }

  render() {
    let renderedDropdown;
    switch (this.props.dropdownMode) {
      case "scroll":
        renderedDropdown = this.renderScrollMode(this.monthNames);
        break;
      case "select":
        renderedDropdown = this.renderSelectMode(this.monthNames);
        break;
    }

    return (
      <div
        className={`react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--${
          this.props.dropdownMode
        }`}
      >
        {renderedDropdown}
      </div>
    );
  }
}
