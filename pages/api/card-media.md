---
filename: /packages/material-ui/core/src/CardMedia/CardMedia.js
title: CardMedia API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# CardMedia

<p class="description">The API documentation of the CardMedia React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">'div'</span> | Component for rendering image. Either a string to use a DOM element or a component. |
| <span class="prop-name">image</span> | <span class="prop-type">string |   | Image to be displayed as a background image. Either `image` or `src` prop must be specified. Note that caller must specify height otherwise the image will not be visible. |
| <span class="prop-name">src</span> | <span class="prop-type">string |   | An alias for `image` property. Available only with media components. Media components: `video`, `audio`, `picture`, `iframe`, `img`. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">media</span> | Styles applied to the root element if `component="video, audio, picture, iframe, or img"`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/CardMedia/CardMedia.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiCardMedia`.

## Demos

- [Cards](/demos/cards)

