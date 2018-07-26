---
filename: /packages/react-material/src/StepLabel/StepLabel.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# StepLabel



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |  | In most cases will simply be a string containing a title for the label. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Mark the step as disabled, will also disable the button if `StepLabelButton` is a child of `StepLabel`. Is passed to child components. |
| <span class="prop-name">error</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Mark the step as failed. |
| <span class="prop-name">icon</span> | <span class="prop-type">node |  | Override the default icon. |
| <span class="prop-name">optional</span> | <span class="prop-type">node |  | The optional node to display. |
| <span class="prop-name">StepIconProps</span> | <span class="prop-type">object |  | Properties applied to the [`StepIcon`](/api/step-icon) element. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `horizontal`
- `vertical`
- `label`
- `active`
- `completed`
- `error`
- `disabled`
- `iconContainer`
- `alternativeLabel`
- `labelContainer`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/StepLabel/StepLabel.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiStepLabel`.

## Demos

- [Steppers](/demos/steppers)

