import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Carousel from 'react-material/Carousel';
import { Home, Grade, Lock } from '@material-ui/icons';

const style={
  wrap:{
    width:'500px',
    height:'300px'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.IMAGE_DATA = [
      {
        src: '/static/carouselimg/1.jpg',
        alt: 'images-1',
      },
      {
        src: '/static/carouselimg/2.jpg',
        alt: 'images-2',
      },
      {
        src: '/static/carouselimg/3.jpg',
        alt: 'images-3',
      },
      {
        src: '/static/carouselimg/4.jpg',
        alt: 'images-4',
      }
    ];
  }

  render() {
    return (
      <div style={style.wrap} >
        <Carousel items={this.IMAGE_DATA}
          speed={1.5}
          delay={2.1}
          pause={true}
          autoplay={true}
          dots={true}
          arrows={true}>
        </Carousel>
      </div>
    );
  }
}
export default App;

