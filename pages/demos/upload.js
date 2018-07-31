import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/upload/upload.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/upload/UploadManual.js': {
          js: require('docs/src/pages/demos/upload/UploadManual').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/upload/UploadManual'), 'utf8')
`,
        },
        'pages/demos/upload/UploadBasic.js': {
          js: require('docs/src/pages/demos/upload/UploadBasic').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/upload/UploadBasic'), 'utf8')
`,
        },
        'pages/demos/upload/UploadImg.js': {
          js: require('docs/src/pages/demos/upload/UploadImg').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/upload/UploadImg'), 'utf8')
`,
        },
        'pages/demos/upload/UploadDrag.js': {
          js: require('docs/src/pages/demos/upload/UploadDrag').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/upload/UploadDrag'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
