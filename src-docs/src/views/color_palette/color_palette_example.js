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

import React from 'react';
import { Link } from 'react-router-dom';

import { renderToHtml } from '../../services';

import { GuideSectionTypes } from '../../components';
import { qualitativePropsInfo, palettePropsInfo } from './props_info';

import { OuiCode, OuiText, OuiCallOut } from '../../../../src/components';

import ColorPalette from './color_palette';
const colorPaletteSource = require('!!raw-loader!./color_palette');
const colorPaletteHtml = renderToHtml(ColorPalette);

import ColorPaletteQuant from './color_palette_quantitative';
const colorPaletteQuantSource = require('!!raw-loader!./color_palette_quantitative');
const colorPaletteQuantHtml = renderToHtml(ColorPaletteQuant);

import ColorPaletteCustom from './color_palette_custom';
const colorPaletteCustomSource = require('!!raw-loader!./color_palette_custom');
const colorPaletteCustomHtml = renderToHtml(ColorPaletteCustom);

export const ColorPaletteExample = {
  title: 'Color palettes',
  intro: (
    <>
      <OuiText>
        <p>
          OUI provides a base set of color palettes that return an array of
          hexadecimal color for use in other OUI components or charts.
        </p>
      </OuiText>
    </>
  ),
  sections: [
    {
      title: 'Preset qualitative palettes',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: colorPaletteSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: colorPaletteHtml,
        },
      ],
      text: (
        <div>
          <p>
            Qualitative palettes are best suited for communicating and comparing
            discrete data series. OUI recommends using the{' '}
            <OuiCode>ouiPaletteColorBlind()</OuiCode> for qualitative and
            categorical data.
          </p>
          <p>
            This palette is restricted to only 10 colors. However, you can add
            more groups of 10 which are alternates of the original. This is
            better than allowing the initial set to loop.
          </p>
          <p>
            These colors are meant to be used as graphics and contrasted against
            the value of <OuiCode>ouiColorEmptyShade</OuiCode> for the current
            theme. When placing text on top of these colors, use the{' '}
            <OuiCode>ouiPaletteColorBlindBehindText()</OuiCode> variant. It is a
            brightened version of the base palette to create better contrast
            with text.
          </p>
        </div>
      ),
      demo: <ColorPalette />,
      snippet: [
        'ouiPaletteColorBlind()',
        "ouiPaletteColorBlind({rotations: 3, order: 'group', direction: 'both'})",
      ],
      props: qualitativePropsInfo,
    },
    {
      title: 'Recommended quantitative palettes',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: colorPaletteQuantSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: colorPaletteQuantHtml,
        },
      ],
      text: (
        <div>
          <p>
            Quantitative palettes are best suited for displaying data on a
            continuum, as in the case of health statuses and large geographic or
            demographic-based data sets.
          </p>
          <p>
            OUI provides the following common palettes for quantitative data and{' '}
            <Link to="/elastic-charts/creating-charts">charts</Link>. Just pass
            in the number of steps needed and the function will interpolate
            between the colors.
          </p>
          <OuiCallOut
            color="warning"
            iconType="accessibility"
            title="The palette for status is the only palette that has proper contrast ratios. When using the other palettes, consider adding another form of the data for screen readers."
          />
        </div>
      ),
      demo: <ColorPaletteQuant />,
    },
    {
      title: 'Custom palettes',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: colorPaletteCustomSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: colorPaletteCustomHtml,
        },
      ],
      text: (
        <div>
          <p>
            Use the <OuiCode>colorPalette</OuiCode> service to generate a
            custom, gradiated palette array of any length from one or more
            hexadecimal color codes. The third parameter{' '}
            <OuiCode>divergent</OuiCode>, will interpolate between the two
            halves of the spectrums separately. If a middle point is not
            provided, it will graduate to light gray.
          </p>
        </div>
      ),
      demo: <ColorPaletteCustom />,
      snippet: [
        "colorPalette(['#fff'. '#000'], 11);",
        "colorPalette(['#fff'. '#000'], 11, divergent = true);",
      ],
      props: palettePropsInfo,
    },
  ],
};
