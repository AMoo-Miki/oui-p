import React from 'react';

import { OuiText, OuiTextAlign, OuiSpacer } from '../../../../src/components';

export default () => (
  <div>
    <OuiText>
      <OuiTextAlign textAlign="left">
        <p>Left aligned paragraph.</p>
      </OuiTextAlign>
      <OuiTextAlign textAlign="center">
        <p>Center aligned paragraph.</p>
      </OuiTextAlign>
      <OuiTextAlign textAlign="right">
        <p>Right aligned paragraph.</p>
      </OuiTextAlign>
    </OuiText>
    <OuiSpacer />
    <OuiText textAlign="center">
      <p>
        You can also pass alignment to <strong>OuiText</strong> directly with a
        prop
      </p>
    </OuiText>
    <OuiText textAlign="center" color="success">
      <p>And in conjunction with coloring.</p>
    </OuiText>
  </div>
);
