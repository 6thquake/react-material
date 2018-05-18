

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Home,Grade,Lock} from '@material-ui/icons';
import Panel from 'react-material/Panel';
//import Source from './Source';
import {DragSource as Source} from 'react-material/DragAndDrop';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider,DropTarget } from 'react-dnd';
import { StatusButton } from 'react-material/Button';



const styles={
	root:{
		position:'relative',
	}
}

class MyPanel extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		const defaultChildren=[(<div cols={4} rows={2}><StatusButton color="primary">默认的button</StatusButton></div>),
		(<div cols={5} rows={4}><div>默认的div1</div></div>),
		(<div cols={3} rows={2}><div>默认的div2</div></div>),
		(<div cols={4} rows={3}><div>默认的div3</div></div>)];
		return (
			<DragDropContextProvider backend={HTML5Backend}>

			<div>
			  <div >
				<div>
					<Source type={'DRAGIN'} ><StatusButton color="primary" cols={3} rows={2}>test button</StatusButton></Source>
					<Source type={'DRAGIN'}><div cols={3} rows={2}>test word</div></Source>
				</div>
				<Panel defaultChildren={defaultChildren} ></Panel>
			  </div>
			</div>
      		</DragDropContextProvider>

		)
	}
}

export default withStyles(styles)(MyPanel)