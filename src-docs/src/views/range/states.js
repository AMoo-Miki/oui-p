import React, { useState, Fragment } from 'react';

import { OuiRange, OuiSpacer, OuiDualRange } from '../../../../src/components';
import { DisplayToggles } from '../form_controls/display_toggles';

import { htmlIdGenerator } from '../../../../src/services';

export default () => {
  const [value, setValue] = useState('20');
  const [dualValue, setDualValue] = useState([20, 100]);
  const levels = [
    {
      min: 0,
      max: 20,
      color: 'danger',
    },
    {
      min: 20,
      max: 100,
      color: 'success',
    },
  ];

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onDualChange = (value) => {
    setDualValue(value);
  };

  return (
    <Fragment>
      <DisplayToggles canAppend canPrepend canLoading={false}>
        <OuiRange
          id={htmlIdGenerator()()}
          value={value}
          onChange={onChange}
          showTicks
          showInput
          showLabels
          showValue
          showRange
          tickInterval={20}
          levels={levels}
          aria-label="An example of OuiRange"
        />
      </DisplayToggles>

      <OuiSpacer size="xl" />

      <DisplayToggles canLoading={false}>
        <OuiDualRange
          id={htmlIdGenerator()()}
          value={dualValue}
          onChange={onDualChange}
          showLabels
          showInput
          showTicks
          ticks={[
            { label: '20kb', value: 20 },
            { label: '100kb', value: 100 },
          ]}
          levels={levels}
          aria-label="An example of OuiRange"
        />
      </DisplayToggles>
    </Fragment>
  );
};
