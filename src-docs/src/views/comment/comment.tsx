import React from 'react';
import { OuiComment } from '../../../../src/components/comment_list';
import { OuiButtonIcon } from '../../../../src/components/button';
import { OuiText } from '../../../../src/components/text';

const body = (
  <OuiText size="s">
    <p>
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </p>
  </OuiText>
);

const copyAction = (
  <OuiButtonIcon
    title="Custom action"
    aria-label="Custom action"
    color="subdued"
    iconType="copy"
  />
);

export default () => (
  <div>
    <OuiComment
      username="janed"
      event="added a comment"
      actions={copyAction}
      timestamp="on Jan 1, 2020">
      {body}
    </OuiComment>
  </div>
);
