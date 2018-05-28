import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import { ListItem,ListItemText } from '../List';
import { DragSource } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Checkbox from '../Checkbox';

const boxSource = {
	beginDrag(props,monitor, component) {
		//拖拽开始把水波层置为不显示
		component.refs["listItem"].childNodes[0].childNodes[2].style.display='none';
		const { direction, value } = props;
		return {direction, value};
		
	},
}
class DLI extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	handleToggle = ()=>{

	};
	render(){
		const { connectDragSource,value,isChecked,toggleChecked,direction } = this.props;

		return connectDragSource(<div><div  ref='listItem'>
			<ListItem
                key={value.id}
                role={undefined}
                dense
                button
                onClick={()=>{toggleChecked(value,direction)}}
              >
                <Checkbox
                  checked={isChecked}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={`${value.name}`} />
              </ListItem>
			</div></div>);
	}
}


let DragListItem = DragSource('just-transfer', boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
	}))(DLI);

export  {DragListItem ,ListItemText };