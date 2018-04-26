import React , {Component} from 'react';
import RMModal from '../Modal/RMModal';
import Slide from 'material-ui/transitions/Slide';

export default class ProgressTest extends Component {
    state = {
        open: false,
    };
    style={
        fontSize:'50px'
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
                <RMModal open={this.state.open}
                         onClose={this.handleClose}
                         label={'this is a modal test'}
                         animation={'zoom'}
                >
                    <div>
                        2345234234sdffffffffffffffffffffff
                        fffsdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
                        dfdfdfdfdfdfdfdfdfdfdfdf
                    </div>
                </RMModal>
            </div>

        );
    }
}
