/**
 * @ignore - do not document.
 */

import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import {
  DragSource,
  DropTarget,
  ConnectDropTarget,
  ConnectDragSource,
  DropTargetMonitor,
  DropTargetConnector,
  DragSourceConnector,
  DragSourceMonitor,
} from 'react-dnd';
import flow from 'lodash/flow';

const style = {
  cursor: 'move',
};

const listSource = {
  beginDrag(props, monitor, component) {
    // 拖拽开始把水波层置为不显示
    // console.log(component.refs["listItemDrag"].childNodes[0].childNodes[1].className)
    if (
      component.refs.listItemDrag.childNodes[0].childNodes[2] &&
      component.refs.listItemDrag.childNodes[0].childNodes[2].className === 'MuiTouchRipple-root-61'
    ) {
      component.refs.listItemDrag.childNodes[0].childNodes[2].style.display = 'none';
    } else if (
      component.refs.listItemDrag.childNodes[0].firstChild.childNodes[2] &&
      component.refs.listItemDrag.childNodes[0].firstChild.childNodes[2].className ===
        'MuiTouchRipple-root-61'
    ) {
      component.refs.listItemDrag.childNodes[0].firstChild.childNodes[2].style.display = 'none';
    } else if (
      component.refs.listItemDrag.childNodes[0].childNodes[1] &&
      component.refs.listItemDrag.childNodes[0].childNodes[1].className === 'MuiTouchRipple-root-61'
    ) {
      component.refs.listItemDrag.childNodes[0].childNodes[1].style.display = 'none';
    } else {
      null;
    }
    // component.refs["listItemDrag"].childNodes[0].childNodes[2].style.display='none';
    // component.refs["listItemDrag"].childNodes[0].firstChild.childNodes[2].style.display='none';
    return {
      id: props.key,
      index: props.index,
    };
  },
};

const listTarget = {
  hover(props, monitor, component) {
    if (!component) {
      return null;
    }
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveList(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

class ListItemDrag extends Component {
  render() {
    const { key, index, moveList, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      connectDropTarget(
        <div>
          <div index={index} moveList={moveList} style={{ ...style, opacity }} ref="listItemDrag">
            {this.props.children}
          </div>
        </div>,
      ),
    );
  }
}

export default flow(
  DragSource('ListItemDrag', listSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })),
  DropTarget('ListItemDrag', listTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  })),
)(ListItemDrag);
