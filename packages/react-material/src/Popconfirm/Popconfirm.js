import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import Popover from '../Popover';
import PopoverContent from './content';

const styles = theme => ({
  box: {
    display: 'inline-block'
  },
  anchorElementBox: {
    // padding: theme.spacing.unit,
    boxSizing: 'border-box',
    display: 'inline-block'
  },
  contentBox: {
    
  },
});

class Popconfirm extends React.Component {
  state = {
    open: false,
    anchorReference: 'anchorEl',
  };

  static defaultProps = {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
  }
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
    this.props.onConfirm && this.props.onConfirm()
    this.setState({
      open: false
    })
  }
  cancel = ()=>{
    this.props.onCancel && this.props.onCancel()
    this.setState({
      open: false
    })
  }
  render() {
    const { color, variant, type, size, classes, children, cancelText, okText, content, ...other} = this.props;
    const {
      open,
      positionTop,
      positionLeft,
      anchorReference,
      anchorEl,
    } = this.state;

    return (
      <div>
        <div className={classes.box} ref={this.anchorRef} onClick={this.handleClick}>
          <div></div>
          <div className={classes.anchorElementBox}>
            {children}
          </div>
          <div></div>
        </div>
        
        <Popover
          {...other}
          open={open}
          anchorEl={anchorEl}
          anchorReferencecode={anchorReference}
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
              okText={okText}
              content = {content}
              color={color}
              variant={variant}
              type={type}
              size={size}
            >
            </PopoverContent>
          </div>
        </Popover>
      </div>
    );
  }
}

Popconfirm.propTypes = {
  classes: PropTypes.object.isRequired,

  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),

  transformOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),
};

export default withStyles(styles, { name: 'RMPopconfirm' })(Popconfirm);
