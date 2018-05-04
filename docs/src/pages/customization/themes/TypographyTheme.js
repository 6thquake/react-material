import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'react-material/styles';
import Typography from 'react-material/Typography';
import Button from 'react-material/Button';

const styles = {
  root: {
    display: 'flex',
  },
};

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightMedium: 500,
    body1: {
      fontWeight: 500,
    },
    subheading: {
      fontSize: 12,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

function TypographyTheme(props) {
  const { classes } = props;

  const children = (
    <div>
      <Typography>body1</Typography>
      <Typography variant="subheading">subheading</Typography>
      <Button>Button</Button>
    </div>
  );

  return (
    <div className={classes.root}>
      {children}
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </div>
  );
}

TypographyTheme.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypographyTheme);
