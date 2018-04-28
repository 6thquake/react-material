---
filename: /packages/material-ui/src/Tabs/Tab.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Tab



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Useful to extend the style applied to components. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the tab will be disabled. |
| <span class="prop-name">icon</span> | <span class="prop-type">node |  | The icon element. |
| <span class="prop-name">label</span> | <span class="prop-type">node |  | The label element. |
| <span class="prop-name">value</span> | <span class="prop-type">any |  | You can provide your own value. Otherwise, we fallback to the child position index. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `labelIcon`
- `textColorInherit`
- `textColorPrimary`
- `textColorSecondary`
- `selected`
- `disabled`
- `fullWidth`
- `wrapper`
- `labelContainer`
- `label`
- `labelWrapped`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/tree/develop/packages/material-ui/src/Tabs/Tab.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiTab`.

## Inheritance

The properties of the [ButtonBase](/api/button-base) component are also available.

## Demos

- [Tabs](/demos/tabs)

