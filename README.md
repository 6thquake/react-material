<p align="center">
  <a href="/" rel="noopener" target="_blank"><img width="200" src="/static/brand.png" alt="React-Material logo"></a></p>
</p>

<h1 align="center">React-Material</h1>

<div align="center">

[React](http://facebook.github.io/react/) components that implement [Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html).

[![npm package](https://img.shields.io/npm/v/material-ui/next.svg)](http://npm.release.ctripcorp.com/package/react-material)
[![npm download](https://img.shields.io/npm/dm/material-ui.svg)](http://npm.release.ctripcorp.com/package/react-material)

![Code style](/static/images/code_style-prettier.svg)

</div>


## Installation

React-Material is available as an [npm package](http://npm.release.ctripcorp.com/package/react-material).

**[Stable channel (v0.x)](http://material-ui.com/)**
```sh
npm install react-material
```

**[Pre-release channel (v1-beta)](http://react-material.fat0.qa.nt.ctripcorp.com/)**
([Recommended](#should-i-start-with-v1-beta) for new projects.)
```sh
npm install @6thquake/react-material@next
```

**v0.x(http://react-material.fat0.qa.nt.ctripcorp.com/)**
```sh
// with npm
npm install react-material

// with yarn
yarn add react-material
```

Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.

## Supporting React-Material

React-Material is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to the support of these awesome [backers](/BACKERS.md).

Your contributions, donations, and sponsorship allow us to build a sustainable organization. They directly support office hours, continued enhancements, great documentation and learning materials!


## Usage (v1-beta)

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import { render } from 'react-dom';
import Button from 'react-material/Button';

function App() {
  return (
    <Button variant="raised" color="primary">
      Hello World
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
```

## Should I start with v1-beta?
We often get this question:

> Should I start with v1-beta? Beta is beta, so it's not a final product and I'm not guaranteed anything.

**Yes, you should.**

Some users are starting projects with v0.x which given the quality and stability of v1 they shouldn't be. They are just creating extra work for themselves as they will have to transition at some point.

The v1-beta effort started in May 2016, and it resolves many of the issues with v0. Many of us are already using v1-beta in production with no problems, and resolving the occasional breaking change is less hassle than upgrading from v0.x to v1 would be.

React-Material will never be a final product, you will never be guaranteed anything whether with v0.x, v1, or any future release.
We are keeping v1 in beta so we can release breaking changes without having them slow us down.

[The release notes](https://github.com/6thquake/react-material/tags) always describe the breaking changes introduced with each release.

**Bite the bullet and go for v1-beta.**

## Questions

For *how-to* questions and other non-issues,
please use [StackOverflow](http://stackoverflow.com/questions/tagged/material-ui) instead of Github issues.
There is a StackOverflow tag called "material-ui" that you can use to tag your questions.

## Examples

Are you looking for an example project to get started?
[We host some](/getting-started/example-projects/).

## Documentation

Check out our [documentation website](/).

## Contributing

We'd greatly appreciate any [contribution](/CONTRIBUTING.md) you make. :)

## Changelog

Recently Updated?
Please read the [changelog](https://github.com/6thquake/react-material/tags).

## Roadmap

The future plans and high priority features and enhancements can be found in the [ROADMAP.md](/discover-more/roadmap/) file.

## Thanks

[<img src="https://material-ui.com/static/images/material-ui-logo.svg" width="120">](https://material-ui.com/)

Thank you to [Material-UI](https://material-ui.com/) for providing the infrastructure that allows us to 
expand based on it, with standard specifications, and clear path.

[<img src="https://www.browserstack.com/images/mail/browserstack-logo-footer.png" width="120">](https://www.browserstack.com/)

Thank you to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
