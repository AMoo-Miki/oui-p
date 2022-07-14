import React from 'react';

import {
  OuiDescriptionList,
  OuiFlexItem,
  OuiFlexGroup,
  OuiDescriptionListTitle,
  OuiDescriptionListDescription,
} from '../../../../src/components';

const favoriteVideoGames = [
  {
    title: 'The Elder Scrolls: Morrowind',
    description: 'The opening music alone evokes such strong memories.',
  },
  {
    title: 'TIE Fighter',
    description:
      'The sequel to XWING, join the dark side and fly for the Emporer.',
  },
  {
    title: 'Quake 2',
    description: 'The game that made me drop out of college.',
  },
];
export default () => (
  <OuiFlexGroup>
    <OuiFlexItem>
      <OuiDescriptionList listItems={favoriteVideoGames} />
    </OuiFlexItem>
    <OuiFlexItem>
      <OuiDescriptionList>
        <OuiDescriptionListTitle>Dota 2</OuiDescriptionListTitle>
        <OuiDescriptionListDescription>
          A videogame that I have spent way too much time on over the years.
        </OuiDescriptionListDescription>
        <OuiDescriptionListTitle>Kings Quest VI</OuiDescriptionListTitle>
        <OuiDescriptionListDescription>
          The game that forced me to learn DOS.
        </OuiDescriptionListDescription>
      </OuiDescriptionList>
    </OuiFlexItem>
  </OuiFlexGroup>
);
