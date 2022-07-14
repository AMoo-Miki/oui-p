import React, { useState } from 'react';

import {
  OuiButton,
  OuiButtonIcon,
  OuiSpacer,
  OuiTitle,
} from '../../../../src/components';

export default () => {
  const [toggle0On, setToggle0On] = useState(false);
  const [toggle1On, setToggle1On] = useState(true);
  const [toggle2On, setToggle2On] = useState(true);
  const [toggle3On, setToggle3On] = useState(false);

  return (
    <>
      <OuiTitle size="xxs">
        <h3>Changing content</h3>
      </OuiTitle>
      <OuiSpacer size="s" />
      <OuiButton
        onClick={() => {
          setToggle0On((isOn) => !isOn);
        }}>
        {toggle0On ? 'Hey there good lookin' : 'Toggle me'}
      </OuiButton>
      &emsp;
      <OuiButtonIcon
        title={toggle1On ? 'Play' : 'Pause'}
        aria-label={toggle1On ? 'Play' : 'Pause'}
        iconType={toggle1On ? 'play' : 'pause'}
        onClick={() => {
          setToggle1On((isOn) => !isOn);
        }}
      />
      <OuiSpacer size="m" />
      <OuiTitle size="xxs">
        <h3>Changing visual appearance</h3>
      </OuiTitle>
      <OuiSpacer size="s" />
      <OuiButton
        isSelected={toggle2On}
        fill={toggle2On}
        iconType={toggle2On ? 'starFilledSpace' : 'starPlusEmpty'}
        onClick={() => {
          setToggle2On((isOn) => !isOn);
        }}>
        Toggle me
      </OuiButton>
      &emsp;
      <OuiButtonIcon
        aria-label="Autosave"
        title="Autosave"
        iconType="save"
        aria-pressed={toggle3On}
        color={toggle3On ? 'primary' : 'subdued'}
        onClick={() => {
          setToggle3On((isOn) => !isOn);
        }}
      />
    </>
  );
};
