import React, { useState } from 'react';

import moment from 'moment';

import { OuiDatePicker, OuiDatePickerRange } from '../../../../src/components';

export default () => {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add(11, 'd'));

  return (
    <OuiDatePickerRange
      startDateControl={
        <OuiDatePicker
          selected={startDate}
          onChange={setStartDate}
          startDate={startDate}
          endDate={endDate}
          isInvalid={startDate > endDate}
          aria-label="Start date"
          showTimeSelect
        />
      }
      endDateControl={
        <OuiDatePicker
          selected={endDate}
          onChange={setEndDate}
          startDate={startDate}
          endDate={endDate}
          isInvalid={startDate > endDate}
          aria-label="End date"
          showTimeSelect
        />
      }
    />
  );
};
