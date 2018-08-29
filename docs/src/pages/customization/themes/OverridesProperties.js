import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@6thquake/react-material/styles';
import Button from '@6thquake/react-material/Button';

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

function OverridesProperties() {
  return (
    <MuiThemeProvider theme={theme}>
      <Button>Overrides properties</Button>
    </MuiThemeProvider>
  );
}

export default OverridesProperties;
