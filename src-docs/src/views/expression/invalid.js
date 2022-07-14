import React from 'react';

import { OuiExpression, OuiSpacer } from '../../../../src/components';

export default () => (
  <div>
    <OuiExpression
      onClick={() => {}}
      description="sort by"
      value="count"
      isInvalid
    />
    <OuiSpacer />
    <div style={{ maxWidth: 220 }}>
      <OuiExpression
        description="email"
        display="columns"
        isInvalid
        value="example@mail."
        onClick={() => {}}
      />
    </div>
  </div>
);
