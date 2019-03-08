import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { withStyles } from '../../styles';

const styles = theme => ({
  // root: {},
  root: {
    border: `1px solid ${theme.palette.divider}`,
    width: 13,
    height: 13,
    display: 'flex',
    // marginLeft: theme.spacing.unit ,
    marginRight: theme.spacing.unit,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '0.8125rem',
  },
  exIcon: {
    // margin: 5,
    fontSize: '0.8125rem',
  },
});

/**
 * @ignore - internal component.
 */

class ExSwitch extends React.Component {
  state = {
    close: true,
  };

  handleClick = e => {
    const { onChange, data } = this.props;
    // const { close }
    e.stopPropagation();
    this.setState(
      {
        close: !this.state.close,
      },
      () => {
        onChange && onChange({ close: this.state.close, data });
      },
    );
  };

  render() {
    const { classes } = this.props;
    const { close } = this.state;
    return (
      <span className={classes.root} onClick={this.handleClick}>
        {close ? <AddIcon className={classes.exIcon} /> : <RemoveIcon className={classes.exIcon} />}
      </span>
    );
  }
}

export default withStyles(styles)(ExSwitch);
