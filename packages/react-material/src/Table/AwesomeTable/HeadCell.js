import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '../../styles';
import classNames from 'classnames';

import ThCell from './ThCell';

const styles = theme => ({
  root: {},
});

/**
 * @ignore - internal component.
 */

class Cell extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      topRight: false,
      topLeft: false,
    };
  }
  handleDoubleClick = e => {
    const {
      disableClickToFixColumn
    } = this.props
    if (disableClickToFixColumn){
      return
    }
    this.setState({
      show: true,
    });
  };

  handleClick = (index, fixed) => {
    const { onColumnFixChange } = this.props;
    this.setState({
      show: false,
    });
    onColumnFixChange && onColumnFixChange(index, fixed);
  };

  render() {
    const { children, classes, fixed, index, ...other } = this.props;
    const { show } = this.state;

    return (
      <th onDoubleClick={this.handleDoubleClick} className={classes.root} {...other}>
        {children}
        <ThCell fixed={fixed} index={index} show={show} onColumnFixChange={this.handleClick} />
      </th>
    );
  }
}

export default withStyles(styles)(Cell);
