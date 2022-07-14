import React, { FunctionComponent, useState, useEffect } from 'react';
import { OuiCodeBlock } from '../../../../../src/components/code';
import { OuiButtonEmpty } from '../../../../../src/components/button';
// @ts-ignore Not TS
import { CodeSandboxLink } from '../../codesandbox';
// @ts-ignore Not TS
import { renderJsSourceCode } from '../_utils';

export type GuideSectionExampleCode = {
  code: any;
};

export const GuideSectionExampleCode: FunctionComponent<GuideSectionExampleCode> = ({
  code,
}) => {
  const [codeToRender, setCodeToRender] = useState();

  useEffect(() => {
    setCodeToRender(renderJsSourceCode(code));
    return () => {
      setCodeToRender(undefined);
    };
  }, [code]);

  const codeSandboxLink = (
    <CodeSandboxLink
      className="guideSectionExampleCode__link"
      content={code.default}>
      <OuiButtonEmpty size="xs" iconType="logoCodesandbox">
        Try out this demo on Code Sandbox
      </OuiButtonEmpty>
    </CodeSandboxLink>
  );

  return (
    <>
      <OuiCodeBlock language="jsx" overflowHeight={400} isCopyable>
        {codeToRender}
      </OuiCodeBlock>
      {codeSandboxLink}
    </>
  );
};
