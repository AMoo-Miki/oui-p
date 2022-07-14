import React, { useState } from 'react';

import { OuiSelectable } from '../../../../src/components/selectable';
import { Options } from './data';

export default () => {
  const [options, setOptions] = useState(Options);

  return (
    <OuiSelectable
      aria-label="Example of Selectable supporting exclusions"
      allowExclusions
      options={options}
      onChange={(newOptions) => setOptions(newOptions)}>
      {(list) => list}
    </OuiSelectable>
  );
};
