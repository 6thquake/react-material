import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Snackbar ,{SnackbarContent } from 'material-ui/Snackbar';
import {Fade,Slide,Collapse,Grow,Zoom} from 'material-ui/transitions';

const styles = theme => ({
    snackbar: {
        margin: theme.spacing.unit,
    }
});
class Message  extends Component {
    static propTypes = {
        /**
         * This is usually about message open or close
         */
        open : PropTypes.bool.isRequired,
        /**
         * This is usually about message animation,slide、collapse、fade、grow、zoom
         */
        animation: PropTypes.string,
        /**
         * This is usually about message action
         */
        action: PropTypes.element,
        /**
         * The anchor of the Message.
         */
        anchorOrigin: PropTypes.object
    };
    static defaultProps = {
        open: false,
        animation:'fade',
        action:null,
        anchorOrigin:{ vertical: 'bottom', horizontal: 'center'}
    };
  _transition=props=>{
        switch (this.props.animation){
            case 'fade':
                return <Fade   {...props}/>;
                break;
            case 'slide':
                return <Slide direction="up"  {...props}/>;
                break;
            case 'collapse':
                return <Collapse  {...props}/>;
                break;
            case 'grow':
                return <Grow {...props}/>;
                break;
            case 'zoom':
                return <Zoom   {...props}/>;
                break;
            default:
                return <Fade   {...props}/>;
        }
    }
    render() {
        const { classes ,open,action,onClose,anchorOrigin} = this.props;
        return <Snackbar
            transition={this._transition}
            open={open}
            anchorOrigin={anchorOrigin}
            onClose={onClose}
            message={
                this.props.children
            }
            action={action}
        />
    }
}
export default withStyles(styles)(Message);
