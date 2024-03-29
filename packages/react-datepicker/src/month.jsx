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
import classnames from "classnames";
import Week from "./week";
import * as utils from "./date_utils";
import { ScreenReaderOnly } from "./screen_reader_only";

const FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;

export default class Month extends React.Component {
  static propTypes = {
    disabledKeyboardNavigation: PropTypes.bool,
    day: PropTypes.object.isRequired,
    dayClassName: PropTypes.func,
    endDate: PropTypes.object,
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    fixedHeight: PropTypes.bool,
    formatWeekNumber: PropTypes.func,
    highlightDates: PropTypes.instanceOf(Map),
    includeDates: PropTypes.array,
    inline: PropTypes.bool,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onDayClick: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onWeekSelect: PropTypes.func,
    peekNextMonth: PropTypes.bool,
    preSelection: PropTypes.object,
    selected: PropTypes.object,
    selectingDate: PropTypes.object,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    startDate: PropTypes.object,
    setOpen: PropTypes.func,
    shouldCloseOnSelect: PropTypes.bool,
    utcOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    renderDayContents: PropTypes.func,
    updateSelection: PropTypes.func.isRequired,
    accessibleMode: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.dayFormat = "MMMM D, YYYY.";
    this.state = {
      readInstructions: false
    };
  }

  handleDayClick = (day, event) => {
    if (this.props.onDayClick) {
      this.props.onDayClick(day, event);
    }
  };

  handleDayMouseEnter = day => {
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(day);
    }
  };

  handleMouseLeave = () => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave();
    }
  };

  onFocus = () => {
    if (this.props.accessibleMode) {
      this.setState({ readInstructions: true });
    }
  };

  onBlur = () => {
    if (this.props.accessibleMode) {
      this.setState({ readInstructions: false });
    }
  };

  onInputKeyDown = event => {
    const eventKey = event.key;
    // `preSelection` can be `null` but `day` is required. Use it as a fallback if necessary for invalid entries.
    const copy = this.props.preSelection ? utils.newDate(this.props.preSelection) : utils.newDate(this.props.day);
    let newSelection;
    switch (eventKey) {
      case "ArrowLeft":
        newSelection = utils.subtractDays(copy, 1);
        break;
      case "ArrowRight":
        newSelection = utils.addDays(copy, 1);
        break;
      case "ArrowUp":
        newSelection = utils.subtractWeeks(copy, 1);
        break;
      case "ArrowDown":
        newSelection = utils.addWeeks(copy, 1);
        break;
      case "PageUp":
        newSelection = utils.subtractMonths(copy, 1);
        break;
      case "PageDown":
        newSelection = utils.addMonths(copy, 1);
        break;
      case "Home":
        newSelection = utils.subtractYears(copy, 1);
        break;
      case "End":
        newSelection = utils.addYears(copy, 1);
        break;
      case " ":
      case "Enter":
        event.preventDefault();
        this.handleDayClick(copy, event);
        break;
    }
    if (!newSelection) return; // Let the input component handle this keydown
    event.preventDefault();
    this.props.updateSelection(newSelection);
  };

  isWeekInMonth = startOfWeek => {
    const day = this.props.day;
    const endOfWeek = utils.addDays(utils.cloneDate(startOfWeek), 6);
    return (
      utils.isSameMonth(startOfWeek, day) || utils.isSameMonth(endOfWeek, day)
    );
  };

  renderWeeks = () => {
    const weeks = [];
    var isFixedHeight = this.props.fixedHeight;
    let currentWeekStart = utils.getStartOfWeek(
      utils.getStartOfMonth(utils.cloneDate(this.props.day))
    );
    let i = 0;
    let breakAfterNextPush = false;

    while (true) {
      weeks.push(
        <Week
          key={i}
          day={currentWeekStart}
          month={utils.getMonth(this.props.day)}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
          onWeekSelect={this.props.onWeekSelect}
          formatWeekNumber={this.props.formatWeekNumber}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          excludeDates={this.props.excludeDates}
          includeDates={this.props.includeDates}
          inline={this.props.inline}
          highlightDates={this.props.highlightDates}
          selectingDate={this.props.selectingDate}
          filterDate={this.props.filterDate}
          preSelection={this.props.preSelection}
          selected={this.props.selected}
          selectsStart={this.props.selectsStart}
          selectsEnd={this.props.selectsEnd}
          showWeekNumber={this.props.showWeekNumbers}
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          dayClassName={this.props.dayClassName}
          utcOffset={this.props.utcOffset}
          setOpen={this.props.setOpen}
          shouldCloseOnSelect={this.props.shouldCloseOnSelect}
          disabledKeyboardNavigation={this.props.disabledKeyboardNavigation}
          renderDayContents={this.props.renderDayContents}
          accessibleMode={this.props.accessibleMode}
        />
      );

      if (breakAfterNextPush) break;

      i++;
      currentWeekStart = utils.addWeeks(utils.cloneDate(currentWeekStart), 1);

      // If one of these conditions is true, we will either break on this week
      // or break on the next week
      const isFixedAndFinalWeek =
        isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
      const isNonFixedAndOutOfMonth =
        !isFixedHeight && !this.isWeekInMonth(currentWeekStart);

      if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
        if (this.props.peekNextMonth) {
          breakAfterNextPush = true;
        } else {
          break;
        }
      }
    }

    return weeks;
  };

  getClassNames = () => {
    const { selectingDate, selectsStart, selectsEnd } = this.props;
    return classnames("react-datepicker__month", {
      "react-datepicker__month--accessible":
        this.props.accessibleMode,
      "react-datepicker__month--selecting-range":
        selectingDate && (selectsStart || selectsEnd)
    });
  };

  render() {
    let screenReaderInstructions;
    if (this.state.readInstructions) {
      screenReaderInstructions = (
        <p aria-live>
          You are focused on a calendar. Use the arrow keys to navigate the days
          in the month. Use the page up and down keys to navigate from month to
          month. Use the home and end keys to navigate from year to year.
          {this.props.preSelection ? `${utils.formatDate(this.props.preSelection, this.dayFormat)} is the
          currently focused date.` : `No date is currently focused.`}
        </p>
      );
    }

    return (
      <div
        className={this.getClassNames()}
        onMouseLeave={this.handleMouseLeave}
        role="listbox"
        aria-label={"month-" + this.props.day.format("YYYY-MM")}
        tabIndex={this.props.accessibleMode ? 0 : -1}
        onKeyDown={this.onInputKeyDown}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        <ScreenReaderOnly>
          <span>{screenReaderInstructions}</span>
        </ScreenReaderOnly>
        {this.renderWeeks()}
      </div>
    );
  }
}
