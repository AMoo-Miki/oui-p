import React from 'react';

import {
  OuiCard,
  OuiIcon,
  OuiFlexGroup,
  OuiFlexItem,
} from '../../../../src/components';

const icons = ['Beats', 'Cloud', 'Logging', 'Kibana'];

const cardNodes = icons.map(function (item, index) {
  return (
    <OuiFlexItem key={index}>
      <OuiCard
        icon={<OuiIcon size="xxl" type={`logo${item}`} />}
        title={`Elastic ${item}`}
        isDisabled={item === 'Kibana' ? true : false}
        description="Example of a card's description. Stick to one or two sentences."
        onClick={() => {}}
      />
    </OuiFlexItem>
  );
});

export default () => <OuiFlexGroup gutterSize="l">{cardNodes}</OuiFlexGroup>;
