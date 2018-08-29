---
filename: /packages/react-material/src/AutoComplete/AsyncAutoComplete.js
title: AsyncAutoComplete API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# AsyncAutoComplete

<p class="description">The API documentation of the AsyncAutoComplete React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">onChangeInput</span> | <span class="prop-type">func |   | Callback fired when the input value is changed. |
| <span class="prop-name">onChangePage</span> | <span class="prop-type">func |   | Callback fired when the current page of pagination  is changed. |
| <span class="prop-name">options</span> | <span class="prop-type">arrayOf |   | autocomplete options, |
| <span class="prop-name">PaginationProps</span> | <span class="prop-type">object | <span class="prop-default">{  page: 0,  rowsPerPage: 5,  count: 0,}</span> | Pagination component config |
| <span class="prop-name">placeholder</span> | <span class="prop-type">string |   | placeholder |
| <span class="prop-name">mapper</span> | <span class="prop-type">{ label?: union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br>, value?: union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br> } |   | option item label and value,when assignment option by options |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Decided multiple select;If true, value must be an array and the menu will support multiple selections. |
| <span class="prop-name required">onChange *</span> | <span class="prop-type">func |   | Callback function fired when a menu item is selected. |
| <span class="prop-name">value</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;number&nbsp;&#124;<br>&nbsp;arrayOf<br> |   | The value of the Input element, required for a controlled component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Decided autocomplete is disabled |
| <span class="prop-name">select</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If true,autocomplete performance is like a select,when focus,option open. |
| <span class="prop-name">debounceAble</span> | <span class="prop-type">bool |   | If true,autocomplete will add debounce when filter options by input value. |
| <span class="prop-name">debounceProps</span> | <span class="prop-type">{ wait?: number, maxTime?: number } | <span class="prop-default">{  wait: 500,  maxTime: 800,}</span> | If debounceAble true,config debounce wait and max continue time,the unit is milliseconds. |

Any other properties supplied will be spread to the root element (native element).

