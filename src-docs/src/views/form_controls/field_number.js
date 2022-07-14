import React, { useState } from 'react';

import { OuiFieldNumber } from '../../../../src/components';
import { DisplayToggles } from './display_toggles';

export default () => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    /* DisplayToggles wrapper for Docs only */
    <DisplayToggles canPrepend canAppend>
      <OuiFieldNumber
        placeholder="Placeholder text"
        value={value}
        onChange={(e) => onChange(e)}
        aria-label="Use aria labels when no actual label is in use"
      />
    </DisplayToggles>
  );
};
