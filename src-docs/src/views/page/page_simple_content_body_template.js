import React from 'react';

import { OuiPageTemplate, OuiEmptyPrompt } from '../../../../src/components';

export default ({ button = <></>, content }) => {
  return (
    <OuiPageTemplate
      template="centeredBody"
      pageContentProps={{ paddingSize: 'none' }}>
      <OuiEmptyPrompt
        title={<span>No spice</span>}
        body={content}
        actions={button}
      />
    </OuiPageTemplate>
  );
};
