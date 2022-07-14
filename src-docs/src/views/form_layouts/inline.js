import React from 'react';

import {
  OuiFlexGroup,
  OuiFlexItem,
  OuiFormRow,
  OuiButton,
  OuiFieldText,
} from '../../../../src/components/';

export default () => (
  <OuiFlexGroup style={{ maxWidth: 600 }}>
    <OuiFlexItem>
      <OuiFormRow label="First name" helpText="I am helpful help text!">
        <OuiFieldText />
      </OuiFormRow>
    </OuiFlexItem>
    <OuiFlexItem>
      <OuiFormRow label="Last name">
        <OuiFieldText />
      </OuiFormRow>
    </OuiFlexItem>
    <OuiFlexItem grow={false}>
      <OuiFormRow hasEmptyLabelSpace>
        <OuiButton>Save</OuiButton>
      </OuiFormRow>
    </OuiFlexItem>
  </OuiFlexGroup>
);
