/**
 * @ignore - do not document.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const ItemTypes = {
  COLUMN: 'column',
  CHIP: 'chip',
};

const columnSource = {
  beginDrag(props, monitor, component) {
    return { name: props.name };
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    component.props.dragOut();
  },
};

function chipDragcollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

/**
 * @ignore - internal component.
 */

class CrossTabulationDragSource extends React.Component {
  render() {
    const { connectDragSource, connectDragPreview, children } = this.props;

    return connectDragSource(<div style={{ display: 'inline-block' }}>{children}</div>);
  }
}

export default DragSource(ItemTypes.CHIP, columnSource, chipDragcollect)(CrossTabulationDragSource);
