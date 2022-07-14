import React from 'react';

import {
  OuiBreadcrumbs,
  OuiSpacer,
  OuiTitle,
} from '../../../../src/components';

export default () => {
  const breadcrumbs = [
    {
      text: 'Animals',
      href: '#',
    },
    {
      text:
        'Metazoans is a real mouthful, especially for creatures without mouths',
      href: '#',
      truncate: true,
    },
    {
      text: 'Chordates',
      href: '#',
    },
    {
      text: 'Vertebrates',
      href: '#',
    },
    {
      text: 'Tetrapods',
      href: '#',
    },
    {
      text: 'Reptiles',
      href: '#',
    },
    {
      text: 'Boa constrictor',
      href: '#',
    },
    {
      text:
        'Nebulosa subspecies is also a real mouthful, especially for creatures without mouths',
    },
  ];

  return (
    <div>
      <OuiTitle size="xs">
        <span>Truncation on the entire set</span>
      </OuiTitle>
      <OuiSpacer size="s" />
      <OuiBreadcrumbs
        truncate={true}
        breadcrumbs={breadcrumbs}
        aria-label="An example of OuiBreadcrumbs with truncate prop"
      />
      <OuiSpacer />
      <OuiTitle size="xs">
        <span>Truncation on a single item</span>
      </OuiTitle>
      <OuiSpacer size="s" />
      <OuiBreadcrumbs
        truncate={false}
        breadcrumbs={breadcrumbs}
        aria-label="An example of OuiBreadcrumbs without truncate prop"
      />
    </div>
  );
};
