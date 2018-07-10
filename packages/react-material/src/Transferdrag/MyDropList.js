import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import List from '../List';
import { DropTarget, DragDropContext } from 'react-dnd'
import { DragListItem as ListItem,ListItemText } from './DragListItem';

const styles = {
  root: {
    height:'100%',
  }
};
const boxTarget = {
	drop(props, monitor, component) {
		const item = monitor.getItem()
		if(props.direction == item.direction){
			return;
		}
		props.dragToggle(item.value,item.direction)();
		
	},

}
class DL extends React.Component {
	toggleCheckedFunc = (value,direction)=>{
		let aa=value;
		console.log(value)
	};
	isChecked = (value)=>{
		const _ci = this.props.checkedItem;
		for(let i=0,len=_ci.length;i<len;i++){
			if(value.id == _ci[i].id){
				return true;
			}
		}
		return false;
	};
	render(){
		const { data,checkedItem,direction,toggleChecked,connectDropTarget,classes } = this.props;
		 
		return connectDropTarget(<div className={classes.root}><List>
            {data.map((value,index) => (
              <ListItem
                value={value}
                toggleChecked = {toggleChecked}
                isChecked = {this.isChecked(value)}
                direction = {direction}
                key={index}
              >
              </ListItem>
            ))}
          </List></div>)
	}
}

let C = DropTarget(['just-transfer'], boxTarget, connect => {
	return {
	connectDropTarget: connect.dropTarget(),
}})(DL);

export default withStyles(styles, { name: 'RMDropList' })(C);

/**
 * @ignore - do not document.
 */

