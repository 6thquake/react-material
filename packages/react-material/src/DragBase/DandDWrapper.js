import React, { Component } from 'react';

class DandDWrapper extends Component {
  constructor(props) {
    super(props);
  }
  beginDrag = (props, monitor, component) => {};
  endDrag = (props, monitor, component) => {};
  canDrag = (props, monitor) => {};
  isDragging = (props, monitor) => {};
  drop = (props, monitor, component) => {};
  hover = (props, monitor, component) => {};
  canDrop = (props, monitor) => {};
}
export default DandDWrapper;
