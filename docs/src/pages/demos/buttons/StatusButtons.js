import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import { StatusButton } from 'react-material/Button';

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
function onClick() {
  console.log(this,arguments)
}
function StatusButtons(props) {
  const {classes} = props;
  return (<div>999
    {/*<StatusButton color="primary"  onClick={onClick} variant="raised" onHandler={handle} className={classes.button}>开始扩容</StatusButton>*/}
    {/*<StatusButton color="primary"  onHandler={handle} className={classes.button}>开始扩容</StatusButton>*/}
  </div>);
}

StatusButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StatusButtons);

