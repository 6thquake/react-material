import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@6thquake/react-material/styles';
import purple from '@6thquake/react-material/colors/purple';
import green from '@6thquake/react-material/colors/green';
import CssBaseline from '@6thquake/react-material/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
