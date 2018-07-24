import React from 'react';
import PropTypes from 'prop-types';
import Button from '@6thquake/react-material/Button';
import Dialog from '@6thquake/react-material/Dialog';
import DialogActions from '@6thquake/react-material/DialogActions';
import DialogContent from '@6thquake/react-material/DialogContent';
import DialogContentText from '@6thquake/react-material/DialogContentText';
import DialogTitle from '@6thquake/react-material/DialogTitle';
import withMobileDialog from '@6thquake/react-material/withMobileDialog';

class ResponsiveDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open responsive dialog</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);
