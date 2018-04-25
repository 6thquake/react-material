---
components: FormControl, FormGroup, FormLabel, FormControlLabel, RadioGroup, Checkbox, Radio, Switch
---

# Selection Controls

[Selection controls](https://material.io/guidelines/components/selection-controls.html) allow the user to select options.

Three types of selection controls are covered in this guidance:

- **[Checkboxes](#checkboxes)** allow the selection of multiple options from a set.
- **[Radio Buttons](#radio-buttons)** allow the selection of a single option from a set.
- **[Switches](#switches)** allow a selection to be turned on or off.

## Checkboxes

Checkboxes allow the user to select multiple options from a set.
If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches.If you have a single option, avoid using a checkbox and use an on/off switch instead.

{{"demo": "pages/demos/selection-controls/Checkboxes.js"}}

`Checkbox` can also be used with a label description thanks to the `FormControlLabel` component.

{{"demo": "pages/demos/selection-controls/CheckboxLabels.js"}}

`FormGroup` is a helpful wrapper used to group selection controls components that provides an easier API.

{{"demo": "pages/demos/selection-controls/CheckboxesGroup.js"}}

## Radio Buttons

Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side;
otherwise, consider a dropdown, which uses less space than displaying all options.

Radio buttons should have the most commonly used option selected by default.

`RadioGroup` is a helpful wrapper used to group `Radio` components that provides an easier API, and proper keyboard accessibility to the group.

{{"demo": "pages/demos/selection-controls/RadioButtonsGroup.js"}}

`Radio` can also be used standalone, without the wrapper.

{{"demo": "pages/demos/selection-controls/RadioButtons.js"}}

## Switches

On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.

{{"demo": "pages/demos/selection-controls/Switches.js"}}

`Switch` can also be used with a label description thanks to the `FormControlLabel` component.

{{"demo": "pages/demos/selection-controls/SwitchLabels.js"}}

`FormGroup` is a helpful wrapper used to group selection controls components that provides an easier API.
However, we encourage you to use a [Checkbox](#checkboxes) instead.

{{"demo": "pages/demos/selection-controls/SwitchesGroup.js"}}
