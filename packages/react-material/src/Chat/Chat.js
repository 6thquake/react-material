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

    padding: 10,
  },
  triStyle: {
    width: 0,
    height: 0,
    position: 'absolute',
    top: '45%',
    display: 'inline-block',
    borderTopStyle: 'solid',
    borderTopColor: 'transparent',
    borderBottomStyle: 'solid',
    borderBottomColor: 'transparent',
  },
  /*
   * Default left & right pointed bubble style which can be changed in real applications.
   */
  customization: {
    fontSize: 15,
    fontFamily: 'calgary',
    borderRadius: 5,
    width: 'auto',
    height: 'auto',
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

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isLeft,
      content,
      avatarAlt,
      avatarSrc,
      triSize,
      rBgColor,
      lBgColor,
      classes,
    } = this.props;
    const halfSize = Number(triSize) / 2;

    const lRecClassNames = classNames(classes.recStyle, classes.customization);
    const lTriClassNames = classNames(classes.triStyle, classes.lBgColor);
    const rRecClassNames = classNames(classes.recStyle, classes.customization);
    const rTriClassNames = classNames(classes.triStyle, classes.lBgColor);

    return isLeft ? ( //left dialog chart
      <div style={{ float: 'left' }}>
        <div className={classes.wrapLStyle}>
          <Avatar alt={avatarAlt} src={avatarSrc} style={{ marginRight: 20 }} />
          <div className={lRecClassNames} style={{ backgroundColor: lBgColor }}>
            <div
              className={lTriClassNames}
              style={{
                borderRightWidth: triSize + 'px',
                borderRightStyle: 'solid',
                borderRightColor: lBgColor,
                borderBottomWidth: halfSize + 'px',
                borderTopWidth: halfSize + 'px',
                left: -triSize + 'px',
              }}
            />
            {content}
          </div>
        </div>
      </div>
    ) : (
      //right dialog chart
      <div style={{ float: 'right' }}>
        <div className={classes.wrapRStyle}>
          <div className={rRecClassNames} style={{ backgroundColor: rBgColor }}>
            <div
              className={rTriClassNames}
              style={{
                borderLeftWidth: triSize + 'px',
                borderLeftStyle: 'solid',
                borderLeftColor: rBgColor,
                borderBottomWidth: halfSize + 'px',
                borderTopWidth: halfSize + 'px',
                right: -triSize + 'px',
              }}
            />
            {content}
          </div>
          <Avatar alt={avatarAlt} src={avatarSrc} style={{ marginLeft: 20 }} />
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  /**
   *
   */
  isLeft: PropTypes.bool.isRequired,
  /**
   *
   */
   content: PropTypes.string.isRequired,
};

export default withStyles(styles, { name: 'RMChat' })(Chat);
