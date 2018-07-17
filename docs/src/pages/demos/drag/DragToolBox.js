import React,{Component}  from 'react';
import {withStyles} from 'react-material/styles';
import {DragSource,OrderDragTarget} from 'react-material/Drag';
import Button from 'react-material/Button';
import Icon from 'react-material/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Paper from 'react-material/Paper';
import IconButton from 'react-material/IconButton';
// import {withDragAndDrop} from 'react-material/DragAndDrop';
import PropTypes from 'prop-types';
const styles=theme=>({
    root:{
        position:'relative',
        width:'600px',
        height:'400px'
    },
    button:{
        margin:theme.spacing.unit,
    },
    dropTarget:{
        position:'absolute',
        top:'200px',
        background:'rgba(0,0,0,0.1)',
        width:'600px',
    }
})
class DragToolBox extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const{classes}=this.props;
        const defaultChildren=[
            (<Button variant="fab" color="primary" aria-label="add" className={classes.button} cols={1} rows={1}>
            <AddIcon />
          </Button>),
          (<IconButton color="primary" className={classes.button} aria-label="Add to shopping cart" cols={1} rows={1}>
                <AddShoppingCartIcon />
            </IconButton>)
        ];
        return (
            <div className={classes.root}>
                <div style={{position:'absolute',width:'600px',height:'200px',top:'0px',left:'0px'}}>
                <DragSource type='OUTITEM' dragType='ICON'>
                    <Button variant="fab" disabled aria-label="delete" className={classes.button}>
                         <DeleteIcon />
                    </Button>
                </DragSource>
               <DragSource type='OUTITEM' dragType='BUTTON'>
                    <IconButton color="primary" className={classes.button} component="span">
                        <PhotoCamera />
                    </IconButton>
                </DragSource> 
                </div>
                <div className={classes.dropTarget}>
                <OrderDragTarget defaultComponents={defaultChildren} cellSize={80} colsCount={6}>
                </OrderDragTarget>
                </div>               
            </div>
        )
    }
}
export default withStyles(styles)(DragToolBox);