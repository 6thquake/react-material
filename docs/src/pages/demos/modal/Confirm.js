import React, { Component } from 'react';
import Modal, { Modal2, ModalManager } from 'react-material/Modal';
import Button from 'react-material/Button';
import { withStyles } from 'react-material/styles';
import FormControl from 'react-material/FormControl';
import FormLabel from 'react-material/FormLabel';
import FormControlLabel from 'react-material/FormControlLabel';
import Radio from 'react-material/Radio';
import RadioGroup from 'react-material/RadioGroup';
import Grid from 'react-material/Grid';

const styles = theme => ({
  box: {
    marginBottom: theme.spacing.unit * 6,
  },
  paperWidthSm: {
    minWidth: 1000,
  },
});

const confirm = Modal2.confirm;
const info = Modal2.info;
const success = Modal2.success;
const error = Modal2.error;
const warning = Modal2.warning;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      animation: 'zoom',
    };
  }

  handleChange = (event, value) => {
    console.log(value);
    this.setState({
      animation: value,
    });
  };

  showConfirm = () => {
    confirm({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      animation: this.state.animation,
      disableEscapeKeyDown: true,
      disableBackdropClick: true,
      onOk() {
        console.log('ok');
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {
        console.log('cancel');
      },
    });
  };

  showinfo = () => {
    info({
      title: 'Do you want to delete these items?',
      content: (
        <div>
          <p>When clicked the OK button, this dialog will be closed </p>
          <p>When clicked the OK button, this dialog will be closed </p>
          <p>When clicked the OK button, this dialog will be closed </p>
          <p>When clicked the OK button, this dialog will be closed </p>
        </div>
      ),
      animation: this.state.animation,
      onOk() {
        console.log('ok');
      },
      onCancel() {
        console.log('cancel');
      },
    });
  };

  showsuccess = () => {
    success({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed ',
      animation: this.state.animation,
      onOk() {
        console.log('ok');
      },
      onCancel() {
        console.log('cancel');
      },
    });
  };

  showerror = () => {
    error({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed',
      animation: this.state.animation,
      onOk() {},
      onCancel() {
        console.log('cancel');
      },
    });
  };

  showwarning = () => {
    warning({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed ',
      animation: this.state.animation,
      onOk() {
        console.log('ok');
      },
      onCancel() {
        console.log('cancel');
      },
    });
  };

  render() {
    const { classes } = this.props;
    let { open, animation, ...other } = this.state;
    return (
      <div>
        <Button onClick={this.showConfirm}>confirm</Button>
        <Button onClick={this.showinfo}>info</Button>
        <Button onClick={this.showsuccess}>success</Button>
        <Button onClick={this.showerror}>error</Button>
        <Button onClick={this.showwarning}>warning</Button>

        <Grid container spacing={16}>
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">open animation</FormLabel>
              <RadioGroup
                row
                aria-label="anchorOriginVertical"
                name="anchorOriginVertical"
                value={this.state.animation}
                onChange={this.handleChange}
              >
                <FormControlLabel value="slide" control={<Radio />} label="slide" />
                <FormControlLabel value="collapse" control={<Radio />} label="collapse" />
                <FormControlLabel value="fade" control={<Radio />} label="fade" />
                <FormControlLabel value="grow" control={<Radio />} label="grow" />
                <FormControlLabel value="zoom" control={<Radio />} label="zoom" />
              </RadioGroup>

              <h4>your choose animation is :{this.state.animation}</h4>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(App);
