import React from 'react';

import { OuiColorPicker, OuiFormRow } from '../../../../src/components';
import { useColorPickerState } from '../../../../src/services';

export default () => {
  const [color, setColor, errors] = useColorPickerState('#D36086');
  return (
    <OuiFormRow label="Pick a color" isInvalid={!!errors} error={errors}>
      <OuiColorPicker onChange={setColor} color={color} isInvalid={!!errors} />
    </OuiFormRow>
  );
};
