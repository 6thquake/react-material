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
        src: '/static/images/grid-list/bike.jpg',
        alt: 'images-1',
      },
      {
        src: '/static/images/grid-list/mushroom.jpg',
        alt: 'images-2',
      },
      {
        src: '/static/images/grid-list/burgers.jpg',
        alt: 'images-3',
      },
      {
        src: '/static/images/grid-list/morning.jpg',
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

