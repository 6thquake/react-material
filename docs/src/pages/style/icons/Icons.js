import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: green[200],
    },
  },
});

function Icons(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Icon className={classes.icon}>add_circle</Icon>
      <Icon className={classes.icon} color="secondary">
        add_circle
      </Icon>
      <Icon className={classes.icon} color="action">
        add_circle
      </Icon>
      <Icon className={classes.icon} color="disabled">
        add_circle
      </Icon>
      <Icon className={classes.icon} color="primary" style={{ fontSize: 30 }}>
        add_circle
      </Icon>
      <Icon className={classes.iconHover} color="error" style={{ fontSize: 36 }}>
        add_circle
      </Icon>
    </div>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Icons);
