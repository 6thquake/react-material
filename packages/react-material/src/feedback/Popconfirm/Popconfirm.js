import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Popover from 'material-ui/Popover';
import PopoverContent from './content'

const styles = theme => ({
  anchorElementBox: {
    padding: theme.spacing.unit,
    boxSizing: 'border-box',
  },
  contentBox: {
    
  },
});

class RMpopConfirm extends React.Component {
  state = {
    open: false,
    anchorReference: 'anchorEl',
  };
  anchorEl = null;
  anchorRef = React.createRef()

  componentDidMount(){
    let el = ReactDOM.findDOMNode(this.anchorRef.current)
    this.setState({
      anchorEl: el
    });
  }

  handleClick = (e) => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  confirm = () => {
    this.props.confirm && this.props.confirm()
    this.setState({
      open: false
    })
  }
  cancel = ()=>{
    this.props.cancel && this.props.cancel()
    this.setState({
      open: false
    })
  }
  render() {
    const { classes, children, cancelText, confirmText, content} = this.props;
    const {
      open,
      positionTop,
      positionLeft,
      anchorReference,
      anchorEl,
    } = this.state;

    return (
      <div>
        <div ref={this.anchorRef} onClick={this.handleClick}>
          <div></div>
          <div className={classes.anchorElementBox}>
            {children}
          </div>
          <div></div>
        </div>
        
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorReference={anchorReference}
          anchorPosition={{ top: positionTop, left: positionLeft }}
          onClose={this.handleClose}
          anchorOrigin={this.props.anchorOrigin}
          transformOrigin={this.props.transformOrigin}
        >
          <div className={classes.contentBox}>
            <PopoverContent
              onCancel = {this.cancel}
              onConfirm = {this.confirm}
              cancelText={cancelText}
              confirmText = {confirmText}
              content = {content}
            >

            </PopoverContent>
          </div>
        </Popover>
      </div>
    );
  }
}

RMpopConfirm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RMpopConfirm);
