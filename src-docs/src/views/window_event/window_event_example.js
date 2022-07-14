import React from 'react';

import { renderToHtml } from '../../services';

import { GuideSectionTypes } from '../../components';

import { OuiWindowEvent } from '../../../../src/services';

import { OuiCode, OuiCallOut, OuiSpacer } from '../../../../src/components';

import { BasicWindowEvent } from './basic_window_event';
const basicSource = require('!!raw-loader!./basic_window_event');
const basicHtml = renderToHtml(BasicWindowEvent);

import { WindowEventConflict } from './window_event_conflict';
const conflictSource = require('!!raw-loader!./window_event_conflict');
const conflictHtml = renderToHtml(WindowEventConflict);

import { MousePosition } from './mouse_position';
const mousePositionSource = require('!!raw-loader!./mouse_position');
const mousePositionHtml = renderToHtml(MousePosition);

export const WindowEventExample = {
  title: 'Window events',
  sections: [
    {
      title: 'Basic example: closing a modal on escape',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: basicSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: basicHtml,
        },
      ],
      text: (
        <div>
          <p>
            Use an <strong>OuiWindowEvent</strong> to safely and declaratively
            manage adding and auto-removing event listeners to the{' '}
            <OuiCode>window</OuiCode>. This is preferable to setting up your own
            window event listeners because it will remove old listeners when
            your component unmounts, preventing you from accidentally leaving
            them around forever.
          </p>
          <p>
            This modal example registers a listener on the{' '}
            <OuiCode>keydown</OuiCode> event and listens for ESC key presses,
            which closes the open modal.
          </p>
        </div>
      ),
      components: { OuiWindowEvent },
      props: { OuiWindowEvent },
      demo: <BasicWindowEvent />,
    },
    {
      title: 'Avoiding event conflicts',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: conflictSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: conflictHtml,
        },
      ],
      text: (
        <div>
          <OuiCallOut
            title="Be careful with global listeners"
            color="warning"
            iconType="alert">
            <p>
              Since window event listeners are global, they can conflict with
              other event listeners if you aren&apos;t careful.
            </p>
          </OuiCallOut>
          <OuiSpacer />
          <p>
            The safest and best way to avoid these conflicts is to use{' '}
            <OuiCode>event.stopPropagation()</OuiCode> at the lowest, most
            specific level where you are responding to a DOM event. This will
            prevent the event from bubbling up to the window, and the{' '}
            <strong>OuiWindowEvent</strong> listener will never be triggered,
            avoiding the conflict.
          </p>
        </div>
      ),
      components: { OuiWindowEvent },
      demo: <WindowEventConflict />,
    },
    {
      title: 'Tracking mouse position',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: mousePositionSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: mousePositionHtml,
        },
      ],
      text: (
        <div>
          <p>
            For some DOM events, you have to listen on the window. One example
            of this is tracking <em>mouse position</em>. Below, when you click
            the toggle switch, your mouse position is tracked. When you toggle
            off, tracking stops.
          </p>
          <p>
            If you were manually attaching window listeners, you might forget to
            remove the listener and be silently responding to mouse events in
            the background for the life of your app. The{' '}
            <strong>OuiWindowEvent</strong> component manages that
            unmount/unregister process for you.
          </p>
        </div>
      ),
      components: { OuiWindowEvent },
      demo: <MousePosition />,
    },
  ],
};
