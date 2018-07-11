import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import TextField from 'react-material/TextField';
import LocaleProvider from 'react-material/LocaleProvider';

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

function DateAndTimePickers(props) {
  const { classes } = props;

  return (
    <LocaleProvider>
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </LocaleProvider>
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);
