import React from 'react';

import { OuiDescriptionList } from '../../../../src/components';

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
  <div style={{ maxWidth: '400px' }}>
    <OuiDescriptionList
      listItems={favoriteVideoGames}
      type="column"
      align="center"
      titleProps={{ className: 'oui-textTruncate' }}
      descriptionProps={{ className: 'oui-textTruncate' }}
    />
  </div>
);
