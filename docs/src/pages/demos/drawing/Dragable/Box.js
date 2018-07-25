import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import PubSub from 'pubsub-js';
const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};
const style2 = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'default',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  OUserSelect: 'none',
  msUserSelect: 'none',
};

const boxSource = {
  beginDrag(props, monitor, component) {
    const { id, left, top } = props;
    return { id, left, top };
  },
  // isDragging
};

// @DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
// 	connectDragSource: connect.dragSource(),
// 	isDragging: monitor.isDragging(),
// }))
class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    hideSourceOnDrag: PropTypes.bool.isRequired,
    children: PropTypes.node,
  };
  componentDidMount() {}
  componentDidUpdate() {}
  render() {
    const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children, id } = this.props;
    //console.log('left', left)
    if (isDragging && hideSourceOnDrag) {
      return null;
    }
    let opacity = isDragging ? 1 : 1;
    if (this.props.dragDisable) {
      return (
        <div
          className={id}
          id={id}
          ref={x => {
            this.box = x;
          }}
          style={{ ...style2, left, top, opacity }}
        >
          {children}
        </div>
      );
    } else {
      return connectDragSource(
        <div
          className={id}
          id={id}
          ref={x => {
            this.box = x;
          }}
          style={{ ...style, left, top, opacity }}
        >
          {children}
        </div>,
      );
    }
  }
}

export default DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  connectDragPreview: connect.dragPreview(),
}))(Box);
