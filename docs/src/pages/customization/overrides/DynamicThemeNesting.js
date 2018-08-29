import React from 'react';
import Button from '@6thquake/react-material/Button';
import { createMuiTheme, MuiThemeProvider } from '@6thquake/react-material/styles';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import blue from '@6thquake/react-material/colors/blue';
import Switch from '@6thquake/react-material/Switch';

const defaultTheme = createMuiTheme();

class DynamicThemeNesting extends React.Component {
  state = {
    color: 'default',
  };

  handleChange = event => {
    this.setState({ color: event.target.checked ? 'blue' : 'default' });
  };

  render() {
    return (
      <React.Fragment>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.color === 'blue'}
              onChange={this.handleChange}
              color="primary"
              value="dynamic-class-name"
            />
          }
          label="Blue"
        />
        <MuiThemeProvider
          theme={
            this.state.color === 'blue'
              ? {
                  ...defaultTheme,
                  palette: {
                    ...defaultTheme.palette,
                    secondary: {
                      main: blue[500],
                      contrastText: '#fff',
                    },
                  },
                }
              : defaultTheme
          }
        >
          <Button variant="raised" color="secondary">
            {'Theme nesting'}
          </Button>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default DynamicThemeNesting;
