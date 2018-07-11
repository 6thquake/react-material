import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Transfer from 'react-material/Transfer';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      right: [
        { name: 'this is right one', id: 'r1' },
        { name: 'and this is right two', id: 'r2' },
        { name: 'right three is here', id: 'r3' },
      ],
      left: [
        { name: 'left one is left one ', id: 'l1' },
        { name: 'show the left two', id: 'l2' },
        { name: 'you get left three', id: 'l3' },
      ],
      pageConfig: {
        currentPage: 1,
        pageSize: 3,
        total: 3,
      },
    };
  }

  changeListTest = data => {
    this.setState({
      right: data.right,
      left: data.left,
    });
  };

  render() {
    return (
      <div>
        <Transfer
          left={this.state.left}
          right={this.state.right}
          filterOption={true}
          paginationOption={true}
          pageConfig={this.state.pageConfig}
          onChange={this.changeListTest.bind(this)}
        />
      </div>
    );
  }
}
export default App;
