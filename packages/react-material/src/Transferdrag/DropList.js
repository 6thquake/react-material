/**
* @ignore - do not document.
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import List from '../List';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
  },
};
class DL extends React.Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        <List />
      </div>,
    );
  }
}

let C = DropTarget('transfer', boxTarget, connect => {
  return {
    connectDropTarget: connect.dropTarget(),
  };
})(DL);

export default C;
