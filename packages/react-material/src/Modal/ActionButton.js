import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
export default class ActionButton extends React.Component {
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
    const { type, children, variant, size } = this.props;
    const loading = this.state.loading;
    //替换为statusbutton
    return (
      <Button
        variant={variant}
        size={size}
        style={{ marginLeft: '10px' }}
        color={type}
        onClick={this.onClick}
        loading={loading}
      >
        {children}
      </Button>
    );
  }
}
