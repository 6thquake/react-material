---
filename: /packages/react-material/src/CascadeSelect/CascadeSelect.js
title: CascadeSelect API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# CascadeSelect

<p class="description">The API documentation of the CascadeSelect React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">separator</span> | <span class="prop-type">string | <span class="prop-default">'/'</span> | The separator between different levels |
| <span class="prop-name">onChange</span> | <span class="prop-type">func |   | Callback when finishing cascader select |
| <span class="prop-name">label</span> | <span class="prop-type">node |   | The label content. |
| <span class="prop-name required">options *</span> | <span class="prop-type">array |   | data options of cascade |
| <span class="prop-name">mapper</span> | <span class="prop-type">{ label?: union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br>, value?: union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br> } | <span class="prop-default">{  label: 'label',  value: 'value',}</span> | render maps, |
| <span class="prop-name">renderValue</span> | <span class="prop-type">func |   | Render the selected item.<br><br>**Signature:**<br>`function(list: array) => String`<br>*list:* The selected items `array`. |
| <span class="prop-name">width</span> | <span class="prop-type">number | <span class="prop-default">150</span> | The width of cascader |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:

- `root`
- `textField`
- `arrowDown`
- `menuBox`
- `noData`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/CascadeSelect/CascadeSelect.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `RMCascadeSelect`.

## Demos

- [Selects](/demos/selects)

