---
filename: /packages/material-ui/src/Table/TableCell.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# TableCell



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |  | The table cell contents. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Useful to extend the style applied to components. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br> |  | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">numeric</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, content will align to the right. |
| <span class="prop-name">padding</span> | <span class="prop-type">enum:&nbsp;'default'&nbsp;&#124;<br>&nbsp;'checkbox'&nbsp;&#124;<br>&nbsp;'dense'&nbsp;&#124;<br>&nbsp;'none'<br> | <span class="prop-default">'default'</span> | Sets the padding applied to the cell. |
| <span class="prop-name">scope</span> | <span class="prop-type">string |  | Set scope attribute. |
| <span class="prop-name">sortDirection</span> | <span class="prop-type">enum:&nbsp;'asc'&nbsp;&#124;<br>&nbsp;'desc'&nbsp;&#124;<br>&nbsp;false<br> |  | Set aria-sort direction. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'head'&nbsp;&#124;<br>&nbsp;'body'&nbsp;&#124;<br>&nbsp;'footer'<br> |  | Specify the cell type. By default, the TableHead, TableBody or TableFooter parent component set the value. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by Material-UI thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `head`
- `body`
- `footer`
- `numeric`
- `paddingDense`
- `paddingCheckbox`
- `paddingNone`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/mui-org/material-ui/tree/v1-beta/packages/material-ui/src/Table/TableCell.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiTableCell`.

## Demos

- [Tables](/demos/tables)

