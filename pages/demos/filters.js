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
        'pages/demos/filters/CustomFilters.js': {
          js: require('docs/src/pages/demos/filters/CustomFilters').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/filters/CustomFilters'), 'utf8')
`,
        },
        'pages/demos/filters/FiltersWithRipple.js': {
          js: require('docs/src/pages/demos/filters/FiltersWithRipple').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/filters/FiltersWithRipple'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
