import React from 'react';

import { OuiPageTemplate } from '../../../../src/components';

export default ({ button = <></>, content }) => (
  <OuiPageTemplate
    pageHeader={{
      pageTitle: 'Page title',
      rightSideItems: [button],
      tabs: [{ label: 'Tab 1', isSelected: true }, { label: 'Tab 2' }],
    }}>
    {content}
  </OuiPageTemplate>
);
