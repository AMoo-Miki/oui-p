import React, { useState } from 'react';

import moment from 'moment';

import { OuiDatePicker, OuiFormRow } from '../../../../src/components';

export default () => {
  const [startDate, setStartDate] = useState(moment());

  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <OuiFormRow label="Select a date">
      <OuiDatePicker selected={startDate} onChange={handleChange} />
    </OuiFormRow>
  );
};
