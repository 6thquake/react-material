import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/customization/overrides/overrides.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/customization/overrides/ClassNames.js': {
          js: require('docs/src/pages/customization/overrides/ClassNames').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/ClassNames'), 'utf8')
`,
        },
        'pages/customization/overrides/Classes.js': {
          js: require('docs/src/pages/customization/overrides/Classes').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/Classes'), 'utf8')
`,
        },
        'pages/customization/overrides/InlineStyle.js': {
          js: require('docs/src/pages/customization/overrides/InlineStyle').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/InlineStyle'), 'utf8')
`,
        },
        'pages/customization/overrides/Component.js': {
          js: require('docs/src/pages/customization/overrides/Component').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/Component'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
