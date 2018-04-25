---
components: CssBaseline
---

# CSS Baseline

You might be familiar with [normalize.css](https://github.com/necolas/normalize.css), a collection of HTML element and attribute style-normalizations.
Material-UI provides a `CssBaseline` component to kickstart an elegant, consistent, and simple baseline to build upon.

```jsx
import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';

function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
  );
}

export default MyApp;
```

## Approach

### Page

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:
- The margin in all browsers is removed.
- The default Material Design background color is applied.
It's using [`theme.palette.background.default`](/customization/default-theme?expend-path=$.palette.background) for standard devices and a white background for print devices.

### Layout

- `box-sizing` is set globally on the `<html>` element to `border-box`.
Every element—including `*::before` and `*::after` are declared to inherit this property,
which ensures that the declared width of the element is never exceeded due to padding or border.

### Typography

- Font antialiasing is enabled for better display of the Roboto font.
- No base font-size is declared on the `<html>`, but 16px is assumed (the browser default).
You can learn more about the implications of changing the `<html>` default font size in [the theme documentation](/customization/themes#typography-html-font-size) page.
