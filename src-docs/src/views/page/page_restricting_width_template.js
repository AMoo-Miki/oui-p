import React from 'react';

import { OuiPageTemplate } from '../../../../src/components';

export default ({ button = <></>, content, sideNav }) => {
  return (
    <OuiPageTemplate
      pageSideBar={sideNav}
      restrictWidth="75%"
      pageHeader={{
        iconType: 'logoElastic',
        pageTitle: 'Page title',
        rightSideItems: [button],
        description: 'Restricting the width to 75%.',
      }}>
      {content}
    </OuiPageTemplate>
  );
};
