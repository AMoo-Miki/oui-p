import React from 'react';

import {
  OuiBadge,
  OuiFlexGroup,
  OuiFlexItem,
} from '../../../../src/components';

export default () => (
  <OuiFlexGroup wrap responsive={false} gutterSize="xs">
    <OuiFlexItem grow={false}>
      <OuiBadge color="#BADA55" href="/#/display/badge">
        badge as an anchor
      </OuiBadge>
    </OuiFlexItem>
    <OuiFlexItem grow={false}>
      <OuiBadge color="hollow" href="/#/display/badge" target="blank">
        anchor with target specified
      </OuiBadge>
    </OuiFlexItem>
    <OuiFlexItem grow={false}>
      <OuiBadge
        color="accent"
        href="/#/display/badge"
        iconType="bolt"
        iconSide="right"
        iconOnClick={() => {}}
        iconOnClickAriaLabel="Example of onClick event for icon within the anchor">
        anchor with an icon and iconOnClick
      </OuiBadge>
    </OuiFlexItem>
    <OuiFlexItem grow={false}>
      <OuiBadge color="success" href="/#/display/badge" isDisabled={true}>
        disabled anchor badge
      </OuiBadge>
    </OuiFlexItem>
  </OuiFlexGroup>
);
