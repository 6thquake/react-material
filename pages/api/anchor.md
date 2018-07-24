---
filename: /packages/react-material/src/Anchor/Anchor.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Anchor



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">container</span> | <span class="prop-type">string |  | selector, which will be used to find The scope of the anchors, the default value is window |
| <span class="prop-name">hash</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | The mode of Anchor, you will consider this only in SPA |
| <span class="prop-name">horizontal</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | The orientation of Anchor, if true, the orientation will be horizontal, if false, the orientation will be vertical |
| <span class="prop-name required">links *</span> | <span class="prop-type">array |  | The links you want to render on Anchor, links: PropTypes.arrayOf(PropTypes.shape({  label: PropTypes.node,  value: PropTypes.string,  children: PropTypes.array, })).isRequired, |
| <span class="prop-name">onChange</span> | <span class="prop-type">func |  | Callback fired when the active link changed |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `verticalAnchorRoot`
- `anchorWrapper`
- `ul`
- `active`
- `wrapper`
- `activeMask`
- `link`
- `veLinkActive`
- `hoLink`
- `hoLinkActive`
- `line`
- `horizontalAnchorRoot`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/Anchor/Anchor.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `RMAnchor`.

## Demos

- [Anchor](/demos/anchor)

