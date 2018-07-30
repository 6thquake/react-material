import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '../styles';
import Video from '../Video';
const styles = {
  imgwarp: {
    float: 'left',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width:'100%',
    height:'100%',
    '@global img': {
      width: '100%',
      height: 'auto',
      display: 'none',
    },
  },
  placeholder:{
    position:'relative',  
    zIndex:'2',
    '& div':{
      width:'100%',
      height:'100%',
    }
  }
};

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    
    // const itemEl = ReactDOM.findDOMNode(this.itemRef.current),
    //   parentEl = itemEl.parentNode.parentNode,
    // h = parentEl.offsetHeight,
    // w = parentEl.offsetWidth;
    //itemEl.style.height= h+'px';
    //itemEl.style.width= w+'px';
    //itemEl.children[0].style.minHeight=h+'px';
    //itemEl.children[0].style.display='block';
  }
  componentDidUpdate(){
    if(!!this.childVideo && !!this.props.data.isVideo){
      //this.props.onCleanInterval 清除interval
      //this.props.onResumeInterval 继续interval
      if(this.props.isCurrent){
        this.props.onCleanInterval();
        this.childVideo.play();

      }else{
        this.childVideo.pause();
      }
    }
  }

  onRef = (ref) => {
    this.childVideo = ref;
  }
  ended(){
    this.props.onResumeInterval()
  }

  render() {
    const { data, index, classes, size, isCurrent } = this.props;

    
    return (
      <div
        ref={this.itemRef}
        style={{
          width: size.width + 'px',
          height: size.height + 'px',
          backgroundImage: 'url(' + data.src||null + ')',
        }}
        alt={data.alt}
        className={classes.imgwarp}

      > 
      {
          !!data.url?(<a href={data.url} className={classes.placeholder} target="_blank">
          <div></div>
          </a>):null
        }
        {
          (!!data.src && !data.isVideo)?(<img src={data.src} alt={data.alt} />):null
        }
        {
          !!data.isVideo?(<Video
          onRef={this.onRef}
          controls={false}
          sources={[{ src: data.src, type: 'video/mp4' }]}
          ended = {this.ended.bind(this)}
          />):null

        }
      </div>
    );
  }
}

export default withStyles(styles, { name: 'RMCarouselItem' })(CarouselItem);
