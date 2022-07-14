import React from 'react';

import { OuiEmptyPrompt } from '../../../../src/components';

export default () => (
  <OuiEmptyPrompt
    iconType="alert"
    iconColor="danger"
    title={<h2>Error loading Dashboards</h2>}
    body={
      <p>
        There was an error loading the Dashboard application. Contact your
        administrator for help.
      </p>
    }
  />
);
