import { OuiSpacer } from '../../../../src/components/';
import { propUtilityForPlayground } from '../../services/playground';

export const spacerConfig = () => {
  const docgenInfo = Array.isArray(OuiSpacer.__docgenInfo)
    ? OuiSpacer.__docgenInfo[0]
    : OuiSpacer.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  return {
    config: {
      componentName: 'OuiSpacer',
      props: propsToUse,
      scope: {
        OuiSpacer,
      },
      imports: {
        '@opensearch-project/oui': {
          named: ['OuiSpacer'],
        },
      },
    },
    playgroundClassName: 'guideDemo__highlightSpacer',
  };
};
