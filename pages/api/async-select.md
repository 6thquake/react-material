---
filename: /packages/react-material/src/Select/AsyncSelect.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# AsyncSelect



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">selectCb *</span> | <span class="prop-type">func | <span class="prop-default">function () {  console.log("need cb function")}</span> | callback to parent component when select option |
| <span class="prop-name">value</span> | <span class="prop-type">array | <span class="prop-default">''</span> | default select value,用于回显 |
| <span class="prop-name">pageConfig</span> | <span class="prop-type">object | <span class="prop-default">{  currentPage: 1,  pageSize: 5,  total:0}</span> | pagination component config |
| <span class="prop-name">placeHold</span> | <span class="prop-type">string | <span class="prop-default">'please input something'</span> | placeHold |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | decided multiple select |
| <span class="prop-name">pageChangeCb</span> | <span class="prop-type">func | <span class="prop-default">function () {  console.log("need cb function")}</span> | callback to parent component when currentpage change |
| <span class="prop-name">filterChangeCb</span> | <span class="prop-type">func | <span class="prop-default">function () {  console.log("need cb function")}</span> | callback to parent component when  filter change |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | decided select is disabled |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Selects](/demos/selects)

