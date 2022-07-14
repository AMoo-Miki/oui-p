import React, { useMemo } from 'react';

import { OuiColorPicker, OuiFormRow } from '../../../../src/components';

import { useColorPickerState } from '../../../../src/services';

export default () => {
  const [color, setColor, errors] = useColorPickerState();
  const isInvalid = useMemo(() => color !== '' && !!errors, [color, errors]);

  return (
    <React.Fragment>
      <OuiFormRow label="Pick a color" isInvalid={isInvalid} error={errors}>
        <OuiColorPicker
          onChange={setColor}
          color={color}
          isInvalid={isInvalid}
          placeholder="Auto"
          isClearable={true}
        />
      </OuiFormRow>
    </React.Fragment>
  );
};
