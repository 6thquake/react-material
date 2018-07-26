---
filename: /packages/react-material/src/Chip/Chip.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Chip

Chips represent complex entities in small blocks, such as a contact.

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">avatar</span> | <span class="prop-type">element |  | Avatar element. |
| <span class="prop-name">children</span> | <span class="prop-type">unsupportedProp |  | This property isn't supported. Use the `component` property if you need to change the children structure. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">clickable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If true, the chip will appear clickable, and will raise when pressed, even if the onClick property is not defined. This can be used, for example, along with the component property to indicate an anchor Chip is clickable. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">'div'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">deleteIcon</span> | <span class="prop-type">element |  | Override the default delete icon element. Shown only if `onDelete` is set. |
| <span class="prop-name">label</span> | <span class="prop-type">node |  | The content of the label. |
| <span class="prop-name">onDelete</span> | <span class="prop-type">func |  | Callback function fired when the delete icon is clicked. If set, the delete icon will be shown. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `clickable`
- `deletable`
- `avatar`
- `avatarChildren`
- `label`
- `deleteIcon`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/Chip/Chip.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiChip`.

## Demos

- [Autocomplete](/demos/autocomplete)
- [Chips](/demos/chips)
- [Selects](/demos/selects)

