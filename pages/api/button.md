---
filename: /packages/material-ui/src/Button/Button.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Button



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children *</span> | <span class="prop-type">node |  | The content of the button. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Useful to extend the style applied to components. |
| <span class="prop-name">onHandler</span> | <span class="prop-type">func |  | status button 触发的函数，函数返回一个promise实例 |
| <span class="prop-name">statusButton</span> | <span class="prop-type">bool | <span class="prop-default">true</span> | 如果是false没有status button的样式 |
| <span class="prop-name">position</span> | <span class="prop-type">enum:&nbsp;'vertical'&nbsp;&#124;<br>&nbsp;'horizontal'&nbsp;&#124;<br> | <span class="prop-default">horizontal</span> | group button里button横向排列还是纵向排列 |
| <span class="prop-name">radio</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | group button里默认选中的button |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'default'&nbsp;&#124;<br>&nbsp;'inherit'&nbsp;&#124;<br>&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'secondary'&#124;<br>&nbsp;'success'&#124;<br>&nbsp;'waring'&#124;<br>&nbsp;'progress'&#124;<br>&nbsp;'error'<br> | <span class="prop-default">'default'</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br> |  | The component used for the root node. Either a string to use a DOM element or a component. The default value is a `button`. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the button will be disabled. |
| <span class="prop-name">disableFocusRipple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the  keyboard focus ripple will be disabled. `disableRipple` must also be true. |
| <span class="prop-name">disableRipple</span> | <span class="prop-type">bool |  | If `true`, the ripple effect will be disabled. |
| <span class="prop-name">fullWidth</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the button will take up the full width of its container. |
| <span class="prop-name">href</span> | <span class="prop-type">string |  | The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node. |
| <span class="prop-name">mini</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, and `variant` is `'fab'`, will use mini floating action button styling. |
| <span class="prop-name">size</span> | <span class="prop-type">enum:&nbsp;'small'&nbsp;&#124;<br>&nbsp;'medium'&nbsp;&#124;<br>&nbsp;'large'<br> | <span class="prop-default">'medium'</span> | The size of the button. `small` is equivalent to the dense button styling. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'flat'&nbsp;&#124;<br>&nbsp;'raised'&nbsp;&#124;<br>&nbsp;'fab'<br> | <span class="prop-default">'flat'</span> | The type of button. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `label`
- `flatPrimary`
- `flatSecondary`
- `colorInherit`
- `raised`
- `raisedPrimary`
- `raisedSecondary`
- `focusVisible`
- `disabled`
- `fab`
- `mini`
- `sizeSmall`
- `sizeLarge`
- `fullWidth`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/tree/v1-beta/packages/material-ui/src/Button/Button.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiButton`.

## Inheritance

The properties of the [ButtonBase](/api/button-base) component are also available.

## Demos

- [Buttons](/demos/buttons)

