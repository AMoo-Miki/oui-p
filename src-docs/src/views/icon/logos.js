import React from 'react';

import {
  OuiFlexGrid,
  OuiFlexItem,
  OuiIcon,
  OuiPanel,
  OuiCodeBlock,
  OuiSpacer,
  OuiCopy,
} from '../../../../src/components';

export const iconTypes = [
  'logoAppSearch',
  'logoBeats',
  'logoBusinessAnalytics',
  'logoCode',
  'logoCloud',
  'logoCloudEnterprise',
  'logoElastic',
  'logoElasticStack',
  'logoElasticsearch',
  'logoEnterpriseSearch',
  'logoKibana',
  'logoLogging',
  'logoLogstash',
  'logoMaps',
  'logoMetrics',
  'logoObservability',
  'logoSecurity',
  'logoSiteSearch',
  'logoUptime',
  'logoWorkplaceSearch',
].sort();

export default () => (
  <>
    <OuiCodeBlock language="html" isCopyable paddingSize="m">
      {'<OuiIcon type="logoElasticsearch" size="xl" />'}
    </OuiCodeBlock>
    <OuiSpacer />
    <OuiFlexGrid direction="column" columns={3}>
      {iconTypes.map((iconType) => (
        <OuiFlexItem key={iconType}>
          <OuiCopy
            display="block"
            textToCopy={iconType}
            afterMessage={`${iconType} copied`}>
            {(copy) => (
              <OuiPanel
                hasShadow={false}
                hasBorder={false}
                onClick={copy}
                paddingSize="s">
                <OuiIcon
                  className="oui-alignMiddle"
                  type={iconType}
                  size="xl"
                />{' '}
                &emsp; <small>{iconType}</small>
              </OuiPanel>
            )}
          </OuiCopy>
        </OuiFlexItem>
      ))}
    </OuiFlexGrid>
  </>
);
