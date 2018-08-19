import React from 'react';
import { withStyles } from '../styles';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';

const styles = {
  root: {
    width: '100%',
    height: '0',
    top: '50%',
    position: 'absolute',
    transform: 'translateY(-50%)',
  },
  arrow: {
    position: 'relative',
    top: '-15px',
    height: '30px',
    width: '30px',
    cursor: 'pointer',
    color: 'rgba(0,0,0,0.5)',
    '@global svg': {
      width: '100%',
      height: 'auto',
    },
  },
  pre: {
    float: 'left',
  },
  next: {
    float: 'right',
  },
};

class CarouselArrow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const { pre, next, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.pre + ' ' + classes.arrow} onClick={pre}>
          <ChevronLeft />
        </div>
        <div className={classes.next + ' ' + classes.arrow} onClick={next}>
          <ChevronRight />
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { name: 'RMCarouselArrow' })(CarouselArrow);
