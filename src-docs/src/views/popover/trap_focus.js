import React, { useState } from 'react';

import {
  OuiButton,
  OuiFormRow,
  OuiPopover,
  OuiSpacer,
  OuiSwitch,
} from '../../../../src/components';

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
      ownFocus={false}
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      initialFocus="[id=asdf2]">
      <OuiFormRow
        label="Generate a public snapshot?"
        id="asdf"
        hasChildLabel={false}>
        <OuiSwitch
          name="switch"
          label="Snapshot data"
          checked={true}
          onChange={() => {}}
        />
      </OuiFormRow>

      <OuiFormRow label="Include the following in the embed" id="asdf2">
        <OuiSwitch
          name="switch"
          label="Current time range"
          checked={true}
          onChange={() => {}}
        />
      </OuiFormRow>

      <OuiSpacer />

      <OuiButton fill>Copy IFRAME code</OuiButton>
    </OuiPopover>
  );
};
