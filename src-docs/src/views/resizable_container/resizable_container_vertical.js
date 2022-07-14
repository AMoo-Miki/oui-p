import React from 'react';

import { OuiText, OuiResizableContainer } from '../../../../src/components';
import { fake } from 'faker';

const text = (
  <>
    <p>{fake('{{lorem.paragraphs}}')}</p>
    <p>{fake('{{lorem.paragraphs}}')}</p>
    <p>{fake('{{lorem.paragraphs}}')}</p>
  </>
);

export default () => (
  <OuiResizableContainer style={{ height: '400px' }} direction="vertical">
    {(OuiResizablePanel, OuiResizableButton) => (
      <>
        <OuiResizablePanel initialSize={60} minSize="40%">
          <OuiText>
            <div>{text}</div>
          </OuiText>
        </OuiResizablePanel>

        <OuiResizableButton />

        <OuiResizablePanel initialSize={40} minSize="10%">
          <OuiText>
            <div>{text}</div>
          </OuiText>
        </OuiResizablePanel>
      </>
    )}
  </OuiResizableContainer>
);
