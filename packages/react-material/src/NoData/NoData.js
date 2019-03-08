/**
 * @ignore - do not document.
 */

import React, { Component } from 'react';
import { withStyles } from '../styles';

const style = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
class NoData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>No Data</div>;
  }
}

export default withStyles(style)(NoData);
