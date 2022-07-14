import React from 'react';
import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components/flex';
import { OuiSpacer } from '../../../../src/components/spacer';
import { OuiIcon } from '../../../../src/components/icon';

export default () => (
  <div>
    <OuiFlexGroup alignItems="center">
      <OuiFlexItem grow={false}>
        <OuiIcon type="faceSad" />
      </OuiFlexItem>
      <OuiFlexItem grow={false}>
        On mobile, the icon will show above this text.
      </OuiFlexItem>
    </OuiFlexGroup>

    <OuiSpacer />

    <OuiFlexGroup responsive={false} alignItems="center">
      <OuiFlexItem grow={false}>
        <OuiIcon type="faceHappy" />
      </OuiFlexItem>
      <OuiFlexItem grow={false}>
        On mobile, the icon will stay to the left of this text.
      </OuiFlexItem>
    </OuiFlexGroup>
  </div>
);
