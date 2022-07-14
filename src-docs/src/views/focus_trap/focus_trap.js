import React, { useState } from 'react';

import {
  OuiBadge,
  OuiButton,
  OuiFocusTrap,
  OuiPanel,
  OuiSpacer,
  OuiText,
} from '../../../../src/components';

import FormExample from '../form_compressed/form_compressed';

export default () => {
  const [isDisabled, changeDisabled] = useState(true);

  const toggleDisabled = () => changeDisabled(!isDisabled);

  return (
    <div>
      <OuiBadge>Trap is {isDisabled ? 'disabled' : 'enabled'}</OuiBadge>
      <OuiSpacer size="s" />
      <OuiFocusTrap disabled={isDisabled}>
        <OuiPanel>
          <FormExample />

          <OuiSpacer size="m" />

          <OuiButton onClick={toggleDisabled}>
            {`${!isDisabled ? 'Disable' : 'Enable'} Focus Trap`}
          </OuiButton>
        </OuiPanel>
      </OuiFocusTrap>

      <OuiSpacer size="l" />

      <OuiText>
        The button below is not focusable by keyboard as long as the focus trap
        is enabled.
      </OuiText>

      <OuiButton onClick={() => {}}>External Focusable Element</OuiButton>
    </div>
  );
};
