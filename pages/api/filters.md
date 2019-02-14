---
filename: /packages/react-material/src/Filters/Filters.js
title: Filters API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Filters

<p class="description">The API documentation of the Filters React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">onChange</span> | <span class="prop-type">func | <span class="prop-default">function() {}</span> | callback to parent component when select option |
| <span class="prop-name">options</span> | <span class="prop-type">array | <span class="prop-default">[]</span> | data options. |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | singleSelect or multiSelect default is singleSelect. |
| <span class="prop-name">value</span> | <span class="prop-type">array | <span class="prop-default">[]</span> | The value of the Filter. |
| <span class="prop-name">label</span> | <span class="prop-type">string | <span class="prop-default">''</span> | label name of the Filter |
| <span class="prop-name">mapper</span> | <span class="prop-type">{ label?: union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br>, value?: union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br> } | <span class="prop-default">{  label: 'label',  value: 'value',}</span> | option item label and value, when assignment option by options |
| <span class="prop-name">spacing</span> | <span class="prop-type">number | <span class="prop-default">8</span> | spacing between items |
| <span class="prop-name">labelWidth</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;number<br> | <span class="prop-default">'auto'</span> | label width |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'default'&nbsp;&#124;<br>&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'secondary'<br> | <span class="prop-default">'default'</span> | The color of these items. |

Any other properties supplied will be spread to the root element (native element).

## Demos

- [Filters](/demos/filters)

