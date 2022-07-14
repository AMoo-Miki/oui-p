import React from 'react';

import { OuiAvatar } from '../../../../src/components';

export default () => (
  <div>
    <OuiAvatar
      size="m"
      type="space"
      name="Disabled"
      initials="Di"
      initialsLength={2}
      isDisabled={true}
    />
    &emsp;
    <OuiAvatar
      size="m"
      type="user"
      name="User"
      initials="En"
      initialsLength={2}
      isDisabled={true}
    />
    &emsp;
    <OuiAvatar
      size="m"
      name="Cat"
      imageUrl="https://source.unsplash.com/64x64/?cat"
      isDisabled={true}
    />
    &emsp;
    <OuiAvatar
      size="m"
      name="Management"
      iconType="managementApp"
      isDisabled={true}
    />
  </div>
);
