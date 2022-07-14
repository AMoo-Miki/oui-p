import React from 'react';

import { OuiFacetButton, OuiIcon, OuiAvatar } from '../../../../src/components';

export default () => (
  <div>
    <OuiFacetButton quantity={6}>Simple, no icon</OuiFacetButton>
    <br />
    <OuiFacetButton quantity={6} isSelected>
      Simple, selected
    </OuiFacetButton>
    <br />
    <OuiFacetButton quantity={6} icon={<OuiIcon type="dot" color="success" />}>
      Label or color indicator
    </OuiFacetButton>
    <br />
    <OuiFacetButton quantity={6} isDisabled>
      Disabled
    </OuiFacetButton>
    <br />
    <OuiFacetButton
      quantity={6}
      icon={<OuiAvatar size="s" name="Avatar Jones" />}>
      Avatar as icon
    </OuiFacetButton>
    <br />
    <OuiFacetButton quantity={6} isLoading>
      Loading
    </OuiFacetButton>
  </div>
);
