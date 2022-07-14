import React, { useState } from 'react';

import {
  OuiHeader,
  OuiHeaderLogo,
  OuiSwitch,
  OuiSpacer,
} from '../../../../src/components';

export default () => {
  const [position, setPosition] = useState('static');

  const sections = [
    {
      items: [<OuiHeaderLogo>Elastic</OuiHeaderLogo>],
      borders: 'right',
    },
  ];

  return (
    <>
      <OuiSwitch
        label={'Make header fixed position'}
        checked={position === 'fixed'}
        onChange={(e) => setPosition(e.target.checked ? 'fixed' : 'static')}
      />
      <OuiSpacer />
      <OuiHeader position={position} sections={sections} />
    </>
  );
};
