import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/star-vote/star-vote.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/star-vote/StarVote.js': {
          js: require('docs/src/pages/demos/star-vote/StarVote').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/star-vote/StarVote'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
