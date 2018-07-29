import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import NavBar from '@6thquake/react-material/NavBar';
import data from './data';

const styles = theme => ({
  root: {
    width: 400,
    background: '#fff',
  },
});

class LightNavBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavBar
          list={data}
          itemKeysMap={{
            name: 'component',
            children: 'childRoutes',
            key: 'path',
          }}
          onClick={this.onClick}
          mode="horizontal"
        />
      </div>
    );
  }
}

LightNavBar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LightNavBar);
