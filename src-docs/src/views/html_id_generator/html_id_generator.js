import React, { useState, Fragment } from 'react';

import {
  OuiFlexGroup,
  OuiFlexItem,
  OuiButton,
  OuiCode,
} from '../../../../src/components';

import { htmlIdGenerator } from '../../../../src/services';

export default () => {
  const [value, setValue] = useState(htmlIdGenerator()());

  const reGenerate = () => {
    setValue(htmlIdGenerator()());
  };

  return (
    <Fragment>
      <OuiFlexGroup
        justifyContent="flexStart"
        gutterSize="m"
        alignItems="center">
        <OuiFlexItem grow={false}>
          <OuiCode>{value}</OuiCode>
        </OuiFlexItem>
        <OuiFlexItem grow={false}>
          <OuiButton onClick={reGenerate}>Regenerate</OuiButton>
        </OuiFlexItem>
      </OuiFlexGroup>
    </Fragment>
  );
};
