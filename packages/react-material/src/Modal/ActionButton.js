import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { withStyles } from '../styles';
import classNames from 'classnames';

const styles = theme => ({
  info: {
    backgroundColor: '#1890ff',
    color: 'white',
    '&:hover':{
      backgroundColor: '#1890ff',
      color: 'white',
    }
  },
  done: {
    backgroundColor: '#52c41a',
    color: 'white',
    '&:hover':{
      backgroundColor: '#52c41a',
      color: 'white',
    }
  },
  cancel: {
    backgroundColor: '#f5222d',
    color: 'white',
    '&:hover':{
      backgroundColor: '#f5222d',
      color: 'white',
    }
  },
  error: {
    backgroundColor: '#faad14',
    color: 'white',
    '&:hover':{
      backgroundColor: '#faad14',
      color: 'white',
    }
  },
  warning: {
    backgroundColor: '#faad14',
    color: 'white',
    '&:hover':{
      backgroundColor: '#faad14',
      color: 'white',
    }
  },
  
});


 class ActionButton extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = () => {

      const { actionFn, closeModal } = this.props;

      if (actionFn) {
        let ret;

        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();
          if (!ret) {
            closeModal();
          }
        }

        if (ret && ret.then) {
          this.setState({ loading: true });
          ret.then(
            (...args) => {
              closeModal(...args);
            },
            () => {
              this.setState({ loading: false });
            },
          );
        }
      } else {
        closeModal();
      }

    };

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      const $this = ReactDOM.findDOMNode(this);
      this.timeoutId = setTimeout(() => $this.focus());
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    const { type, children, variant, size ,classes } = this.props;
    const loading = this.state.loading;
    
    //替换为statusbutton
    const classNameColor = classNames({
      [classes.info]: type === 'info',
      [classes.done]: type === 'done',
      [classes.cancel]: type === 'cancel',
      [classes.error]: type === 'error',
      [classes.warning]: type === 'contact_support',
    });

    return (
      <Button
        variant={variant}
        size={size}
        classes = {{root:classNameColor}}
        style={{ marginLeft: '10px' }}
        onClick={this.onClick}
        loading={loading}
      >
        {children}
      </Button>
    );
  }
}


export default withStyles(styles)(ActionButton);;
