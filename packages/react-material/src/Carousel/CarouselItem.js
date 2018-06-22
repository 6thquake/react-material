import React from 'react';
import ReactDOM from 'react-dom'
import { withStyles } from '../styles';


const styles = {
  imgwarp:{
    maxWidth:'500px',
    float:'left',
    overflow:'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    this.itemRef = React.createRef();
  }
  componentDidMount(){
    const itemEl = ReactDOM.findDOMNode(this.itemRef.current),
      parentEl = itemEl.parentNode.parentNode, 
    h = parentEl.offsetHeight,
    w = parentEl.offsetWidth;
    itemEl.style.height= h+'px';
    itemEl.style.width= w+'px';
    itemEl.children[0].style.minHeight=h+'px';
    itemEl.children[0].style.display='block';
  }

  render() {
    const {data,index,classes,size} = this.props;
    return (
      <div ref={this.itemRef} style={{'width':size.width+'px','height':size.height+'px',backgroundImage:'url('+data.src+')'}} alt={data.alt} className={classes.imgwarp}>
      </div>
    );
  }
}


export default withStyles(styles)(CarouselItem);