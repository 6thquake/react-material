import React , {Component} from 'react';
import Popconfirm from '../Popconfirm'
import Button from '@material-ui/core/Button';

class Test  extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  cancel=()=>{
    console.log('cancel')
  }
  confirm = ()=>{
    console.log('ojbk')
  }
  render() {
    const style = {
      left: '200px',
      top: '300px',
      position: 'absolute'
    }
    return (
      <div style={style}>
        <Popconfirm
          cancel={this.cancel}    //cancel callback
          confirm= {this.confirm}  // confirm callback
          
          cancelText = {'cancel'}
          confirmText = {'ok'}
          content={'Are you sure delete this task?'}
          // location
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <div>
            <Button variant="raised" color="secondary">
              Secondary
            </Button>
          </div>
        </Popconfirm>
      </div>
    );
  }
}

export default Test;