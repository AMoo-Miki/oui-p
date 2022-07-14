import React from 'react';

import { OuiHealth, OuiSpacer, OuiTitle } from '../../../../src/components';

export default () => (
  <div>
    <OuiHealth textSize="xs" color="success">
      Extra small
    </OuiHealth>

    <OuiSpacer />

    <OuiHealth textSize="s" color="success">
      Small (Default)
    </OuiHealth>

    <OuiSpacer />

    <OuiHealth textSize="m" color="success">
      Medium
    </OuiHealth>

    <OuiSpacer />

    <OuiTitle size="s">
      <h3>
        <OuiHealth textSize="inherit" color="success">
          Inherit
        </OuiHealth>
      </h3>
    </OuiTitle>
  </div>
);
