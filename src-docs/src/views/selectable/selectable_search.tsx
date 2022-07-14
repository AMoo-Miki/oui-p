import React, { useState, Fragment } from 'react';

import { OuiSelectable } from '../../../../src/components/selectable';
import { Options } from './data';

export default () => {
  const [options, setOptions] = useState(Options);

  return (
    <Fragment>
      <OuiSelectable
        aria-label="Searchable example"
        searchable
        searchProps={{
          'data-test-subj': 'selectableSearchHere',
        }}
        options={options}
        onChange={(newOptions) => setOptions(newOptions)}>
        {(list, search) => (
          <Fragment>
            {search}
            {list}
          </Fragment>
        )}
      </OuiSelectable>
    </Fragment>
  );
};
