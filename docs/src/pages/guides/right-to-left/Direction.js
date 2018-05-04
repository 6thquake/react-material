import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'react-material/styles';
import TextField from 'react-material/TextField';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

function Direction() {
  return (
    <MuiThemeProvider theme={theme}>
      <div dir="rtl">
        <TextField label="Name" />
        <input type="text" placeholder="Name" />
      </div>
    </MuiThemeProvider>
  );
}

export default Direction;
