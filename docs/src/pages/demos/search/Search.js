import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import { Search } from 'react-material/Search';
import { Home, Grade, Lock } from '@material-ui/icons';
import Icon from 'react-material/Icon';
import IconButton from 'react-material/IconButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: 'test word',
    };
  }
  onChange = data => {
    console.log(data);
  };
  clearValue() {
    this.setState({ values: '' });
    console.log('clean values');
  }
  render() {
    const { clearValue } = this;
    const { values } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ width: '50%', float: 'right' }}>
            <Search floatRight placeholder={'全局搜索'} onChange={this.onChange} isDark />
            {/**/}
          </div>
        </div>
        <br />
        <div style={{ overflow: 'hidden', background: '#2196f3', padding: '2em' }}>
          <div style={{ width: '50%', float: 'left' }}>
            <Search placeholder={'全局搜索'} defaultValue={values} onChange={this.onChange} />
          </div>
          <IconButton color="secondary" onClick={clearValue.bind(this)}>
            <Icon>delete</Icon>
          </IconButton>
        </div>
      </div>
    );
  }
}
export default App;
