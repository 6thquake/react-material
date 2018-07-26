/**
 * @ignore - do not document.
 */

import React, { Component } from 'react';

class TargetWrapper extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.register(this);
  }
  drop = (props, monitor, component) => {};
  hover = (props, monitor, component) => {};
  canDrop = (props, monitor) => {};
}
export default TargetWrapper;
