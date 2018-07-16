import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TableCell from '../../TableCell';
import {
  withStyles
} from 'react-material/styles';

import {
  DragSource,
  DropTarget
} from 'react-dnd';
import { debug } from 'util';
import {
  Resizable,
} from 'react-resizable';

const ItemTypes = {
  COLUMN:'column',
  CHIP: 'chip'
};
const styles = (theme) =>({

})
const columnSource = {
  beginDrag(props, monitor, component) {
    const {
      onDragStart,
      index
    } = props
    onDragStart && onDragStart(index)
    return {name: props.name};
  },
};

const sourceCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

const columnTarget = {
  drop(props, monitor, component) {
    const {
      onDragEnd,
      index
    } = props
    onDragEnd && onDragEnd(index)
  }
};

function targetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}
class Cell extends React.Component {
  render() {
    const {
      connectDropTarget, connectDragSource, connectDragPreview, children,classes, ...other
    } = this.props;
    return connectDragSource(
      connectDropTarget(
        <th className={classes.root} {...other}>{children}</th>
      )
    ) ;
  }
}
// Cell = DragSource(ItemTypes.COLUMN, columnSource, sourceCollect)(Cell)
Cell = DropTarget(ItemTypes.COLUMN, columnTarget, targetCollect)(
  DragSource(ItemTypes.COLUMN, columnSource, sourceCollect)(Cell)
);
export default withStyles(styles)(Cell)

