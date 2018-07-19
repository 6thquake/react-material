import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '../../styles';

const styles = theme => ({
  root: {},
  actionTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderTop: `10px solid ${theme.palette.grey[500]}`,
    borderLeft: `10px solid transparent`,
    width: 0,
    height: 0,
    cursor: 'pointer',
  },
  actionTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTop: `10px solid ${theme.palette.grey[500]}`,
    borderRight: `10px solid transparent`,
    width: 0,
    height: 0,
    cursor: 'pointer',
  },
  active: {
    borderTop: `10px solid ${theme.palette.primary.main}`,
  },
});

class ThCell extends React.Component {
  state = {};
  handleClick = value => e => {
    e.stopPropagation();
    let { fixed } = this.props;
    const maps = {
      topLeft: 'left',
      topRight: 'right',
    };
    const { index, onColumnFixChange } = this.props;
    fixed = fixed ? undefined : maps[value];
    this.setState(
      {
        [value]: !this.state[value],
        // show: false
      },
      () => {
        onColumnFixChange && onColumnFixChange(index, fixed);
      },
    );
  };
  render() {
    const { show, children, classes, ...other } = this.props;
    const { topRight, topLeft } = this.state;
    const leftClassName = classNames(classes.actionTopLeft, { [classes.active]: true });
    const rightClassName = classNames(classes.actionTopRight, { [classes.active]: true });
    return show ? (
      <React.Fragment>
        <div onClick={this.handleClick('topLeft')} className={leftClassName} />
        <div onClick={this.handleClick('topRight')} className={rightClassName} />
      </React.Fragment>
    ) : null;
  }
}

export default withStyles(styles)(ThCell);
