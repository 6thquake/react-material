import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import Dialog from '../Dialog';
import DialogContent from '../DialogContent';
import DialogTitle from '../DialogTitle';
import { Clear } from '@material-ui/icons';
import { Fade, Slide, Collapse, Grow, Zoom } from '../transitions';


const styles = theme => ({
    root: {
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
class Modal extends Component {
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
    _transition=props=>{
      console.log(props);
        switch (this.props.animation){
            case 'fade':
                return <Fade {...props}/>;
                break;
            case 'slide':
                return <Slide direction="up" {...props}/>;
                break;
            case 'collapse':
                return <Collapse {...props} />;
                break;
            case 'grow':
                return <Grow {...props}/>;
                break;
            case 'zoom':
                return <Zoom  {...props}/>;
                break;
            default:
                return <Fade {...props}/>;
        }
    }
    render() {
        const { classes, label, onClose,...other} = this.props;
        return <Dialog
            TransitionComponent={this._transition}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            {...this.props}
        >
            <DialogTitle className={classes.root} disableTypography={true}>
                {label}<Clear className={classes.icon}  onClick={onClose}/>
            </DialogTitle>
            {this.props.children }
        </Dialog>
    }
}
export default withStyles(styles)(Modal);
