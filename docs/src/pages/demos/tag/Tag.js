import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tag from 'react-material/Tag';


class App extends React.Component {
    onClose = (key) => {
        console.log(key);
    }

    afterClose = (key) => {
        console.log(key);
    }
    
    render() {
        return (
            <div>
                <div>
                    <div><span>basic</span></div>
                    <Tag closable={false}>标签名字</Tag>

                    <Tag closable={false}>标签名字2</Tag>

                    <Tag closable={true}  onClose={this.onClose.bind(this)} afterClose={this.afterClose.bind(this)}>可关闭标签</Tag>
                </div>

                <div>
                    <div><span>four colors</span></div>

                    <Tag color={'primaryLight'} closable={true} onClose={this.onClose.bind(this)} afterClose={this.afterClose.bind(this)}>primaryLight标签</Tag>

                    <Tag color={'secondaryLight'} closable={false} onClose={this.onClose.bind(this)} afterClose={this.afterClose.bind(this)}>secondaryLight标签</Tag>

                    <Tag color={'errorLight'} closable={true} onClose={this.onClose.bind(this)} afterClose={this.afterClose.bind(this)}>errorLight标签</Tag>

                    
                </div>

                 
            </div>
        );
    }
}
export default App;