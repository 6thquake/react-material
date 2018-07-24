import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import TextField from '@6thquake/react-material/TextField';
import LocaleProvider from '@6thquake/react-material/LocaleProvider';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function TimePickers(props) {
  const { classes } = props;

  return (
    <LocaleProvider>
      <form className={classes.container} noValidate>
        <TextField
          id="time"
          label="Alarm clock"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </form>
    </LocaleProvider>
  );
}

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimePickers);
