// @flow

import React from 'react';
import Button from '@6thquake/react-material/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@6thquake/react-material/Dialog';
import Typography from '@6thquake/react-material/Typography';
import { withStyles } from '@6thquake/react-material/styles';
import withRoot from '../withRoot';

const styles = (theme: Object) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

type ProvidedProps = {
  classes: Object,
};

type Props = {
  classes: Object,
};

type State = {
  open: boolean,
};

class Index extends React.Component<ProvidedProps & Props, State> {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
          React-Material
        </Typography>
        <Typography variant="subheading" gutterBottom>
          example project
        </Typography>
        <Button variant="raised" color="secondary" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
