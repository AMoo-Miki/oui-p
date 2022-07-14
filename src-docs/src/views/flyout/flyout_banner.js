import React, { useState } from 'react';

import {
  OuiCallOut,
  OuiFlyout,
  OuiFlyoutHeader,
  OuiFlyoutBody,
  OuiLink,
  OuiButton,
  OuiText,
  OuiTitle,
} from '../../../../src/components';

export default () => {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  const closeFlyout = () => setIsFlyoutVisible(false);

  const showFlyout = () => setIsFlyoutVisible(true);

  let flyout;

  const callOut = (
    <OuiCallOut iconType="help">
      <p>
        Here&rsquo;s some stuff that you need to know. This banner helps
        highlight important information. <OuiLink href="#">View docs</OuiLink>
      </p>
    </OuiCallOut>
  );

  if (isFlyoutVisible) {
    flyout = (
      <OuiFlyout
        ownFocus
        onClose={closeFlyout}
        aria-labelledby="flyoutWithBannerTitle">
        <OuiFlyoutHeader hasBorder>
          <OuiTitle size="m">
            <h2 id="flyoutWithBannerTitle">A flyout with a banner</h2>
          </OuiTitle>
        </OuiFlyoutHeader>
        <OuiFlyoutBody banner={callOut}>
          <OuiText>
            <p>
              This flyout is using the banner prop in{' '}
              <strong>OuiFlyoutBody</strong>.
            </p>
          </OuiText>
        </OuiFlyoutBody>
      </OuiFlyout>
    );
  }
  return (
    <div>
      <OuiButton onClick={showFlyout}>Show flyout with banner</OuiButton>
      {flyout}
    </div>
  );
};
