import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import update from 'immutability-helper'
import update from 'react-addons-update';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from './ItemTypes';
import Box from './Box';

const styles = {
  width: 300,
  height: 300,
  border: '1px solid black',
  position: 'relative',
};

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveBox(item.id, left, top);
  },
};

// @DropTarget(ItemTypes.BOX, boxTarget, connect => {
// 	console.log(connect)
// 	return {
// 	connectDropTarget: connect.dropTarget(),
// }})
// @DragDropContext(HTML5Backend)
class Container extends Component {
  static propTypes = {
    hideSourceOnDrag: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      boxes: {
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
      },
    };
  }

  moveBox(id, left, top) {
    this.setState(
      update(this.state, {
        boxes: {
          [id]: {
            $merge: { left, top },
          },
        },
      }),
    );
  }

  render() {
    const { hideSourceOnDrag, connectDropTarget } = this.props;
    const { boxes } = this.state;

    return connectDropTarget(
      <div style={styles}>
        {Object.keys(boxes).map(key => {
          const { left, top, title } = boxes[key];
          return (
            <Box key={key} id={key} left={left} top={top} hideSourceOnDrag={hideSourceOnDrag}>
              {title}
            </Box>
          );
        })}
      </div>,
    );
  }
}
let C = DropTarget(ItemTypes.BOX, boxTarget, connect => {
  console.log(connect);
  return {
    connectDropTarget: connect.dropTarget(),
  };
})(Container);
export default DragDropContext(HTML5Backend)(C);
