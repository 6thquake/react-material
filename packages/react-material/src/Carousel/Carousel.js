import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import CarouselItem from './CarouselItem';
import CarouselDots from './CarouselDots';
import CarouselArrow from './CarouselArrow';


const styles = {
  root:{
    height:'100%',
    width:'100%',
    overflow:'hidden',
    position: 'relative'

  },
  scrollwrap:{
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

    this.count = props.items.length;
    this.activeIndex = 0

    this.carouselRef = React.createRef();
    this.carouselWarpRef = React.createRef();
  }

  componentDidMount() {
    let carouselEl = ReactDOM.findDOMNode(this.carouselRef.current),
        carouselWarpEl = ReactDOM.findDOMNode(this.carouselWarpRef.current),
        width = carouselEl.offsetWidth;

    carouselWarpEl.style.minWidth = this.count * width + 'px';
  
    if(!!this.props.speed) {
      carouselWarpEl.style.transition = 'all ' + this.props.speed + 's';
      carouselWarpEl.style.WebkitTransition = 'all ' + this.props.speed + 's';
    }
    
    if(!!this.props.autoplay) {
      this.start();
    }
  }

  mouseOver =()=>{
    if(!!this.props.pause){
      clearInterval(this.interval);
    }
  }

  mouseOut =()=>{
    if(!this.props.autoplay){
      return;
    }
    
    if(!!this.props.pause){
      this.start();
    }
  }

  start =()=>{
    clearInterval(this.interval);
    this.interval = setInterval(()=>{
      this.next()
    },this.props.delay*1000)
  }

  next = ()=>{
    const len = this.count, 
      activeIndex = this.activeIndex,
      nextActiveIndex = activeIndex < len-1 ? activeIndex + 1 : 0;

    this.setActive(nextActiveIndex);
  }

  previous = ()=>{
    const len = this.count, 
      activeIndex = this.activeIndex,
      preActiveIndex = activeIndex > 0 ? activeIndex - 1 : len - 1;

    this.setActive(preActiveIndex);
  }

  setActive=index=>{
    let carouselEl = ReactDOM.findDOMNode(this.carouselRef.current),
      carouselWarpEl = ReactDOM.findDOMNode(this.carouselWarpRef.current),
      width = carouselEl.offsetWidth;

    carouselWarpEl.style.marginLeft = -1 * index * width + 'px';
    this.activeIndex = index;
    this.setState({
      temp: new Date().getTime()
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { items,speed,delay,pause,autoplay,dots,arrows,classes } = this.props;
    
    const _items = items.map((_,index)=>{
      return <CarouselItem data={_} index={index}></CarouselItem>;
    });

    return (
      <div ref={this.carouselRef} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className={classes.root}>

        <div ref={this.carouselWarpRef} className={classes.scrollwrap}>
          {_items}
        </div>
        {!!arrows ? <CarouselArrow next={this.next} pre={this.previous}></CarouselArrow> : null}
        {!!dots ? <CarouselDots count={items.length} speed={speed} activeIndex={this.activeIndex} onChange={this.setActive.bind(this)}></CarouselDots> : null}   
      </div>
    );
  }
}


export default withStyles(styles)(Carousel);