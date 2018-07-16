import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/modal/modal.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/modal/Modal.js': {
          js: require('docs/src/pages/demos/modal/Modal').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/modal/Modal'), 'utf8')
`,
        },
        'pages/demos/modal/Confirm.js': {
          js: require('docs/src/pages/demos/modal/Confirm').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/modal/Confirm'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
