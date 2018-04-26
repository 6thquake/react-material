

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Transfer} from 'react-material/Transfer';






class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      right:[{name:'R1',id:'r1'},{name:'R2',id:'r2'},{name:'R3',id:'r3'}],
      left:[{name:'L1',id:'l1'},{name:'L2',id:'l2'},{name:'L3',id:'l3'}]
    };
  }
  changeListTest=data=>{
    this.setState({right:data.right,left:data.left});
  }
  render() {
    return (
      <div >
        <Transfer left={this.state.left} right={this.state.right} onChange={this.changeListTest.bind(this)}></Transfer>
      </div>
    );
  }
}
export default App;

