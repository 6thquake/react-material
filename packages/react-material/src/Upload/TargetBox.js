import React, { Component } from 'react';
import { DropTarget, DropTargetConnector, ConnectDropTarget, DropTargetMonitor } from 'react-dnd';

const activeStyle = {
  height: '30px',
  minWidth: '80px',
  position: 'absolute',
  top: '15px',
  left: '50%',
  transform: 'translate(-50%, 0%)',
};

const boxTarget = {
  drop(props, monitor) {
    if (props.onDrop) {
      props.onDrop(props, monitor);
    }
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

class TargetBox extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget, beforeDragMention, onDragMention } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div>
        <div style={activeStyle}> {isActive ? onDragMention : beforeDragMention} </div>
        {this.props.children}
      </div>,
    );
  }
}
export default DropTarget(props => props.accepts, boxTarget, collect)(TargetBox);
