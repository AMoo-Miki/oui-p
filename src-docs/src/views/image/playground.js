import { PropTypes } from 'react-view';
import { OuiImage } from '../../../../src/components/';
import { propUtilityForPlayground } from '../../services/playground';

export default () => {
  const docgenInfo = Array.isArray(OuiImage.__docgenInfo)
    ? OuiImage.__docgenInfo[0]
    : OuiImage.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.size = {
    ...propsToUse.size,
    type: PropTypes.Enum,
    options: {
      original: 'original',
      s: 's',
      m: 'm',
      l: 'l',
      xl: 'xl',
      fullWidth: 'fullWidth',
    },
    defaultValue: 'original',
  };
  propsToUse.src.value = 'https://source.unsplash.com/100x100/?Nature';
  propsToUse.alt.value = 'image_alt';

  return {
    config: {
      componentName: 'OuiImage',
      props: propsToUse,
      scope: {
        OuiImage,
      },
      imports: {
        '@opensearch-project/oui': {
          named: ['OuiImage'],
        },
      },
    },
  };
};
