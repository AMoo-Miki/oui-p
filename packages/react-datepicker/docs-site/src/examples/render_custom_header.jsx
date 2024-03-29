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

import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const range = (start, end, step = 1) =>
  Array.from(
    { length: (end - start + step - 1) / step },
    (_, i) => i * step + start
  );

const years = range(1990, moment().year() + 1, 1);
const months = moment.months();

export default class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {`
<DatePicker
    selected={this.state.startDate}
    onChange={this.handleChange}
    renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled
            }) => {}}
/>
`}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}>
                  {'<'}
                </button>
                <select
                  value={date.year()}
                  onChange={({ target: { value } }) => changeYear(value)}>
                  {years.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[date.month()]}
                  onChange={({ target: { value } }) => changeMonth(value)}>
                  {months.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}>
                  {'>'}
                </button>
              </div>
            )}
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
