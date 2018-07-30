import React, { Component, PureComponent } from 'react';
import { withStyles } from '@6thquake/react-material/styles';
import { DragSource2, ManualDragTarget, CustomDragLayer } from '@6thquake/react-material/Drag';

import Button from '@6thquake/react-material/Button';
import Icon from '@6thquake/react-material/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Paper from '@6thquake/react-material/Paper';
import IconButton from '@6thquake/react-material/IconButton';

import PropTypes from 'prop-types';
import BoxA from './BoxA';
import BoxB from './BoxB';
import TargetBox from './TargetBox';

// import Test from './test'
const styles = theme => ({
  root: {
    position: 'relative',
    width: '600px',
    height: '400px',
  },
  button: {
    margin: theme.spacing.unit,
  },
  dropTarget: {
    position: 'absolute',
    top: '100px',
  },
});
class DragToolBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snapToGridAfterDrop: false,
    };
  }
  render() {
    const { classes } = this.props;
    const { snapToGridAfterDrop } = this.state;
    return (
      <div className={classes.root}>
        <div>
          <DragSource2>
            <BoxA type="OUTITEM">
              <div>boxA</div>
            </BoxA>
          </DragSource2>
          <DragSource2>
            <BoxB type="OUTITEM">
              <div>boxB</div>
            </BoxB>
          </DragSource2>
        </div>

        <ManualDragTarget>
          <TargetBox acceptItem={['BoxB','BoxC']} snapToGrid={snapToGridAfterDrop} />
        </ManualDragTarget>
        <p>
          <label htmlFor="snapToGridAfterDrop">
            <input
              id="snapToGridAfterDrop"
              type="checkbox"
              checked={snapToGridAfterDrop}
              onChange={this.handleSnapToGridAfterDropChange.bind(this)}
            />
            <small>Snap to grid after drop</small>
          </label>
        </p>
      </div>
    );
  }
  handleSnapToGridAfterDropChange() {
    this.setState({
      snapToGridAfterDrop: !this.state.snapToGridAfterDrop,
    });
  }
}
export default withStyles(styles)(DragToolBox);
