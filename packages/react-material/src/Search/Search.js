import React, { Component } from 'react';
import { withStyles } from '../styles';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.1)',
    borderRadius: '1.3em',
    transition: 'all 0.5s',
  },

  alignRight: {
    justifyContent: 'flex-end',
  },

  input: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    flex: 1,
    border: 'none',
    background: 'transparent',
    lineHeight: '2em',
    color: 'rgba(255,255,255,0.8)',
    outline: 'none',
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
    ...theme.typography.body1,
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

  iconWrap: {
    marginRight: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: 'rgba(255,255,255,0.3)',
  },
  darkIcon: {
    color: 'rgba(0,0,0,0.3)',
  },
});

class Search extends Component {
  state = {
    focus: this.props.autoFocus,
  };

  handleChange = e => {
    const { onChange } = this.props;
    onChange(e);
  };

  handleBlur = e => {
    this.setState({
      focus: false,
    });
    this.props.onBlur(e);
  };

  handleFocus = e => {
    this.setState({
      focus: true,
    });
    this.props.onFocus(e);
  };

  render() {
    const { classes, isDark, floatRight, placeholder, value, autoFocus, scale, width } = this.props;
    const { focus } = this.state;
    const boxWidth = focus ? '100%' : `${String(100 * scale)}%`;
    const rootStyle = {
      width,
    };
    const boxStyle = {
      width: boxWidth,
    };
    return (
      <div
        style={rootStyle}
        className={classNames(classes.root, { [classes.alignRight]: floatRight })}
      >
        <div style={boxStyle} className={classes.box}>
          <input
            autoFocus={autoFocus}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            className={classNames(classes.input, { [classes.darkFont]: isDark })}
            value={value}
            onChange={this.handleChange}
            placeholder={placeholder}
          />
          <div className={classes.iconWrap}>
            <SearchIcon className={classNames(classes.icon, { [classes.darkIcon]: isDark })} />
          </div>

        </div>
      </div>
    );
  }
}

Search.propTypes = {
  autoFocus: PropTypes.bool,
  /**
   * value for search
   */
  classes: PropTypes.object,
  /**
   * float to right
   */
  floatRight: PropTypes.bool,
  /**
   * placeholder
   */
  isDark: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  /**
   * callback function for search value changed;
   */
  onFocus: PropTypes.func,
  /**
   * dark theme for light background
   */
  placeholder: PropTypes.string, // 'dark'
  /**
   * the scale of input box
   */
  scale: PropTypes.number,

  value: PropTypes.string,
  /**
   * the width of search, default is 100%
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Search.defaultProps = {
  floatRight: false,
  isDark: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  autoFocus: false,
  scale: 0.5,
  width: '100%',
};

export default withStyles(styles, { name: 'RMSearch' })(Search);
