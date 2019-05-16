import React, { PureComponent } from 'react';
import withStyles from '../styles/withStyles';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { DragSource as DragSourceBase, DropTarget as DropTargetBase } from 'react-dnd';

const styles = {
  root: {
    display: 'inline-block',
    position: 'static',
  },
};
const _source = {
  beginDrag(props, monitor, component) {
    console.log('111', component);

    const item = component.decoratedComponentInstance.state.comp.beginDrag(
      props,
      monitor,
      component,
    );
    // item.sourceType=_DnadD._sourceType;
    return item;
  },
  endDrag(props, monitor, component) {
    component.decoratedComponentInstance.state.comp.endDrag(props, monitor, component);
  },
  //   canDrag=(props, monitor)=>{
  //     component.state.comp.canDrag(props,monitor,component)
  //  },
  //   isDragging=(props, monitor)=>{
  //     component.state.comp.isDragging(props,monitor,component)
  //  }
};
const _target = {
  drop(props, monitor, component) {
    console.log('end drag');
    if (component.state.acceptSource.indexOf(monitor.getItem().sourceType) === -1) {
      return;
    }
    component.state.comp.drop(props, monitor, component);
  },
  hover(props, monitor, component) {
    // console.log("hover")
    // console.log(component);
    if (component.state.acceptSource.indexOf(monitor.getItem().sourceType) === -1) {
      return;
    }
    component.state.comp.hover(props, monitor, component);
  },
  // canDrop=(props, monitor)=>{
  //     if(component.state.acceptSource.indexOf(monitor.getItem().sourceType)===-1){
  //         return;
  //     }
  //     component.state.comp.canDrop(props,monitor,component)
  // }
};

function drag_collect(connect, monitor) {
  return {
    connect,
    monitor,
    connectDragSource: connect.dragSource(),
  };
}
function drop_collect(connect, monitor) {
  return {
    connect,
    monitor,
    itemType: monitor.getItemType(),
    connectDropTarget: connect.dropTarget(),
  };
}
class _DandD extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      getSource: '',
      comp: null,
      acceptSource: [],
    };
  }

  // static _sourceType='';
  // static _component=null;
  register = c => {
    // console.log("register",c);
    this.setState({
      comp: c,
    });
    // console.log(c);
    // _DandD._component=comp;
  };

  accept = items => {
    this.setState(preState => ({
      acceptSource: [...preState.acceptSource, ...items],
    }));
  };

  // 为了拿到子组件的设置的item值
  render() {
    const {
      connectDragSource,
      monitor,
      children,
      classes,
      connectDropTarget,
      connect,
    } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        register: this.register.bind(this),
        accept: this.accept,
        connect,
        monitor,
      }),
    );
    return connectDropTarget(
      connectDragSource(<div className={classes.root}>{childrenWithProps}</div>),
    );
  }
}

const _dt = DropTargetBase('*', _target, drop_collect)(_DandD);
const DandD = DragSourceBase('*', _source, drag_collect)(_dt);
export default withStyles(styles)(DandD);
