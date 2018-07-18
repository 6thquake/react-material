---
filename: /packages/react-material/src/Anchor/Anchor.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Anchor



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">links *</span> | <span class="prop-type">array |  | The links you want to render on Anchor |
| <span class="prop-name">container</span> | <span class="prop-type">string |  | Id selector, which will be used to find The scope of the anchors, the default value is window |
| <span class="prop-name">linkStyle</span> | <span class="prop-type">object | <span class="prop-default">{}</span> | The style will be spread to links |
| <span class="prop-name">linkActiveStyle</span> | <span class="prop-type">object | <span class="prop-default">{}</span> | The style will be spread to the active link |
| <span class="prop-name">orientation</span> | <span class="prop-type">enum:&nbsp;'vertical'&nbsp;&#124;<br>&nbsp;'horizontal'<br> | <span class="prop-default">'vertical'</span> | The orientation of Anchor |
| <span class="prop-name">onChange</span> | <span class="prop-type">func |  | Callback fired when the active link changed |
| <span class="prop-name">type</span> | <span class="prop-type">enum:&nbsp;'normal'&nbsp;&#124;<br>&nbsp;'hash'<br> | <span class="prop-default">'normal'</span> | The type of Anchor, you will consider this only in SPA |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `box`
- `anchorWrapper`
- `ul`
- `li`
- `active`
- `wrapper`
- `activeMask`
- `link`
- `hoLink`
- `line`
- `horizontalAnchor`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/tree/develop/packages/react-material/src/Anchor/Anchor.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `RMAnchor`.

## Demos

- [Anchor](/demos/anchor)

