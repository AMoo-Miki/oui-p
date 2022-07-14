import React from 'react';

import { OuiCode, OuiText } from '../../../../src/components';

const htmlCode = `<!--I'm an example of HTML-->
<div>
  asdf
</div>
`;

export default () => (
  <OuiText>
    <p>
      Sometimes you need to emphasize <OuiCode>code</OuiCode> like this.
    </p>
    <p>
      You can also pass a language in like{' '}
      <OuiCode language="html">{htmlCode.trim()}</OuiCode>.
    </p>
    <p>
      Make the background transparent like this{' '}
      <OuiCode language="html" transparentBackground>
        {htmlCode.trim()}
      </OuiCode>
      .
    </p>
  </OuiText>
);
