import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import { AsyncTransfer } from 'react-material/Transfer';

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
      pageConfigLeft: {
        currentPage: 1,
        pageSize: 3,
        total: 3,
      },
      pageConfigRight: {
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
  filterChangeCb = (position, filterString) => {
    if (position == 'left') {
      const promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
          let left = [
            { name: 'left one is left one ', id: 'l1' },
            { name: 'show the left two', id: 'l2' },
            { name: 'you get left three', id: 'l3' },
          ];
          let result = left.filter(item => {
            return (
              !filterString || item.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
            );
          });
          resolve(result);
        }, 1000);
      });
      let preConfig = this.state.pageConfigLeft;
      promise.then(result => {
        this.setState({
          left: [...result],
          pageConfigLeft: {
            ...preConfig,
            total: result.length,
          },
        });
      });
    }
  };

  render() {
    return (
      <div>
        <AsyncTransfer
          left={this.state.left}
          right={this.state.right}
          filterOption={true}
          paginationOption={true}
          pageConfigL={this.state.pageConfigLeft}
          pageConfigR={this.state.pageConfigRight}
          filterChangeCb={this.filterChangeCb.bind(this)}
          onChange={this.changeListTest.bind(this)}
        />
      </div>
    );
  }
}
export default App;
