import React, { Component } from 'react';
import { withStyles } from '../styles';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../Button';

const styles = theme => ({
  root: {
    position: 'relative',
    fontSize: '13px',
    overflow: 'hidden',
  },
  right: {
    textAlign: 'right',
  },
  input: {
    padding: '0.3em 1.5em',
    border: 'none',
    background: 'rgba(0,0,0,0.1)',
    borderRadius: '1.3em',
    lineHeight: '2em',
    color: 'rgba(255,255,255,0.8)',
    outline: 'none',
    width: '50%',
    transition: 'all 0.5s',
    minWidth: '20em',
    '&::-webkit-input-placeholder': {
      color: 'rgba(255,255,255,0.3)',
    },
    '&:-moz-placeholder': {
      color: 'rgba(255,255,255,0.3)',
    },
    '&::-moz-placeholder': {
      color: 'rgba(255,255,255,0.3)',
    },
    '&:-ms-input-placeholder': {
      color: 'rgba(255,255,255,0.3)',
    },
    '&:focus': {
      width: '100%',
    },
  },
  hasValue: {
    width: '100%',
  },
  darkFont: {
    color: 'rgba(0,0,0,0.8)',
    '&::-webkit-input-placeholder': {
      color: 'rgba(0,0,0,0.3)',
    },
    '&:-moz-placeholder': {
      color: 'rgba(0,0,0,0.3)',
    },
    '&::-moz-placeholder': {
      color: 'rgba(0,0,0,0.3)',
    },
    '&:-ms-input-placeholder': {
      color: 'rgba(0,0,0,0.3)',
    },
  },

  burron: {},
  iconWrap: {
    width: '0px',
    position: 'relative',
    display: 'inline',
  },
  icon: {
    color: 'rgba(255,255,255,0.3)',
    position: 'absolute',
    right: '0.5em',
    top: '0em',
    fontSize: '1.5em',
  },
  darkIcon: {
    color: 'rgba(0,0,0,0.3)',
  },
});

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: this.props.defaultValue || '',
      options: [],
      pageConfig: {
        currentPage: 1,
        pageSize: 5,
        total: 34,
      },
    };
  }

  handleChangeSingle(event, child) {
    const { onChange , value} = this.props
    let text = event.target.value
    let self = this;
    this.typeIn = true;
    if(value !== undefined){
      onChange && onChange(event)
    }else{
      this.setState({ search: text }, () => {
      self.ok();
    });
    }
  }

  // autoCb(i) {
  //   console.log('item', i);
  //   this.setState({
  //     pageConfig: {
  //       ...this.state.pageConfig,
  //       currentPage: i,
  //     },
  //   });
  // }

  // inputChangeCb(event) {
  //   console.log('item', event);
  //   this.setState({ inputText: event.target.value });
  // }

  ok() {
    const { search } = this.state;
    onChange && typeof onChange === 'function' && onChange(search);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== undefined){
      return null
    }

    if (nextProps !== prevState.preProps) {
      //说明是props变化了
      return {
        preProps: nextProps,
      };
    }
    return null;
  }
  componentDidUpdate() {
    this.typeIn = false;
  }

  render() {
    const { classes, isDark, floatRight, defaultValue, placeholder, value } = this.props;
    let search = ''
    if(value !== undefined){
      search = value
    }else{
      search = this.state.preProps.defaultValue;
      if (this.typeIn) {
        search = this.state.search;
      }
    }
    // const { currentPage, pageSize, total } = this.state.pageConfig;
    return (
      <div className={classes.root + ' ' + (!!floatRight ? classes.right : '')}>
        <input
          className={
            classes.input +
            ' ' +
            (!!isDark ? classes.darkFont : '') +
            ' ' +
            (!!search ? classes.hasValue : '')
          }
          value={search}
          onChange={this.handleChangeSingle.bind(this)}
          placeholder={placeholder}
        />
        <div className={classes.iconWrap}>
          <SearchIcon className={classes.icon + ' ' + (!!isDark ? classes.darkIcon : '')} />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  /**
   * If this property is passed, Search will be Controlled
   */
   value: PropTypes.string,
  /**
   * float to right
   */
  floatRight: PropTypes.bool,
  /**
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * defaultValue for search
   */
  defaultValue: PropTypes.string,
  /**
   * callback function for search value changed;
   */
  onChange: PropTypes.function,
  /**
   * dark theme for light background
   */
  isDark: PropTypes.bool, //'dark'
};

Search.defaultProps = {
  defaultValue: '',
  floatRight: false,
  isDark: false,
};

export default withStyles(styles, { name: 'RMSearch' })(Search);
