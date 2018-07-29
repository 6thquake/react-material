import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@6thquake/react-material/Switch';
import { withStyles } from '@6thquake/react-material/styles';
import NavBar from '@6thquake/react-material/NavBar';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import FormGroup from '@6thquake/react-material/FormGroup';
import data from './data';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class MenuBar extends React.Component {
  state = {
    theme: 'dark',
  };
  handleChange = (event, checked) => {
    this.setState({ theme: checked ? 'dark' : 'light' });
  };

  render() {
    const { classes } = this.props;
    const { theme } = this.state;

    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme === 'dark' ? true : false}
                onChange={this.handleChange}
                aria-label="ThemeSwitch"
              />
            }
            label={theme === 'dark' ? 'Dark' : 'Light'}
          />
        </FormGroup>
        <NavBar
          list={data}
          itemKeysMap={{
            name: 'component',
            children: 'childRoutes',
            key: 'path',
          }}
          onClick={this.onClick}
          mode="horizontal"
          selectable={false}
          theme={theme}
        />
      </div>
    );
  }
}

MenuBar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuBar);
