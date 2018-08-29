# Installation

<p class="description">Install React-Material, the world's most popular React UI framework.</p>

React-Material is available as an [npm package](https://www.npmjs.com/package/@6thquake/react-material).

## npm

To install and save in your `package.json` dependencies, run:

```sh
npm install @6thquake/react-material
```

Please note that [react](https://www.npmjs.com/package/react) >= 16.3.0 and [react-dom](https://www.npmjs.com/package/react-dom) >= 16.3.0 are peer dependencies.

## Roboto Font

React-Material was designed with the [Roboto](https://fonts.google.com/specimen/Roboto)
font in mind. So be sure to follow [these instructions](/style/typography#general).
For instance, via Google Web Fonts:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
```

## Font Icons

In order to use the font `Icon` component you must first add the [Material icons](https://material.io/tools/icons/) font.
Here are [some instructions](/style/icons#font-icons)
on how to do so.
For instance, via Google Web Fonts:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## SVG Icons

In order to use prebuilt SVG Material icons, such as those found in the [component demos](/demos/app-bar/)
you must first install the [@material-ui/icons](https://www.npmjs.com/package@material-ui/icons) package:

```sh
npm install @material-ui/icons
```

## CDN

You can start using React-Material with minimal Front-end infrastructure,
which is great for prototyping. We discourage using this approach in production though -
the client has to download the entire library, regardless of which components are actually used,
affecting performance and bandwidth utilisation.

#### UMD releases

We are providing two Universal Module Definition (UMD) files:
- one for development: https://unpkg.com/@6thquake/react-material/umd/react-material.development.js
- one for production: https://unpkg.com/@6thquake/react-material/umd/react-material.production.min.js

You can follow [this CDN example](https://github.com/6thquake/react-material/tree/master/examples/cdn) to quickly get started.
