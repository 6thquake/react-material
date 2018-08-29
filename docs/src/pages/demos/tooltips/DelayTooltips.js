import React from 'react';
import Button from '@6thquake/react-material/Button';
import Tooltip from '@6thquake/react-material/Tooltip';

function DelayTooltips() {
  return (
    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms]</Button>
    </Tooltip>
  );
}

export default DelayTooltips;
