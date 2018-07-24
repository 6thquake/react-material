import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import LinearProgress from '@6thquake/react-material/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function LinearQuery(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress variant="query" />
      <br />
      <LinearProgress color="secondary" variant="query" />
    </div>
  );
}

LinearQuery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearQuery);
