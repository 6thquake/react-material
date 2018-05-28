import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Home,Grade,Lock} from '@material-ui/icons';
import Panel from 'react-material/Panel';
//import Source from './Source';
import {DragSource as Source} from 'react-material/DragAndDrop';
import { DropTarget } from 'react-dnd';
import { StatusButton } from 'react-material/Button';
import withDragAndDrop from 'react-material/DragAndDrop/withDragAndDrop'



const styles={
	root:{
		position:'relative',
	},
	source:{
		display:'inline-block',
	}
}

class MyPanel extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		const {classes} = this.props;
		const defaultChildren=[(<div cols={4} rows={2}><StatusButton color="primary">默认的button</StatusButton></div>),
		(<div cols={5} rows={2}><div>默认的div1</div></div>),
		(<div cols={3} rows={2}><div>默认的div2</div></div>),
		(<div cols={4} rows={2}><div>默认的div3</div></div>)];
		return (
			<div>
			  <div style={{position:'relative',paddingLeft: '140px'}}>
				<div style={{position:'absolute',width:'120px',height:'100%',left:'0px',top:'0'}}>
					<Source type={'DRAGIN'} className={classes.source}><StatusButton color="primary" cols={3} rows={2}>test button</StatusButton></Source>
					<Source type={'DRAGIN'} className={classes.source}><div cols={3} rows={2}>test word</div></Source>
				</div>
				<Panel defaultChildren={defaultChildren} ></Panel>
			  </div>
			</div>
		)
	}
}

export default withStyles(styles)(withDragAndDrop(MyPanel))