import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import shouldPureComponentUpdate from './shouldPureComponentUpdate';
import ItemTypes from './ItemTypes';
import Box from './Box';

const boxSource = {
  beginDrag(props) {
    const { id, title, left, top } = props;
    return { id, title, left, top };
  },
};

function getStyles(props) {
  const { left, top, isDragging } = props;
  const transform = `translate3d(${left}px, ${top}px, 0)`;

  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  };
}

const db = class DraggableBox extends Component {
  static propTypes = {
    connectDragPreview: PropTypes.func.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    id: PropTypes.any.isRequired,
    isDragging: PropTypes.bool.isRequired,
    left: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  componentDidMount() {
    // Use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true,
    });
  }

  render() {
    const { title, connectDragSource } = this.props;

    return connectDragSource(
      <div style={getStyles(this.props)}>
        <Box title={title} />
      </div>,
    );
  }
};
export default DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))(db);
