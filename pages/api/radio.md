---
filename: /packages/material-ui/core/src/Radio/Radio.js
title: Radio API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Radio

<p class="description">The API documentation of the Radio React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">checked</span> | <span class="prop-type">union:&nbsp;bool&nbsp;&#124;<br>&nbsp;string<br> |   | If `true`, the component is checked. |
| <span class="prop-name">checkedIcon</span> | <span class="prop-type">node |   | The icon to display when the component is checked. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'secondary'&nbsp;&#124;<br>&nbsp;'default'<br> | <span class="prop-default">'secondary'</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool |   | If `true`, the switch will be disabled. |
| <span class="prop-name">disableRipple</span> | <span class="prop-type">bool |   | If `true`, the ripple effect will be disabled. |
| <span class="prop-name">icon</span> | <span class="prop-type">node |   | The icon to display when the component is unchecked. |
| <span class="prop-name">id</span> | <span class="prop-type">string |   | The id of the `input` element. |
| <span class="prop-name">inputProps</span> | <span class="prop-type">object |   | Attributes applied to the `input` element. |
| <span class="prop-name">inputRef</span> | <span class="prop-type">union:&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> |   | Use that property to pass a ref callback to the native input component. |
| <span class="prop-name">onChange</span> | <span class="prop-type">func |   | Callback fired when the state is changed.<br><br>**Signature:**<br>`function(event: object, checked: boolean) => void`<br>*event:* The event source of the callback. You can pull out the new value by accessing `event.target.value`.<br>*checked:* The `checked` value of the switch |
| <span class="prop-name">type</span> | <span class="prop-type">string |   | The input component property `type`. |
| <span class="prop-name">value</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;number&nbsp;&#124;<br>&nbsp;bool<br> |   | The value of the component. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">checked</span> | Styles applied to the root element if `checked={true}`.
| <span class="prop-name">disabled</span> | Styles applied to the root element if `disabled={true}`.
| <span class="prop-name">colorPrimary</span> | Styles applied to the root element if `color="primary"`.
| <span class="prop-name">colorSecondary</span> | Styles applied to the root element if `color="secondary"`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/Radio/Radio.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiRadio`.

## Demos

- [Selection Controls](/demos/selection-controls)

