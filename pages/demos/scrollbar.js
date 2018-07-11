import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/scrollbar/scrollbar.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/scrollbar/DefaultScrollbar.js': {
          js: require('docs/src/pages/demos/scrollbar/DefaultScrollbar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/scrollbar/DefaultScrollbar'), 'utf8')
`,
        },

        'pages/demos/scrollbar/ColoredScrollbar.js': {
          js: require('docs/src/pages/demos/scrollbar/ColoredScrollbar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/scrollbar/ColoredScrollbar'), 'utf8')
`,
        },

        'pages/demos/scrollbar/ShadowScrollbar.js': {
          js: require('docs/src/pages/demos/scrollbar/ShadowScrollbar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/scrollbar/ShadowScrollbar'), 'utf8')
`,
        },

        'pages/demos/scrollbar/SpringScrollbar.js': {
          js: require('docs/src/pages/demos/scrollbar/SpringScrollbar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/scrollbar/SpringScrollbar'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
