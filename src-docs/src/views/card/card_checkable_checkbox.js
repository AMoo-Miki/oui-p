import React, { useState } from 'react';

import { OuiCheckableCard } from '../../../../src/components';

import { htmlIdGenerator } from '../../../../src/services';

export default () => {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <OuiCheckableCard
      id={htmlIdGenerator()()}
      label="I am a checkbox"
      checkableType="checkbox"
      value="checkbox1"
      checked={checkbox}
      onChange={() => setCheckbox(!checkbox)}
    />
  );
};
