import React from 'react';
import { withStyles } from 'material-ui/styles';

//<RMTransfer></RMTransfer> 
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
    textIndent:'-1000px',
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

  }
  componentDidMount(){
    if(!!this.props.speed){
      //this.refs.dot.childNodes.style.transition ='all '+this.props.speed+'s';
      //this.refs.dot.childNode.style.WebkitTransition ='all '+this.props.speed+'s';
      for(let i=0,len=this.refs.dot.childNodes.length;i<len;i++){
        this.refs.dot.childNodes[i].style.transition ='all '+this.props.speed+'s';
        this.refs.dot.childNodes[i].style.WebkitTransition ='all '+this.props.speed+'s';
      }
    }
    if(!!this.props.speed){
      styles.dot.transition ='all '+this.props.speed+'s';
      styles.dot.WebkitTransition ='all '+this.props.speed+'s';
    }
    
  }
  componentWillReceiveProps(nextProps) {
    
  }


  render() {
    const {onChange,count,actived,classes} = this.props;
    const _dots = [];
    for(let i=0;i<count;i++){
      _dots.push('dot');
    }
    const dots = _dots.map((_,index)=>{
      const _class = index == actived?classes.dot+' '+classes.actived: classes.dot;
      return <span key={index} className={_class}  onClick={()=>{onChange(index)}}>{index}</span>;
    })

    return (
      <div ref='dot' className={classes.root}>

        {dots}
      </div>
    );
  }
}


export default withStyles(styles)(CarouselDots);