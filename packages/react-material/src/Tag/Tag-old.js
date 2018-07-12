import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { withStyles } from '../styles';
import { Clear } from '@material-ui/icons';
import Slide from '../transitions/Slide';
import Fade from '../transitions/Fade';

const styles = {
  rmTag: {
    display: 'inline-block',
    lineHeight: '22px',
    height: '22px',
    padding: '0 8px',
    borderRadius: '6px',
    border: '1px solid #e9e9e9',
    background: '#f7f7f7',
    fontSize: '12px',
    transition: 'all .3s cubic-bezier(.78,.14,.15,.86)',
    verticalAlign: 'middle',
    opacity: '1',
    overflow: 'hidden',
    margin: '2px 4px 2px 0',
    cursor: 'pointer',
  },

  clearTag: {
    fontSize: '12px',
    marginLeft: '3px',
    verticalAlign: 'middle',
  },

  primaryLight: {
    background: '#7986cb',
    border: '0',
    color: '#fff',
  },
  primaryMain: {
    background: '#3f51b5',
    border: '0',
    color: '#fff',
  },
  primaryDark: {
    background: '#303f9f',
    border: '0',
    color: '#fff',
  },

  secondaryLight: {
    background: '#ff4081',
    border: '0',
    color: '#fff',
  },
  secondaryMain: {
    background: '#f50057',
    border: '0',
    color: '#fff',
  },
  secondaryDark: {
    background: '#c51162',
    border: '0',
    color: '#fff',
  },

  errorLight: {
    background: '#e57373',
    border: '0',
    color: '#fff',
  },
  errorMain: {
    background: '#f44336',
    border: '0',
    color: '#fff',
  },
  errorDark: {
    background: '#d32f2f',
    border: '0',
    color: '#fff',
  },
};

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: true,
      closable: props.closable,
      onClose: props.onClose,
      afterClose: props.afterClose,
      color: props.color,
      children: props.children,
    };
    try {
      if (!this.state.closable) {
        this.state.closable = false;
      }

      if (this.state.children) {
        React.Children.only(this.state.children); //验证标签内容是否只有唯一的根元素
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {}

  onClick = e => {
    this.setState({ close: false });
    this.props.onClose(e);
  };

  render() {
    const classes = this.props.classes;
    const color = this.state.color;
    const { close, closable } = this.state;
    const clear = closable ? (
      <Clear onClick={e => this.onClick(e)} className={classes.clearTag} />
    ) : null;

    return close ? (
      <Fade in={close}>
        <div className={classes.rmTag + ' ' + classes[color]}>
          <span>{this.state.children}</span>
          {clear}
        </div>
      </Fade>
    ) : null;
  }
}

export default withStyles(styles)(Tag);

/**
 * @ignore - do not document.
 */