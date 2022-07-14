import React, { useState } from 'react';

import {
  OuiButton,
  OuiOutsideClickDetector,
  OuiSpacer,
} from '../../../../src/components';

export default () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div>
      <OuiOutsideClickDetector
        onOutsideClick={() => {
          window.alert('Clicked outside');
        }}
        isDisabled={isDisabled}>
        <p>
          {isDisabled
            ? 'This detector is disabled, so clicking outside will do nothing.'
            : 'Clicking inside here will do nothing, but clicking outside will trigger an alert.'}
        </p>
      </OuiOutsideClickDetector>

      <OuiSpacer size="l" />

      <OuiButton onClick={toggleDisabled}>
        {isDisabled ? 'Enable' : 'Disable'} the detector
      </OuiButton>
    </div>
  );
};
