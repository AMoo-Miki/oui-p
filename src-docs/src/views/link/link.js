import React from 'react';

import { OuiCode, OuiLink, OuiText } from '../../../../src/components';

export default () => (
  <OuiText>
    <p>
      Open the{' '}
      <OuiLink href="http://www.elastic.co" target="_blank">
        Elastic website
      </OuiLink>{' '}
      in a new tab. Setting <OuiCode>target=&ldquo;_blank&rdquo;</OuiCode> also
      defaults to <OuiCode>{'external={true}'}</OuiCode>.
    </p>
    <p>
      This{' '}
      <OuiLink href="http://www.elastic.co" external>
        link
      </OuiLink>{' '}
      has the <OuiCode>external</OuiCode> prop set to true.
    </p>
    <p>
      This link is actually a <OuiLink onClick={() => {}}>button</OuiLink> with
      an onClick handler.
    </p>
    <p>
      Here is an example of a{' '}
      <OuiLink
        href="https://github.com/elastic/eui"
        onClick={(e) => {
          e.preventDefault();
        }}>
        link
      </OuiLink>{' '}
      with both an <OuiCode>href</OuiCode> and an <OuiCode>onClick</OuiCode>{' '}
      handler.
    </p>
    <p>Links can be colored as well.</p>
    <ul>
      <li>
        <OuiLink color="subdued" href="#">
          subdued
        </OuiLink>
      </li>
      <li>
        <OuiLink color="success" href="#">
          success
        </OuiLink>
      </li>
      <li>
        <OuiLink color="accent" href="#">
          accent
        </OuiLink>
      </li>
      <li>
        <OuiLink color="danger" href="#">
          danger
        </OuiLink>
      </li>
      <li>
        <OuiLink color="warning" href="#">
          warning
        </OuiLink>
      </li>
      <li>
        <OuiLink color="text" href="#">
          text
        </OuiLink>
      </li>
      <li>
        <span style={{ background: 'black' }}>
          <OuiLink color="ghost" href="#">
            ghost
          </OuiLink>
        </span>
      </li>
    </ul>
  </OuiText>
);
