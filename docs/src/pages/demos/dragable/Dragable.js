import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import { Dragable } from 'react-material/Dragable';
import { Home, Grade, Lock} from '@material-ui/icons';


export default class DragAroundNaive extends Component {
	constructor(props) {
		super(props)
		this.handleHideSourceClick = this.handleHideSourceClick.bind(this)
		this.state = {
			hideSourceOnDrag: true,
		}
	}

	handleHideSourceClick() {
		this.setState({
			hideSourceOnDrag: !this.state.hideSourceOnDrag,
		})
	}

	render() {
		const { hideSourceOnDrag } = this.state

		return (
			<div>
				
				<Dragable hideSourceOnDrag={hideSourceOnDrag} />
				<p>
					<label htmlFor="hideSourceOnDrag">
						<input
							id="hideSourceOnDrag"
							type="checkbox"
							checked={hideSourceOnDrag}
							onChange={this.handleHideSourceClick}
						/>
						<small>Hide the source item while dragging</small>
					</label>
				</p>
			</div>
		)
	}
}