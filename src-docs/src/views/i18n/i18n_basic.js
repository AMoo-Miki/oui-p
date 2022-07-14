import React from 'react';

import {
  OuiI18n,
  OuiTitle,
  OuiSpacer,
  useOuiI18n,
} from '../../../../src/components';

export default () => {
  return (
    <>
      <OuiTitle size="xs">
        <h3>Basic useOuiI18n usage</h3>
      </OuiTitle>
      <p>
        {useOuiI18n(
          'ouiI18nBasic.basicexample',
          'This is the English copy that would be replaced by a translation defined by the i18n.basicexample token.'
        )}
      </p>

      <OuiSpacer size="l" />

      <OuiTitle size="xs">
        <h3>Basic OuiI18n usage</h3>
      </OuiTitle>
      <p>
        <OuiI18n
          token="ouiI18nBasic.basicexample"
          default="This is the English copy that would be replaced by a translation defined by the i18n.basicexample token."
        />
      </p>
    </>
  );
};
