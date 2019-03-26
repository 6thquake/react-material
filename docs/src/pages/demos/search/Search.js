import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Search from '@6thquake/react-material/Search';
import { Home, Grade, Lock } from '@material-ui/icons';
import Icon from '@6thquake/react-material/Icon';
import IconButton from '@6thquake/react-material/IconButton';

const style = theme => {
  {
    theme.spacing.unit * 3;
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  clearValue = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    const { classes } = this.props;
    const { text } = this.state;
    return (
      <div style={{ width: '100%' }}>
        {/* Controlled Search */}
        <div className={classes.conttolledSearch} style={{ overflow: 'hidden' }}>
          <div style={{ width: '50%', float: 'right' }}>
            <Search
              value={text}
              floatRight
              placeholder={'全局搜索'}
              onChange={this.handleChange}
              isDark
            />
            {/**/}
          </div>
          <div>search text is : {text}</div>
        </div>
        <br />
        <div style={{ overflow: 'hidden' }}>
          <div style={{ width: '50%', float: 'right' }}>
            <Search floatRight placeholder={'全局搜索'} onChange={this.handleChange} isDark />
            {/**/}
          </div>
        </div>
        <br />
        <Search
          placeholder={'search'}
          floatRight
          value={text}
          onChange={this.handleChange}
          isDark
        />
        <br />
        <div style={{ overflow: 'hidden', background: '#2196f3', padding: '2em' }}>
          <Search
            placeholder={'search'}
            value={text}
            width={400}
            scale={0.8}
            onChange={this.handleChange}
          />

          <IconButton color="secondary" onClick={this.clearValue}>
            <Icon>delete</Icon>
          </IconButton>
        </div>
      </div>
    );
  }
}
export default withStyles(style)(App);
