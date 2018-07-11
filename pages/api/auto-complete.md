---
filename: /packages/react-material/src/AutoComplete/AutoComplete.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# AutoComplete



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">inputChangeCb *</span> | <span class="prop-type">func | <span class="prop-default">function () {  console.log("need cb function")}</span> | input change ,callback to parent component |
| <span class="prop-name required">pageChangeCb *</span> | <span class="prop-type">func | <span class="prop-default">function () {  console.log("need cb function")}</span> | pagination change ,callback to parent component |
| <span class="prop-name">pageConfig</span> | <span class="prop-type">object | <span class="prop-default">{  currentPage: 1,  pageSize: 5,  total:0}</span> | pagination component config |
| <span class="prop-name">placeHold</span> | <span class="prop-type">string | <span class="prop-default">'please input something'</span> | placeHold |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | decided multiple select |
| <span class="prop-name required">onChange *</span> | <span class="prop-type">func | <span class="prop-default">function () {  console.log("need cb function")}</span> | when select one item,callback |
| <span class="prop-name">value</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;array<br> |  | 用于回显 |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | decided autocomplete is disabled |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Autocomplete](/demos/autocomplete)

