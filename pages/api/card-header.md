---
filename: /packages/material-ui/src/Card/CardHeader.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# CardHeader



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">action</span> | <span class="prop-type">node |  | The action to display in the card header. |
| <span class="prop-name">avatar</span> | <span class="prop-type">node |  | The Avatar for the Card Header. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Useful to extend the style applied to components. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br> | <span class="prop-default">'div'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">subheader</span> | <span class="prop-type">node |  | The content of the component. |
| <span class="prop-name">title</span> | <span class="prop-type">node |  | The content of the Card Title. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `avatar`
- `action`
- `content`
- `title`
- `subheader`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/tree/v1-beta/packages/material-ui/src/Card/CardHeader.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiCardHeader`.

## Demos

- [Cards](/demos/cards)

