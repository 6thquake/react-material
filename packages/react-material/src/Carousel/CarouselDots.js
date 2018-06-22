import React from 'react';
import ReactDOM from 'react-dom'
import { withStyles } from '../styles';


const styles = {
  root:{
    position:'absolute',
    width:'100%',
    height:'5px',
    textAlign:'center',
    bottom:'2em'
  },
  dot:{
    display:'inline-block',
    width:'10px',
    background:'green',
    margin:'0 0.5em',
    height:'100%',
    textIndent:'-10000px',
    overflow:'hidden',
    transition: 'all .5s',
    WebkitTransition: 'all .5s',
    background:'rgba(255,255,255,0.5)',
    cursor:'pointer'
  },
  actived:{
    width:'30px',
    background:'rgba(255,255,255,1)'
  }
};

class CarouselDots extends React.Component {
  constructor(props) {
    super(props);
    if(!!props.speed){
      styles.dot.transition ='all '+props.speed+'s';
      styles.dot.WebkitTransition ='all '+props.speed+'s';
    }
    this.dotRef = React.createRef();
  }
  componentDidMount(){
    if(!!this.props.speed){
      let dotEl = ReactDOM.findDOMNode(this.dotRef.current),
        nodes = dotEl.childNodes,
        speed = this.props.speed;
      for(let i=0, len=nodes.length; i<len; i++){
        nodes[i].style.transition ='all '+speed+'s';
        nodes[i].style.WebkitTransition ='all '+speed+'s';
      }
    }
    if(!!this.props.speed){
      styles.dot.transition ='all '+this.props.speed+'s';
      styles.dot.WebkitTransition ='all '+this.props.speed+'s';
    }
  }

  render() {
    const {onChange,count,activeIndex,classes} = this.props;
    let _activeIndex = activeIndex;
    //activeIndex 0123
    if(_activeIndex==-1){
      _activeIndex=count-1;
    }else if(_activeIndex==count){
      _activeIndex=0;
    }
    const _dots = [];
    for(let i=0;i<count;i++){
      _dots.push('dot');
    }
    const dots = _dots.map((_,index)=>{
      const _class = index == _activeIndex?classes.dot+' '+classes.actived: classes.dot;
      return <span key={index} className={_class}  onClick={()=>{onChange(index,true)}}>{index}</span>;
    })

    return (
      <div ref={this.dotRef} className={classes.root}>
        {dots}
      </div>
    );
  }
}


export default withStyles(styles)(CarouselDots);