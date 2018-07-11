import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/form/form.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/form/Form.js': {
          js: require('docs/src/pages/demos/form/Form').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/form/Form'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
