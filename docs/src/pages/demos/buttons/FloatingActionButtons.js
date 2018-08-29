import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Button from '@6thquake/react-material/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@6thquake/react-material/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
      <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
        <Icon>edit_icon</Icon>
      </Button>
      <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Button>
      <Button variant="fab" disabled aria-label="Delete" className={classes.button}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
