import React, { useState } from 'react';

import { OuiPopover, OuiButton, OuiText } from '../../../../src/components';

export default () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const button = (
    <OuiButton iconType="arrowDown" iconSide="right" onClick={onButtonClick}>
      Show popover
    </OuiButton>
  );

  return (
    <OuiPopover
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}>
      <OuiText style={{ width: 300 }}>
        <p>Popover content that&rsquo;s wider than the default width</p>
      </OuiText>
    </OuiPopover>
  );
};
