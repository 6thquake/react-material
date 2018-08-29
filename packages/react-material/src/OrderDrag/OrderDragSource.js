/**
* @ignore - do not document.
*/

import React, { Component } from 'react';
import { DandDWrapper } from '../DragBase';
import { withStyles } from '../styles';
const styles = {
  inner: {
    display: 'inline-block',
    padding: '6px',
  },
};
class OrderDragSource extends DandDWrapper {
  constructor(props) {
    super(props);
    this.state = {
      accept: ['DragIcon'],
    };
  }
  componentDidMount() {
    this.props.register(this);
    if (this.props.acceptItem) {
      this.props.accept([...this.props.acceptItem, ...this.state.accept]); //传入可接受的拖动元素
    } else {
      this.props.accept([...this.state.accept]);
    }
  }
  beginDrag = (props, monitor, component) => {
    console.log('start drag......', this);
    const item = {};
    //外部item，没有Index,拖入时把DragSource里面的东西拖入
    // console.log(component.decoratedComponentInstance.refs["text"]);
    // let _ripple = component.decoratedComponentInstance.refs.text.querySelectorAll('span[class^="MuiTouchRipple"]');
    // if(_ripple.length>0){
    //     _ripple.forEach((element, index, array)=>{
    // 	    element.style.display = 'none'
    //     })
    // }
    item.height = this.refs['text'].childNodes[0].offsetHeight;
    item.width = this.refs['text'].childNodes[0].offsetWidth;
    item.value = this.props.value;
    console.log(this.props.type);
    if (this.props.type == 'OUTITEM') {
      item.component = this.props.children;
    } else if (this.props.type == 'INNERITEM') {
      item.sortFrom = this.props.index || 0;
    }
    item.sourceType = 'DragIcon';
    return item;
  };

  endDrag = (props, monitor, component) => {
    const item = monitor.getItem();
    //内部元素拖到外面，target要减掉一个元素
    console.log('delete it ', item);
    // console.log(item.sortFrom);
    // console.log(component.props.remove);
    if ((!!item.sortFrom || item.sortFrom == 0) && typeof this.props.remove == 'function') {
      this.props.remove(item.sortFrom);
      // item.component=component.props.children; //内部元素结束拖动之后给component,是为了实现拖出去可以拖到其它组件里面
    }
    console.log('end drag ......');
  };
  hover = (props, monitor, component) => {
    //console.log('hoverprops',props);
    let gi = monitor.getItem(),
      from;
    if (gi) {
      from = gi.sortFrom;
    }
    if (!from && from != 0) {
      return;
    }
    const to = this.props.index || 0;
    if (from != to && typeof this.props.sequence == 'function') {
      console.log('################# from ' + from + ' to ' + to + ' #################');
      //const hovered = component.refs.dndwrap.parentElement.getBoundingClientRect();
      this.props.sequence(parseInt(from), parseInt(to), () => {
        component.hasChanged = true;
        monitor.getItem().sortFrom = to;
      });
    }
  };
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.inner}>
        <div ref={'text'} className={classes.inner}>
          {children}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(OrderDragSource);
