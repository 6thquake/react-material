---
components: Typography
---

# Typography

<p class="description">Use typography to present your design and content as clearly and efficiently as possible.</p>

Too many type sizes and styles at once can spoil any layout.
A [typographic scale](https://material.io/design/typography/#type-scale) has a limited set of type sizes that work well together along with the layout grid.

## General

The *Roboto* font will **not** be automatically loaded by React-Material.
The developer is responsible for loading all fonts used in their application.
Roboto Font has a few easy ways to get started.

## Roboto Font CDN

Shown below is a sample link markup used to load the Roboto font from a CDN.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
```

## Install with npm

You can [install it](https://www.npmjs.com/package/typeface-roboto) by typing the below command in your terminal:

`npm install typeface-roboto --save`

Then, you can import it in your entry-point.

```js
import 'typeface-roboto'
```
For more info check out the [typeface](https://github.com/KyleAMathews/typefaces/tree/master/packages/roboto) project.

⚠️ Be careful when using this approach.
Make sure your bundler doesn't eager load all the font variations (100/300/400/500/700/900, italic/regular, SVG/woff).
Inlining all the font files can significantly increase the size of your bundle.
React-Material default typography configuration only relies on 300, 400 and 500 font weights.

## Component

{{"demo": "pages/style/typography/Types.js"}}

## Theme

In some situations you might not be able to use the `Typography` component.
Hopefully, you might be able to take advantage of the [`typography`](/customization/default-theme?expend-path=$.typography) keys of the theme.

{{"demo": "pages/style/typography/TypographyTheme.js"}}
