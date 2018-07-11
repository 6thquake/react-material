import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/tree/tree.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/tree/Basic.js': {
          js: require('docs/src/pages/demos/tree/Basic').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tree/Basic'), 'utf8')
`,
        },
        'pages/demos/tree/Controlled.js': {
          js: require('docs/src/pages/demos/tree/Controlled').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tree/Controlled'), 'utf8')
`,
        },
        'pages/demos/tree/Drag.js': {
          js: require('docs/src/pages/demos/tree/Drag').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tree/Drag'), 'utf8')
`,
        },
        'pages/demos/tree/Line.js': {
          js: require('docs/src/pages/demos/tree/Line').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tree/Line'), 'utf8')
`,
        },
        'pages/demos/tree/Icon.js': {
          js: require('docs/src/pages/demos/tree/Icon').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tree/Icon'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
