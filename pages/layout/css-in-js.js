import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/layout/css-in-js/css-in-js.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/layout/css-in-js/MediaQuery.js': {
          js: require('docs/src/pages/layout/css-in-js/MediaQuery').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/layout/css-in-js/MediaQuery'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
