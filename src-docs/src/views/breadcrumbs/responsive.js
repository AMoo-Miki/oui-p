import React from 'react';

import {
  OuiBreadcrumbs,
  OuiTitle,
  OuiSpacer,
} from '../../../../src/components';

export default () => {
  const breadcrumbs = [
    {
      text: 'Animals',
      href: '#',
    },
    {
      text: 'Metazoans',
      href: '#',
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
      text: 'Nebulosa subspecies',
    },
  ];

  return (
    <>
      <OuiTitle size="xs">
        <span>Turning responsive completely off</span>
      </OuiTitle>
      <OuiSpacer size="s" />
      <OuiBreadcrumbs
        responsive={false}
        breadcrumbs={breadcrumbs}
        max={null}
        aria-label="An example of non-responsive OuiBreadcrumbs"
      />
      <OuiSpacer />
      <OuiTitle size="xs">
        <span>Customizing number of items to display</span>
      </OuiTitle>
      <OuiSpacer size="s" />
      <OuiBreadcrumbs
        responsive={{
          xs: 1,
          s: 3,
          m: 5,
          xl: 6,
        }}
        breadcrumbs={breadcrumbs}
        max={null}
        aria-label="An example of custom responsive OuiBreadcrumbs"
      />
    </>
  );
};
