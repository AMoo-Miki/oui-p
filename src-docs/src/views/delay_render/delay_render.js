import React, { useState, Fragment } from 'react';
import {
  OuiDelayRender,
  OuiFlexItem,
  OuiCheckbox,
  OuiFormRow,
  OuiFieldNumber,
  OuiLoadingSpinner,
} from '../../../../src/components';

export default () => {
  const [minimumDelay, setDelay] = useState(3000);
  const [render, setRender] = useState(false);

  const onChangeMinimumDelay = (event) => {
    setDelay(parseInt(event.target.value, 10));
  };

  const onChangeHide = (event) => {
    setRender(event.target.checked);
  };

  const status = render ? 'showing' : 'hidden';
  const label = `Child (${status})`;
  return (
    <Fragment>
      <OuiFlexItem>
        <OuiFormRow>
          <OuiCheckbox
            id="dummy-id"
            checked={render}
            onChange={onChangeHide}
            label="Show child"
          />
        </OuiFormRow>
        <OuiFormRow label="Minimum delay">
          <OuiFieldNumber
            value={minimumDelay}
            onChange={onChangeMinimumDelay}
          />
        </OuiFormRow>

        <OuiFormRow label={label}>
          {render ? (
            <OuiDelayRender delay={minimumDelay}>
              <OuiLoadingSpinner size="m" />
            </OuiDelayRender>
          ) : (
            <Fragment />
          )}
        </OuiFormRow>
      </OuiFlexItem>
    </Fragment>
  );
};
