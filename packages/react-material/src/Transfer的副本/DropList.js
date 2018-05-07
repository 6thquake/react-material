import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import { DropTarget, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const boxTarget = {
	drop(props, monitor, component) {
		const item = monitor.getItem()
		
	},

}

let C = DropTarget('transfer', boxTarget, connect => {
	return {
	connectDropTarget: connect.dropTarget(),
}})(List);

export default C;