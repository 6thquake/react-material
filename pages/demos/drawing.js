import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/drawing/drawing.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/drawing/Line.js': {
          js: require('docs/src/pages/demos/drawing/Line').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/drawing/Line'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
