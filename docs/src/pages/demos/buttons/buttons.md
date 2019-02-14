---
title: Button React component
components: Button, IconButton, ButtonBase, Zoom
---

<p class="description">Buttons allow users to take actions, and make choices, with a single tap.</p>

[Buttons](https://material.io/design/components/buttons.html) communicate actions that users can take. They are typically placed throughout your UI, in places like:
- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars

# Buttons

[Buttons](https://material.io/guidelines/components/buttons.html) communicate the action that will occur when the user touches them.

Material buttons trigger an ink reaction on press.
They may display text, imagery, or both.
Flat buttons and raised buttons are the most commonly used types.

## Text Buttons

[Text buttons](https://material.io/design/components/buttons.html#text-button)
are typically used for less-pronounced actions, including those located:

- In dialogs
- In cards

In cards, text buttons help maintain an emphasis on card content.

{{"demo": "pages/demos/buttons/TextButtons.js"}}

## Outlined Buttons

[Outlined buttons](https://material.io/design/components/buttons.html#outlined-button)
are medium-emphasis buttons. They contain actions that are important,
but aren’t the primary action in an app.

### Alternatives

Outlined buttons are also a lower emphasis alternative to contained buttons,
or a higher emphasis alternative to text buttons.

{{"demo": "pages/demos/buttons/OutlinedButtons.js"}}

## Contained Buttons

[Contained buttons](https://material.io/design/components/buttons.html#contained-button)
are high-emphasis, distinguished by their use of elevation and fill.
They contain actions that are primary to your app.

The last example of this demo show how to use an upload button.

{{"demo": "pages/demos/buttons/ContainedButtons.js"}}

## Floating Action Buttons

A [floating action button](https://material.io/design/components/buttons-floating-action-button.html)
(FAB) performs the primary, or most common, action on a screen.
It appears in front of all screen content, typically as a circular shape with an icon in its center.
FABs come in three types: regular, mini, and extended.

Only use a FAB if it is the most suitable way to present a screen’s primary action.

Only one floating action button is recommended per screen to represent the most common action.

{{"demo": "pages/demos/buttons/FloatingActionButtons.js"}}

The floating action button animates onto the screen as an expanding piece of material, by default.

A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear,
then reappear if its action changes.

The Zoom transition can be used to achieve this. Note that since both the exiting and entering
animations are triggered at the same time, we use `enterDelay` to allow the outgoing Floating Action Button's
animation to finish before the new one enters.

{{"demo": "pages/demos/buttons/FloatingActionButtonZoom.js"}}

## Sizes

Fancy larger or smaller buttons? Use the `size` or the `mini` property.

{{"demo": "pages/demos/buttons/ButtonSizes.js"}}

## Icon Buttons

Icon buttons are commonly found in app bars and toolbars.

Icons are also appropriate for toggle buttons that allow a single choice to be selected or
deselected, such as adding or removing a star to an item.

{{"demo": "pages/demos/buttons/IconButtons.js"}}

## Fish eyes Buttons

Fish eyes effect Buttons.

{{"demo": "pages/demos/buttons/FishButton.js"}}

## Status Buttons
Status buttons 是触发一个方法的button，方法执行时button的状态不同。

{{"demo": "pages/demos/buttons/StatusButtons.js"}}

## Button Group
Button Group 是一组button，可以选中某个button。

{{"demo": "pages/demos/buttons/ButtonGroup.js"}}

## Flat Buttons

Flat buttons are text-only buttons.
They may be used in dialogs, toolbars, or inline.
They do not lift, but fill with color on press.
we also add some status like warning, error, success, progress.

{{"demo": "pages/demos/buttons/FlatButtons.js"}}

## Raised Buttons

Raised buttons are rectangular-shaped buttons.
They may be used inline. They lift and display ink reactions on press.
we also add some status like warning, error, success, progress.

{{"demo": "pages/demos/buttons/RaisedButtons.js"}}

### Buttons with icons and label

Sometimes you might want to have icons for certain button to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.

{{"demo": "pages/demos/buttons/IconLabelButtons.js"}}

## Customized Buttons

If you have been reading the [overrides documentation page](/customization/overrides)
but you are not confident jumping in,
here are examples of how you can change the main color of a Button using classes,
and using a theme; and of a Bootstrap style Button.

{{"demo": "pages/demos/buttons/CustomizedButtons.js"}}

## Complex Buttons

The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the `ButtonBase`.
You can take advantage of this lower level component to build custom interactions.

{{"demo": "pages/demos/buttons/ButtonBases.js"}}

## Third-party routing library

One common use case is to use the button to trigger a navigation to a new page.
The `ButtonBase` component provides a property to handle this use case: `component`.
Given that a lot of our interactive components rely on `ButtonBase`, you should be
able to take advantage of it everywhere:

```jsx
import { Link } from 'react-router-dom'
import Button from '@6thquake/react-material/Button';

<Button component={Link} to="/open-collective">
  Link
</Button>
```

or if you want to avoid properties collisions:

```jsx
import { Link } from 'react-router-dom'
import Button from '@6thquake/react-material/Button';

const MyLink = props => <Link to="/open-collective" {...props} />

<Button component={MyLink}>
  Link
</Button>
```

*Note: Creating `MyLink` is necessary to prevent unexpected unmounting. You can read more about it [here](/guides/composition#component-property).*
