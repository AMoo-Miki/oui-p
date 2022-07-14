import { OuiPagination, OuiText } from '../../../../src/components/';
import {
  propUtilityForPlayground,
  dummyFunction,
  simulateFunction,
} from '../../services/playground';

export const paginationConfig = () => {
  const docgenInfo = Array.isArray(OuiPagination.__docgenInfo)
    ? OuiPagination.__docgenInfo[0]
    : OuiPagination.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onPageClick = simulateFunction(propsToUse.onPageClick);
  return {
    config: {
      componentName: 'OuiPagination',
      props: propsToUse,
      scope: {
        OuiPagination,
        OuiText,
      },
      imports: {
        '@opensearch-project/oui': {
          named: ['OuiPagination', 'OuiText'],
        },
      },
      customProps: {
        onPageClick: dummyFunction,
      },
    },
  };
};
