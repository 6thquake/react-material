import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@6thquake/react-material/styles';
import Typography from '@6thquake/react-material/Typography';

const theme = createMuiTheme({
  typography: {
    // Tell React-Material what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});

function FontSizeTheme() {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography>body1</Typography>
    </MuiThemeProvider>
  );
}

export default FontSizeTheme;
