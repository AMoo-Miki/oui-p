import React from 'react';

import { OuiImage, OuiText } from '../../../../src/components';
import { fake } from 'faker';

export default () => (
  <OuiText>
    <OuiImage
      size="l"
      float="right"
      margin="l"
      hasShadow
      caption="Random nature image"
      allowFullScreen
      alt="Random nature image"
      src="https://picsum.photos/800/500"
    />
    <p>{fake('{{lorem.paragraphs}}')}</p>
    <p>{fake('{{lorem.paragraphs}}')}</p>
    <p>{fake('{{lorem.paragraphs}}')}</p>
    <OuiImage
      size="l"
      float="left"
      margin="l"
      hasShadow
      allowFullScreen
      caption="Another random image"
      alt="Random nature image"
      src="https://picsum.photos/300/300"
    />
    <p>{fake('{{lorem.paragraphs}}')}</p>
    <p>{fake('{{lorem.paragraphs}}')}</p>
  </OuiText>
);
