import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Button, { StatusButton } from '@6thquake/react-material/Button';
import AddIcon from '@material-ui/icons/Add';

function handle() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      Math.random() > 0.5 ? reject('err') : resolve('ok');
    }, 1000);
  }).then(function(r) {
    return true;
  });
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});
function onClick() {
  console.log(this, arguments);
}
function StatusButtons(props) {
  const { classes } = props;
  return (
    <div>
      <StatusButton
        color="primary"
        onClick={onClick}
        variant="raised"
        onHandler={handle}
        className={classes.button}
      >
        开始扩容
      </StatusButton>
      <StatusButton color="primary" onHandler={handle} className={classes.button}>
        开始扩容
      </StatusButton>
      <Button color="primary" onClick={handle} variant="raised" className={classes.button}>
        开始扩容
      </Button>
      <Button color="primary" onClick={handle} className={classes.button}>
        开始扩容
      </Button>
      <Button color="primary" onClick={onClick} className={classes.button}>
        only Click
      </Button>
      <Button
        variant="fab"
        color="primary"
        onClick={handle}
        aria-label="add"
        className={classes.button}
      >
        <AddIcon />
      </Button>
    </div>
  );
}

StatusButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StatusButtons);
