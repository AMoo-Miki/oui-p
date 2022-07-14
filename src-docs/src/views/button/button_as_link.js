import React, { Fragment } from 'react';

import {
  OuiButton,
  OuiButtonEmpty,
  OuiButtonIcon,
  OuiFlexGroup,
  OuiFlexItem,
} from '../../../../src/components';

export default () => (
  <Fragment>
    <OuiFlexGroup gutterSize="s" alignItems="center">
      <OuiFlexItem grow={false}>
        <OuiButton href="http://www.elastic.co">Link to elastic.co</OuiButton>
      </OuiFlexItem>

      <OuiFlexItem grow={false}>
        <OuiButtonEmpty href="http://www.elastic.co">
          Link to elastic.co
        </OuiButtonEmpty>
      </OuiFlexItem>

      <OuiFlexItem grow={false}>
        <OuiButtonIcon
          href="http://www.elastic.co"
          iconType="link"
          aria-label="This is a link"
        />
      </OuiFlexItem>
    </OuiFlexGroup>

    <OuiFlexGroup gutterSize="s" alignItems="center">
      <OuiFlexItem grow={false}>
        <OuiButton href="http://www.elastic.co" isDisabled>
          Disabled link
        </OuiButton>
      </OuiFlexItem>

      <OuiFlexItem grow={false}>
        <OuiButtonEmpty href="http://www.elastic.co" isDisabled>
          Disabled empty link
        </OuiButtonEmpty>
      </OuiFlexItem>

      <OuiFlexItem grow={false}>
        <OuiButtonIcon
          href="http://www.elastic.co"
          iconType="link"
          aria-label="This is a link"
          isDisabled
        />
      </OuiFlexItem>
    </OuiFlexGroup>
  </Fragment>
);
