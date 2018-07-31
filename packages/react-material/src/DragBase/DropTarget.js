/**
 * @ignore - do not document.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '../styles';
import { DropTarget as DropTargetBase } from 'react-dnd';
import DragSource2 from './DragSource2';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
const styles = {};
const boxTarget = {
  drop(props, monitor, component) {
    if (component.state.acceptSource.indexOf(monitor.getItem().sourceType) === -1) {
      return;
    }
    component.state.comp.drop(props, monitor, component);
  },
  // hover(props, monitor,component){
  //有component，但是我们没用到这个方法
  //component.state.comp.hover(props,monitor,component)
  // },
  // canDrop(props, monitor){

  // }
};

class _DropTarget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acceptSource: '',
    };
  }

  accept = items => {
    this.setState(preState => ({
      acceptSource: [...items],
    }));
  }; //为了拿到子组件的设置的item值

  register = comp => {
    this.state.comp = comp;
  };

  render() {
    //console.log(this.state.acceptSource)
    const { connect, monitor, classes, children } = this.props;
    return connect.dropTarget()(
      <div>
        {React.cloneElement(children, {
          accept: this.accept,
          register: this.register.bind(this),
          connect: connect,
          monitor: monitor,
        })}
      </div>,
    );
  }
}

function collect(connect, monitor) {
  return {
    connect: connect,
    monitor: monitor,
    itemType: monitor.getItemType(),
  };
}

let DropTarget = DropTargetBase('*', boxTarget, collect)(_DropTarget);
export default withStyles(styles)(DropTarget);
