import React, { useState } from 'react';

import { OuiButton, OuiPopover } from '../../../../src/components';

export default () => {
  const [isExampleShown, setIsExampleShown] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const toggleExample = () =>
    setIsExampleShown((isExampleShown) => !isExampleShown);

  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const button = (
    <OuiButton
      iconType="arrowDown"
      iconSide="right"
      onClick={onButtonClick}
      fill>
      Show fixed popover
    </OuiButton>
  );

  return (
    <React.Fragment>
      <OuiButton onClick={toggleExample}>Toggle example</OuiButton>
      {isExampleShown && (
        <OuiPopover
          button={button}
          isOpen={isPopoverOpen}
          closePopover={closePopover}
          style={{ position: 'fixed', bottom: 50, right: 50, zIndex: 10 }}
          repositionOnScroll={true}>
          <div>This popover scrolls with the button element!</div>
        </OuiPopover>
      )}
    </React.Fragment>
  );
};
