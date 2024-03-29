/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

export const qualitativePropsInfo = {
  ouiPaletteColorBlind: {
    __docgenInfo: {
      props: {
        rotations: {
          description: 'How many variations of the series is needed',
          required: false,
          type: { name: 'number' },
          defaultValue: { value: '1' },
        },
        order: {
          description:
            'Order similar colors as `group`s or just `append` each variation',
          required: false,
          type: { name: "'append' | 'group'" },
          defaultValue: { value: "'append'" },
        },
        direction: {
          description: 'Specifies if the direction of the color variations',
          required: false,
          type: { name: "'lighter' | 'darker' | 'both'" },
          defaultValue: { value: "'lighter'" },
        },
        sortBy: {
          description:
            'Use the default sort order, or re-sort them based on the color wheel (natural)',
          required: false,
          type: { name: "'default' | 'natural'" },
          defaultValue: { value: "'default'" },
        },
        sortShift: {
          description:
            "Shift the sorting order by a certain number when used in conjunction with `'natural'` `sortBy`. Defaults to a number close to green.",
          required: false,
          type: { name: 'string' },
          defaultValue: { value: "'-100'" },
        },
      },
    },
  },
};

export const palettePropsInfo = {
  colorPalette: {
    __docgenInfo: {
      props: {
        colors: {
          description: 'The main color code or array of codes',
          required: true,
          type: { name: 'string[]' },
        },
        len: {
          description: 'The number of colors in the resulting array',
          required: false,
          type: { name: 'number' },
          defaultValue: { value: '10' },
        },
        diverging: {
          description:
            'Forces color interpolation to be calculated separately for each half',
          required: false,
          type: { name: 'boolean' },
          defaultValue: { value: 'false' },
        },
        categorical: {
          description:
            'Uses a more static interpolation for non-continuous spectrums',
          required: false,
          type: { name: 'boolean' },
          defaultValue: { value: 'false' },
        },
      },
    },
  },
};
