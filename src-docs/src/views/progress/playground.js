import { PropTypes } from 'react-view';
import { OuiProgress } from '../../../../src/components/';
import { propUtilityForPlayground } from '../../services/playground';

export default () => {
  const docgenInfo = Array.isArray(OuiProgress.__docgenInfo)
    ? OuiProgress.__docgenInfo[0]
    : OuiProgress.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.value = {
    ...propsToUse.value,
    value: undefined,
    type: PropTypes.Number,
  };

  propsToUse.valueText = {
    ...propsToUse.valueText,
    type: PropTypes.Boolean,
    value: false,
  };

  propsToUse.label = {
    ...propsToUse.label,
    type: PropTypes.String,
  };

  return {
    config: {
      componentName: 'OuiProgress',
      props: propsToUse,
      scope: {
        OuiProgress,
      },
      imports: {
        '@opensearch-project/oui': {
          named: ['OuiProgress'],
        },
      },
    },
  };
};
