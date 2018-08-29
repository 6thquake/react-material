---
filename: /packages/react-material/src/AutoComplete/AutoComplete.js
title: AutoComplete API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# AutoComplete

<p class="description">The API documentation of the AutoComplete React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |   | The option elements to populate the select with. Can be some `MenuItem`. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If true, `value` must be an array and the menu will support multiple selections. |
| <span class="prop-name">onChange</span> | <span class="prop-type">func |   | Callback function fired when a menu item is selected.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. You can pull out the new value by accessing `event.target.value`. |
| <span class="prop-name">value</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;number&nbsp;&#124;<br>&nbsp;arrayOf<br> |   | The input value. |
| <span class="prop-name">rowsPerPage</span> | <span class="prop-type">PropTypes.num |   | page size |
| <span class="prop-name">placeholder</span> | <span class="prop-type">string |   | placeholder |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool |   | decided Synchronize autocomplete is disabled |

Any other properties supplied will be spread to the root element (native element).

