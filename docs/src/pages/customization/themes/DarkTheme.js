import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@6thquake/react-material/styles';
import WithTheme from './WithTheme';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

function DarkTheme() {
  return (
    <MuiThemeProvider theme={theme}>
      <WithTheme />
    </MuiThemeProvider>
  );
}

export default DarkTheme;
