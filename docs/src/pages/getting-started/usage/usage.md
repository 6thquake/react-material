# Usage

<p class="description">Get started with React and React-Material in no time.</p>

React-Material components work in isolation.
**They are self-supporting**, and will inject, and only inject, the styles they need to display.
They don't rely on any global style-sheets such as [normalize.css](https://github.com/necolas/normalize.css/),

You can use any of the components as demonstrated in the documentation.
Please refer to each component's [demo page](/demos/buttons/) to see how they should be imported.

## Quick start

Here's a quick example to get you started, **it's literally all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@6thquake/react-material/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Yes, this really is all you need to get started, as you can see in this live and interactive demo:

{{"demo": "pages/getting-started/usage/Usage.js", "hideHeader": true}}

## Globals

React-Material usage experience can be improved with a handful of important globals that you’ll need to be aware of.

### Responsive meta tag

React-Material is developed mobile first, a strategy in which we first write code for mobile devices and then scale up components as necessary using CSS media queries.
To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element.

```html
<meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
/>
```

### CssBaseline

React-Material provides an optional [CssBaseline](/style/css-baseline) component.
It's fixing some inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Versioned Documentation

This documentation always reflects the latest stable version of React-Material.
You can find older versions of the documentation on a [separate page](/versions).

## Next steps

Now that you have an idea of the basic setup, it's time to learn more about:
- How to provide [the Material Design font and typography](/style/typography).
- How to take advantage of the [theming solution](/customization/themes).
- How to [override](/customization/overrides) the look and feel of the components.
