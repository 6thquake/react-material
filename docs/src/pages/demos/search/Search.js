import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import { Search } from 'react-material/Search';
import { Home, Grade, Lock } from '@material-ui/icons';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  onChange = data => {
    console.log(data);
  };
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ width: '50%', float: 'right' }}>
            <Search
              direction={'right'}
              type={'dark'}
              placeholder={'全局搜索'}
              onChange={this.onChange}
            />
            {/*type={'dark'}*/}
          </div>
        </div>
        <br />
        <div style={{ overflow: 'hidden', background: '#2196f3', padding: '2em' }}>
          <div style={{ width: '50%', float: 'left' }}>
            <Search direction={'left'} placeholder={'全局搜索'} onChange={this.onChange} />
            {/*type={'dark'}*/}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
