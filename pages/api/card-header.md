---
filename: /packages/material-ui/core/src/CardHeader/CardHeader.js
title: CardHeader API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# CardHeader

<p class="description">The API documentation of the CardHeader React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">action</span> | <span class="prop-type">node |   | The action to display in the card header. |
| <span class="prop-name">avatar</span> | <span class="prop-type">node |   | The Avatar for the Card Header. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType | <span class="prop-default">'div'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">disableTypography</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the children won't be wrapped by a Typography component. This can be useful to render an alternative Typography variant by wrapping the `title` text, and optional `subheader` text with the Typography component. |
| <span class="prop-name">subheader</span> | <span class="prop-type">node |   | The content of the component. |
| <span class="prop-name">subheaderTypographyProps</span> | <span class="prop-type">object |   | These props will be forwarded to the subheader (as long as disableTypography is not `true`). |
| <span class="prop-name">title</span> | <span class="prop-type">node |   | The content of the Card Title. |
| <span class="prop-name">titleTypographyProps</span> | <span class="prop-type">object |   | These props will be forwarded to the title (as long as disableTypography is not `true`). |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">avatar</span> | Styles applied to the avatar element.
| <span class="prop-name">action</span> | Styles applied to the action element.
| <span class="prop-name">content</span> | Styles applied to the content wrapper element.
| <span class="prop-name">title</span> | Styles applied to the title Typography element.
| <span class="prop-name">subheader</span> | Styles applied to the subheader Typography element.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/CardHeader/CardHeader.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiCardHeader`.

## Demos

- [Cards](/demos/cards)

