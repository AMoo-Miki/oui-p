import React from 'react';

import {
  OuiPage,
  OuiPageContent,
  OuiEmptyPrompt,
  OuiPageBody,
} from '../../../../src/components';

export default ({ button = <></>, content }) => {
  return (
    <OuiPage paddingSize="none">
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
