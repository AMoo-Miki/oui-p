import React from 'react';

import { OuiCallOut, OuiLink, OuiButton } from '../../../../src/components';

export default () => (
  <OuiCallOut title="Proceed with caution!" color="warning" iconType="help">
    <p>
      Here be dragons. Don&rsquo;t wanna mess with no dragons. And{' '}
      <OuiLink href="#">here&rsquo;s a link</OuiLink>.
    </p>
    <OuiButton href="#" color="warning">
      Link button
    </OuiButton>
  </OuiCallOut>
);
