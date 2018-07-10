import React, {Component} from 'react';
import {withStyles} from '../styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { capitalize } from '../utils/helpers';
const styles = theme => ({
  sizeSmall: {
    '@global button':{
      padding: `${theme.spacing.unit - 1}px ${theme.spacing.unit}px`,
      minWidth: theme.spacing.unit * 8,
      minHeight: 32,
      fontSize: theme.typography.pxToRem(13)
    }
  },
  sizeLarge: {
    '@global button':{
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
      minWidth: theme.spacing.unit * 14,
      minHeight: 40,
      fontSize: theme.typography.pxToRem(15),
    }
  },
  horizontal: {
    '@global button:first-child': {
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4
    },
    '@global button:last-child': {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4
    }
  },
  vertical: {
    display: 'inline-block',
    verticalAlign: 'middle',
    '@global button:first-child': {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    },
    '@global button:last-child': {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4
    },
    '@global button': {
      width: '100%',
      maxWidth: '100%',
      display: 'block'
    }
  },
  horizontalCircularSmall:{
    '@global button:first-child': {
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16
    },
    '@global button:last-child': {
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16
    }
  },
  horizontalCircularMedium:{
    '@global button:first-child': {
      borderTopLeftRadius: 18,
      borderBottomLeftRadius: 18
    },
    '@global button:last-child': {
      borderTopRightRadius: 18,
      borderBottomRightRadius: 18
    }
  },
  horizontalCircularLarge:{
    '@global button:first-child': {
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20
    },
    '@global button:last-child': {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20
    }
  },


  verticalCircularSmall:{
    '@global button:first-child': {
      borderTopLeftRadius: theme.spacing.unit * 4,
      borderTopRightRadius: theme.spacing.unit * 4
    },
    '@global button:last-child': {
      borderBottomLeftRadius: theme.spacing.unit * 4,
      borderBottomRightRadius: theme.spacing.unit * 4
    },
  },
  verticalCircularMedium:{
    '@global button:first-child': {
      borderTopLeftRadius: theme.spacing.unit * 11/2,
      borderTopRightRadius: theme.spacing.unit * 11/2
    },
    '@global button:last-child': {
      borderBottomLeftRadius: theme.spacing.unit * 11/2,
      borderBottomRightRadius: theme.spacing.unit * 11/2
    }
  },
  verticalCircularLarge:{
    '@global button:first-child': {
      borderTopLeftRadius: theme.spacing.unit * 7,
      borderTopRightRadius: theme.spacing.unit * 7
    },
    '@global button:last-child': {
      borderBottomLeftRadius: theme.spacing.unit * 7,
      borderBottomRightRadius: theme.spacing.unit * 7
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
  render() {
    const {children, position, className: classNamePro, classes,size,circular} = this.props;
    const sizePostfix = capitalize(size);
    const className = classNames({
      [classes.group]: true,
      [classes.vertical]: position === 'vertical',
      [classes.horizontal]: position === 'horizontal',
      [classes[`size${sizePostfix}`]]: size !== 'medium',
      [classes[`${position}Circular${sizePostfix}`]]: circular,
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
  circular:PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Group.defaultProps = {
  position: 'horizontal',
  circular:false,
  size: 'medium'
};

export default withStyles(styles, { name: 'RMButtonGroup' })(Group);
