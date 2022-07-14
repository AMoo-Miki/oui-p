import React, { useState } from 'react';

import { OuiPortal, OuiButton } from '../../../../src/components';
import { OuiSpacer } from '../../../../src/components/spacer/spacer';

let buttonRef = null;

export const PortalInsert = () => {
  const [isPortalVisible, setIsPortalVisible] = useState(false);

  const setButtonRef = (node) => (buttonRef = node);

  const togglePortal = () => {
    setIsPortalVisible(!isPortalVisible);
  };

  let portal;

  if (isPortalVisible) {
    portal = (
      <OuiPortal insert={{ sibling: buttonRef, position: 'after' }}>
        <OuiSpacer />
        <p>This element is appended immediately after the button.</p>
      </OuiPortal>
    );
  }
  return (
    <div>
      <OuiButton onClick={togglePortal} buttonRef={setButtonRef}>
        Toggle portal
      </OuiButton>
      {portal}
    </div>
  );
};
