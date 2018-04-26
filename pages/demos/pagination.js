import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/pagination/pagination.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/pagination/Pagination.js': {
          js: require('docs/src/pages/demos/pagination/Pagination').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pagination/Pagination'), 'utf8')
`,
        }
      }}
    />
  );
}

export default withRoot(Page);
