# Migration From v0.x

<p class="description">Yeah, v1 has been released! Take advantage of 2 years worth of effort.</p>

## FAQ

### Woah - the API is way different! Does that mean 1.0 is completely different, I’ll have to learn the basics all over again, and migrating will be practically impossible?

I’m glad you asked! The answer is no. The core concepts haven’t changed.
You will notice that the API provides more flexibility, but this has a cost.
We have been making lower-level components, abstracting less complexity.

### What motivated such a large change?

React-Material was started [4 years ago](https://github.com/6thquake/react-material/commit/28b768913b75752ecf9b6bb32766e27c241dbc46).
The ecosystem has evolved a lot since then, we have also learned a lot.
[@nathanmarks](https://github.com/nathanmarks/) started an ambitious task, rebuilding React-Material from the **ground-up**
taking advantage of this knowledge to address long-standing issues. To name some of the major changes:
- New styling solution using CSS-in-JS (better [customization](/customization/overrides) power, better performance)
- New [theme handling](/customization/themes) (nesting, self-supporting, etc.)
- Blazing fast documentation thanks to [Next.js](https://github.com/zeit/next.js)
- Way better [test coverage](/guides/testing) (99%+, run on all the major browsers, [visual regression tests](https://www.argos-ci.com/mui-org/material-ui))
- Full [server-side rendering](/guides/server-rendering) support
- Wide range of [supported browsers](/getting-started/supported-platforms)

### Where should I start in a migration?

1. Start by installing the v1.x version of React-Material along side the v0.x version.

  With yarn:
  ```sh
  yarn add material-ui
  yarn add @6thquake/react-material
  ```

  Or with npm:
  ```sh
  npm install material-ui
  npm install @6thquake/react-material
  ```

  then

  ```js
  import FlatButton from 'material-ui/FlatButton'; // v0.x
  import Button from '@6thquake/react-material/Button'; // v1.x
  ```

2. Run [the migration helper](https://github.com/6thquake/react-material/tree/master/packages/material-ui-codemod) on your project.
3. `MuiThemeProvider` is optional for v1.x., but if you have a custom theme, you are free to use v0.x and v1.x versions of the component at the same time, like this:

  ```jsx
  import React from 'react';
  import { MuiThemeProvider, createMuiTheme } from '@6thquake/react-material/styles'; // v1.x
  import { MuiThemeProvider as V0MuiThemeProvider} from 'material-ui';
  import getMuiTheme from 'material-ui/styles/getMuiTheme';

  const theme = createMuiTheme({
    /* theme for v1.x */
  });
  const themeV0 = getMuiTheme({
    /* theme for v0.x */
  });

  function App() {
    return (
      <MuiThemeProvider theme={theme}>
        <V0MuiThemeProvider muiTheme={themeV0}>
          {/*Components*/}
        </V0MuiThemeProvider>
      </MuiThemeProvider>
    );
  }

  export default App;
  ```

4. After that, you are free to migrate one component instance at the time.

## Components

### Autocomplete

React-Material doesn't provide a high-level API for solving this problem.
You're encouraged you to explore [the solutions the React community has built](/demos/autocomplete/).

In the future, we will look into providing a simple component to solve the simple use cases: [#9997](https://github.com/6thquake/react-material/issues/9997).

### Svg Icon

Run [the migration helper](https://github.com/6thquake/react-material/tree/master/packages/material-ui-codemod) on your project.

This will apply a change such as the following:

```diff
-import AddIcon from 'material-ui/svg-icons/Add';
+import AddIcon from '@material-ui/icons/Add';

<AddIcon />
```

### Flat Button

```diff
-import FlatButton from 'material-ui/FlatButton';
+import Button from '@6thquake/react-material/Button';

-<FlatButton />
+<Button />
```

### Raised Button

```diff
-import RaisedButton from 'material-ui/RaisedButton';
+import Button from '@6thquake/react-material/Button';

-<RaisedButton />
+<Button variant="contained" />
```

### Subheader

```diff
-import Subheader from 'material-ui/Subheader';
+import ListSubheader from '@6thquake/react-material/ListSubheader';

-<Subheader>Sub Heading</Subheader>
+<ListSubheader>Sub Heading</ListSubheader>
```

### Toggle

```diff
-import Toggle from 'material-ui/Toggle';
+import Switch from '@6thquake/react-material/Switch';

-<Toggle
-  toggled={this.state.checkedA}
-  onToggle={this.handleToggle}
-/>
+<Switch
+  checked={this.state.checkedA}
+  onChange={this.handleSwitch()}
+/>
```

### Menu Item

```diff
-import MenuItem from 'material-ui/MenuItem';
+import MenuItem from '@6thquake/react-material/MenuItem';

-<MenuItem primaryText="Profile" />
+<MenuItem>Profile</MenuItem>
```

### Font Icon

```diff
-import FontIcon from 'material-ui/FontIcon';
+import Icon from '@6thquake/react-material/Icon';

-<FontIcon>home</FontIcon>
+<Icon>home</Icon>
```

### To be continued…

Have you successfully migrated your app, and wish to help the community?
Please help us! We have an open issue in order to finish this migration guide [#7195](https://github.com/6thquake/react-material/issues/7195). Any pull request is welcomed 😊.
