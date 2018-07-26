---
filename: /packages/react-material/src/Icon/Icon.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Icon



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |  | The name of the icon font ligature. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'inherit', 'primary', 'secondary', 'action', 'error', 'disabled'<br> | <span class="prop-default">'inherit'</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">fontSize</span> | <span class="prop-type">enum:&nbsp;'inherit'&nbsp;&#124;<br>&nbsp;'default'<br> | <span class="prop-default">'default'</span> | The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `colorPrimary`
- `colorSecondary`
- `colorAction`
- `colorError`
- `colorDisabled`
- `fontSizeInherit`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/Icon/Icon.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiIcon`.

## Demos

- [Icons](/style/icons)

