import React, {Component} from 'react';
import {withStyles} from '../styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//todo small medium lage
const styles = theme => ({
  horizontal: {
    '@global button:first-child': {
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2
    },
    '@global button:last-child': {
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2
    }
  },
  vertical: {
    display: 'inline-block',
    verticalAlign: 'middle',
    '@global button:first-child': {
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2
    },
    '@global button:last-child': {
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2
    },
    '@global button': {
      width: '100%',
      maxWidth: '100%',
      display: 'block'
    }
  },
  group: {
    '@global button': {
      borderRadius: 0,
      transition:'all .5s cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    }
  }
});

class Group extends Component {
  changeRadius() {
    const {circular,position} = this.props;
    if(circular){
      const childNodes = this.group.childNodes,length=childNodes.length;
      if(length){
        if(position==='vertical'){
          console.log(9999)
          const radius = this.group.childNodes[0].offsetWidth/2;
          // const radius2 = this.group.childNodes[length-1].offsetWidth/2;
          this.group.childNodes[0].style.borderTopLeftRadius = radius+'px';
          this.group.childNodes[0].style.borderTopRightRadius = radius+'px';

          this.group.childNodes[length-1].style.borderBottomLeftRadius = radius+'px';
          this.group.childNodes[length-1].style.borderBottomRightRadius = radius+'px';
        }else{
          const radius = this.group.childNodes[0].offsetHeight/2;
          // const radius2 = this.group.childNodes[length-1].offsetHeight/2;

          this.group.childNodes[0].style.borderTopLeftRadius = radius+'px';
          this.group.childNodes[0].style.borderBottomLeftRadius = radius+'px';

          this.group.childNodes[length-1].style.borderTopRightRadius = radius+'px';
          this.group.childNodes[length-1].style.borderBottomRightRadius = radius+'px';
        }
      }
    }
  }
  componentDidMount(){
    this.changeRadius();
  }
  render() {
    const {children, position, className: classNamePro, classes} = this.props;
    const className = classNames({
      [classes.group]: true,
      [classes.vertical]: position === 'vertical',
      [classes.horizontal]: position === 'horizontal'
    }, classNamePro);
    return (
      <div className={className} ref={e=>this.group=e}>
        {children}
      </div>
    )
  }
}


Group.propTypes = {
  position: PropTypes.oneOf(['vertical', 'horizontal']),
  circular:PropTypes.bool
};

Group.defaultProps = {
  position: 'horizontal',
  circular:false
};

Group.childContextTypes = {
  resetActive: PropTypes.func
};

export default withStyles(styles)(Group);
