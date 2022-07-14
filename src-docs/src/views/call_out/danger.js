import React from 'react';

import { OuiCallOut, OuiLink } from '../../../../src/components';

export default () => (
  <OuiCallOut title="Sorry, there was an error" color="danger" iconType="alert">
    <p>
      Now you have to fix it, but maybe{' '}
      <OuiLink href="#">this link can help</OuiLink>.
    </p>
  </OuiCallOut>
);
