import React from 'react';
import classNames from 'classnames';
import Avatar from '../Avatar';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';

/*
 * To set styles used for render in App.
*/
export const renderStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

export const styles = theme => ({
  /*
   * Part of bubble rectangle & triangle style which will remain unchangeable.
   */
  recStyle: {
    position: 'relative',
    minWidth: 30,
    minHeight: 30,
    maxWidth: 200,
    height: 'auto',
    width: 'auto',
    padding: 10,
  },
  triStyle: {
    width: 0,
    height: 0,
    position: 'absolute',
    top: '45%',
    display: 'inline-block',
  },
  /*
   * Default left & right pointed bubble style which can be changed in real applications.
   */
  lRectangle: {
    backgroundColor: 'white',
    fontSize: 15,
    fontFamily: '楷体',
    borderRadius: 5,
  },
  lTriangle: {
    borderRight: '12px solid white',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    left: -12,
  },
  rRectangle: {
    backgroundColor: 'cyan',
    fontSize: 15,
    fontFamily: '楷体',
    borderRadius: 5,
  },
  rTriangle: {
    borderLeft: '12px solid cyan',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    right: -12,
  },
  /*
   * Default text shown inside the bubble. Mainly used for demos.
   */
  content: 'This is only a test text for bubble dialog content. Please specify your own content.',
  /*
   * To set bubble triangle & avatar pointed on the same baseline and remained on the left / right of chatting box.
   */
  wrapLStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    float: 'left',
  },
  wrapRStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    float: 'right',
  },
});

class Bubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLeft, content, alt, src, classes } = this.props;

    const lRecClassNames = classNames(classes.recStyle, classes.lRectangle);
    const lTriClassNames = classNames(classes.triStyle, classes.lTriangle);
    const rRecClassNames = classNames(classes.recStyle, classes.rRectangle);
    const rTriClassNames = classNames(classes.triStyle, classes.rTriangle);

    if (isLeft) {
      return (
        <div style={{ float: 'left' }}>
          <div className={classes.wrapLStyle}>
            <Avatar alt={alt} src={src} style={{ marginRight: 20 }} />
            <div className={lRecClassNames}>
              <div className={lTriClassNames} />
              {content}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ float: 'right' }}>
          <div className={classes.wrapRStyle}>
            <div className={rRecClassNames}>
              <div className={rTriClassNames} />
              {content}
            </div>
            <Avatar alt={alt} src={src} style={{ marginLeft: 20 }} />
          </div>
        </div>
      );
    }
  }
}

Bubble.propTypes = {
  isLeft: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
};

export default withStyles(styles)(Bubble);
