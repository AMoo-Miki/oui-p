import React from 'react';

import {
  OuiFieldText,
  OuiFormRow,
  OuiSelect,
  OuiPanel,
  OuiIcon,
} from '../../../../src/components';
import { OuiToolTip } from '../../../../src/components/tool_tip';

export default () => (
  <OuiPanel style={{ maxWidth: 300 }}>
    <OuiFormRow
      label="Text field"
      helpText="Show validation help text only."
      display="columnCompressed">
      <OuiFieldText name="first" compressed />
    </OuiFormRow>

    <OuiFormRow
      label={
        <OuiToolTip content="Otherwise use an OuiToolTip around the label of the form row.">
          <span>
            Label <OuiIcon type="questionInCircle" color="subdued" />
          </span>
        </OuiToolTip>
      }
      display="columnCompressed">
      <OuiSelect
        options={[
          { value: 'option_one', text: 'Option one' },
          { value: 'option_two', text: 'Option two' },
          { value: 'option_three', text: 'Option three' },
        ]}
        compressed
      />
    </OuiFormRow>
  </OuiPanel>
);
