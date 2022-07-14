import React from 'react';

import {
  OuiColorPicker,
  OuiColorStops,
  OuiSpacer,
} from '../../../../src/components';
import { DisplayToggles } from '../form_controls/display_toggles';

import {
  useColorPickerState,
  useColorStopsState,
} from '../../../../src/services';

export default () => {
  const [color, setColor] = useColorPickerState('#D36086');
  const [colorStops, setColorStops, addStop] = useColorStopsState(true);

  return (
    <React.Fragment>
      {/* DisplayToggles wrapper for Docs only */}
      <DisplayToggles canLoading={false} canPrepend={true} canAppend={true}>
        <OuiColorPicker color={color} onChange={setColor} />
      </DisplayToggles>
      <OuiSpacer />
      {/* DisplayToggles wrapper for Docs only */}
      <DisplayToggles
        canLoading={false}
        canInvalid={false}
        canCompressed={false}>
        <OuiColorStops
          label="Kitchen sink"
          colorStops={colorStops}
          onChange={setColorStops}
          min={0}
          max={100}
          addStop={addStop}
        />
      </DisplayToggles>
    </React.Fragment>
  );
};
