# Minimizing Bundle Size

<p class="description">Learn more about the tools you can leverage to reduce the bundle size.</p>

## Bundle size matters

The bundle size of React-Material is taken very seriously, so
[size-limit](https://github.com/ai/size-limit) is used to prevent introducing any size regression.
The size of the bundle is checked at each commit:
- When importing **all the components**. This lets us spot any [unwanted bundle size increase](https://github.com/6thquake/react-material/blob/master/.size-limit.js#L30).
- When importing **a single component**. This lets us estimate [the overhead of our core dependencies](https://github.com/6thquake/react-material/blob/master/.size-limit.js#L24). (styling, theming, etc.: ~18 kB gzipped)

## How to reduce the bundle size?

For convenience, React-Material exposes its full API on the top-level `material-ui` import.
Using this is fine if you have tree shaking working,
however, in the case where tree shaking is not supported or configured in your build chain, **this causes the entire library and its dependencies to be included** in your client bundle.

You have couple of options to overcome this situation:

### Option 1

You can import directly from `material-ui/` to avoid pulling in unused modules. For instance, instead of:

```js
import { Button, TextField } from '@6thquake/react-material';
```

use:

```js
import Button from '@6thquake/react-material/Button';
import TextField from '@6thquake/react-material/TextField';
```

While importing directly in this manner doesn't use the exports in [`material-ui/index.js`](https://github.com/6thquake/react-material/blob/master/packages/material-ui/src/index.js), this file can serve as a handy reference as to which modules are public.
Anything not listed there should be considered **private**, and subject to change without notice.
For example, the `Tabs` component is a public module while `TabIndicator` is private.

### Option 2

Another option is to keep using the shortened import like the following, but still have the size of the bundle optimized thanks to a **Babel plugin**:

```js
import { Button, TextField } from '@6thquake/react-material';
```

Pick one of the following plugins:

- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) is quite customizable and with enough tweaks works with React-Material.
- [babel-transform-imports](https://bitbucket.org/amctheatres/babel-transform-imports) has a different api than a `babel-plugin-import` but does same thing.
- [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash) aims to work out of the box with all the `package.json`.

**Important note**: Both of these options *should be temporary* until you add tree shaking capabilities to your project.

## ECMAScript

The package published on npm is **transpiled**, with [Babel](https://github.com/babel/babel), to take into account the [supported platforms](/getting-started/supported-platforms).

We also publish a second version of the components to target **evergreen browsers**.
You can find this version under the [`/es` folder](https://unpkg.com/@6thquake/react-material/es/).
All the non-official syntax is transpiled to the [ECMA-262 standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm), nothing more.
This can be used to make separate bundles targeting different browsers.
Older browsers will require more JavaScript features to be transpiled,
which increases the size of the bundle.
No polyfills are included for ES2015 runtime features. IE11+ and evergreen browsers support all the
necessary features. If you need support for other browsers, consider using
[`@babel/polyfill`](https://npmjs.com/package/@babel/polyfill).

⚠️ In order to minimize duplication of code in users' bundles, we **strongly discourage** library authors from using the `/es` folder.
