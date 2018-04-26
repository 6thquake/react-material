import React , {Component} from 'react';
import Modal  from 'react-material/Modal';
import Button from 'material-ui/Button'
import  {DialogActions, DialogContent, DialogContentText,} from 'material-ui/Dialog';

 class ModalTest extends Component {
   constructor(props){
     super(props);
     this.state= {
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
                <Button onClick={this.handleOpen}>Open Modal</Button>
                <Modal open={this.state.open}
                         onClose={this.handleClose}
                         label={'this is a modal test'}
                         animation={'zoom'}
                >
                    <div>
                      <DialogContent>
                        <DialogContentText>
                          Let Google help apps determine location. This means sending anonymous location data to
                          Google, even when no apps are running.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                          Disagree
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                          Agree
                        </Button>
                      </DialogActions>
                    </div>
                </Modal>
            </div>
        );
    }
}
export default ModalTest;
