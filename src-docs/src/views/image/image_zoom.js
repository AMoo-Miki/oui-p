import React from 'react';

import {
  OuiImage,
  OuiFlexGroup,
  OuiFlexItem,
} from '../../../../src/components';

export default () => (
  <OuiFlexGroup>
    <OuiFlexItem grow={false}>
      <OuiImage
        size="m"
        hasShadow
        allowFullScreen
        caption="Click me"
        alt="Accessible image alt goes here"
        src="https://source.unsplash.com/2000x1000/?Nature"
      />
    </OuiFlexItem>
    <OuiFlexItem grow={false}>
      <OuiImage
        size="m"
        hasShadow
        allowFullScreen
        caption="Click me"
        alt="Accessible image alt goes here"
        fullScreenIconColor="dark"
        src="https://source.unsplash.com/1000x2000/?Nature"
      />
    </OuiFlexItem>
  </OuiFlexGroup>
);
