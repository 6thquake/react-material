import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Input from '@6thquake/react-material/Input';
import InputLabel from '@6thquake/react-material/InputLabel';
import InputAdornment from '@6thquake/react-material/InputAdornment';
import FormControl from '@6thquake/react-material/FormControl';
import TextField from '@6thquake/react-material/TextField';
import Grid from '@6thquake/react-material/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

function InputWithIcon(props) {
  const { classes } = props;

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <div className={classes.margin}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);
