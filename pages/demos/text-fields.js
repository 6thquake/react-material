import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/text-fields/text-fields.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/text-fields/TextFields.js': {
          js: require('docs/src/pages/demos/text-fields/TextFields').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/TextFields'), 'utf8')
`,
        },
        'pages/demos/text-fields/ComposedTextField.js': {
          js: require('docs/src/pages/demos/text-fields/ComposedTextField').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/ComposedTextField'), 'utf8')
`,
        },
        'pages/demos/text-fields/TextFieldMargins.js': {
          js: require('docs/src/pages/demos/text-fields/TextFieldMargins').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/TextFieldMargins'), 'utf8')
`,
        },
        'pages/demos/text-fields/InputAdornments.js': {
          js: require('docs/src/pages/demos/text-fields/InputAdornments').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/InputAdornments'), 'utf8')
`,
        },
        'pages/demos/text-fields/Inputs.js': {
          js: require('docs/src/pages/demos/text-fields/Inputs').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/Inputs'), 'utf8')
`,
        },
        'pages/demos/text-fields/FormattedInputs.js': {
          js: require('docs/src/pages/demos/text-fields/FormattedInputs').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/FormattedInputs'), 'utf8')
`,
        },
        'pages/demos/text-fields/CustomizedInputs.js': {
          js: require('docs/src/pages/demos/text-fields/CustomizedInputs').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/CustomizedInputs'), 'utf8')
`,
        },
        'pages/demos/text-fields/InputWithIcon.js': {
          js: require('docs/src/pages/demos/text-fields/InputWithIcon').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/text-fields/InputWithIcon'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
