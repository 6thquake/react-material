import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Radio from 'react-material/Radio';
import RadioGroup from 'react-material/RadioGroup';
import Button from 'react-material/Button';
import FormLabel from 'react-material/FormLabel';
import FormControl from 'react-material/FormControl';
import FormControlLabel from 'react-material/FormControlLabel';
import FormHelperText from 'react-material/FormHelperText';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

let radio = true;

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'female',
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

        <FormControl component="fieldset" required error className={classes.formControl}>
          <RadioGroup className={classes.button}>
            <Button variant="raised" color="primary" radio={radio}>左</Button>
            <Button variant="raised" color="primary">中</Button>
            <Button variant="raised" color="primary">右</Button>
          </RadioGroup>
          <RadioGroup position="vertical" className={classes.button}>
            <Button variant="raised" className="test">上</Button>
            <Button variant="raised" >中</Button>
            <Button variant="raised" >下</Button>
          </RadioGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>

      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
