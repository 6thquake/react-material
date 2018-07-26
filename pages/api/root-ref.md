---
filename: /packages/react-material/src/RootRef/RootRef.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# RootRef

Helper component to allow attaching a ref to a
wrapped element to access the underlying DOM element.

It's highly inspired by https://github.com/facebook/react/issues/11401#issuecomment-340543801.
For example:
```jsx
import React from 'react';
import RootRef from '@material-ui/core/RootRef';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.domRef.current); // DOM node
  }

  render() {
    return (
      <RootRef rootRef={this.domRef}>
        <SomeChildComponent />
      </RootRef>
    );
  }
}
```

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children *</span> | <span class="prop-type">element |  | The wrapped element. |
| <span class="prop-name required">rootRef *</span> | <span class="prop-type">union:&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> |  | Provide a way to access the DOM node of the wrapped element. You can provide a callback ref or a `React.createRef()` ref. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

