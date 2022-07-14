import React, { useState } from 'react';

import { OuiSwitch, OuiStat, OuiSpacer } from '../../../../src/components';

export default () => {
  const [isLoading, setLoading] = useState(true);

  const onToggleChange = (e) => {
    setLoading(e.target.checked);
  };

  return (
    <div>
      <OuiStat
        title="7,600 mm"
        description="Total People"
        isLoading={isLoading}
      />
      <OuiSpacer />
      <OuiSwitch
        label="Show as loading"
        checked={isLoading}
        onChange={onToggleChange}
      />
    </div>
  );
};
