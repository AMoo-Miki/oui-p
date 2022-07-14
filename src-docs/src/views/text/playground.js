import { PropTypes } from 'react-view';
import { OuiText, OuiTextColor } from '../../../../src/components/';
import { propUtilityForPlayground } from '../../services/playground';

export const textConfig = () => {
  const docgenInfo = Array.isArray(OuiText.__docgenInfo)
    ? OuiText.__docgenInfo[0]
    : OuiText.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.children = {
    type: PropTypes.ReactNode,
    value: `<h1>This is Heading One</h1>
    <p>
      Far out in the uncharted backwaters of the <a href="#">unfashionable</a>{' '}
      end of the western spiral arm of the Galaxy lies a small unregarded
      yellow sun. When suddenly some wild JavaScript code appeared!{' '}
    </p>`,
    hidden: false,
  };

  const setGhostBackground = {
    color: 'ghost',
  };

  return {
    config: {
      componentName: 'OuiText',
      props: propsToUse,
      scope: {
        OuiText,
      },
      imports: {
        '@opensearch-project/oui': {
          named: ['OuiText'],
        },
      },
    },
    setGhostBackground,
  };
};

export const textColorConfig = () => {
  const docgenInfo = Array.isArray(OuiTextColor.__docgenInfo)
    ? OuiTextColor.__docgenInfo[0]
    : OuiTextColor.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.children = {
    type: PropTypes.ReactNode,
    value: '<h1>This is Heading One</h1>',
    hidden: false,
  };

  const setGhostBackground = {
    color: 'ghost',
  };

  return {
    config: {
      componentName: 'OuiTextColor',
      props: propsToUse,
      scope: {
        OuiTextColor,
      },
      imports: {
        '@opensearch-project/oui': {
          named: ['OuiTextColor'],
        },
      },
    },
    setGhostBackground,
  };
};
