import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Hidden from 'material-ui/Hidden';
import withWidth from 'material-ui/utils/withWidth';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing.unit,
  },
});

function BreakpointUp(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subheading">Current width: {props.width}</Typography>
      <div className={classes.container}>
        <Hidden xsUp>
          <Paper className={classes.paper}>xsUp</Paper>
        </Hidden>
        <Hidden smUp>
          <Paper className={classes.paper}>smUp</Paper>
        </Hidden>
        <Hidden mdUp>
          <Paper className={classes.paper}>mdUp</Paper>
        </Hidden>
        <Hidden lgUp>
          <Paper className={classes.paper}>lgUp</Paper>
        </Hidden>
        <Hidden xlUp>
          <Paper className={classes.paper}>xlUp</Paper>
        </Hidden>
      </div>
    </div>
  );
}

BreakpointUp.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(BreakpointUp);
