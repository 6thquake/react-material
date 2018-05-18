
import React, { Component } from 'react';
import Dragable from 'react-material/DragableLayer';


export default class DragAroundNaive extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
			<div>
				
				<Dragable></Dragable>
			</div>
		)
	}
}