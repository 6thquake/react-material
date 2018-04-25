import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function doSomething(event) {
  // eslint-disable-next-line no-console
  console.log(event.currentTarget.getAttribute('data-something'));
}

function FlatButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>Default</Button>
      <Button color="primary" className={classes.button}>
        Primary
      </Button>
      <Button color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button disabled className={classes.button}>
        Disabled
      </Button>
      <Button href="#flat-buttons" className={classes.button}>
        Link
      </Button>
      <Button disabled href="/" className={classes.button}>
        Link disabled
      </Button>
      <Button className={classes.button} onClick={doSomething} data-something="here I am">
        Does something
      </Button>
    </div>
  );
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlatButtons);
