---
filename: /packages/material-ui/core/src/CircularProgress/CircularProgress.js
title: CircularProgress API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# CircularProgress

<p class="description">The API documentation of the CircularProgress React component.</p>

## ARIA

If the progress bar is describing the loading progress of a particular region of a page,
you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
attribute to `true` on that region until it has finished loading.

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'secondary'&nbsp;&#124;<br>&nbsp;'inherit'<br> | <span class="prop-default">'primary'</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">size</span> | <span class="prop-type">union:&nbsp;number&nbsp;&#124;<br>&nbsp;string<br> | <span class="prop-default">40</span> | The size of the circle. |
| <span class="prop-name">thickness</span> | <span class="prop-type">number | <span class="prop-default">3.6</span> | The thickness of the circle. |
| <span class="prop-name">value</span> | <span class="prop-type">number | <span class="prop-default">0</span> | The value of the progress indicator for the determinate and static variants. Value between 0 and 100. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'determinate'&nbsp;&#124;<br>&nbsp;'indeterminate'&nbsp;&#124;<br>&nbsp;'static'<br> | <span class="prop-default">'indeterminate'</span> | The variant to use. Use indeterminate when there is no progress value. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">static</span> | Styles applied to the root element if `variant="static"`.
| <span class="prop-name">indeterminate</span> | Styles applied to the root element if `variant="indeterminate"`.
| <span class="prop-name">colorPrimary</span> | Styles applied to the root element if `color="primary"`.
| <span class="prop-name">colorSecondary</span> | Styles applied to the root element if `color="secondary"`.
| <span class="prop-name">svg</span> | Styles applied to the `svg` element.
| <span class="prop-name">circle</span> | Styles applied to the `circle` svg path.
| <span class="prop-name">circleStatic</span> | Styles applied to the `circle` svg path if `variant="static"`.
| <span class="prop-name">circleIndeterminate</span> | Styles applied to the `circle` svg path if `variant="indeterminate"`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/CircularProgress/CircularProgress.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiCircularProgress`.

## Demos

- [Progress](/demos/progress)

