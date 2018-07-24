# Installation

React-Material is available as an [npm package](http://npm.release.ctripcorp.com/package/react-material).

## npm

To install and save in your `package.json` dependencies, run:

```sh
npm install @6thquake/react-material@next
```

## Roboto Font

React-Material was designed with the [Roboto](http://www.google.com/fonts/specimen/Roboto)
font in mind. So be sure to follow [these instructions](/style/typography#general).
For instance, via Google Web Fonts:
```html
<link rel="stylesheet" href="/static/fonts/Roboto/css.css">
```

## Font Icons

In order to use the font `Icon` component, or to use icon names (ligatures) directly in components
that support them, you must first add the [Material icons](https://material.io/icons/) font.
Here are [some instructions](/style/icons#font-icons)
on how to do so.
For instance, via Google Web Fonts:
```html
<link rel="stylesheet" href="/static/fonts/Material+Icons/icon.css">
```

## SVG Icons

In order to use prebuilt SVG Material icons, such as those found in the [component demos](/demos/app-bar/)
you must first install the [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) package:

```sh
npm install @material-ui/icons
```
