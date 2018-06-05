import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/panel/panel.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/panel/Panel.js': {
          js: require('docs/src/pages/demos/panel/Panel').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/panel/Panel'), 'utf8')
`,
        },
        'pages/demos/panel/LoadingPanel.js': {
          js: require('docs/src/pages/demos/panel/LoadingPanel').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/panel/LoadingPanel'), 'utf8')
`,
        }
      }}
    />
  );
}

export default withRoot(Page);
