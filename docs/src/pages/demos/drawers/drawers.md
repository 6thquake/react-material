---
components: Drawer, SwipeableDrawer
---

# Drawer

The [Drawer](https://material.io/guidelines/patterns/navigation-drawer.html) slides in from the side.
It is a common pattern found in Google apps and follows the keylines and metrics for lists.

## Temporary drawer

Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.

The Drawer can be cancelled by clicking the overlay or pressing the Esc key.
It closes when an item is selected, handled by controlling the `open` prop.

{{"demo": "pages/demos/drawers/TemporaryDrawer.js", "hideEditButton": true}}

## Swipeable Temporary drawer

You can make the drawer swipeable with the `SwipeableDrawer` component.

This component comes with a 2 kB gzipped payload overhead.
Some low-end mobile devices won't be able to follow the fingers at 60 FPS.
You can use the `disableBackdropTransition` property to help.

{{"demo": "pages/demos/drawers/SwipeableTemporaryDrawer.js", "hideEditButton": true}}

We are using the following set of properties on this documentation website for optimal usability of the component:
- iOS is hosted on high-end devices.
We can enable the backdrop transition without dropping frames.
The performance will be good enough.
- iOS has a "swipe to go back" feature that mess
with the discovery feature. We have to disable it.

```jsx
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />
```

## Permanent drawer

Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed.

Permanent navigation drawers are the **recommended default for desktop**.

### Full-height navigation

Apps focused on information consumption that use a left-to-right hierarchy.

{{"demo": "pages/demos/drawers/PermanentDrawer.js", "hideEditButton": true}}

### Clipped under the app bar

Apps focused on productivity that require balance across the screen.

{{"demo": "pages/demos/drawers/ClippedDrawer.js", "hideEditButton": true}}

## Persistent drawer

Persistent navigation drawers can toggle open or closed.
The drawer sits on the same surface elevation as the content.
It is closed by default and opens by selecting the menu icon, and stays open until closed by the user.
The state of the drawer is remembered from action to action and session to session.

When the drawer is outside of the page grid and opens, the drawer forces other content to change size and adapt to the smaller viewport.

Persistent navigation drawers are acceptable for all sizes larger than mobile.
They are not recommended for apps with multiple levels of hierarchy that require using an up arrow for navigation.

{{"demo": "pages/demos/drawers/PersistentDrawer.js", "hideEditButton": true}}

## Mini variant drawer

In this variation, the persistent navigation drawer changes its width.
Its resting state is as a mini-drawer at the same elevation as the content, clipped by the app bar.
When expanded, it appears as the standard persistent navigation drawer.

The mini variant is recommended for apps sections that need quick selection access alongside content.

{{"demo": "pages/demos/drawers/MiniDrawer.js", "hideEditButton": true}}

## Responsive drawer

The `Hidden` responsive helper component allows showing different types of drawer depending on the screen width.
A `temporary` drawer is shown for small screens while a `permanent` drawer is shown for wider screens.

{{"demo": "pages/demos/drawers/ResponsiveDrawer.js", "hideEditButton": true}}
