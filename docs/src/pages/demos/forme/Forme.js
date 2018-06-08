import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'react-material/styles';
import Grid from 'react-material/Grid';
import Forme from 'react-material/Forme';
import Input from 'react-material/Input';
import TextField from 'react-material/TextField';
import Select from 'react-material/Select';
import MenuItem from 'react-material/MenuItem';
import RadioGroup from 'react-material/RadioGroup';
import Radio from 'react-material/Radio';
import FormControlLabel from 'react-material/FormControlLabel';
import CheckboxGroup from 'react-material/CheckboxGroup';
import Checkbox from 'react-material/Checkbox';
import Button from 'react-material/Button';

const style = theme => ({
    form: {
      width: '100%'
    },
    btn: {
      marginLeft: '20px'
    },
    mb: {
      marginBottom: theme.spacing.unit
    }
  })
;

class FormeDemo extends Component {
  state = {
    input: '',
    textField: '',
    select: '',
    selectOptions: [{
      label: 'apple',
      value: 'apple'
    }, {
      label: 'banana',
      value: 'banana'
    }],
    radio: '',
    radioOptions: [{
      label: 'one',
      value: 'one'
    }, {
      label: 'two',
      value: 'two'
    }, {
      label: 'three',
      value: 'three'
    }],
    checkbox: '',
    checkboxOptions: [{
      label: 'basketball',
      value: '1'
    }, {
      label: 'football',
      value: '2'
    }, {
      label: 'pingpong',
      value: '3'
    }],
    textarea: '',
    canSubmit: false
  };

  onChange = key => (event, value) => {
    this.setState({
      [key]: value
    })
  };

  onSubmit(model, resetModel, updateInputsWithError) {
    console.log(model, resetModel, updateInputsWithError);
  }

  onReset() {
    console.log('reset form');
  }

  enableSubmitButton = () => {
    this.setState({
      canSubmit: true
    })
  };

  disableSubmitButton = () => {
    this.setState({
      canSubmit: false
    })
  };

  render() {
    const {classes} = this.props;
    const {canSubmit, input, textField, select, selectOptions, radio, radioOptions, checkbox, checkboxOptions, textarea} = this.state;
    return (
      <Forme
        onSubmit={this.onSubmit}
        onReset={this.onReset}
        onValid={this.enableSubmitButton}
        onInvalid={this.disableSubmitButton}
        className={classes.form}
      >
        <Grid container>
          <Grid item xs={12} className={classes.mb}>
            <Input
              name="input"
              label="input"
              value={input}
              onChange={this.onChange('input')}
              required
              validationErrors={{"isDefaultRequiredValue": "please enter"}}
            />
          </Grid>
          <Grid item xs={12} className={classes.mb}>
            <TextField
              name="textField"
              label="textField"
              value={textField}
              onChange={this.onChange('textField')}
              required
              validationErrors={{"isDefaultRequiredValue": "please enter"}}
            />
          </Grid>
          <Grid item xs={12} className={classes.mb}>
            <Select
              name="select"
              label="select"
              value={select}
              required
              validationErrors={{"isDefaultRequiredValue": "please enter"}}
              onChange={this.onChange('select')}
            >
              <MenuItem value=''>none</MenuItem>
              {selectOptions.map(d => (
                <MenuItem key={d.value} value={d.value}>{d.label}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} className={classes.mb}>
            <RadioGroup
              row
              name="radio"
              label="radio"
              value={radio}
              required
              validationErrors={{"isDefaultRequiredValue": "please choose"}}
              onChange={this.onChange('radio')}
            >
              {radioOptions.map(d => (
                <FormControlLabel key={d.value} label={d.label} value={d.value} control={<Radio color="primary"/>}/>
              ))}
            </RadioGroup>
          </Grid>
          <Grid item xs={12} className={classes.mb}>
            <Input
              name="textarea"
              label="textarea"
              value={textarea}
              onChange={this.onChange('textarea')}
              multiline
              rowsMax={4}
              required
              validationErrors={{"isDefaultRequiredValue": "please enter"}}
            />
          </Grid>
          <Grid item xs={12} className={classes.mb}>
            <CheckboxGroup
              row
              name="checkbox"
              label="checkbox"
              value={checkbox}
              required
              validationErrors={{"isDefaultRequiredValue": "please choose"}}
              onChange={this.onChange('checkbox')}
            >
              {checkboxOptions.map(d => (
                <FormControlLabel label={d.label} value={d.value} control={<Checkbox color="primary"/>}/>
              ))}
            </CheckboxGroup>
          </Grid>
          <Grid item xs={12} className={classes.mb}>
            <br/>
            <Grid container>
              <Grid item sm={3}/>
              <Grid item sm={9}>
                <Button
                  type="submit"
                  variant="raised"
                  color="primary"
                  disabled={!canSubmit}
                >
                  提交
                </Button>
                <Button
                  type="reset"
                  variant="raised"
                  className={classes.btn}
                >
                  重置
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Forme>
    )
  }
}

FormeDemo.propTypes = {
  classes: PropTypes.object.isRequired
};

FormeDemo.defaultProps = {};

export default withStyles(style)(FormeDemo);
