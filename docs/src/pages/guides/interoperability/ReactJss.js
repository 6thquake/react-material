import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss/lib/injectSheet';
import Button from 'material-ui/Button';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
};

function ReactJss(props) {
  return (
    <div>
      <Button>Material-UI</Button>
      <Button className={props.classes.button}>react-jss</Button>
    </div>
  );
}

ReactJss.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(ReactJss);
