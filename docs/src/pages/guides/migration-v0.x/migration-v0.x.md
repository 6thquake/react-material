# Migration From v0.x

## FAQ

### Woah - the API is way different! Does that mean 1.0 is completely different, I’ll have to learn the basics all over again, and migrating will be practically impossible?

I’m glad you asked! The answer is no. The core concepts haven’t changed.
You will notice that the API provides more flexibility, but this has a cost.
We have been making lower-level components, abstracting less complexity.

### What motivated such large change?

React-Material was started at 2018.
The ecosystem has evolved a lot since then, we have also learned a lot.
[@nathanmarks](https://github.com/nathanmarks/) started an ambitious task, rebuilding React-Material from the **ground-up**
taking advantage of this knowledge to address long-standing issues. To name some of the major changes:
- New styling solution using CSS-in-JS (better [customization](/customization/overrides) power, better performance)
- New [theme handling](/customization/themes) (nesting, self-supporting, etc.)
- Blazing fast documentation thanks to [Next.js](https://github.com/zeit/next.js)
- Way better [test coverage](/guides/testing) (99%+, run on all the major browsers, [visual regression tests])
- Full [server-side rendering](/guides/server-rendering) support
- Wide range of [supported browsers](/getting-started/supported-platforms)

Curious to learn more about it? You can checkout our [Q&A on the v1 version](/discover-more/roadmap#q-amp-a-with-the-v1-version).


### Where should I start in a migration?

1. Start by installing the v1.x version of React-Material along side the v0.x version.
   [**Yarn**](https://github.com/yarnpkg/yarn) provides an alias feature to do so:

  ```sh
  yarn add react-material@latest
  yarn add @6thquake/react-material@next
  ```

  then

  ```js
  import FlatButton from 'react-material/FlatButton'; // v0.1.x
  import Button from '@6thquake/react-material/Button'; // v0.2.x
  ```

  If you can't use Yarn, we also provide a separate package for **NPM**.
  However, the package might not be always up to date.
  **It's why we encourage you to use a Yarn alias**.

  ```sh
  npm install react-material@latest
  npm install @6thquake/react-material@next
  ```

  then

  ```js
  import FlatButton from 'react-material/FlatButton'; // v0.x
  import Button from '@6thquake/react-material/Button'; // v1.x
  ```

### To be continued…

You successfully migrated your app and wish to help the community?
Please help us! We have an open issue in order to finish this migration guide. Any pull request is welcomed 😊.
