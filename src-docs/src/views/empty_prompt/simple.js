import React from 'react';

import {
  OuiEmptyPrompt,
  OuiButton,
  OuiButtonEmpty,
} from '../../../../src/components';

export default () => (
  <OuiEmptyPrompt
    title={<h2>You have no spice</h2>}
    actions={[
      <OuiButton color="primary" fill>
        Harvest spice
      </OuiButton>,
      <OuiButtonEmpty color="danger">Sabotage all spice fields</OuiButtonEmpty>,
    ]}
  />
);
