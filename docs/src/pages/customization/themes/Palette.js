import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'react-material/styles';
import purple from 'react-material/colors/purple';
import Button from 'react-material/Button';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

function Palette() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
    </MuiThemeProvider>
  );
}

export default Palette;
