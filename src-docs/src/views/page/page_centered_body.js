import React from 'react';

import {
  OuiPage,
  OuiPageContent,
  OuiEmptyPrompt,
  OuiPageSideBar,
  OuiPageBody,
} from '../../../../src/components';

export default ({ button = <></>, content, sideNav }) => {
  return (
    <OuiPage paddingSize="none">
      <OuiPageSideBar paddingSize="l" sticky>
        {sideNav}
      </OuiPageSideBar>

      <OuiPageBody paddingSize="l">
        <OuiPageContent
          verticalPosition="center"
          horizontalPosition="center"
          paddingSize="none">
          <OuiEmptyPrompt
            title={<span>No spice</span>}
            body={content}
            actions={button}
          />
        </OuiPageContent>
      </OuiPageBody>
    </OuiPage>
  );
};
