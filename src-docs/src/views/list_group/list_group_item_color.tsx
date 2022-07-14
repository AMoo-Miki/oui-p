import React from 'react';

import {
  OuiListGroupItem,
  OuiListGroup,
} from '../../../../src/components/list_group';
import { OuiSpacer } from '../../../../src/components/spacer';

export default () => (
  <>
    <OuiListGroup>
      <OuiListGroupItem href="#" label="Inherit by default (xs)" size="xs" />

      <OuiListGroupItem
        onClick={() => {}}
        label="Primary (s)"
        color="primary"
        size="s"
      />

      <OuiListGroupItem href="#" label="Text (m)" color="text" />

      <OuiListGroupItem href="#" label="Subdued (l)" color="subdued" size="l" />
    </OuiListGroup>

    <OuiSpacer size="s" />

    <OuiListGroup style={{ background: 'black' }}>
      <OuiListGroupItem href="#" label="Ghost" color="ghost" />
    </OuiListGroup>
  </>
);
