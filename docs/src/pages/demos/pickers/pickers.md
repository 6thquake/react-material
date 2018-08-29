---
title: Date Picker, Time Picker React component
components: DatePicker, TimePicker, DateTimePicker, LocaleProvider, TextField
---
# Pickers

<p class="description">Pickers provide a simple way to select a single value from a pre-determined set.</p>

- On mobile, pickers are best suited for display in confirmation dialog.
- For inline display, such as on a form, consider using compact controls such as segmented dropdown buttons.

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

#### Notice

We are currently falling back to **native input controls**.

## Date pickers

If you are interested in implementing or have implemented a rich Material Design Picker with an awesome UX, please, let us know on [#4787](https://github.com/6thquake/react-material/issues/4787) and [#4796](https://github.com/6thquake/react-material/issues/4796)! We could add a link to or a demo of your project in the documentation.
Here are some components that are **promising**:
- [react-material/Picker](https://github.com/dmtrKovalenko/react-material/Picker)
- [material-ui-pickers](https://github.com/dmtrKovalenko/material-ui-pickers): date pickers and time pickers.
- [material-ui-time-picker](https://github.com/TeamWertarbyte/material-ui-time-picker): time pickers.
- [material-ui-next-pickers](https://github.com/chingyawhao/material-ui-next-pickers): date pickers and time pickers.

⚠️ Native input controls support by browsers [isn't perfect](https://caniuse.com/#feat=input-datetime).

## Date pickers

A native date picker example with `type="date"`, it can be used as a calendar too:

{{"demo": "pages/demos/pickers/DatePickers.js"}}

## Time pickers

A native time picker example with `type="time"`:

{{"demo": "pages/demos/pickers/TimePickers.js"}}

## Date & Time pickers

A native date & time picker example with `type="datetime-local"`:

{{"demo": "pages/demos/pickers/DateAndTimePickers.js"}}

## Localization 

{{"demo": "pages/demos/pickers/Localization.js"}}
