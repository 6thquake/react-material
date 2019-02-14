import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Fish from '@6thquake/react-material/Fish';
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

function Fishs(props) {
  const { classes } = props;
  return (
    <div>
      <Fish size="lg">
        <IconButton className={classes.button} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </Fish>
      <Fish size="md">
        <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
      </Fish>
      <Fish>
        <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
          <Icon>alarm</Icon>
        </IconButton>
      </Fish>
      <Fish>
        <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Fish>
      <Fish>
        <label htmlFor="icon-button-file">
          <IconButton color="primary" className={classes.button} component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </Fish>
    </div>
  );
}

Fishs.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Fishs);
