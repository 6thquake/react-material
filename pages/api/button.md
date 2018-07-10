---
filename: /packages/react-material/src/Button/Button.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Button



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'default', 'inherit', 'primary', 'secondary', 'error', 'success', 'waring', 'progress'<br> | <span class="prop-default">'default'</span> |  |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'text', 'flat', 'outlined', 'contained', 'raised', 'fab'<br> | <span class="prop-default">'flat'</span> |  |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `label`
- `flatPrimary`
- `flatSecondary`
- `colorInherit`
- `raised`
- `raisedPrimary`
- `raisedSecondary`
- `focusVisible`
- `disabled`
- `fab`
- `mini`
- `sizeSmall`
- `sizeLarge`
- `fullWidth`
- `flatWaring`
- `flatError`
- `flatSuccess`
- `flatProgress`
- `raisedWaring`
- `raisedError`
- `raisedSuccess`
- `raisedProgress`
- `icon`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/tree/develop/packages/react-material/src/Button/Button.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `RMButton`.

## Demos

- [Buttons](/demos/buttons)

