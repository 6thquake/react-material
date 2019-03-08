/**
 * @ignore - do not document.
 */

import React, { Component } from 'react';

class SourceWrapper extends Component {
  componentDidMount() {
    this.props.register(this);
  }

  beginDrag = (props, monitor, component) => {};

  endDrag = (props, monitor, component) => {};

  canDrag = (props, monitor) => {};

  isDragging = (props, monitor) => {};
}
export default SourceWrapper;
