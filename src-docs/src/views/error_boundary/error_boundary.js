import React from 'react';

import { OuiErrorBoundary } from '../../../../src/components';

const BadComponent = () => {
  throw new Error(
    "I'm here to kick butt and chew bubblegum. And I'm all out of gum."
  );
};

export default () => (
  <OuiErrorBoundary>
    <BadComponent />
  </OuiErrorBoundary>
);
