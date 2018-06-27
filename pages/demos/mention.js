import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/mention/mention.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/mention/SimpleMention.js': {
          js: require('docs/src/pages/demos/mention/SimpleMention').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/mention/SimpleMention'), 'utf8')
`,
        },
        'pages/demos/mention/MultiMention.js': {
          js: require('docs/src/pages/demos/mention/MultiMention').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/mention/MultiMention'), 'utf8')
`,
        },
        'pages/demos/mention/AsyncMention.js': {
          js: require('docs/src/pages/demos/mention/AsyncMention').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/mention/AsyncMention'), 'utf8')
`,
        },
        'pages/demos/mention/DisabledMention.js': {
          js: require('docs/src/pages/demos/mention/DisabledMention').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/mention/DisabledMention'), 'utf8')
`,
        },
        'pages/demos/mention/FixNumMention.js': {
          js: require('docs/src/pages/demos/mention/FixNumMention').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/mention/FixNumMention'), 'utf8')
`,
        },
        'pages/demos/mention/IconMention.js': {
          js: require('docs/src/pages/demos/mention/IconMention').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/mention/IconMention'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);