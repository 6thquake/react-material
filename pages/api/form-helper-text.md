---
filename: /packages/react-material/src/FormHelperText/FormHelperText.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# FormHelperText



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |  | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">'p'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool |  | If `true`, the helper text should be displayed in a disabled state. |
| <span class="prop-name">error</span> | <span class="prop-type">bool |  | If `true`, helper text should be displayed in an error state. |
| <span class="prop-name">filled</span> | <span class="prop-type">bool |  | If `true`, the helper text should use filled classes key. |
| <span class="prop-name">focused</span> | <span class="prop-type">bool |  | If `true`, the helper text should use focused classes key. |
| <span class="prop-name">margin</span> | <span class="prop-type">enum:&nbsp;'dense'<br> |  | If `dense`, will adjust vertical spacing. This is normally obtained via context from FormControl. |
| <span class="prop-name">required</span> | <span class="prop-type">bool |  | If `true`, the helper text should use required classes key. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `error`
- `disabled`
- `marginDense`
- `focused`
- `filled`
- `required`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/FormHelperText/FormHelperText.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiFormHelperText`.

## Demos

- [Text Fields](/demos/text-fields)

