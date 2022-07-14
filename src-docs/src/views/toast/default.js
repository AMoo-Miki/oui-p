import React from 'react';

import { OuiToast } from '../../../../src/components';

export default () => (
  <div>
    <OuiToast title="Example of a good toast" onClose={() => {}}>
      <p>
        A good toast message is short and to the point. It should very rarely
        include multiple paragraphs.
      </p>
    </OuiToast>
  </div>
);
