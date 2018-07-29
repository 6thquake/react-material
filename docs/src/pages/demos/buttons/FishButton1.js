import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import { FishButton } from '@6thquake/react-material/Button';
import Icon from '@6thquake/react-material/Icon';
import IconButton from '@6thquake/react-material/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function FishButtons(props) {
  const { classes } = props;
  return (
    <div>
      <FishButton size="lg">
        <IconButton className={classes.button} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </FishButton>
      <FishButton size="md">
        <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
      </FishButton>
      <FishButton>
        <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
          <Icon>alarm</Icon>
        </IconButton>
      </FishButton>
      <FishButton>
        <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </FishButton>
      <FishButton>
        <label htmlFor="icon-button-file">
          <IconButton color="primary" className={classes.button} component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </FishButton>
    </div>
  );
}

FishButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FishButtons);
