import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/layout/pro/pro.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/layout/pro/Top.js': {
          js: require('docs/src/pages/layout/pro/Top').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/layout/pro/Top'), 'utf8')
`,
        },
        'pages/layout/pro/Fixed.js': {
          js: require('docs/src/pages/layout/pro/Fixed').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/layout/pro/Fixed'), 'utf8')
`,
        },
        'pages/layout/pro/Side.js': {
          js: require('docs/src/pages/layout/pro/Side').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/layout/pro/Side'), 'utf8')
`,
        },
        'pages/layout/pro/FixedSide.js': {
          js: require('docs/src/pages/layout/pro/FixedSide').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/layout/pro/FixedSide'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
