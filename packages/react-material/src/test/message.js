import React , {Component} from 'react';
import RMMessage from '../Message/RMMessage';
const action = (
    <button color="secondary" size="small">
        lorem ipsum dolorem
    </button>
);
export default class ProgressTest extends Component {
    state = {
        open: false,
    };
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        return (
            <div>
                <button
                    onClick={this.handleOpen}>
                    Open Modal
                </button>
                <RMMessage open={this.state.open}
                         onClose={this.handleClose}
                           anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
                ><div>it is a test</div>
                </RMMessage>

            </div>

        );
    }
}
