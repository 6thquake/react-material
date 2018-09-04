import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Grid from '@6thquake/react-material/Grid';
import Form from '@6thquake/react-material/Form';
import { addValidationRule } from '@6thquake/react-material/Form';
import Input from '@6thquake/react-material/Input';
import TextField from '@6thquake/react-material/TextField';
import Select from '@6thquake/react-material/Select';
import MenuItem from '@6thquake/react-material/MenuItem';
import RadioGroup from '@6thquake/react-material/RadioGroup';
import Radio from '@6thquake/react-material/Radio';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import CheckboxGroup from '@6thquake/react-material/CheckboxGroup';
import Checkbox from '@6thquake/react-material/Checkbox';
import Button from '@6thquake/react-material/Button';

const style = theme => ({
  form: {
    width: '100%',
  },
  btn: {
    marginLeft: '20px',
  },
  mb: {
    marginBottom: theme.spacing.unit,
  },
});

class FormDemo extends Component {
  state = {
    input: '',
    textField: '',
    select: '',
    selectOptions: [
      {
        label: 'apple',
        value: 'apple',
      },
      {
        label: 'banana',
        value: 'banana',
      },
    ],
    radio: '',
    radioOptions: [
      {
        label: 'one',
        value: 'one',
      },
      {
        label: 'two',
        value: 'two',
      },
      {
        label: 'three',
        value: 'three',
      },
    ],
    checkbox: '',
    checkboxOptions: [
      {
        label: 'basketball',
        value: '1',
      },
      {
        label: 'football',
        value: '2',
      },
      {
        label: 'pingpong',
        value: '3',
      },
    ],
    textarea: '',
    canSubmit: false,
    formRef: React.createRef(),
    minAndMax: '',
  };

  onChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  onSubmit(model, resetModel, updateInputsWithError) {
    console.log(model, resetModel, updateInputsWithError);
  }

  onReset() {
    console.log('reset form');
  }

  enableSubmitButton = () => {
    this.setState({
      canSubmit: true,
    });
  };

  disableSubmitButton = () => {
    this.setState({
      canSubmit: false,
    });
  };

  otherReset = () => {
    const { formRef } = this.state;
    formRef.current.reset();
  };

  otherSubmit = () => {
    const { formRef } = this.state;
    formRef.current.submit();
  };

  render() {
    const { classes } = this.props;
    const {
      canSubmit,
      input,
      textField,
      minAndMax,
      min,
      select,
      selectOptions,
      radio,
      radioOptions,
      checkbox,
      checkboxOptions,
      textarea,
      formRef,
    } = this.state;
    return (
      <Form
        onSubmit={this.onSubmit}
        onReset={this.onReset}
        onValid={this.enableSubmitButton}
        onInvalid={this.disableSubmitButton}
        className={classes.form}
        ref={formRef}
      >
        <Grid container>
          <Grid item xs={12}>
            <Input
              name="input"
              label="input"
              value={input}
              onChange={this.onChange('input')}
              validations={{ isRequired: true }}
              validationErrors={{ isRequired: 'please enter' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              name="textField"
              label="textField"
              value={textField}
              onChange={this.onChange('textField')}
              validations={{ isRequired: true }}
              validationErrors={{ isRequired: 'please enter' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              name="select"
              label="select"
              value={select}
              validations={{ isRequired: true }}
              validationErrors={{ isRequired: 'please select' }}
              onChange={this.onChange('select')}
            >
              <MenuItem value="">none</MenuItem>
              {selectOptions.map(d => (
                <MenuItem key={d.value} value={d.value}>
                  {d.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              row
              name="radio"
              label="radio"
              value={radio}
              validations={{ isRequired: true }}
              validationErrors={{ isRequired: 'please choose' }}
              onChange={this.onChange('radio')}
            >
              {radioOptions.map(d => (
                <FormControlLabel
                  key={d.value}
                  label={d.label}
                  value={d.value}
                  control={<Radio color="primary" />}
                />
              ))}
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <CheckboxGroup
              row
              name="checkbox"
              label="checkbox"
              value={checkbox}
              validations={{ isRequired: true }}
              validationErrors={{ isRequired: 'please choose' }}
              onChange={this.onChange('checkbox')}
            >
              {checkboxOptions.map(d => (
                <FormControlLabel
                  key={d.value}
                  label={d.label}
                  value={d.value}
                  control={<Checkbox color="primary" />}
                />
              ))}
            </CheckboxGroup>
          </Grid>
          <Grid item xs={12}>
            <Input
              name="textarea"
              label=" "
              colon={false}
              value={textarea}
              onChange={this.onChange('textarea')}
              multiline
              placeholder="请输入"
              rowsMax={4}
              validations={{ isRequired: true }}
              validationErrors={{ isRequired: 'please enter' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              name="minAndMax"
              label="min max"
              value={minAndMax}
              onChange={this.onChange('minAndMax')}
              validations={{
                isRequired: true,
                min: 1,
                max: 10,
              }}
              validationErrors={{
                isRequired: 'please enter',
                min: '值不能小于1',
                max: '值不能大于10',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              name="min"
              label="min"
              value={min}
              onChange={this.onChange('min')}
              validations={{
                // isRequired: true,
                min: 1
              }}
              validationErrors={{
                // isRequired: 'please enter',
                min: '值不能小于1',
                // max: '值不能大于10',
              }}
            />
          </Grid>
          <Grid item xs={12} className={classes.mb}>
            <br />
            <Grid container>
              <Grid item sm={3} />
              <Grid item sm={9}>
                <Grid container spacing={16}>
                  <Grid item>
                    <Button type="submit" variant="raised" color="primary" disabled={!canSubmit}>
                      提交
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button type="reset" variant="raised">
                      重置
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="raised" color="primary" onClick={this.otherSubmit}>
                      另一种提交方式
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="raised" onClick={this.otherReset}>
                      另一种重置方式
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    );
  }
}

FormDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

FormDemo.defaultProps = {};

export default withStyles(style)(FormDemo);
