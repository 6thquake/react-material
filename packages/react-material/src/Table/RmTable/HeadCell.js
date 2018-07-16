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


const ItemTypes = {
  COLUMN:'column',
  CHIP: 'chip'
};
const styles = (theme) =>({
  // root: {
  //   position: 'relative',
  //   '@global span': {
  //     'position': 'absolute',
  //     'width': 20,
  //     'height': 20,
  //     'bottom': 0,
  //     'right': 0,
  //     'background': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+')",
  //     'background-position': 'bottom right',
  //     'padding': '0 3px 3px 0',
  //     'background-repeat': 'no-repeat',
  //     'background-origin': 'content-box',
  //     'box-sizing': 'border-box',
  //     'cursor': 'se-resize',
  //   }
  // }
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

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    // component.props.dragOut();
  }
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
    // 获取正在拖放的数据
    // const item = monitor.getItem();
    // // 更新组件状态

    // let items = component.state.items;
    // items.push(item.name);
    // component.setState({
    //   items: items
    // });

    // component.props.onDrop(items);
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
      connectDropTarget, connectDragSource, connectDragPreview, children,classes
    } = this.props;
    return connectDragSource(
      connectDropTarget(
        <div className={classes.root}>{children}</div>
      )
    ) ;
  }
}
// Cell = DragSource(ItemTypes.COLUMN, columnSource, sourceCollect)(Cell)
Cell = DropTarget(ItemTypes.COLUMN, columnTarget, targetCollect)(
  DragSource(ItemTypes.COLUMN, columnSource, sourceCollect)(Cell)
);
export default withStyles(styles)(Cell)
