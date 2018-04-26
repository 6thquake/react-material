import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

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
    this.state = {  };
  }
  handleConfirm = ()=>{
    this.props.onConfirm && this.props.onConfirm()
  }
  handleCancel = () => {
    this.props.onCancel && this.props.onCancel()
  }
  render() {
    let {
      classes,
      content,
      cancelText,
      confirmText,
    } = this.props
    return (
      <div className={classes.box}>
        <div className={classes.content}>
          {content}
        </div>

        <div className={classes.footer}>
          <Button size='small' onClick={this.handleConfirm} color="primary" className={classes.button}>
            {confirmText || 'ok'}
          </Button>
          <Button size='small' onClick={this.handleCancel} className={classes.button}>
            {cancelText || 'cancel'}
          </Button>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PopOverContent);
