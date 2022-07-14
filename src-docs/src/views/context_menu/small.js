import React, { useState } from 'react';

import {
  OuiButton,
  OuiContextMenuPanel,
  OuiContextMenuItem,
  OuiPopover,
} from '../../../../src/components';

export default () => {
  const [isPopoverOpen, setPopover] = useState(false);

  const onButtonClick = () => {
    setPopover(!isPopoverOpen);
  };

  const closePopover = () => {
    setPopover(false);
  };

  const items = [
    <OuiContextMenuItem key="copy" icon="copy" onClick={closePopover}>
      Copy
    </OuiContextMenuItem>,
    <OuiContextMenuItem key="edit" icon="pencil" onClick={closePopover}>
      Edit
    </OuiContextMenuItem>,
    <OuiContextMenuItem key="share" icon="share" onClick={closePopover}>
      Share
    </OuiContextMenuItem>,
  ];

  const button = (
    <OuiButton iconType="arrowDown" iconSide="right" onClick={onButtonClick}>
      Click to show a single panel
    </OuiButton>
  );

  return (
    <OuiPopover
      id="smallContextMenuExample"
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      panelPaddingSize="none"
      anchorPosition="downLeft">
      <OuiContextMenuPanel size="s" items={items} />
    </OuiPopover>
  );
};
