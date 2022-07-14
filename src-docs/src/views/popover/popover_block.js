import React, { useState } from 'react';

import { OuiButton, OuiPopover } from '../../../../src/components';

export default () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const button = (
    <OuiButton onClick={onButtonClick} fullWidth>
      This button is expanded
    </OuiButton>
  );

  return (
    <OuiPopover
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      display="block">
      <div>This is a popover</div>
    </OuiPopover>
  );
};
