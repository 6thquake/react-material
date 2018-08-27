---
filename: /packages/material-ui-lab/src/ToggleButton/ToggleButton.js
title: ToggleButton API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# ToggleButton

<p class="description">The API documentation of the ToggleButton React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children *</span> | <span class="prop-type">node |   | The content of the button. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Useful to extend the style applied to components. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the button will be disabled. |
| <span class="prop-name">disableFocusRipple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the  keyboard focus ripple will be disabled. `disableRipple` must also be true. |
| <span class="prop-name">disableRipple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the ripple effect will be disabled. |
| <span class="prop-name">selected</span> | <span class="prop-type">bool |   | If `true`, the button will be rendered in an active state. |
| <span class="prop-name required">value *</span> | <span class="prop-type">any |   | The value to associate with the button when selected in a ToggleButtonGroup. |

Any other properties supplied will be spread to the root element ([ButtonBase](/api/button-base)).

## CSS API

You can override all the class names injected by Material-UI thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">disabled</span> | Styles applied to the root element if `disabled={true}`.
| <span class="prop-name">selected</span> | Styles applied to the root element if `selected={true}`.
| <span class="prop-name">label</span> | Styles applied to the `label` wrapper element.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/mui-org/material-ui/tree/master/packages/material-ui-lab/src/ToggleButton/ToggleButton.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiToggleButton`.

## Inheritance

The properties of the [ButtonBase](/api/button-base) component are also available.
You can take advantage of this behavior to [target nested components](/guides/api#spread).

## Demos

- [Toggle Button](/lab/toggle-button)

