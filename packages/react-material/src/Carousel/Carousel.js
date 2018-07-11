import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import CarouselItem from './CarouselItem';
import CarouselDots from './CarouselDots';
import CarouselArrow from './CarouselArrow';

const styles = {
  root: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  scrollwrap: {
    overflow: 'hidden',
    transition: 'all .5s',
    WebkitTransition: 'all .5s',
  },
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    if (!!props.speed) {
      styles.scrollwrap.transition = 'all ' + props.speed + 's';
      styles.scrollwrap.WebkitTransition = 'all ' + props.speed + 's';
    }

    this.count = props.items.length;
    this.activeIndex = 0;

    this.carouselRef = React.createRef();
    this.carouselWarpRef = React.createRef();
    this.mainSize = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    let carouselEl = ReactDOM.findDOMNode(this.carouselRef.current),
      carouselWarpEl = ReactDOM.findDOMNode(this.carouselWarpRef.current),
      width = carouselEl.offsetWidth;
    this.mainSize = {
      width: carouselEl.offsetWidth,
      height: carouselEl.offsetHeight,
    };

    carouselWarpEl.style.minWidth = (this.count + 2) * width + 'px';
    carouselWarpEl.style.marginLeft = -1 * width + 'px';
    if (!!this.props.speed) {
      carouselWarpEl.style.transition = 'all ' + this.props.speed + 's';
      carouselWarpEl.style.WebkitTransition = 'all ' + this.props.speed + 's';
    }

    if (!!this.props.autoplay) {
      this.start();
    }
  }

  mouseOver = () => {
    if (!!this.props.pause) {
      clearInterval(this.interval);
    }
  };

  mouseOut = () => {
    if (!this.props.autoplay) {
      return;
    }

    if (!!this.props.pause) {
      this.start();
    }
  };

  start = () => {
    clearInterval(this.interval);
    this.next();
    this.interval = setInterval(() => {
      this.next();
    }, this.props.delay * 1000);
  };

  next = () => {
    const len = this.count,
      activeIndex = this.activeIndex,
      nextActiveIndex = activeIndex < len ? activeIndex + 1 : 0;
    const self = this;
    this.setActive(nextActiveIndex, true);
    if (activeIndex == len - 1) {
      setTimeout(function() {
        self.setActive(0, false);
      }, (self.props.speed || '0.5') * 1000);
    }
  };

  previous = () => {
    const len = this.count,
      activeIndex = this.activeIndex,
      preActiveIndex = activeIndex >= 0 ? activeIndex - 1 : len - 1;
    const self = this;
    this.setActive(preActiveIndex, true);
    if (activeIndex == 0) {
      setTimeout(function() {
        self.setActive(self.count - 1, false);
      }, (self.props.speed || '0.5') * 1000);
    }
  };

  setActive = (index, withAnimation) => {
    let carouselEl = ReactDOM.findDOMNode(this.carouselRef.current),
      carouselWarpEl = ReactDOM.findDOMNode(this.carouselWarpRef.current),
      width = carouselEl.offsetWidth;
    if (!withAnimation) {
      carouselWarpEl.style.transition = 'none';
      carouselWarpEl.style.WebkitTransition = 'none';
    } else {
      carouselWarpEl.style.transition = 'all ' + (this.props.speed || '0.5') + 's';
      carouselWarpEl.style.WebkitTransition = 'all ' + (this.props.speed || '0.5') + 's';
    }

    carouselWarpEl.style.marginLeft = -1 * (index + 1) * width + 'px';
    this.activeIndex = index;
    this.setState({
      temp: new Date().getTime(),
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { items, speed, delay, pause, autoplay, dots, arrows, classes } = this.props;
    const self = this;
    const _items = items.map((_, index) => {
      return <CarouselItem data={_} size={self.mainSize} key={'item' + index} index={index} />;
    });

    return (
      <div
        ref={this.carouselRef}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        className={classes.root}
      >
        <div ref={this.carouselWarpRef} className={classes.scrollwrap}>
          {<CarouselItem data={items[items.length - 1]} size={self.mainSize} index={-1} />}
          {_items}
          {<CarouselItem data={items[0]} size={self.mainSize} index={items.length} />}
        </div>
        {!!arrows ? <CarouselArrow next={this.next} pre={this.previous} /> : null}
        {!!dots ? (
          <CarouselDots
            count={items.length}
            speed={speed}
            activeIndex={this.activeIndex}
            onChange={this.setActive.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles, { name: 'RMCarousel' })(Carousel);
