import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Button from '@6thquake/react-material/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@6thquake/react-material/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="fish" mini color="primary" aria-label="add" className={classes.button}>
        <AddIcon />
      </Button>
      <Button variant="fish" color="secondary" aria-label="edit" className={classes.button}>
        <Icon>edit_icon</Icon>
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
