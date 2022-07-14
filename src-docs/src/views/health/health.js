import React from 'react';

import { OuiHealth, OuiSpacer } from '../../../../src/components';

export default () => (
  <div>
    <OuiHealth color="subdued">Inactive</OuiHealth>

    <OuiSpacer />

    <OuiHealth color="primary">Active</OuiHealth>

    <OuiSpacer />

    <OuiHealth color="success">Healthy</OuiHealth>

    <OuiSpacer />

    <OuiHealth color="warning">Warning</OuiHealth>

    <OuiSpacer />

    <OuiHealth color="danger">Failure</OuiHealth>

    <OuiSpacer />

    <OuiHealth color="#000000">Custom color as hex</OuiHealth>
  </div>
);
