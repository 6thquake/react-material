---
filename: /packages/material-ui/src/Form/FormLabel.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# FormLabel



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |  | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Useful to extend the style applied to components. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br> | <span class="prop-default">'label'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool |  | If `true`, the label should be displayed in a disabled state. |
| <span class="prop-name">error</span> | <span class="prop-type">bool |  | If `true`, the label should be displayed in an error state. |
| <span class="prop-name">focused</span> | <span class="prop-type">bool |  | If `true`, the input of this label is focused (used by `FormGroup` components). |
| <span class="prop-name">required</span> | <span class="prop-type">bool |  | If `true`, the label will indicate that the input is required. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by Material-UI thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `focused`
- `disabled`
- `error`
- `asterisk`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/mui-org/material-ui/tree/v1-beta/packages/material-ui/src/Form/FormLabel.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiFormLabel`.

## Demos

- [Selection Controls](/demos/selection-controls)

