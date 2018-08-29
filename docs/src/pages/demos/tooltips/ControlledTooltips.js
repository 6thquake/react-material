import React from 'react';
import Button from '@6thquake/react-material/Button';
import Tooltip from '@6thquake/react-material/Tooltip';

class ControlledTooltips extends React.Component {
  state = {
    open: false,
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <Tooltip
        onClose={this.handleTooltipClose}
        onOpen={this.handleTooltipOpen}
        open={this.state.open}
        title="Add"
      >
        <Button>Controlled</Button>
      </Tooltip>
    );
  }
}

export default ControlledTooltips;
