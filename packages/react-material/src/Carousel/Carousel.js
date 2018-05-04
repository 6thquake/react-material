import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CarouselItem from './CarouselItem';
import CarouselDots from './CarouselDots';
import CarouselArrow from './CarouselArrow';

//<RMTransfer></RMTransfer> 
let styles = {
  root:{
    height:'100%',
    width:'100%',
    overflow:'hidden',
    position: 'relative'

  },
  scrollwrap:{
    minWidth:'10000px',
    overflow:'hidden',
    transition: 'all .5s',
    WebkitTransition: 'all .5s'
  }
};
class Carousel extends React.Component {
  constructor(props) {
    
    super(props);
    if(!!props.speed){
      styles.scrollwrap.transition ='all '+props.speed+'s';
      styles.scrollwrap.WebkitTransition ='all '+props.speed+'s';
    }

    this.statusMsg = {
      count:props.items.length,
      current:0
    };
  
  }

  componentDidMount(){
    if(!!this.props.speed){
      this.refs.mycarouselwarp.style.transition ='all '+this.props.speed+'s';
      this.refs.mycarouselwarp.style.WebkitTransition ='all '+this.props.speed+'s';
      //styles.scrollwrap.transition ='all '+this.props.speed+'s';
     // styles.scrollwrap.WebkitTransition ='all '+this.props.speed+'s';
    }
    if(!!this._status.autoplay){
      this.startIntervalScroll();
    
    }
    
  }

  mouseoverFunc =()=>{
    if(!!this._status.pause){
      clearInterval(this.myinterval);
    }
  }
  mouseoutFunc =()=>{
    if(!this._status.autoplay){
      return;
    }
    
    if(!!this._status.pause){
      this.startIntervalScroll();
    }
  }
  startIntervalScroll =()=>{
    clearInterval(this.myinterval);
        const self = this;
        this.myinterval = setInterval(()=>{
          self.nextFunc()
    },this.props.delay*1000)

  }
  nextFunc = ()=>{
    const len = this.statusMsg.count, 
      curr = this.statusMsg.current,
      newCurr = curr<len-1?curr+1:0;

      this.activeItems(newCurr);
  }
  preFunc = ()=>{
    const len = this.statusMsg.count, 
      curr = this.statusMsg.current,
      newCurr = curr>0?curr-1:len-1;

      this.activeItems(newCurr);
      
  }
  activeItems=index=>{
    const w = this.refs.mycarousel.offsetWidth;
    this.refs.mycarouselwarp.style.marginLeft=-1*index*w+'px';
    this.statusMsg.current = index;
    this.setState({temp:new Date().getTime()})
  }


  render() {
    const { items,speed,delay,pause,autoplay,dots,arrows,classes } = this.props;
    this._status ={
      autoplay:(typeof autoplay) =='boolean' && !autoplay?false:true,
      pause:(typeof pause) =='boolean' && !pause?false:true
    }
    const _items = items.map((_,index)=>{
      return <CarouselItem data={_} index={index}></CarouselItem>;
    });
    
    

    return (
      <div ref="mycarousel" onMouseOver={this.mouseoverFunc} onMouseOut={this.mouseoutFunc} className={classes.root}>

        <div ref='mycarouselwarp' className={classes.scrollwrap}>
          {_items}
        </div>
        {!!arrows?<CarouselArrow next={this.nextFunc} pre={this.preFunc}></CarouselArrow>:null}
        {!!dots?<CarouselDots count={items.length} speed={speed} actived={this.statusMsg.current} onChange={this.activeItems.bind(this)}></CarouselDots>:null}   
      </div>
    );
  }
}


export default withStyles(styles)(Carousel);