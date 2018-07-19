/**
 * @ignore - do not document.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '../../styles';
import classNames from 'classnames';
import { DragSource, DropTarget } from 'react-dnd';
import ThCell from './ThCell';

const ItemTypes = {
  COLUMN: 'column',
  CHIP: 'chip',
};
const styles = theme => ({
  root: {},
  actionTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderTop: `10px solid ${theme.palette.grey[500]}`,
    borderLeft: `10px solid transparent`,
    width: 0,
    height: 0,
  },
  actionTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTop: `10px solid ${theme.palette.grey[500]}`,
    borderRight: `10px solid transparent`,
    width: 0,
    height: 0,
  },
  active: {
    borderTop: `10px solid ${theme.palette.primary.main}`,
  },
});
const columnSource = {
  beginDrag(props, monitor, component) {
    const { onDragStart, index } = props;
    onDragStart && onDragStart(index);
    return { name: props.name };
  },
};

const sourceCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
};

const columnTarget = {
  drop(props, monitor, component) {
    const { onDragEnd, index } = props;
    onDragEnd && onDragEnd(index);
  },
};

function targetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}
class Cell extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      topRight: false,
      topLeft: false,
    };
  }
  handleDoubleClick = e => {
    this.setState({
      show: true,
    });
  };
  handleClick = (index, fixed) => {
    const { onColumnFixChange } = this.props;
    this.setState({
      show: false,
    });
    onColumnFixChange && onColumnFixChange(index, fixed);
  };
  render() {
    const {
      connectDropTarget,
      connectDragSource,
      connectDragPreview,
      children,
      classes,
      fixed,
      index,
      onColumnFixChange,
      ...other
    } = this.props;
    const { show } = this.state;

    return connectDragSource(
      connectDropTarget(
        <th onDoubleClick={this.handleDoubleClick} className={classes.root} {...other}>
          {children}
          <ThCell fixed={fixed} index={index} show={show} onColumnFixChange={this.handleClick} />
        </th>,
      ),
    );
  }
}
// Cell = DragSource(ItemTypes.COLUMN, columnSource, sourceCollect)(Cell)
Cell = DropTarget(ItemTypes.COLUMN, columnTarget, targetCollect)(
  DragSource(ItemTypes.COLUMN, columnSource, sourceCollect)(Cell),
);

export default withStyles(styles)(Cell);
