/**
 * @ignore - do not document.
 */

import React, { PureComponent } from 'react';
import withStyles from '../styles/withStyles';
import { DragSource as DragSourceBase } from 'react-dnd';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const styles = {
  inner: {
    display: 'inline-block',
    position: 'static',
  },
};

const _source = {
  beginDrag(props, monitor, component) {
    const item = component.state.comp.beginDrag(props, monitor, component);
    return item;
  },
  endDrag(props, monitor, component) {
    component.state.comp.endDrag(props, monitor, component);
  },
  // canDrag(props, monitor){

  // },
  // isDragging(props, monitor){

  // }
};

function collect(connect, monitor) {
  return {
    connect,
    monitor,
  };
}

class _DragSource extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      getSource: '',
      comp: '',
    };
  }

  register = comp => {
    this.state.comp = comp;
  };

  render() {
    const { connect, monitor, children, classes } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        register: this.register.bind(this),
        connect,
        monitor,
      }),
    );
    return connect.dragSource()(<div className={classes.inner}>{childrenWithProps}</div>);
  }
}
const DragSource = DragSourceBase('*', _source, collect)(_DragSource);
export default withStyles(styles)(DragSource);
