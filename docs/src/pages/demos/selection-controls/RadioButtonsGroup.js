import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Radio,{RadioButton} from 'react-material/Radio';
import RadioGroup from 'react-material/RadioGroup';
import FormLabel from 'react-material/FormLabel';
import FormControl from 'react-material/FormControl';
import FormControlLabel from 'react-material/FormControlLabel';
import FormHelperText from 'react-material/FormHelperText';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap:'wrap'
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  button:{
    margin: theme.spacing.unit
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  checked:{
    //todo remove span important
    '&+span': {
      color: 'red !important',
      background: 'green !important',
      border:`1px solid black !important`
    }
  }
});


class RadioButtonsGroup extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" required error className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>

        <RadioGroup circular size='large' onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>
        <RadioGroup size='large' onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>
        <RadioGroup circular onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>
        <RadioGroup  onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>
        <RadioGroup circular size='small' onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>
        <RadioGroup size='small' onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>

        <RadioGroup row size='large' onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>

        <RadioGroup row onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>

        <RadioGroup row size='small'onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>

        <RadioGroup row circular size='large' onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>

        <RadioGroup row circular onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>

        <RadioGroup
          classes={{
            checked:classes.checked
          }}
          row circular size='small' onChange={this.handleChange} value={this.state.value} name="gender1">
          <RadioButton value="female">female</RadioButton>
          <RadioButton value="male">male</RadioButton>
          <RadioButton value="other" disabled>other</RadioButton>
        </RadioGroup>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
