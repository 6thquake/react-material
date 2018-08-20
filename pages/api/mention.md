---
filename: /packages/react-material/src/Mention/Mention.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Mention



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">onSearchChange *</span> | <span class="prop-type">func | <span class="prop-default">function() {}</span> | Callback when input @ content changes,parameters are (value,trigger) |
| <span class="prop-name required">onChange *</span> | <span class="prop-type">func | <span class="prop-default">function() {}</span> | Callback when input content changes |
| <span class="prop-name">pageConfig</span> | <span class="prop-type">{page?: number, rowsPerPage?: number, count?: number} |  | pagination config |
| <span class="prop-name">placeholder</span> | <span class="prop-type">string | <span class="prop-default">'please input something'</span> | text palcehold |
| <span class="prop-name required">onSelect *</span> | <span class="prop-type">func | <span class="prop-default">function() {}</span> | callback when select value change |
| <span class="prop-name">defaultValue</span> | <span class="prop-type">string | <span class="prop-default">''</span> | default value |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | should component disabled |
| <span class="prop-name">prefix</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;array<br> | <span class="prop-default">['@']</span> | set char of trigger |
| <span class="prop-name">dataSource</span> | <span class="prop-type">union:&nbsp;object&nbsp;&#124;<br>&nbsp;array<br> |  | set the option to  be selected |
| <span class="prop-name">showError</span> | <span class="prop-type">bool |  | show error |
| <span class="prop-name">selected</span> | <span class="prop-type">array | <span class="prop-default">[]</span> | initial selected value |
| <span class="prop-name">readOnly</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | set if the text can only be read |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Mention](/demos/mention)

