import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import Button from '@6thquake/react-material/Button';
import ClickAwayListener from '@6thquake/react-material/ClickAwayListener';
import Collapse from '@6thquake/react-material/Collapse';
import Grow from '@6thquake/react-material/Grow';
import Paper from '@6thquake/react-material/Paper';
import Portal from '@6thquake/react-material/Portal';
import MenuList from '@6thquake/react-material/MenuList';
import MenuItem from '@6thquake/react-material/MenuItem';
import { withStyles } from '@6thquake/react-material/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  popperClose: {
    pointerEvents: 'none',
  },
});

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = event => {
    if (this.target1.contains(event.target) || this.target2.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
        <Manager>
          <Target>
            <div
              ref={node => {
                this.target1 = node;
              }}
            >
              <Button
                aria-owns={open ? 'menu-list-grow' : null}
                aria-haspopup="true"
                onClick={this.handleToggle}
              >
                Toggle Menu Grow
              </Button>
            </div>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
        <Manager>
          <Target>
            <div
              ref={node => {
                this.target2 = node;
              }}
            >
              <Button
                aria-owns={open ? 'menu-list-collapse' : null}
                aria-haspopup="true"
                onClick={this.handleToggle}
              >
                Toggle Menu Collapse
              </Button>
            </div>
          </Target>
          <Portal>
            <Popper
              placement="bottom"
              eventsEnabled={open}
              className={classNames({ [classes.popperClose]: !open })}
            >
              <ClickAwayListener onClickAway={this.handleClose}>
                <Collapse in={open} id="menu-list-collapse" style={{ transformOrigin: '0 0 0' }}>
                  <Paper style={{ margin: 3 }}>
                    <MenuList role="menu">
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </MenuList>
                  </Paper>
                </Collapse>
              </ClickAwayListener>
            </Popper>
          </Portal>
        </Manager>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);
