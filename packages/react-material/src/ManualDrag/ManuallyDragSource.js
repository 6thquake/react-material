/**
* @ignore - do not document.
*/

import React, { Component } from 'react';
import { SourceWrapper } from '../DragBase';
const boxstyles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
  backgroundColor: 'white',
  display: 'inline-block',
};

export default class BoxA extends SourceWrapper {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.register(this);
  }

  beginDrag = (props, monitor, component) => {
    const item = {};
    //外部item，没有Index,拖入时把DragSource里面的东西拖入

    item.sourceType = 'BoxA';
    item.left =
      this.refs['myRef'].getBoundingClientRect().left + document.documentElement.scrollLeft;
    item.top = this.refs['myRef'].getBoundingClientRect().top + document.documentElement.scrollTop;
    if (this.props.type == 'OUTITEM') {
      item.component = component.props.children;
    } else if (this.props.type == 'INNERITEM') {
      item.sortFrom = component.props.index || 0;
    }
    return item;
  };

  endDrag = (props, monitor, component) => {
    const item = monitor.getItem();
    if ((!!item.sortFrom || item.sortFrom == 0) && typeof component.props.remove == 'function') {
      component.props.remove(item.sortFrom);
    }
  };

  getStyles() {
    const { left, top, monitor, droptTargetLeft, droptTargetTop } = this.props;
    if (left) {
      const transform = `translate3d(${left - droptTargetLeft}px, ${top - droptTargetTop}px, 0)`;
      return {
        position: 'absolute',
        //transform : transform,
        left: `${left - droptTargetLeft}px`,
        top: `${top - droptTargetTop}px`,
        opacity: monitor.isDragging() ? 0 : 1,
      };
    } else {
    }
  }
  render() {
    return (
      <div style={this.getStyles()} ref={'myRef'}>
        <div style={boxstyles}>{this.props.children.props.children}</div>
      </div>
    );
  }
}
