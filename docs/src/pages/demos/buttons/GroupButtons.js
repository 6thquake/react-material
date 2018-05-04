import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Button from 'react-material/Button';

let radio = true;
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

function GroupButtons(props) {
  const {classes} = props;
  return (
    <div>
      <Button.Group className={classes.button}>
        <Button variant="raised" color="primary" radio={radio}>左</Button>
        <Button variant="raised" color="primary">中</Button>
        <Button variant="raised" color="primary">右</Button>
      </Button.Group>
      <Button.Group position="vertical"  className={classes.button}>
        <Button variant="raised" className="test">上</Button>
        <Button variant="raised" >中</Button>
        <Button variant="raised" >下</Button>
      </Button.Group>
    </div>
  );
}

GroupButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(GroupButtons);
