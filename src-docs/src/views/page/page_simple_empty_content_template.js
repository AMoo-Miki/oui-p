import React from 'react';

import { OuiPageTemplate, OuiEmptyPrompt } from '../../../../src/components';

export default ({ button = <></>, content }) => (
  <OuiPageTemplate
    template="centeredContent"
    pageContentProps={{ paddingSize: 'none' }}
    pageHeader={{
      iconType: 'logoElastic',
      pageTitle: 'Page title',
      rightSideItems: [button],
    }}>
    <OuiEmptyPrompt title={<span>No spice</span>} body={content} />
  </OuiPageTemplate>
);
