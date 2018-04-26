import React , {Component} from 'react';
import Message from 'react-material/Message';
import Button from 'material-ui/Button'

export default class MessageTest extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <Button
          onClick={this.handleOpen}>
          Open Message
        </Button>
        <Message open={this.state.open}
                 onClose={this.handleClose}
                 anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
        ><div>it is a test</div>
        </Message>

      </div>

    );
  }
}
