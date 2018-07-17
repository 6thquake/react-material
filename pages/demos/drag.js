import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/drag/drag.md';
import {DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/drag/DragToolBox.js': {
          js: require('docs/src/pages/demos/drag/DragToolBox').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/drag/DragToolBox'), 'utf8')
`,
        },
        'pages/demos/drag/DragList.js': {
            js: require('docs/src/pages/demos/drag/DragList').default,
            raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('docs/src/pages/demos/drag/DragList'), 'utf8')
  `,
          }
      }}
    />
  );
}
let C = DragDropContext(HTML5Backend)(Page);
export default withRoot(C);