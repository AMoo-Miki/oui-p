import React from 'react';
import { OuiLink } from '../../../../src/components';

const urls = [
  'https://elastic.co',
  '//elastic.co',
  'relative/url/somewhere',
  'http://username:password@example.com/',
  // eslint-disable-next-line no-script-url
  'javascript:alert()',
];

export const LinkValidation = () => {
  return (
    <>
      {urls.map((url) => (
        <div key={url}>
          <OuiLink color="success" href={url}>
            {url}
          </OuiLink>
        </div>
      ))}
    </>
  );
};
