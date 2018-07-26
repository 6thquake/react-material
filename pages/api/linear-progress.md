---
filename: /packages/react-material/src/LinearProgress/LinearProgress.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# LinearProgress

## ARIA

If the progress bar is describing the loading progress of a particular region of a page,
you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
attribute to `true` on that region until it has finished loading.

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'secondary'<br> | <span class="prop-default">'primary'</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">value</span> | <span class="prop-type">number |  | The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100. |
| <span class="prop-name">valueBuffer</span> | <span class="prop-type">number |  | The value for the buffer variant. Value between 0 and 100. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'determinate'&nbsp;&#124;<br>&nbsp;'indeterminate'&nbsp;&#124;<br>&nbsp;'buffer'&nbsp;&#124;<br>&nbsp;'query'<br> | <span class="prop-default">'indeterminate'</span> | The variant to use. Use indeterminate or query when there is no progress value. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `colorPrimary`
- `colorSecondary`
- `buffer`
- `query`
- `dashed`
- `dashedColorPrimary`
- `dashedColorSecondary`
- `bar`
- `barColorPrimary`
- `barColorSecondary`
- `bar1Indeterminate`
- `bar1Determinate`
- `bar1Buffer`
- `bar2Indeterminate`
- `bar2Determinate`
- `bar2Buffer`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/LinearProgress/LinearProgress.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiLinearProgress`.

## Demos

- [Progress](/demos/progress)

