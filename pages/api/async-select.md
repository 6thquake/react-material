---
filename: /packages/react-material/src/Select/AsyncSelect.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# AsyncSelect



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">selectCb</span> | <span class="prop-type">func | <span class="prop-default">function() {  console.log('need cb function');}</span> | Callback function fired when a menu item is selected. |
| <span class="prop-name">value</span> | <span class="prop-type">array | <span class="prop-default">''</span> | Selected value |
| <span class="prop-name">pageConfig</span> | <span class="prop-type">object | <span class="prop-default">{  currentPage: 1,  pageSize: 5,  total: 0,}</span> | pagination component config |
| <span class="prop-name">placeHold</span> | <span class="prop-type">string | <span class="prop-default">'please input something'</span> | placeholder |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Decided multiple select;If true, value must be an array and the menu will support multiple selections. |
| <span class="prop-name">pageChangeCb</span> | <span class="prop-type">func | <span class="prop-default">function() {  console.log('need cb function');}</span> | Callback fired when the current page of pagination is changed. |
| <span class="prop-name">filterChangeCb</span> | <span class="prop-type">func | <span class="prop-default">function() {  console.log('need cb function');}</span> | Callback fired when the input value is changed. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Decided select is disabled |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Selects](/demos/selects)

