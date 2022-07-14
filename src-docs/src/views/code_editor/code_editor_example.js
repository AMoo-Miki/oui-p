import React from 'react';

import { OuiCode, OuiLink, OuiCallOut } from '../../../../src/components';

export const CodeEditorExample = {
  title: 'Code editor',
  sections: [
    {
      text: (
        <>
          <OuiCallOut iconType="alert" color="danger" title="Deprecated">
            <p>
              The <strong>OuiCodeEditor</strong>, a wrapper of{' '}
              <OuiCode>react-ace</OuiCode>, has been deprecated and will be
              removed in a{' '}
              <OuiLink href="https://github.com/elastic/eui/issues/1469">
                future release
              </OuiLink>
              .
              <br />
              If you are a Kibana developer, we recommend using the{' '}
              <OuiLink href="https://github.com/elastic/kibana/tree/master/packages/kbn-monaco">
                <OuiCode>@kbn/monaco</OuiCode> package
              </OuiLink>{' '}
              within the Kibana codebase.
            </p>
          </OuiCallOut>
        </>
      ),
    },
  ],
};
