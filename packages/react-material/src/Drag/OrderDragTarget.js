/**
 * @ignore - do not document.
 */

import React from 'react';
import { withStyles } from '../styles';
import { DropTarget } from 'react-dnd';
import GridList from '../GridList';
import GridListTile from '../GridListTile';
import DragSource from './DragSource';
import PropTypes from 'prop-types';
// import withDragAndDrop from '../DragAndDrop/withDragAndDrop'
const styles = {
  root: {},
};
const boxTarget = {
  drop(props, monitor, component) {
    console.log('drop...');
    const item = monitor.getItem();
    if (!item.component) {
      //内部元素被拖动
      component.hasDroped = true;
      return;
    }
    if (item.component) {
      const componentWidth = item.width;
      const componentHeight = item.height;
      component.state.childComponents.push({
        component: item.component,
        size: [
          Math.ceil(componentWidth / props.cellSize),
          Math.ceil(componentWidth / props.cellSize),
        ],
      });
      component.setState({ childComponent: component.state.childComponents });
      if (props.add && item.value) {
        props.add(item.value);
      }
    }
  },
};
class _OrderDragTarget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childComponents: props.defaultComponents.map((v, i) => {
        return { component: v, size: [v.props.cols, v.props.rows] };
      }),
    };
  }
  sequenceComponent = (from, to, callback) => {
    //from 是指原数组的第from个位置 to 是指原数组的第to个位置
    let _cc = this.state.childComponents;
    if (!_cc) {
      return;
    }
    let mycom = _cc.splice(from, 1);
    _cc.splice(to, 0, mycom[0]);
    //this.state();
    this.setState({ childComponents: _cc });
    if (!!callback && typeof callback === 'function') {
      callback();
    }
    if (this.props.sequence) {
      this.props.sequence(from, to);
    }
  };
  removeComponent = index => {
    if (!index && index != 0) {
      return;
    }
    if (this.hasDroped) {
      //说明drop在了panel内部 不作处理
    } else {
      //说明drop在了panle外部 需要删除指定index
      console.log('remove' + index);
      let _cc = this.state.childComponents;
      if (!_cc) {
        return;
      }
      _cc.splice(index, 1);
      this.setState({ childComponents: _cc });
    }
    this.hasDroped = false;
    if (this.props.remove) {
      this.props.remove(index);
    }
  };

  render() {
    const { childComponents } = this.state;
    const { cellSize, colsCount, connectDropTarget, classes } = this.props;
    const _childComponents = (childComponents || []).map((value, index) => {
      if (value && value.size instanceof Array && value.size.length == 2) {
        return (
          <GridListTile key={index} cols={value.size[0]} rows={value.size[1]}>
            <DragSource
              type="INNERITEM"
              sequence={this.sequenceComponent}
              remove={this.removeComponent}
              index={index}
            >
              {value.component}
            </DragSource>
          </GridListTile>
        );
      } else {
        return null;
      }
    });
    return connectDropTarget(
      <div className={classes.root}>
        <GridList spacing={0} cellHeight={cellSize} cols={colsCount}>
          {_childComponents}
        </GridList>
      </div>,
    );
  }
}
_OrderDragTarget.defaultProps = {
  cellSize: 30,
  colsCount: 6,
  defaultComponents: [],
};
_OrderDragTarget.propTypes = {
  value: PropTypes.array,
  sequence: PropTypes.func,
  remove: PropTypes.func,
  add: PropTypes.func,
  defaultComponents: PropTypes.array,
};
let OrderDragTarget = DropTarget(
  ['ICON', 'BUTTON', 'PAPER', 'LISTITEM'],
  boxTarget,
  (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      itemType: monitor.getItemType(),
    };
  },
)(_OrderDragTarget);
OrderDragTarget.propTypes = {};
export default withStyles(styles)(OrderDragTarget);
