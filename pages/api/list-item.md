---
filename: /packages/material-ui/core/src/ListItem/ListItem.js
title: ListItem API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# ListItem

<p class="description">The API documentation of the ListItem React component.</p>

Uses an additional container component if `ListItemSecondaryAction` is the last child.

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">alignItems</span> | <span class="prop-type">enum:&nbsp;'flex-start'&nbsp;&#124;<br>&nbsp;'center'<br> | <span class="prop-default">'center'</span> | Defines the `align-items` style property. |
| <span class="prop-name">button</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the list item will be a button (using `ButtonBase`). |
| <span class="prop-name">children</span> | <span class="prop-type">chainPropTypes(PropTypes.node, props => {
  const children = React.Children.toArray(props.children);

  // React.Children.toArray(props.children).findLastIndex(isListItemSecondaryAction)
  let secondaryActionIndex = -1;
  for (let i = children.length - 1; i >= 0; i -= 1) {
    const child = children[i];
    if (isMuiElement(child, ['ListItemSecondaryAction'])) {
      secondaryActionIndex = i;
      break;
    }
  }

  //  is ListItemSecondaryAction the last child of ListItem
  if (secondaryActionIndex !== -1 && secondaryActionIndex !== children.length - 1) {
    return new Error(
      'React-Material: you used an element after ListItemSecondaryAction. ' +
        'For ListItem to detect that it has a secondary action ' +
        `you must pass it has the last children to ListItem.${
          process.env.NODE_ENV === 'test' ? Date.now() : ''
        }`,
    );
  }

  return null;
}) |   | The content of the component. If a `ListItemSecondaryAction` is used it must be the last child. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType |   | The component used for the root node. Either a string to use a DOM element or a component. By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`. |
| <span class="prop-name">ContainerComponent</span> | <span class="prop-type">componentPropType | <span class="prop-default">'li'</span> | The container component used when a `ListItemSecondaryAction` is the last child. |
| <span class="prop-name">ContainerProps</span> | <span class="prop-type">object |   | Properties applied to the container component if used. |
| <span class="prop-name">dense</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, compact vertical padding designed for keyboard and mouse input will be used. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the list item will be disabled. |
| <span class="prop-name">disableGutters</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the left and right padding is removed. |
| <span class="prop-name">divider</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, a 1px light border is added to the bottom of the list item. |
| <span class="prop-name">selected</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Use to apply selected styling. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the (normally root) `component` element. May be wrapped by a `container`.
| <span class="prop-name">container</span> | Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`.
| <span class="prop-name">focusVisible</span> | Styles applied to the `component`'s `focusVisibleClassName` property if `button={true}`.
| <span class="prop-name">default</span> | Legacy styles applied to the root element. Use `root` instead.
| <span class="prop-name">dense</span> | Styles applied to the `component` element if `dense={true}` or `children` includes `Avatar`.
| <span class="prop-name">alignItemsFlexStart</span> | Styles applied to the `component` element if `alignItems="flex-start"`.
| <span class="prop-name">disabled</span> | Styles applied to the inner `component` element if `disabled={true}`.
| <span class="prop-name">divider</span> | Styles applied to the inner `component` element if `divider={true}`.
| <span class="prop-name">gutters</span> | Styles applied to the inner `component` element if `disableGutters={false}`.
| <span class="prop-name">button</span> | Styles applied to the inner `component` element if `button={true}`.
| <span class="prop-name">secondaryAction</span> | Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`.
| <span class="prop-name">selected</span> | Styles applied to the root element if `selected={true}`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/ListItem/ListItem.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiListItem`.

## Demos

- [Lists](/demos/lists)

