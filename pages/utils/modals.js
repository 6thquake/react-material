import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/utils/modals/modals.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/utils/modals/SimpleModal.js': {
          js: require('docs/src/pages/utils/modals/SimpleModal').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/utils/modals/SimpleModal'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
