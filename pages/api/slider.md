---
filename: /packages/react-material/src/Slider/Slider.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Slider



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">'div'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool |  | If `true`, the slider will be disabled. |
| <span class="prop-name">max</span> | <span class="prop-type">number | <span class="prop-default">100</span> | The maximum allowed value of the slider. Should not be equal to min. |
| <span class="prop-name">min</span> | <span class="prop-type">number | <span class="prop-default">0</span> | The minimum allowed value of the slider. Should not be equal to max. |
| <span class="prop-name">onChange</span> | <span class="prop-type">func |  | Callback function that is fired when the slider's value changed. |
| <span class="prop-name">onDragEnd</span> | <span class="prop-type">func |  | Callback function that is fired when the slide has stopped moving. |
| <span class="prop-name">onDragStart</span> | <span class="prop-type">func |  | Callback function that is fired when the slider has begun to move. |
| <span class="prop-name">reverse</span> | <span class="prop-type">bool |  | If `true`, the slider will be reversed. |
| <span class="prop-name">step</span> | <span class="prop-type">number |  | The granularity the slider can step through values. |
| <span class="prop-name required">value *</span> | <span class="prop-type">number |  | The value of the slider. |
| <span class="prop-name">vertical</span> | <span class="prop-type">bool |  | If `true`, the slider will be vertical. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `container`
- `track`
- `trackBefore`
- `trackAfter`
- `thumb`
- `reverse`
- `disabled`
- `jumped`
- `focused`
- `activated`
- `vertical`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/Slider/Slider.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiSlider`.

## Demos

- [Slider](/lab/slider)

