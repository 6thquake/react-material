import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/locale-provider/locale-provider.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/locale-provider/LocaleProvider.js': {
          js: require('docs/src/pages/demos/locale-provider/LocaleProvider').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/locale-provider/LocaleProvider'), 'utf8')
`,
        },
        'pages/demos/locale-provider/withLocale.js': {
          js: require('docs/src/pages/demos/locale-provider/withLocale').default,
          raw: preval `
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/locale-provider/withLocale'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
