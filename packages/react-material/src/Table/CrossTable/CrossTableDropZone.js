import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { DropTarget } from 'react-dnd';

import CrossTableColumn from './CrossTableColumn';
import { getSort } from './CrossTableUtilities';

const ItemTypes = {
  FILTER: 'filterBox',
  COLUMN: 'column',
  CHIP: 'chip',
};

const columnTarget = {
  drop(props, monitor, component) {
    // 获取正在拖放的数据
    const item = monitor.getItem();
    // 更新组件状态

    let items = component.state.items;
    items.push(item.name);
    component.setState({
      items: items,
    });

    component.props.onDrop(items);
  },
};

function chipDropcollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

/**
 * @ignore - internal component.
 */

class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: props.items };
  }

  dragOut = val => {
    return () => {
      let items = this.state.items;
      let index = items.indexOf(val);

      if (index > -1) {
        items.splice(index, 1);
        this.setState({
          items: items,
        });
      }
    };
  };

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div style={{ display: 'inline-block', width: '100%', height: '100%' }}>
        {this.state.items.map((value, index) => (
          <CrossTableColumn
            name={value}
            key={value}
            attrValues={this.props.attrValuess[value]}
            valueFilter={this.props.valueFilters[value] || {}}
            zIndex={this.props.zIndices[value] || this.props.maxZIndex}
            sorter={getSort(this.props.sorters, value)}
            dragOut={this.dragOut(value).bind(this)}
            {...this.props}
          />
        ))}
      </div>,
    );
  }
}

export default DropTarget(ItemTypes.CHIP, columnTarget, chipDropcollect)(DropZone);
