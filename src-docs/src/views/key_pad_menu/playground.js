import { PropTypes } from 'react-view';
import {
  OuiKeyPadMenuItem,
  OuiIcon,
  OuiBetaBadge,
} from '../../../../src/components/';
import {
  propUtilityForPlayground,
  iconValidator,
} from '../../services/playground';
import * as t from '@babel/types';

export const keyPadMenuItemConfig = () => {
  const docgenInfo = Array.isArray(OuiKeyPadMenuItem.__docgenInfo)
    ? OuiKeyPadMenuItem.__docgenInfo[0]
    : OuiKeyPadMenuItem.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onClick = {
    ...propsToUse.onClick,
    type: PropTypes.Custom,
    value: undefined,
    custom: {
      ...propsToUse.onClick.custom,
      use: 'switch',
      label: 'Simulate',
    },
  };
  propsToUse.label = {
    ...propsToUse.label,
    type: PropTypes.String,
    value: 'Label',
  };

  propsToUse.betaBadgeTooltipContent = {
    ...propsToUse.betaBadgeTooltipContent,
    type: PropTypes.String,
  };

  propsToUse.betaBadgeIconType = iconValidator(propsToUse.betaBadgeIconType);

  propsToUse.children = {
    ...propsToUse.children,
    type: PropTypes.ReactNode,
    value: '<OuiIcon type="dashboardApp" size="l" />',
    hidden: false,
  };

  return {
    config: {
      componentName: 'OuiKeyPadMenuItem',
      props: propsToUse,
      scope: {
        OuiKeyPadMenuItem,
        OuiIcon,
        OuiBetaBadge,
      },
      imports: {
        '@opensearch-project/oui': {
          named: ['OuiKeyPadMenuItem', 'OuiIcon', 'OuiBetaBadge'],
        },
      },
      customProps: {
        onClick: {
          generate: (val) => {
            if (!val) return null;
            const obj = t.arrowFunctionExpression(
              [],
              t.blockStatement([]),
              false
            );
            return obj;
          },
        },
      },
    },
  };
};
