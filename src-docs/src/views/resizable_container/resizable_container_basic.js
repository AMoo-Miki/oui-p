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
  <OuiResizableContainer style={{ height: '200px' }}>
    {(OuiResizablePanel, OuiResizableButton) => (
      <>
        <OuiResizablePanel initialSize={50} minSize="30%">
          <OuiText>
            <div>{text}</div>
            <a href="">Hello world</a>
          </OuiText>
        </OuiResizablePanel>

        <OuiResizableButton />

        <OuiResizablePanel initialSize={50} minSize="200px">
          <OuiText>{text}</OuiText>
        </OuiResizablePanel>
      </>
    )}
  </OuiResizableContainer>
);
