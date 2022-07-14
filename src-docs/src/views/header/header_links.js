import React from 'react';

import {
  OuiHeader,
  OuiHeaderSectionItem,
  OuiHeaderLogo,
  OuiHeaderLinks,
  OuiHeaderLink,
} from '../../../../src/components';

export default () => {
  return (
    <OuiHeader>
      <OuiHeaderSectionItem border="right">
        <OuiHeaderLogo>Elastic</OuiHeaderLogo>
      </OuiHeaderSectionItem>

      <OuiHeaderSectionItem>
        <OuiHeaderLinks aria-label="App navigation links example">
          <OuiHeaderLink isActive>Docs</OuiHeaderLink>

          <OuiHeaderLink>Code</OuiHeaderLink>

          <OuiHeaderLink iconType="help">Help</OuiHeaderLink>
        </OuiHeaderLinks>
      </OuiHeaderSectionItem>
    </OuiHeader>
  );
};
