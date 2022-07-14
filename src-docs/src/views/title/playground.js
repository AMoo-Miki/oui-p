import { PropTypes } from 'react-view';
import { OuiTitle } from '../../../../src/components/';
import {
  propUtilityForPlayground,
  createOptionalEnum,
} from '../../services/playground';

export const titleConfig = () => {
  const docgenInfo = Array.isArray(OuiTitle.__docgenInfo)
    ? OuiTitle.__docgenInfo[0]
    : OuiTitle.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.children = {
    ...propsToUse.children,
    type: PropTypes.ReactNode,
    value: '<h2>Text content</h2>',
    hidden: false,
  };

  propsToUse.textTransform = createOptionalEnum(propsToUse.textTransform);

  return {
    config: {
      componentName: 'OuiTitle',
      props: propsToUse,
      scope: {
        OuiTitle,
      },
      imports: {
        '@opensearch-project/oui': {
          named: ['OuiTitle'],
        },
      },
    },
  };
};
