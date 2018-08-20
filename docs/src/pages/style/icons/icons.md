---
components: Icon, SvgIcon
---

# Icons

<p class="description">Guidance and suggestions for using icons with Material-UI.</p>

A [system icon](https://material.io/design/iconography/system-icons.html) or UI icon,
symbolizes a command, file, device, or directory.
System icons are also used to represent common actions like trash, print, and save,
and are commonly found in app bars, toolbars, buttons, and lists.
Google has provided a set of [Material icons](https://material.io/tools/icons/?style=baseline) that follow these guidelines.

Material-UI provides two components to render system icons: `SvgIcon` for rendering SVG paths, and `Icon` for rendering font icons.

## SVG Icons

The `SvgIcon` component takes an SVG `path` element as its child and converts it to a React component that displays the path,
and allows the icon to be styled and respond to mouse events. SVG elements should be scaled for a 24x24px viewport.

The resulting icon can be used as is,
or included as a child for other Material-UI components that use icons.
By default, an Icon will inherit the current text color.
Optionally, you can set the icon color using one of the theme color properties: `primary`, `secondary`, `action`, `error` & `disabled`.

{{"demo": "pages/style/icons/SvgIcons.js"}}

### SVG Material icons

It's interesting to have the building blocks needed to implement custom icons, but what about presets?
We provide a separate NPM package,
[@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons),
that includes the 1,000+ official [Material icons](https://material.io/tools/icons/?style=baseline) converted to `SvgIcon` components.

<a href="https://material.io/tools/icons/?icon=3d_rotation&style=baseline">
  <img src="/static/images/icons/icons.png" style="width: 566px" />
</a>

#### Usage

You can use [material.io/tools/icons](https://material.io/tools/icons/?style=baseline) to find a specific icon.
When importing an icon, keep in mind that the names of the icons are `PascalCase`, for instance:
- [`delete`](https://material.io/tools/icons/?icon=delete&style=baseline) is exposed as `@material-ui/icons/Delete`
- [`delete forever`](https://material.io/tools/icons/?icon=delete_forever&style=baseline) is exposed as `@material-ui/icons/DeleteForever`

For *"themed"* icons, append the theme name to the icon name. For instance with the
- The Outlined [`delete`](https://material.io/tools/icons/?icon=delete&style=outline) icon is exposed as `@material-ui/icons/DeleteOutlined`
- The Rounded [`delete`](https://material.io/tools/icons/?icon=delete&style=rounded) icon is exposed as `@material-ui/icons/DeleteRounded`
- The Two Tone [`delete`](https://material.io/tools/icons/?icon=delete&style=twotone) icon is exposed as `@material-ui/icons/DeleteTwoTone`
- The Sharp [`delete`](https://material.io/tools/icons/?icon=delete&style=sharp) icon is exposed as `@material-ui/icons/DeleteSharp`

There are three exceptions to this rule:
- [`3d_rotation`](https://material.io/tools/icons/?icon=3d_rotation&style=baseline) is exposed as `@material-ui/icons/ThreeDRotation`
- [`4k`](https://material.io/tools/icons/?icon=4k&style=baseline) is exposed as `@material-ui/icons/FourK`
- [`360`](https://material.io/tools/icons/?icon=360&style=baseline) is exposed as `@material-ui/icons/ThreeSixty`

{{"demo": "pages/style/icons/SvgMaterialIcons.js"}}

#### Imports

- If your environment doesn't support tree-shaking, the **recommended** way to import the icons is the following:
```jsx
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
```

- If your environment support tree-shaking you can also import the icons this way:
```jsx
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
```

Note: Importing named exports in this way will result in the code for *every icon* being included in your project, so is not recommended unless you configure [tree-shaking](https://webpack.js.org/guides/tree-shaking/). It may also impact Hot Module Reload performance.


### More SVG icons

Looking for even more SVG icons? There are a lot of projects out there,
but [https://materialdesignicons.com](https://materialdesignicons.com/) provides over 2,000 official and community provided icons.
[mdi-material-ui](https://github.com/TeamWertarbyte/mdi-material-ui) packages these icons as Material-UI SvgIcons in much the same way as [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) does for the official icons.

## Font Icons

The `Icon` component will display an icon from any icon font that supports ligatures.
As a prerequisite, you must include one, such as the
[Material icon font](http://google.github.io/material-design-icons/#icon-font-for-the-web) in your project, for instance, via Google Web Fonts:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

`Icon` will set the correct class name for the Material icon font. For other fonts, you must supply the
class name using the Icon component's `className` property.

To use an icon simply wrap the icon name (font ligature) with the `Icon` component,
for example:
```jsx
<Icon>star</Icon>
```

By default, an Icon will inherit the current text color.
Optionally, you can set the icon color using one of the theme color properties: `primary`, `secondary`, `action`, `error` & `disabled`.

### Font Material icons

{{"demo": "pages/style/icons/Icons.js"}}

### Font Awesome

[Font Awesome](https://fontawesome.com/icons) can be used with the `Icon` component as follow:

{{"demo": "pages/style/icons/FontAwesome.js", "hideEditButton": true}}

## Font vs SVG. Which approach to use?

Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality.
Whenever possible SVG is preferred as it allows code splitting, supports more icons, renders faster and better.

For more details, you can check out [why GitHub migrated](https://blog.github.com/2016-02-22-delivering-octicons-with-svg/) from font icons to SVG icons.
