import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem,ListItemText } from 'material-ui/List';
import { DragSource } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const boxSource = {
	beginDrag(props,monitor, component) {
		//const { id, left, top } = props
		return {id:'1235'};
	},
}

let DragListItem = DragSource('transfer', boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
	}))(ListItem);

export  {DragListItem ,ListItemText };