import React from 'react';

import { OuiEmptyPrompt, OuiLoadingLogo } from '../../../../src/components';

export default () => (
  <OuiEmptyPrompt
    icon={<OuiLoadingLogo logo="logoKibana" size="xl" />}
    title={<h2>Loading Dashboards</h2>}
  />
);
