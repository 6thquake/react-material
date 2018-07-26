---
filename: /packages/react-material/src/Select/Select.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Select



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">autoWidth</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input. |
| <span class="prop-name">children</span> | <span class="prop-type">node |  | The option elements to populate the select with. Can be some `MenuItem` when `native` is false and `option` when `native` is true. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">displayEmpty</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the selected item is displayed even if its value is empty. You can only use it when the `native` property is `false` (default). |
| <span class="prop-name">IconComponent</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">ArrowDropDownIcon</span> | The icon that displays the arrow. |
| <span class="prop-name">input</span> | <span class="prop-type">element | <span class="prop-default">&lt;Input /></span> | An `Input` element; does not have to be a material-ui specific `Input`. |
| <span class="prop-name">inputProps</span> | <span class="prop-type">object |  | Attributes applied to the `input` element. When `native` is `true`, the attributes are applied on the `select` element. |
| <span class="prop-name">MenuProps</span> | <span class="prop-type">object |  | Properties applied to the [`Menu`](/api/menu) element. |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If true, `value` must be an array and the menu will support multiple selections. You can only use it when the `native` property is `false` (default). |
| <span class="prop-name">native</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the component will be using a native `select` element. |
| <span class="prop-name">onChange</span> | <span class="prop-type">func |  | Callback function fired when a menu item is selected.<br><br>**Signature:**<br>`function(event: object, child?: object) => void`<br>*event:* The event source of the callback. You can pull out the new value by accessing `event.target.value`.<br>*child:* The react element that was selected when `native` is `false` (default). |
| <span class="prop-name">onClose</span> | <span class="prop-type">func |  | Callback fired when the component requests to be closed. Use in controlled mode (see open).<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback |
| <span class="prop-name">onOpen</span> | <span class="prop-type">func |  | Callback fired when the component requests to be opened. Use in controlled mode (see open).<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback |
| <span class="prop-name">open</span> | <span class="prop-type">bool |  | Control `select` open state. You can only use it when the `native` property is `false` (default). |
| <span class="prop-name">renderValue</span> | <span class="prop-type">func |  | Render the selected value. You can only use it when the `native` property is `false` (default).<br><br>**Signature:**<br>`function(value: any) => ReactElement`<br>*value:* The `value` provided to the component. |
| <span class="prop-name">SelectDisplayProps</span> | <span class="prop-type">object |  | Properties applied to the clickable div element. |
| <span class="prop-name">value</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;number&nbsp;&#124;<br>&nbsp;arrayOf<br> |  | The input value. This property is required when the `native` property is `false` (default). |
| <span class="prop-name">rowsPerPage</span> | <span class="prop-type">PropTypes.num |  | page size |
| <span class="prop-name">placeholder</span> | <span class="prop-type">string | <span class="prop-default">'please input something'</span> | placeholder |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool |  | decided select is disabled |
| <span class="prop-name">showFilter</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If true ,show the filter box |
| <span class="prop-name">showPagination</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If true ,show the pagination box |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Autocomplete](/demos/autocomplete)
- [Selects](/demos/selects)

