import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Panel from 'react-material/Panel';
import { DragSource, DropTarget } from 'react-dnd';
import { StatusButton } from 'react-material/Button';

/*type:
position 对于panel中已存在的source 拖拽时会重新定位它的位置 当拖出panel以外时会删除
dragin 从panel外部拖入，源source不变，复制一份
style
*/

const styles = {
  position: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    border: '1px solid rgba(0,0,0,0.1)',
  },
  dragin: {},
};
const _source = {
  beginDrag(props, monitor, component) {
    // Return the data describing the dragged item
    /*
	开始drag时，
	如果type==dragin 就会生成新的position source传给dropTarget
	如果type == position 就需要传回当前xy定位；
    */
    const item = {};
    if (props.type == 'POSITION') {
      //拿到当前node的index
      const _from = component.decoratedComponentInstance.refs.mytttest.offsetParent.parentNode.getAttribute(
        'datakey',
      );
      item.sortFrom = _from;
    } else if (props.type == 'DRAGIN') {
      item.component = <div>{component.props.children}</div>;
    }

    return item;
  },
  endDrag(props, monitor, component) {},
};
const _target = {
  drop(props, monitor, component) {
    //console.log('droooooop')
  },
  hover(props, monitor, component) {
    //当hover的时候改变原数组的排列顺序
    const to = component.refs.mytttest.offsetParent.parentNode.getAttribute('datakey');

    //console.log('!!!!!!!!!!')
  },
};
function _dragCollect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging(),
  };
}
function _dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true }),
    //isOverCurrent: monitor.isOver({ shallow: false }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
  };
}

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      connectDragSource,
      connectDropTarget,
      children,
      isDragging,
      type,
      classes,
      rows,
      cols,
    } = this.props;
    let _style = {};
    if (type == 'POSITION') {
      const _coordinate = this.props.coordinate;
      _style = {
        background: 'rgba(0,0,0,0.1)',
      };
    }

    if (type == 'POSITION' && !!isDragging) {
      return null;
    }
    return connectDropTarget(
      connectDragSource(
        <div className={type == 'POSITION' ? classes.position : classes.dragin}>
          <div>
            <div ref={'mytttest'}>{children}</div>
          </div>
        </div>,
      ),
    );
  }
}

const _mc = DropTarget('test', _target, _dropCollect)(MyComponent);
const _mcm = DragSource('test', _source, _dragCollect)(_mc);
export default withStyles(styles)(_mcm);
