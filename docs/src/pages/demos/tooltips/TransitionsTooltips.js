import React from 'react';
import Button from '@6thquake/react-material/Button';
import Tooltip from '@6thquake/react-material/Tooltip';
import Fade from '@6thquake/react-material/Fade';
import Zoom from '@6thquake/react-material/Zoom';

function TransitionsTooltips() {
  return (
    <div>
      <Tooltip title="Add">
        <Button>Grow</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
        <Button>Fade</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Add">
        <Button>Zoom</Button>
      </Tooltip>
    </div>
  );
}

export default TransitionsTooltips;
