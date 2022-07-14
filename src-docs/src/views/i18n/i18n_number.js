import React from 'react';

import { OuiI18nNumber } from '../../../../src/components';

export default () => {
  return (
    <p>
      Formatted count of users: <OuiI18nNumber value={5000000} />
    </p>
  );
};
