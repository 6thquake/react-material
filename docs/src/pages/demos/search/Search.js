import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Search from '@6thquake/react-material/Search';
import { Home, Grade, Lock } from '@material-ui/icons';
import Icon from '@6thquake/react-material/Icon';
import IconButton from '@6thquake/react-material/IconButton';

const style = theme => {
  conttolledSearch: {
    marginBottom: theme.spacing.unit * 3;
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: 'test word',
      text: '',
    };
  }
  onChange = data => {
    console.log(data);
  };
  clearValue() {
    this.setState({ values: '' });
    console.log('clean values');
  }
  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    const { clearValue } = this;
    const { values, text } = this.state;
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
export default withStyles(style)(App);
