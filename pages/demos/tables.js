import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/tables/tables.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/tables/TreeTable.js': {
          js: require('docs/src/pages/demos/tables/TreeTable').default,
          raw: preval`
  module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tables/TreeTable'), 'utf8')
  `,
        },
        'pages/demos/tables/AwesomeTable.js': {
          js: require('docs/src/pages/demos/tables/AwesomeTable').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tables/AwesomeTable'), 'utf8')
`,
        },
        'pages/demos/tables/NoDataTable.js': {
          js: require('docs/src/pages/demos/tables/NoDataTable').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tables/NoDataTable'), 'utf8')
`,
        },
        'pages/demos/tables/SimpleTable.js': {
          js: require('docs/src/pages/demos/tables/SimpleTable').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tables/SimpleTable'), 'utf8')
`,
        },
        'pages/demos/tables/EnhancedTable.js': {
          js: require('docs/src/pages/demos/tables/EnhancedTable').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tables/EnhancedTable'), 'utf8')
`,
        },
        'pages/demos/tables/CustomPaginationActionsTable.js': {
          js: require('docs/src/pages/demos/tables/CustomPaginationActionsTable').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tables/CustomPaginationActionsTable'), 'utf8')
`,
        },
        'pages/demos/tables/CustomizedTable.js': {
          js: require('docs/src/pages/demos/tables/CustomizedTable').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tables/CustomizedTable'), 'utf8')
`,
        },
        'pages/demos/tables/CrossTabulation.js': {
          js: require('docs/src/pages/demos/tables/CrossTabulation').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/tables/CrossTabulation'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
