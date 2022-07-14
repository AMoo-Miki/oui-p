import React from 'react';

import { OuiColorPicker } from '../../../../src/components';
import { useColorPickerState } from '../../../../src/services';

export default () => {
  const [color, setColor, errors] = useColorPickerState('#D36086');
  return (
    <OuiColorPicker
      onChange={setColor}
      color={color}
      isInvalid={!!errors}
      display="inline"
    />
  );
};
