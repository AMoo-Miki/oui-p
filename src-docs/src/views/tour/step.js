import React, { useState } from 'react';

import {
  OuiLink,
  OuiText,
  OuiSpacer,
  OuiTourStep,
} from '../../../../src/components';

export default () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <OuiTourStep
        content={
          <OuiText>
            <p>The tour step content.</p>
          </OuiText>
        }
        isStepOpen={isOpen}
        minWidth={300}
        onFinish={() => setIsOpen(false)}
        step={1}
        stepsTotal={1}
        title="Title of the current step"
        subtitle="Title of the full tour"
        anchorPosition="rightUp">
        <OuiText>
          The tour step{' '}
          <OuiLink onClick={() => setIsOpen(!isOpen)}>anchor point</OuiLink>.
        </OuiText>
      </OuiTourStep>
      <OuiSpacer size="xxl" />
      <OuiSpacer size="xxl" />
    </div>
  );
};
