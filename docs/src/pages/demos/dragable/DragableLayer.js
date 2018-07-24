import React, { Component } from 'react';
import Dragable from '@6thquake/react-material/DragableLayer';

export default class DragAroundNaive extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Dragable />
      </div>
    );
  }
}
