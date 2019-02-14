import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Button from '@6thquake/react-material/Button';
import AddIcon from '@material-ui/icons/Add';

function handle(e) {
  console.log(e);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? reject('err') : resolve('ok');
    }, 1000);
  }).then(r => {
    return true;
  });
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});
function onClick(e) {
  console.log(this, e);
}
function StatusButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="raised" color="primary" onClick={handle} className={classes.button}>
        开始扩容
      </Button>
      <Button variant="raised" color="secondary" onClick={handle} className={classes.button}>
        开始扩容
      </Button>
      <Button variant="text" color="primary" onClick={handle} className={classes.button}>
        开始扩容
      </Button>
      <Button variant="flat" color="primary" onClick={handle} className={classes.button}>
        开始扩容
      </Button>
      <Button variant="outlined" color="primary" onClick={handle} className={classes.button}>
        开始扩容
      </Button>
      <Button variant="raised" color="primary" onClick={onClick} className={classes.button}>
        only Click
      </Button>
      <Button variant="fish" color="primary" onHandler={handle} className={classes.button}>
        开始扩容
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
      <Button variant="extendedFab" color="primary" onClick={handle} className={classes.button}>
        <AddIcon />
        开始扩容
      </Button>
    </div>
  );
}

StatusButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StatusButtons);
