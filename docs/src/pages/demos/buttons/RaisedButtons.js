import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Button from '@6thquake/react-material/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
function onClick() {
  console.log(this, arguments);
}
function RaisedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="raised" className={classes.button} onClick={onClick}>
        Default
      </Button>
      <Button variant="raised" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="raised" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="raised" color="warning" className={classes.button}>
        Waring
      </Button>
      <Button variant="raised" color="error" className={classes.button}>
        Error
      </Button>
      <Button variant="raised" color="progress" className={classes.button}>
        Progress
      </Button>
      <Button variant="raised" color="success" className={classes.button}>
        Success
      </Button>
      <Button variant="raised" color="secondary" disabled className={classes.button}>
        Disabled
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button variant="raised" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

RaisedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RaisedButtons);
