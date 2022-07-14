import React from 'react';

import {
  OuiCode,
  OuiFieldText,
  OuiI18n,
  OuiFormRow,
  OuiTitle,
  useOuiI18n,
  OuiSpacer,
} from '../../../../src/components';

export default () => {
  return (
    <>
      <OuiTitle size="xs">
        <h3>useOuiI18n used in an attribute</h3>
      </OuiTitle>
      <p>
        <OuiFormRow
          label={
            <>
              This text field&apos;s placeholder reads from{' '}
              <OuiCode>ouiI18nAttribute.placeholderName</OuiCode>
            </>
          }>
          <OuiFieldText
            placeholder={useOuiI18n(
              'ouiI18nAttribute.placeholderName',
              'John Doe'
            )}
          />
        </OuiFormRow>
      </p>

      <OuiSpacer size="l" />

      <OuiTitle size="xs">
        <h3>OuiI18n used as a render prop</h3>
      </OuiTitle>
      <OuiI18n token="ouiI18nAttribute.placeholderName" default="John Doe">
        {(placeholderName) => (
          <OuiFormRow
            label={
              <>
                This text field&apos;s placeholder reads from{' '}
                <OuiCode>ouiI18nAttribute.placeholderName</OuiCode>
              </>
            }>
            <OuiFieldText placeholder={placeholderName} />
          </OuiFormRow>
        )}
      </OuiI18n>
    </>
  );
};
