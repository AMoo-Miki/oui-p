import React from 'react';

import { OuiExpression } from '../../../../src/components/expression';

export default () => (
  <div>
    <OuiExpression description="Select" value="count(*)" onClick={() => {}} />
    <OuiExpression
      description="From"
      value="kibana_sample_data_ky_counties left"
    />
    <OuiExpression
      description="join"
      value="kibana_sample_data_ky_avl right"
      onClick={() => {}}
    />
    <OuiExpression description="on" value="left.smis = right.kytccountynmbr" />
    <OuiExpression
      description="group by"
      value="right.kytccountynmbr"
      onClick={() => {}}
      color="accent"
    />
    <OuiExpression description="sort by" value="count" />
  </div>
);
