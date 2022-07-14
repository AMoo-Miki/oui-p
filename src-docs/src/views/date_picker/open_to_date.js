import React, { useState } from 'react';

import moment from 'moment';

import { OuiDatePicker, OuiFormRow } from '../../../../src/components';

export default () => {
  const [startDate, setStartDate] = useState(null);

  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <OuiFormRow label="Select a date">
      <OuiDatePicker
        selected={startDate}
        onChange={handleChange}
        openToDate={moment('1993-09-28')}
        placeholder="Back to 1993"
      />
    </OuiFormRow>
  );
};
