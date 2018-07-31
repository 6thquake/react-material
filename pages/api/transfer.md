---
filename: /packages/react-material/src/Transfer/Transfer.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Transfer



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">showSearch</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | choose to generate filter box |
| <span class="prop-name">searchPlaceholder</span> | <span class="prop-type">string | <span class="prop-default">'please input something'</span> | placeholder in filter box |
| <span class="prop-name required">dataSource *</span> | <span class="prop-type">array |  | the data in the source box, Array of Object，in the Object, props 'name' and 'id' is required |
| <span class="prop-name required">targetKeys *</span> | <span class="prop-type">array |  | the data in the target box |
| <span class="prop-name">pageConfig</span> | <span class="prop-type">{page?: number, rowsPerPage?: number, count?: number} |  | pageConfig should contain total,pageSize,currentPage |
| <span class="prop-name">onChange</span> | <span class="prop-type">func | <span class="prop-default">function() {  console.log('need cb function');}</span> | call-back function when data change,parameters are (targetKeys,direction,moveKeys) |
| <span class="prop-name required">selectedKeys *</span> | <span class="prop-type">array |  | Array of Object default selected，in the Object, props 'name' and 'id' is required |
| <span class="prop-name">paginationOption</span> | <span class="prop-type">bool | <span class="prop-default">false</span> |  |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Transfer](/demos/transfer)

