---
filename: /packages/react-material/src/Button/Button.js
title: Button API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Button

<p class="description">The API documentation of the Button React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children *</span> | <span class="prop-type">node |   | The content of the button. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'default', 'inherit', 'primary', 'secondary', 'error', 'success', 'waring', 'progress'<br> | <span class="prop-default">'default'</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">'button'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the button will be disabled. |
| <span class="prop-name">disableFocusRipple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the  keyboard focus ripple will be disabled. `disableRipple` must also be true. |
| <span class="prop-name">disableRipple</span> | <span class="prop-type">bool |   | If `true`, the ripple effect will be disabled. |
| <span class="prop-name">fullWidth</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the button will take up the full width of its container. |
| <span class="prop-name">href</span> | <span class="prop-type">string |   | The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node. |
| <span class="prop-name">mini</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, and `variant` is `'fab'`, will use mini floating action button styling. |
| <span class="prop-name">size</span> | <span class="prop-type">enum:&nbsp;'small'&nbsp;&#124;<br>&nbsp;'medium'&nbsp;&#124;<br>&nbsp;'large'<br> | <span class="prop-default">'medium'</span> | The size of the button. `small` is equivalent to the dense button styling. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab', 'fish'<br> | <span class="prop-default">'flat'</span> | The type of button. |
| <span class="prop-name">onClick</span> | <span class="prop-type">func |   | Button 的回掉函数，函数的返回值如果是Promise，Button变为带反馈的样子。 |

Any other properties supplied will be spread to the root element (native element).

## Demos

- [Buttons](/demos/buttons)
- [Locale Provider](/demos/locale-provider)

