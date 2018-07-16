import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import BackTop from 'react-material/BackTop';
import Codearea from 'react-material/Codearea';

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

        <p>默认按钮(整个网页)，向下滚动页面后，见右下角灰色按钮</p>

        <BackTop visibilityHeight={550} onClick={this.doSomething.bind(this)}>
          <div style={style}>UP</div>
        </BackTop>

        <p> 自定义按钮（整个网页），向下滚动页面后，见右下角蓝色按钮</p>

        <h4>下面示例容器内容无关紧要，只是是为了撑开页面，出现元素内部滚动条</h4>

        <BackTop container="#demoId" onClick={this.doSomething.bind(this)} />

        <div id="demoId" style={{ height: '400px', overflowY: 'auto', marginTop: '20px' }}>
          <p>使用字面值创建对象。</p>
          <Codearea language="js">
            {`
               // bad
                const item = new Object();

               // good
                const item = {};
            `}
          </Codearea>
          <p>
            如果你的代码在浏览器环境下执行，别使用 保留字 作为键值。这样的话在 IE8 不会运行。
            更多信息。 但在 ES6 模块和服务器端中使用没有问题。
          </p>
          <Codearea language="js">
            {`
                // bad
                 const superman = {
                 default: { clark: 'kent' },
                 private: true,
                 };
                // good
                 const superman = {
                 defaults: { clark: 'kent' },
                 hidden: true,
                 };
            `}
          </Codearea>

          <p>使用同义词替换需要使用的保留字。</p>
          <Codearea language="js">
            {`
               // bad
                const superman = {
                class: 'alien',
                };
               // bad
               const superman = {
                klass: 'alien',
               };
               // good
                const superman = {
                type: 'alien',
                   };
               `}
          </Codearea>
        </div>
      </div>
    );
  }
}
export default App;
