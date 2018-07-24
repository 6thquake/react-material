import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { withStyles } from '@6thquake/react-material/styles';
import Panel from '@6thquake/react-material/Panel';
import { StatusButton } from '@6thquake/react-material/Button';
import { DragSource, withDragAndDrop } from '@6thquake/react-material/DragAndDrop';
import { Home, Grade, Lock } from '@material-ui/icons';

const styles = {
  root: {
    position: 'relative',
  },
  source: {
    display: 'inline-block',
  },
};

class MyPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const defaultChildren = [
      <div cols={4} rows={2}>
        <StatusButton color="primary">默认的button</StatusButton>
      </div>,
      <div cols={5} rows={2}>
        <div>默认的div1</div>
      </div>,
      <div cols={3} rows={2}>
        <div>默认的div2</div>
      </div>,
      <div cols={4} rows={2}>
        <div>默认的div3</div>
      </div>,
    ];
    return (
      <div>
        <div style={{ position: 'relative', paddingLeft: '140px' }}>
          <div
            style={{ position: 'absolute', width: '120px', height: '100%', left: '0px', top: '0' }}
          >
            <DragSource type={'DRAGIN'} className={classes.source}>
              <StatusButton color="primary" cols={3} rows={2}>
                test button
              </StatusButton>
            </DragSource>
            <DragSource type={'DRAGIN'} className={classes.source}>
              <div cols={3} rows={2}>
                test word
              </div>
            </DragSource>
          </div>
          <Panel defaultChildren={defaultChildren} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withDragAndDrop()(MyPanel));
