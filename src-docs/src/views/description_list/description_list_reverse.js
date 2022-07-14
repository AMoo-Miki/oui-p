import React from 'react';

import { OuiDescriptionList } from '../../../../src/components';

const favoriteVideoGame = [
  {
    title: 'Name',
    description: 'The Elder Scrolls: Morrowind',
  },
  {
    title: 'Game style',
    description: 'Open-world, fantasy, action role-playing',
  },
  {
    title: 'Release date',
    description: '2002',
  },
];

export default () => (
  <OuiDescriptionList textStyle="reverse" listItems={favoriteVideoGame} />
);
