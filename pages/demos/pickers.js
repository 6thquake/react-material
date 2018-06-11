import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/pickers/pickers.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/pickers/BasicDatePicker.js': {
          js: require('docs/src/pages/demos/pickers/BasicDatePicker').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/BasicDatePicker'), 'utf8')
`,
        },
        'pages/demos/pickers/TimePickerBasic.js': {
                  js: require('docs/src/pages/demos/pickers/TimePickerBasic').default,
                  raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/TimePickerBasic'), 'utf8')
`,
        },
        'pages/demos/pickers/BasicDateTimePicker.js': {
                  js: require('docs/src/pages/demos/pickers/BasicDateTimePicker').default,
                  raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/BasicDateTimePicker'), 'utf8')
`,
        },
        'pages/demos/pickers/CustomDateTimePicker.js': {
                  js: require('docs/src/pages/demos/pickers/CustomDateTimePicker').default,
                  raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/CustomDateTimePicker'), 'utf8')
`,
        },
        'pages/demos/pickers/CustomElementsDatePicker.js': {
                  js: require('docs/src/pages/demos/pickers/CustomElementsDatePicker').default,
                  raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/CustomElementsDatePicker'), 'utf8')
`,
        },
        'pages/demos/pickers/KeyboardDatePicker.js': {
                  js: require('docs/src/pages/demos/pickers/KeyboardDatePicker').default,
                  raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/KeyboardDatePicker'), 'utf8')
`,
        },
        'pages/demos/pickers/KeyboardTimePicker.js': {
                  js: require('docs/src/pages/demos/pickers/KeyboardTimePicker').default,
                  raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/KeyboardTimePicker'), 'utf8')
`,
        },
        'pages/demos/pickers/DatePickers.js': {
          js: require('docs/src/pages/demos/pickers/DatePickers').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/DatePickers'), 'utf8')
`,
        },
        'pages/demos/pickers/TimePickers.js': {
          js: require('docs/src/pages/demos/pickers/TimePickers').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/TimePickers'), 'utf8')
`,
        },
        'pages/demos/pickers/DateAndTimePickers.js': {
          js: require('docs/src/pages/demos/pickers/DateAndTimePickers').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/DateAndTimePickers'), 'utf8')
`,
        },
        'pages/demos/pickers/Localization.js': {
          js: require('docs/src/pages/demos/pickers/Localization').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/pickers/Localization'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
