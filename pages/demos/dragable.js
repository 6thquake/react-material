import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/dragable/dragable.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/dragable/Dragable.js': {
          js: require('docs/src/pages/demos/dragable/Dragable').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dragable/Dragable'), 'utf8')
`,
        },
        'pages/demos/dragable/DragableLayer.js': {
          js: require('docs/src/pages/demos/dragable/DragableLayer').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/dragable/DragableLayer'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
