import React from 'react';
import { withStyles } from 'material-ui/styles';

//<RMTransfer></RMTransfer> 
const styles = {
  imgwarp:{
    maxWidth:'500px',
    float:'left',
    overflow:'hidden',
    '@global img':{
      width:'100%',
      height:'auto',
      display:'none'
    }
  }
};
class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
  
  }
  componentDidMount(){
    const parent = this.refs.item.parentNode.parentNode, 
    h = parent.offsetHeight,
    w = parent.offsetWidth;
    this.refs.item.style.height= h+'px';
    this.refs.item.style.width= w+'px';
    this.refs.item.children[0].style.minHeight=h+'px';
    this.refs.item.children[0].style.display='block';

  }

  render() {
    const {data,index,classes} = this.props;
    return (
      <div ref="item" className={classes.imgwarp}>
        <img src={data.src} alt={data.alt} />
      </div>
    );
  }
}


export default withStyles(styles)(CarouselItem);