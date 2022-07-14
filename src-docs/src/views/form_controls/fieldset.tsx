import React from 'react';

import { OuiFormFieldset } from '../../../../src/components/form/form_fieldset';
import { OuiSwitch } from '../../../../src/components/form/switch';
import { OuiSpacer } from '../../../../src/components/spacer';

export default () => (
  <OuiFormFieldset legend={{ children: 'Enable these objects' }}>
    <OuiSwitch label="Object 1" onChange={() => {}} checked={false} />
    <OuiSpacer size="s" />
    <OuiSwitch label="Object 2" onChange={() => {}} checked={true} />
  </OuiFormFieldset>
);
