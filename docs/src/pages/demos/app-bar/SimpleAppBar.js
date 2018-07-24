import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import AppBar from '@6thquake/react-material/AppBar';
import Toolbar from '@6thquake/react-material/Toolbar';
import Typography from '@6thquake/react-material/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
