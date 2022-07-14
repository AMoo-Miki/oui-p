import {
  propUtilityForPlayground,
  dummyFunction,
  iconValidator,
} from '../../services/playground';
import { OuiIcon } from '../../../../src/components/';

export default () => {
  const docgenInfo = Array.isArray(OuiIcon.__docgenInfo)
    ? OuiIcon.__docgenInfo[0]
    : OuiIcon.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.type = iconValidator({ ...propsToUse.type }, 'grid');

  propsToUse.size = {
    ...propsToUse.size,
    defaultValue: 'm',
  };

  return {
    config: {
      componentName: 'OuiIcon',
      props: propsToUse,
      scope: {
        OuiIcon,
      },
      imports: {
        '@opensearch-project/oui': {
          named: ['OuiIcon'],
        },
      },

      customProps: {
        onIconLoad: dummyFunction,
      },
    },
  };
};
