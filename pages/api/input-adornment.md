---
filename: /packages/material-ui/core/src/InputAdornment/InputAdornment.js
title: InputAdornment API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# InputAdornment

<p class="description">The API documentation of the InputAdornment React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children *</span> | <span class="prop-type">node |   | The content of the component, normally an `IconButton` or string. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType | <span class="prop-default">'div'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">disablePointerEvents</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Disable pointer events on the root. This allows for the content of the adornment to focus the input on click. |
| <span class="prop-name">disableTypography</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If children is a string then disable wrapping in a Typography component. |
| <span class="prop-name">position</span> | <span class="prop-type">enum:&nbsp;'start'&nbsp;&#124;<br>&nbsp;'end'<br> |   | The position this adornment should appear relative to the `Input`. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'standard'&nbsp;&#124;<br>&nbsp;'outlined'&nbsp;&#124;<br>&nbsp;'filled'<br> |   | The variant to use. Note: If you are using the `TextField` component or the `FormControl` component you do not have to set this manually. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">filled</span> | Styles applied to the root element if `variant="filled"`.
| <span class="prop-name">positionStart</span> | Styles applied to the root element if `position="start"`.
| <span class="prop-name">positionEnd</span> | Styles applied to the root element if `position="end"`.
| <span class="prop-name">disablePointerEvents</span> | Styles applied to the root element if `disablePointerEvents=true`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/InputAdornment/InputAdornment.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiInputAdornment`.

## Demos

- [Text Fields](/demos/text-fields)

