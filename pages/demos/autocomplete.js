import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/autocomplete/autocomplete.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/autocomplete/IntegrationDownshift.js': {
          js: require('docs/src/pages/demos/autocomplete/IntegrationDownshift').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/autocomplete/IntegrationDownshift'), 'utf8')
`,
        },
        'pages/demos/autocomplete/IntegrationAutosuggest.js': {
          js: require('docs/src/pages/demos/autocomplete/IntegrationAutosuggest').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/autocomplete/IntegrationAutosuggest'), 'utf8')
`,
        },
        'pages/demos/autocomplete/IntegrationReactSelect.js': {
          js: require('docs/src/pages/demos/autocomplete/IntegrationReactSelect').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/autocomplete/IntegrationReactSelect'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
