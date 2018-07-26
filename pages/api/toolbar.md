---
filename: /packages/react-material/src/Toolbar/Toolbar.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Toolbar



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |  | Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">disableGutters</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, disables gutter padding. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'regular'&nbsp;&#124;<br>&nbsp;'dense'<br> | <span class="prop-default">'regular'</span> | The variant to use. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `gutters`
- `regular`
- `dense`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/Toolbar/Toolbar.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiToolbar`.

## Demos

- [App Bar](/demos/app-bar)

