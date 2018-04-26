import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import {Clear} from '@material-ui/icons';
import {Fade,Slide,Collapse,Grow,Zoom} from 'material-ui/transitions';


const styles = theme => ({
    title: {
        backgroundColor:'rgb(16,108,200)',
        color:'white'
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
        color:'white',
        float:'right',
        '&:hover': {
            opacity:0.5
        },
    }
});
class RMModal  extends Component {
    static propTypes = {
        /**
         * This is usually about modal open or close
         */
        open : PropTypes.bool.isRequired,
        /**
         * This is usually about modal title
         */
        label: PropTypes.string,
        /**
         * This is usually about modal animation,slide、collapse、fade、grow、zoom
         */
        animation: PropTypes.string
    };
    static defaultProps = {
        open: false,
        label:'',
        animation:'fade'
    };
    _transition(props) {
        console.log(this.props);
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
        const { classes,label,onClose,open} = this.props;
        return <Dialog
            transition={this._transition.bind(this)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            {...this.props}
        >
            <DialogTitle className={classes.title} disableTypography={true} id="alert-dialog-title">
                {label}<Clear className={classes.icon}  onClick={onClose}/>
            </DialogTitle>
            <DialogContent>
                {this.props.children }
            </DialogContent>
        </Dialog>
    }
}
export default withStyles(styles)(RMModal);