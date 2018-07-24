import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Transfer from '@6thquake/react-material/Transfer';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKeys: [
        { name: 'this is right one', id: 'r1' },
        { name: 'and this is right two', id: 'r2' },
        { name: 'right three is here', id: 'r3' },
      ],
      dataSource: [
        { name: 'left one is left one ', id: 'l1' },
        { name: 'show the left two', id: 'l2' },
        { name: 'you get left three', id: 'l3' },
      ],
      pageConfig: {
        currentPage: 0,
        pageSize: 3,
        total: 3,
      },
    };
  }
  subSet = (arr1, arr2) => {
    var set1 = new Set(arr1);
    var set2 = new Set(arr2);

    var subset = [];

    for (let item of set1) {
      if (!set2.has(item)) {
        subset.push(item);
      }
    }

    return subset;
  };

  changeListTest = (targetKeys, direction, moveKeys) => {
    console.log(targetKeys, direction, moveKeys);
    this.setState({
      selectedKeys: targetKeys,
    });
  };

  render() {
    return (
      <div>
        <Transfer
          dataSource={this.state.dataSource}
          selectedKeys={this.state.selectedKeys}
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
