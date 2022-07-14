import React, { useState } from 'react';

import moment from 'moment';

import { OuiDatePicker } from '../../../../src/components';

export default () => {
  const [startDate, setStartDate] = useState(moment());

  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div>
      <OuiDatePicker
        selected={startDate}
        onChange={handleChange}
        inline
        showTimeSelect
      />
      <OuiDatePicker
        selected={startDate}
        onChange={handleChange}
        inline
        showTimeSelect
        shadow={false}
      />
    </div>
  );
};
