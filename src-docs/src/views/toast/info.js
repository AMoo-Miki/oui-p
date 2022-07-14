import React from 'react';

import { OuiToast } from '../../../../src/components';

export default () => (
  <OuiToast title="Icons should be rare" type="info" onClose={() => {}}>
    <p>
      Icons should be used rarely. They are good for warnings, but when paired
      with long titles they look out of place.
    </p>
  </OuiToast>
);
