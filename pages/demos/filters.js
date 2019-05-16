import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/filters/filters.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/filters/Filters.js': {
          js: require('docs/src/pages/demos/filters/Filters').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/filters/Filters'), 'utf8')
`,
        },
        'pages/demos/filters/CustomizedFilters.js': {
          js: require('docs/src/pages/demos/filters/CustomizedFilters').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/filters/CustomizedFilters'), 'utf8')
`,
        },
        'pages/demos/filters/ExpansionFilters.js': {
          js: require('docs/src/pages/demos/filters/ExpansionFilters').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/filters/ExpansionFilters'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
