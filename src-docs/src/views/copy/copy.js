import React, { useState } from 'react';

import {
  OuiCopy,
  OuiButton,
  OuiFieldText,
  OuiSpacer,
  OuiFormRow,
} from '../../../../src/components/';

export default () => {
  const [copyText, setCopyText] = useState('I am the text that will be copied');

  const onChange = (e) => {
    setCopyText(e.target.value);
  };

  return (
    <div>
      <OuiFormRow label="Enter text that will be copied to clipboard">
        <OuiFieldText value={copyText} onChange={onChange} />
      </OuiFormRow>

      <OuiSpacer size="m" />

      <OuiCopy textToCopy={copyText}>
        {(copy) => (
          <OuiButton onClick={copy}>Click to copy input text</OuiButton>
        )}
      </OuiCopy>
    </div>
  );
};
