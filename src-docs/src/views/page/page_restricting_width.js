import React from 'react';

import {
  OuiPage,
  OuiPageContent,
  OuiPageContentBody,
  OuiPageHeader,
  OuiPageSideBar,
  OuiPageBody,
} from '../../../../src/components';

export default ({ button = <></>, content, sideNav }) => {
  return (
    <OuiPage paddingSize="none">
      <OuiPageSideBar paddingSize="l" sticky>
        {sideNav}
      </OuiPageSideBar>

      <OuiPageBody panelled>
        <OuiPageHeader
          restrictWidth={'75%'}
          iconType="logoElastic"
          pageTitle="Page title"
          rightSideItems={[button]}
          description="Restricting the width to 75%."
        />

        <OuiPageContent
          hasBorder={false}
          hasShadow={false}
          paddingSize="none"
          color="transparent"
          borderRadius="none">
          <OuiPageContentBody restrictWidth={'75%'}>
            {content}
          </OuiPageContentBody>
        </OuiPageContent>
      </OuiPageBody>
    </OuiPage>
  );
};
