import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Tag from 'react-material/Tag';

const styles = () => ({
  blockDiv: {
    marginTop: '10px',
  },
});

class App extends React.Component {
  onClose = key => {
    console.log(key);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.blockDiv}>
          <div>
            <span>basic tag</span>
          </div>

          <Tag closable={false} label="basic 标签" />
          <Tag closable={true} label="可关闭标签" onClose={this.onClose.bind(this)} />
        </div>

        <div className={classes.blockDiv}>
          <div>
            <span>three colors</span>
          </div>

          <Tag
            color="primaryLight"
            closable={true}
            onClose={this.onClose.bind(this)}
            label="primaryLight标签"
          />

          <Tag
            color="secondaryLight"
            closable={false}
            onClose={this.onClose.bind(this)}
            label="secondaryLight标签"
          />

          <Tag
            color="errorLight"
            closable={true}
            onClose={this.onClose.bind(this)}
            label="errorLight标签"
          />
        </div>

        <div className={classes.blockDiv}>
          <div>
            <span>three sizes</span>
          </div>

          <Tag size="small" label="small标签" />

          <Tag size="medium" label="medium标签" />

          <Tag size="large" label="large标签" />
        </div>
      </div>
    );
  }
}
/* class App extends React.Component {
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

  afterClose = key => {
    console.log(key);
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <span>basic</span>
          </div>
          <Tag closable={false}>标签名字</Tag>

          <Tag closable={false}>标签名字2</Tag>

          <Tag
            closable={true}
            onClose={this.onClose.bind(this)}
            afterClose={this.afterClose.bind(this)}
          >
            可关闭标签
          </Tag>
        </div>

        <div>
          <div>
            <span>four colors</span>
          </div>

          <Tag
            color={'primaryLight'}
            closable={true}
            onClose={this.onClose.bind(this)}
            afterClose={this.afterClose.bind(this)}
          >
            primaryLight标签
          </Tag>

          <Tag
            color={'secondaryLight'}
            closable={false}
            onClose={this.onClose.bind(this)}
            afterClose={this.afterClose.bind(this)}
          >
            secondaryLight标签
          </Tag>

                 
            </div>
        );
    }
} */
export default withStyles(styles)(App);

