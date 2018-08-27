import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import NoSsr from '@6thquake/react-material/NoSsr';
import Button from '@6thquake/react-material/Button';

const styles = theme => ({
  button: {
    display: 'block',
    margin: theme.spacing.unit * 2,
  },
});

function SimpleNoSsr(props) {
  const { classes } = props;

  return (
    <div>
      <Button className={classes.button} variant="contained" color="primary">
        Server & Client
      </Button>
      <NoSsr>
        <Button className={classes.button} variant="contained" color="secondary">
          Client only
        </Button>
      </NoSsr>
    </div>
  );
}

SimpleNoSsr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleNoSsr);
