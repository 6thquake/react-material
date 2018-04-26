import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {Button} from 'react-material/Button';

function handle() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random() > .5 ? reject('err') : resolve('ok');
    }, 1000);
  }).then(function (r) {
    return true;
  });
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function StatusButtons(props) {
  const {classes} = props;
  return (<div>
    <Button color="primary" variant="raised" onHandler={handle} className={classes.button}>开始扩容</Button>
    <Button color="primary"  onHandler={handle} className={classes.button}>开始扩容</Button>
  </div>);
}

StatusButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StatusButtons);

