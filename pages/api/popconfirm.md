---
filename: /packages/react-material/src/Popconfirm/Popconfirm.js
title: Popconfirm API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Popconfirm

<p class="description">The API documentation of the Popconfirm React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">children</span> | <span class="prop-type">node |   |  |
| <span class="prop-name">anchorOrigin</span> | <span class="prop-type">{ vertical?: enum:&nbsp;'top'&nbsp;&#124;<br>&nbsp;'center'&nbsp;&#124;<br>&nbsp;'bottom'<br>, horizontal?: enum:&nbsp;'left'&nbsp;&#124;<br>&nbsp;'center'&nbsp;&#124;<br>&nbsp;'right'<br> } | <span class="prop-default">{  vertical: 'top',  horizontal: 'center',}</span> | This is the point on the popconfirm where the popconfirm's children will attach to. |
| <span class="prop-name">transformOrigin</span> | <span class="prop-type">{ vertical?: enum:&nbsp;'top'&nbsp;&#124;<br>&nbsp;'center'&nbsp;&#124;<br>&nbsp;'bottom'<br>, horizontal?: enum:&nbsp;'left'&nbsp;&#124;<br>&nbsp;'center'&nbsp;&#124;<br>&nbsp;'right'<br> } | <span class="prop-default">{  vertical: 'bottom',  horizontal: 'center',}</span> | This is the point on the popconfirm which will attach to the children |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'default'&nbsp;&#124;<br>&nbsp;'inherit'&nbsp;&#124;<br>&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'secondary'<br> | <span class="prop-default">'primary'</span> | The color of the confirm button, |
| <span class="prop-name">size</span> | <span class="prop-type">enum:&nbsp;'small'&nbsp;&#124;<br>&nbsp;'medium'&nbsp;&#124;<br>&nbsp;'large'<br> | <span class="prop-default">'small'</span> | The size of buttons |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab'<br> | <span class="prop-default">'text'</span> | The type of the confirm button. |
| <span class="prop-name">okText</span> | <span class="prop-type">string |   | The name of the confirm button |
| <span class="prop-name">cancelText</span> | <span class="prop-type">string |   | The name of the cancel button |
| <span class="prop-name">content</span> | <span class="prop-type">union:&nbsp;node&nbsp;&#124;<br>&nbsp;string&nbsp;&#124;<br>&nbsp;func<br> |   | The content of popconfirm |
| <span class="prop-name">onConfirm</span> | <span class="prop-type">func |   | Callback fired when confirmed |
| <span class="prop-name">onCancel</span> | <span class="prop-type">func |   | Callback fired when canceled |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:

- `box`
- `anchorElementBox`
- `contentBox`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/Popconfirm/Popconfirm.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `RMPopconfirm`.

## Demos

- [Locale Provider](/demos/locale-provider)
- [Popconfirm](/demos/popconfirm)

