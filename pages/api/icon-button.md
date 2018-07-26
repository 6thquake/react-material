---
filename: /packages/react-material/src/IconButton/IconButton.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# IconButton

Refer to the [Icons](/style/icons) section of the documentation
regarding the available icon options.

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |  | The icon element. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'default'&nbsp;&#124;<br>&nbsp;'inherit'&nbsp;&#124;<br>&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'secondary'<br> | <span class="prop-default">'default'</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the button will be disabled. |
| <span class="prop-name">disableRipple</span> | <span class="prop-type">bool |  | If `true`, the ripple will be disabled. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `colorInherit`
- `colorPrimary`
- `colorSecondary`
- `disabled`
- `label`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/IconButton/IconButton.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiIconButton`.

## Inheritance

The properties of the [ButtonBase](/api/button-base) component are also available.

## Demos

- [Buttons](/demos/buttons)

