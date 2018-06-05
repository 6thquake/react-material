import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import CircularProgress from 'react-material/CircularProgress';
import purple from 'react-material/colors/purple';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} />
      <CircularProgress className={classes.progress} size={50} />
      <CircularProgress className={classes.progress} color="secondary" />
      <CircularProgress className={classes.progress} style={{ color: purple[500] }} thickness={7} />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
