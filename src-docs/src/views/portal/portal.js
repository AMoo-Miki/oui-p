import React, { useState } from 'react';

import { OuiPortal, OuiButton, OuiBottomBar } from '../../../../src/components';

export const Portal = () => {
  const [isPortalVisible, setIsPortalVisible] = useState(false);

  const togglePortal = () => {
    setIsPortalVisible(!isPortalVisible);
  };

  let portal;

  if (isPortalVisible) {
    portal = (
      <OuiPortal>
        <OuiBottomBar>
          <p>This element is appended to the body in the DOM if you inspect</p>
        </OuiBottomBar>
      </OuiPortal>
    );
  }
  return (
    <div>
      <OuiButton onClick={togglePortal}>Toggle portal</OuiButton>

      {portal}
    </div>
  );
};
