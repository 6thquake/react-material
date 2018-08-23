import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Popper from '@6thquake/react-material/Popper';
import Typography from '@6thquake/react-material/Typography';
import Button from '@6thquake/react-material/Button';
import Paper from '@6thquake/react-material/Paper';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class NoTransitionPopper extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: state.anchorEl ? null : currentTarget,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const id = open ? 'no-transition-popper' : null;

    return (
      <div>
        <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
          Toggle Popper
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Paper>
            <Typography className={classes.typography}>The content of the Popper.</Typography>
          </Paper>
        </Popper>
      </div>
    );
  }
}

NoTransitionPopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoTransitionPopper);
