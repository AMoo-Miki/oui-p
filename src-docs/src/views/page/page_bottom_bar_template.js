import React from 'react';

import { OuiPageTemplate } from '../../../../src/components';

export default ({ button = <></>, content, sideNav, bottomBar }) => {
  return (
    <OuiPageTemplate
      pageSideBar={sideNav}
      pageHeader={{
        iconType: 'logoElastic',
        pageTitle: 'Page title',
        rightSideItems: [button],
      }}
      bottomBar={bottomBar}>
      {content}
    </OuiPageTemplate>
  );
};
