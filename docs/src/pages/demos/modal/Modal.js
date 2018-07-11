import React, { Component } from 'react';
import Modal, { Modal2, ModalManager } from 'react-material/Modal';
import Button from 'react-material/Button';
import { withStyles } from 'react-material/styles';
import DialogActions from 'react-material/DialogActions';
import DialogContent from 'react-material/DialogContent';
import DialogContentText from 'react-material/DialogContentText';
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

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    let { open, animation, ...other } = this.state;
    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal2
          classes={{
            paperWidthSm: classes.paperWidthSm,
          }}
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          label={'this is a modal test'}
          animation={this.state.animation}
        >
          <div>
            <DialogContent>
              <DialogContentText>
                Let Google help apps determine location. This means sending anonymous location data
                to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose.bind(this)} color="primary">
                Disagree
              </Button>
              <Button onClick={this.handleClose.bind(this)} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </div>
        </Modal2>
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
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(App);
