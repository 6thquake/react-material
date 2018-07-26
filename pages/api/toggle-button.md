---
filename: /packages/react-material/src/ToggleButton/ToggleButton.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# ToggleButton



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children *</span> | <span class="prop-type">node |  | The content of the button. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Useful to extend the style applied to components. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the button will be disabled. |
| <span class="prop-name">disableFocusRipple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the  keyboard focus ripple will be disabled. `disableRipple` must also be true. |
| <span class="prop-name">disableRipple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the ripple effect will be disabled. |
| <span class="prop-name">selected</span> | <span class="prop-type">bool |  | If `true`, the button will be rendered in an active state. |
| <span class="prop-name required">value *</span> | <span class="prop-type">any |  | The value to associate with the button when selected in a ToggleButtonGroup. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `disabled`
- `selected`
- `label`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/ToggleButton/ToggleButton.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiToggleButton`.

## Inheritance

The properties of the [ButtonBase](/api/button-base) component are also available.

## Demos

- [Toggle Button](/lab/toggle-button)

