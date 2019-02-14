---
filename: /packages/material-ui/core/src/Tab/Tab.js
title: Tab API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Tab

<p class="description">The API documentation of the Tab React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">unsupportedProp |   | This property isn't supported. Use the `component` property if you need to change the children structure. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the tab will be disabled. |
| <span class="prop-name">icon</span> | <span class="prop-type">node |   | The icon element. |
| <span class="prop-name">label</span> | <span class="prop-type">node |   | The label element. |
| <span class="prop-name">value</span> | <span class="prop-type">any |   | You can provide your own value. Otherwise, we fallback to the child position index. |

Any other properties supplied will be spread to the root element ([ButtonBase](/api/button-base)).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">labelIcon</span> | Styles applied to the root element if both `icon` and `label` are provided.
| <span class="prop-name">textColorInherit</span> | Styles applied to the root element if `textColor="inherit"`.
| <span class="prop-name">textColorPrimary</span> | Styles applied to the root element if `textColor="primary"`.
| <span class="prop-name">textColorSecondary</span> | Styles applied to the root element if `textColor="secondary"`.
| <span class="prop-name">selected</span> | Styles applied to the root element if `selected={true}` (controlled by the Tabs component).
| <span class="prop-name">disabled</span> | Styles applied to the root element if `disabled={true}` (controlled by the Tabs component).
| <span class="prop-name">fullWidth</span> | Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component).
| <span class="prop-name">wrapper</span> | Styles applied to the `icon` and `label`'s wrapper element.
| <span class="prop-name">labelContainer</span> | Styles applied to the label container element if `label` is provided.
| <span class="prop-name">label</span> | Styles applied to the label wrapper element if `label` is provided.
| <span class="prop-name">labelWrapped</span> | Deprecated, the styles will be removed in v4.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/Tab/Tab.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiTab`.

## Inheritance

The properties of the [ButtonBase](/api/button-base) component are also available.
You can take advantage of this behavior to [target nested components](/guides/api#spread).

## Demos

- [Tabs](/demos/tabs)

