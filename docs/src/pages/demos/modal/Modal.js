import React, { Component } from 'react';
import Modal, { Modal2, ModalManager } from '@6thquake/react-material/Modal';
import Button from '@6thquake/react-material/Button';
import { withStyles } from '@6thquake/react-material/styles';

import DialogContentText from '@6thquake/react-material/DialogContentText';
import FormControl from '@6thquake/react-material/FormControl';
import FormLabel from '@6thquake/react-material/FormLabel';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import Radio from '@6thquake/react-material/Radio';
import RadioGroup from '@6thquake/react-material/RadioGroup';
import Grid from '@6thquake/react-material/Grid';

const styles = theme => ({
  box: {
    marginBottom: theme.spacing.unit * 6,
  },
  paperWidthSm: {
    minWidth: 1000,
  },
  actionRootBtn: {
    margin: `0 0 0 ${theme.spacing.unit}px`,
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
    this.setState({
      animation: value,
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = key => {
    this.setState({ open: false });
  };

  handleCancel() {
    this.setState({ open: false });
  }

  handleOK() {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    let { open, animation, ...other } = this.state;

    let actions = [
      <Button
        onClick={this.handleCancel.bind(this)}
        color="primary"
        classes={{ root: classes.actionRootBtn }}
      >
        Disagree
      </Button>,
      <Button
        onClick={this.handleOK.bind(this)}
        variant="raised"
        color="primary"
        autoFocus
        classes={{ root: classes.actionRootBtn }}
      >
        Agree
      </Button>,
    ];

    return (
      <div>
        <Button onClick={this.handleOpen} variant="raised" color="primary">
          Open Modal
        </Button>

        <Modal2
          classes={{
            paperWidthSm: classes.paperWidthSm,
          }}
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          label={'this is a modal test'}
          animation={this.state.animation}
          actions={actions}
        >
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running. Let Google help apps determine location. This
            means sending anonymous location data to Google, even when no apps are running. Let
            Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running. Let Google help apps determine location. This
            means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </Modal2>

        <Grid container spacing={16}>
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset">
              {/* <FormLabel component="legend">open animation</FormLabel> */}
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
