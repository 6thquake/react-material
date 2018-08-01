import React,{Component}  from 'react';
import {withStyles} from '@6thquake/react-material/styles';
import {OrderDragSource,OrderDropTarget} from '@6thquake/react-material/OrderDrag';
import {DandD,DropTarget} from '@6thquake/react-material/DragBase';
import Button from '@6thquake/react-material/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@6thquake/react-material/IconButton';
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
    },
    // DandD:{
    //  display:'inline-block',
    //  position: 'static'
    // }
})
class DragToolBar extends Component{
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
                <DandD >
                    <OrderDragSource type='OUTITEM'>
                        <Button variant="fab" disabled aria-label="delete" className={classes.button}>
                            <DeleteIcon />
                        </Button>
                    </OrderDragSource>
                </DandD>
                <DandD classes={{root:classes.DandD}}>
                    <OrderDragSource type='OUTITEM'>
                        <IconButton color="primary" className={classes.button} component="span">
                            <PhotoCamera />
                        </IconButton>
                    </OrderDragSource>
                </DandD>               
                </div>
                <div className={classes.dropTarget}>  
                    <DropTarget classes={{custom:classes.dropTarget}}>
                        <OrderDropTarget defaultComponents={defaultChildren} cellSize={80} colsCount={6}>
                        </OrderDropTarget>
                    </DropTarget>                   
               </div>               
            </div>
        )
    }
}
export default withStyles(styles)(DragToolBar);
