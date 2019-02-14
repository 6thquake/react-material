---
filename: /packages/material-ui/core/src/FormHelperText/FormHelperText.js
title: FormHelperText API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# FormHelperText

<p class="description">The API documentation of the FormHelperText React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |   | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType | <span class="prop-default">'p'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool |   | If `true`, the helper text should be displayed in a disabled state. |
| <span class="prop-name">error</span> | <span class="prop-type">bool |   | If `true`, helper text should be displayed in an error state. |
| <span class="prop-name">filled</span> | <span class="prop-type">bool |   | If `true`, the helper text should use filled classes key. |
| <span class="prop-name">focused</span> | <span class="prop-type">bool |   | If `true`, the helper text should use focused classes key. |
| <span class="prop-name">margin</span> | <span class="prop-type">enum:&nbsp;'dense'<br> |   | If `dense`, will adjust vertical spacing. This is normally obtained via context from FormControl. |
| <span class="prop-name">required</span> | <span class="prop-type">bool |   | If `true`, the helper text should use required classes key. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'standard'&nbsp;&#124;<br>&nbsp;'outlined'&nbsp;&#124;<br>&nbsp;'filled'<br> |   | The variant to use. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">error</span> | Styles applied to the root element if `error={true}`.
| <span class="prop-name">disabled</span> | Styles applied to the root element if `disabled={true}`.
| <span class="prop-name">marginDense</span> | Styles applied to the root element if `margin="dense"`.
| <span class="prop-name">contained</span> | Styles applied to the root element if `variant="filled"` or `variant="outlined"`.
| <span class="prop-name">focused</span> | Styles applied to the root element if `focused={true}`.
| <span class="prop-name">filled</span> | Styles applied to the root element if `filled={true}`.
| <span class="prop-name">required</span> | Styles applied to the root element if `required={true}`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/FormHelperText/FormHelperText.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiFormHelperText`.

## Demos

- [Text Fields](/demos/text-fields)

