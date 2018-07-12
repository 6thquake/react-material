import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import BackTop from 'react-material/BackTop';

const style = {
  height: '40px',
  width: '40px',
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#57c5f7',
  color: '#fff',
  textAlign: 'center',
  fontSize: '20px',
};

class App extends React.Component {
  doSomething = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <BackTop onClick={this.doSomething.bind(this)} />

        <p>默认按钮，向下滚动页面后，见右下角灰色按钮</p>

        <BackTop visibilityHeight={550} onClick={this.doSomething.bind(this)}>
          <div style={style}>UP</div>
        </BackTop>

        <p> 自定义按钮，向下滚动页面后，见右下角蓝色按钮</p>
      </div>
    );
  }
}
export default App;
