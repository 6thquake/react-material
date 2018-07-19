import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/chat/chat.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/chart/Chat.js': {
          js: require('docs/src/pages/demos/chat/Chat').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/chat/Chat'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
