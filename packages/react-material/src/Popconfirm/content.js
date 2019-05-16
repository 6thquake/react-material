import React, { Component } from 'react';
import withStyles from '../styles/withStyles';
import Button from '../Button';
import { withLocale } from '../LocaleProvider';

const styles = theme => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    minWidth: 100,
    minHeight: 70,
    maxWidth: 200,
  },
  content: {
    fontSize: 14,
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    // alignItems: ''
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    // margin: theme.spacing.unit,
  },
});

class PopOverContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleConfirm = () => {
    this.props.onConfirm && this.props.onConfirm();
  };

  handleCancel = () => {
    this.props.onCancel && this.props.onCancel();
  };

  render() {
    const {
      classes,
      content,
      cancelText,
      okText,
      color = 'primary',
      variant,
      type,
      size = 'small',
    } = this.props;
    return (
      <div className={classes.box}>
        <div className={classes.content}>{content}</div>

        <div className={classes.footer}>
          <Button
            type={type}
            size={size}
            onClick={this.handleConfirm}
            color={color}
            className={classes.button}
          >
            {okText}
          </Button>
          <Button size={size} onClick={this.handleCancel} className={classes.button}>
            {cancelText}
          </Button>
        </div>
      </div>
    );
  }
}
const PopContent = withLocale({ name: 'Popconfirm' })(PopOverContent);

export default withStyles(styles, { name: 'RMPopContent' })(PopContent);
