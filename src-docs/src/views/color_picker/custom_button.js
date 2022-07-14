import React, { Fragment, useState } from 'react';

import {
  OuiColorPicker,
  OuiFormRow,
  OuiColorPickerSwatch,
  OuiBadge,
  OuiSpacer,
} from '../../../../src/components';

import { useColorPickerState } from '../../../../src/services';

export default () => {
  const [color, setColor, errors] = useColorPickerState('');
  const [selectedColor, setSelectedColor] = useState(color);
  const handleColorChange = (text, { hex, isValid }) => {
    setColor(text, { hex, isValid });
    setSelectedColor(hex);
  };
  return (
    <Fragment>
      <OuiFormRow label="Pick a color" error={errors}>
        <OuiColorPicker
          onChange={handleColorChange}
          color={color}
          secondaryInputDisplay="top"
          button={
            <OuiColorPickerSwatch
              color={selectedColor}
              aria-label="Select a new color"
            />
          }
          isClearable={true}
        />
      </OuiFormRow>
      <OuiSpacer />
      <OuiColorPicker
        onChange={handleColorChange}
        color={color}
        isInvalid={!!errors}
        secondaryInputDisplay="bottom"
        button={
          <OuiBadge
            color={selectedColor ? selectedColor : 'hollow'}
            onClickAriaLabel="Select a new color">
            Color this badge
          </OuiBadge>
        }
      />
    </Fragment>
  );
};
