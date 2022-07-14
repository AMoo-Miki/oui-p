import React from 'react';

import { OuiCallOut, OuiLink } from '../../../../src/components';

export default () => (
  <OuiCallOut title="Good news, everyone!" color="success" iconType="user">
    <p>
      I have no news. Which is good! And{' '}
      <OuiLink href="#">here&rsquo;s a link</OuiLink>.
    </p>
  </OuiCallOut>
);
