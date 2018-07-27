import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/nav-bar/nav-bar.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/nav-bar/NavBar.js': {
          js: require('docs/src/pages/demos/nav-bar/NavBar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/nav-bar/NavBar'), 'utf8')
`,
        },
        'pages/demos/nav-bar/HorizontalNavBar.js': {
          js: require('docs/src/pages/demos/nav-bar/HorizontalNavBar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/nav-bar/HorizontalNavBar'), 'utf8')
`,
        },
        'pages/demos/nav-bar/LightNavBar.js': {
          js: require('docs/src/pages/demos/nav-bar/LightNavBar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/nav-bar/LightNavBar'), 'utf8')
`,
        },
        'pages/demos/nav-bar/EasyNavBar.js': {
          js: require('docs/src/pages/demos/nav-bar/EasyNavBar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/nav-bar/EasyNavBar'), 'utf8')
`,
        },
        'pages/demos/nav-bar/FlatNavBar.js': {
          js: require('docs/src/pages/demos/nav-bar/FlatNavBar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/nav-bar/FlatNavBar'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
