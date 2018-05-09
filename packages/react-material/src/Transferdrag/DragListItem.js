import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem,ListItemText } from 'material-ui/List';
import { DragSource } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Checkbox from 'material-ui/Checkbox';

const boxSource = {
	beginDrag(props,monitor, component) {
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

		return connectDragSource(<div>
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
			</div>);
	}
}


let DragListItem = DragSource('transfer', boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
	}))(DLI);

export  {DragListItem ,ListItemText };