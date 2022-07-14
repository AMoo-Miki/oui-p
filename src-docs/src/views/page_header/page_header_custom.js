import React from 'react';

import {
  OuiPageHeader,
  OuiPageHeaderSection,
  OuiTitle,
} from '../../../../src/components';

export default () => (
  <OuiPageHeader alignItems="center">
    <OuiPageHeaderSection>
      <OuiTitle size="l">
        <h1>Page title</h1>
      </OuiTitle>
    </OuiPageHeaderSection>
    <OuiPageHeaderSection>Page abilities</OuiPageHeaderSection>
  </OuiPageHeader>
);
