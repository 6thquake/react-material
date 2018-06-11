---
components: TextField
---

# Date & time picker

This component is not from material design guidelines.

Its a combination of date & time picker and allows that uses the modal to select both date and time with one control.

## Basic usage

{{"demo": "pages/demos/pickers/BasicDatePicker.js"}}
{{"demo": "pages/demos/pickers/TimePickerBasic.js"}}
{{"demo": "pages/demos/pickers/BasicDateTimePicker.js"}}

## Customization

Applied mostly all customization, that available for date & time pickers

{{"demo": "pages/demos/pickers/CustomDateTimePicker.js"}}
{{"demo": "pages/demos/pickers/CustomElementsDatePicker.js"}}
{{"demo": "pages/demos/pickers/KeyboardDatePicker.js"}}
{{"demo": "pages/demos/pickers/KeyboardTimePicker.js"}}


[Pickers](https://material.io/guidelines/components/pickers.html) provide a simple way to select a single value from a pre-determined set.

- On mobile, pickers are best suited for display in confirmation dialog.
- For inline display, such as on a form, consider using compact controls such as segmented dropdown buttons.

#### Notice

We are currently falling back to **native input controls**.
If you are interested in implementing or have implemented a rich Material Design Picker with an awesome UX, please, let us know on [#4787](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/issues/4787) and [#4796](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/issues/4796)! We could add a link to or a demo of your project in the documentation.
Here are some components that are **promising**:
- [react-material/Picker](https://github.com/dmtrKovalenko/react-material/Picker)
- [material-ui-time-picker](https://github.com/TeamWertarbyte/material-ui-time-picker)

## Date pickers

{{"demo": "pages/demos/pickers/DatePickers.js"}}

## Time pickers

{{"demo": "pages/demos/pickers/TimePickers.js"}}

## Date & Time pickers

{{"demo": "pages/demos/pickers/DateAndTimePickers.js"}}

## Localization 

{{"demo": "pages/demos/pickers/Localization.js"}}