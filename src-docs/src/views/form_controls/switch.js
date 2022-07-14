import React, { useState, Fragment } from 'react';

import { OuiSwitch, OuiSpacer } from '../../../../src/components';

export default () => {
  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Fragment>
      <OuiSwitch
        label="I am a switch"
        checked={checked}
        onChange={(e) => onChange(e)}
      />

      <OuiSpacer size="m" />

      <OuiSwitch
        label="I am a disabled switch"
        checked={checked}
        onChange={(e) => onChange(e)}
        disabled
      />

      <OuiSpacer size="m" />

      <OuiSwitch
        showLabel={false}
        label="I am a switch without a visible label"
        checked={checked}
        onChange={(e) => onChange(e)}
      />

      <OuiSpacer size="m" />

      <OuiSwitch
        label="I am a compressed switch"
        checked={checked}
        onChange={(e) => onChange(e)}
        compressed
      />

      <OuiSpacer size="m" />

      <OuiSwitch
        label="I am a compressed, disabled switch"
        checked={checked}
        onChange={(e) => onChange(e)}
        compressed
        disabled
      />

      <OuiSpacer size="m" />

      <OuiSwitch
        showLabel={false}
        label="I am a compressed switch without a visible label"
        checked={checked}
        onChange={(e) => onChange(e)}
        compressed
      />
    </Fragment>
  );
};
