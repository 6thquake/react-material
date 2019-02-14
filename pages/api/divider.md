---
filename: /packages/material-ui/core/src/Divider/Divider.js
title: Divider API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Divider

<p class="description">The API documentation of the Divider React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">absolute</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Absolutely position the element. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType | <span class="prop-default">'hr'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">inset</span> | <span class="prop-type">chainPropTypes(PropTypes.bool, props => {
  /* istanbul ignore if */
  if (props.inset) {
    return new Error(
      'React-Material: you are using the deprecated `inset` property ' +
        'that will be removed in the next major release. The property `variant="inset"` ' +
        'is equivalent and should be used instead.',
    );
  }

  return null;
}) |   | If `true`, the divider will be indented. __WARNING__: `inset` is deprecated. Instead use `variant="inset"`. |
| <span class="prop-name">light</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the divider will have a lighter color. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'fullWidth'&nbsp;&#124;<br>&nbsp;'inset'&nbsp;&#124;<br>&nbsp;'middle'<br> | <span class="prop-default">'fullWidth'</span> | The variant to use. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">absolute</span> | Styles applied to the root element if `absolute={true}`.
| <span class="prop-name">inset</span> | Styles applied to the root element if `variant="inset"`.
| <span class="prop-name">light</span> | Styles applied to the root element if `light={true}`.
| <span class="prop-name">middle</span> | Styles applied to the root element if `variant="middle"`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/Divider/Divider.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiDivider`.

## Demos

- [Dividers](/demos/dividers)
- [Lists](/demos/lists)

