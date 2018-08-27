---
title: Popover React component
components: Grow, Popover
---

# Popover

<p class="description">A Popover can be used to display some content on top of another.</p>

Things to know when using the `Popover` component:
- The component is build on top of the [`Modal`](/utils/modal) component.
- The scroll and click away are blocked unlike with the [`Popper`](/utils/popper) component.

## Simple Popover

{{"demo": "pages/utils/popover/SimplePopover.js" }}

## Anchor playground

Use the radio buttons to adjust the `anchorOrigin` and `transformOrigin` positions.
You can also set the `anchorReference` to `anchorPosition` or `anchorEl`.
When it is `anchorPosition`, the component will, instead of `anchorEl`,
refer to the `anchorPosition` prop which you can adjust to set
the position of the popover.

{{"demo": "pages/utils/popover/AnchorPlayground.js"}}

## Mouse over interaction

We demonstrate how to use the `Popover` component to implement a popover behavior based on the mouse over event.

{{"demo": "pages/utils/popover/MouseOverPopover.js"}}

## Render Props

It is a [render props](https://reactjs.org/docs/render-props.html) demo that
keeps track of the local state for a single popover.

{{"demo": "pages/utils/popover/RenderPropsPopover.js"}}
