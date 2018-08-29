# Basics

<p class="description">Material Design layouts encourage consistency across platforms, environments, and screen sizes by using uniform elements and spacing.</p>

## Responsive UI

[Responsive layouts](https://material.io/design/layout/responsive-layout-grid.html) in Material Design adapt to any possible screen size.
We provide the following helpers to make the UI responsive:

- [Grid](/layout/grid):
The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs.

- [Hidden](/layout/hidden):
The hidden component can be used to change the visibility of the elements.

- [Breakpoints](/layout/breakpoints):
We provide a low-level API for using the breakpoints in a wide variery of context.

## z-index

Several React-Material components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content.
We utilize a default z-index scale in React-Material that's been designed to properly layer drawers,
modals, snackbars, tooltips, and more.

[These values](https://github.com/6thquake/react-material/blob/master/packages/material-ui/src/styles/zIndex.js) start at an arbitrary number, high and specific enough to ideally avoid conflicts.

- mobile stepper: 1000
- app bar: 1100
- drawer: 1200
- modal: 1300
- snackbar: 1400
- tooltip: 1500

These values can always be customized.
You will find them in the theme under the [`zIndex`](/customization/default-theme?expend-path=$.zIndex) key.
We don’t encourage customization of individual values; should you change one, you likely need to change them all.
