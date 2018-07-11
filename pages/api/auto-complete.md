---
filename: /packages/react-material/src/AutoComplete/AutoComplete.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# AutoComplete



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">inputChangeCb</span> | <span class="prop-type">func |  | Callback fired when the input value is changed. |
| <span class="prop-name">pageChangeCb</span> | <span class="prop-type">func |  | Callback fired when the current page of pagination  is changed. |
| <span class="prop-name">pageConfig</span> | <span class="prop-type">object | <span class="prop-default">{ currentPage: 1, pageSize: 5, total: 0 }</span> | Pagination component config |
| <span class="prop-name">placeHold</span> | <span class="prop-type">string | <span class="prop-default">'please input something'</span> | PlaceHold |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Decided multiple select;If true, value must be an array and the menu will support multiple selections. |
| <span class="prop-name required">onChange *</span> | <span class="prop-type">func |  | Callback function fired when a menu item is selected. |
| <span class="prop-name">value</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;array<br> |  | The value of the Input element, required for a controlled component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Decided autocomplete is disabled |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Autocomplete](/demos/autocomplete)

