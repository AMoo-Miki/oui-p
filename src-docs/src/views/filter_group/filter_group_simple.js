import React, { useState } from 'react';

import { OuiFilterGroup, OuiFilterButton } from '../../../../src/components';

export default () => {
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [isOnFilterOn, setIsOnFilterOn] = useState(false);
  const [isOffFilterOn, setIsOffFilterOn] = useState(false);

  const toggleFilter = () => {
    setIsFilterOn(!isFilterOn);
  };

  const toggleOnFilter = () => {
    setIsOnFilterOn(!isOnFilterOn);
    setIsOffFilterOn(isOffFilterOn && !isOnFilterOn ? false : isOffFilterOn);
  };

  const toggleOffFilter = () => {
    setIsOffFilterOn(!isOffFilterOn);
    setIsOnFilterOn(isOnFilterOn && !isOffFilterOn ? false : isOnFilterOn);
  };

  return (
    <OuiFilterGroup>
      <OuiFilterButton hasActiveFilters={isFilterOn} onClick={toggleFilter}>
        Single filter
      </OuiFilterButton>
      <OuiFilterButton
        withNext
        hasActiveFilters={isOnFilterOn}
        onClick={toggleOnFilter}>
        On
      </OuiFilterButton>
      <OuiFilterButton
        hasActiveFilters={isOffFilterOn}
        onClick={toggleOffFilter}>
        Off
      </OuiFilterButton>
    </OuiFilterGroup>
  );
};
