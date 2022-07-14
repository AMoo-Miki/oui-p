import React, { useState } from 'react';

import { OuiCodeEditor } from '../../../../src/components';
import 'brace/theme/github';
import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';

export default () => {
  const [value, updateValue] = useState('');

  const onChange = (value) => {
    updateValue(value);
  };

  return (
    <OuiCodeEditor
      mode="javascript"
      theme="github"
      width="100%"
      value={value}
      onChange={onChange}
      setOptions={{
        fontSize: '14px',
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
      }}
      onBlur={() => {}}
      aria-label="Code Editor"
    />
  );
};
