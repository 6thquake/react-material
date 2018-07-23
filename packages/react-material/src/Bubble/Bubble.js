import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';

export var styles = theme => ({
  /*
   * Part of bubble rectangle & triangle style which will remain unchangeable.
   */
  recStyle: {
    //position: 'relative',
    minWidth: 30,
    minHeight: 30,
    maxWidth: 200,
    padding: 10,
  },
  triStyle: {
    width: 0,
    height: 0,
    display: 'inline-block',
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
});

class Bubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { direction, floated, content, triSize, bgColor, classes } = this.props;
    const halfSize = typeof triSize === 'undefined' ? 6 : Number(triSize) / 2;
    const transDis = typeof triSize === 'undefined' ? 22 : Number(triSize) + 10;

    const recClassNames = classNames(classes.recStyle, classes.customization);
    const triClassNames = classNames(classes.triStyle);
    let triResult;

    /*
    * Floated bubble
    */
    if (floated) {
      /*
      * Left sided arrow
      */
      if (direction == 'left') {
        triResult = (
          <div
            className={triClassNames}
            style={{
              borderRightWidth: (typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              borderRightStyle: 'solid',
              borderRightColor: typeof bgColor === 'undefined' ? 'white' : bgColor,
              borderTopWidth: halfSize + 'px',
              borderTopStyle: 'solid',
              borderTopColor: 'transparent',
              borderBottomWidth: halfSize + 'px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'transparent',
              left: -(typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              position: 'absolute',
              top: '50%',
              transform: 'translate(0, -50%)',
            }}
          />
        );

        return (
          <div
            className={recClassNames}
            style={{
              backgroundColor: typeof bgColor === 'undefined' ? 'white' : bgColor,
              position: 'absolute',
              transform: 'translate(' + transDis + 'px, -50%)',
              transform: 'translate(0, -50%)',
            }}
          >
            {triResult}
            {content}
          </div>
        );
      } else if (direction == 'right') {
      /*
      * Right sided arrow
      */
        triResult = (
          <div
            className={triClassNames}
            style={{
              borderLeftWidth: (typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              borderLeftStyle: 'solid',
              borderLeftColor: typeof bgColor === 'undefined' ? 'green' : bgColor,
              borderTopWidth: halfSize + 'px',
              borderTopStyle: 'solid',
              borderTopColor: 'transparent',
              borderBottomWidth: halfSize + 'px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'transparent',
              right: -(typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              position: 'absolute',
              top: '50%',
              transform: 'translate(0, -50%)',
            }}
          />
        );

        return (
          <div
            className={recClassNames}
            style={{
              backgroundColor: typeof bgColor === 'undefined' ? 'green' : bgColor,
              position: 'absolute',
              transform: 'translate(0, -50%)',
            }}
          >
            {triResult}
            {content}
          </div>
        );
      } else if (direction == 'top') {
      /*
      * Bottom sided arrow
      */
        triResult = (
          <div
            className={triClassNames}
            style={{
              borderTopWidth: (typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              borderTopStyle: 'solid',
              borderTopColor: typeof bgColor === 'undefined' ? 'cyan' : bgColor,
              borderLeftWidth: halfSize + 'px',
              borderLeftStyle: 'solid',
              borderLeftColor: 'transparent',
              borderRightWidth: halfSize + 'px',
              borderRightStyle: 'solid',
              borderRightColor: 'transparent',
              bottom: -(typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%, 0)',
            }}
          />
        );

        return (
          <div
            className={recClassNames}
            style={{
              backgroundColor: typeof bgColor === 'undefined' ? 'cyan' : bgColor,
              position: 'absolute',
              transform: 'translate(0, -150%)',
            }}
          >
            {triResult}
            {content}
          </div>
        );
      } else if (direction == 'bottom') {
      /*
      * Top sided arrow
      */
        triResult = (
          <div
            className={triClassNames}
            style={{
              borderBottomWidth: (typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              borderBottomStyle: 'solid',
              borderBottomColor: typeof bgColor === 'undefined' ? 'blue' : bgColor,
              borderLeftWidth: halfSize + 'px',
              borderLeftStyle: 'solid',
              borderLeftColor: 'transparent',
              borderRightWidth: halfSize + 'px',
              borderRightStyle: 'solid',
              borderRightColor: 'transparent',
              top: -(typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%, 0)',
            }}
          />
        );

        return (
          <div
            className={recClassNames}
            style={{
              backgroundColor: typeof bgColor === 'undefined' ? 'blue' : bgColor,
              position: 'absolute',
              transform: 'translate(0, ' + transDis + 'px)',
            }}
          >
            {triResult}
            {content}
          </div>
        );
      }
    } else {
    /*
    * Non-floated bubble
    */
      /*
      * Left sided arrow
      */
      if (direction == 'left') {
        triResult = (
          <div
            className={triClassNames}
            style={{
              borderRightWidth: (typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              borderRightStyle: 'solid',
              borderRightColor: typeof bgColor === 'undefined' ? 'white' : bgColor,
              borderTopWidth: halfSize + 'px',
              borderTopStyle: 'solid',
              borderTopColor: 'transparent',
              borderBottomWidth: halfSize + 'px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'transparent',
            }}
          />
        );

        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: triSize + 'px',
            }}
          >
            {triResult}
            <div
              className={recClassNames}
              style={{ backgroundColor: typeof bgColor === 'undefined' ? 'white' : bgColor }}
            >
              {content}
            </div>
          </div>
        );
      } else if (direction == 'right') {
      /*
      * Right sided arrow
      */
        triResult = (
          <div
            className={triClassNames}
            style={{
              borderLeftWidth: (typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              borderLeftStyle: 'solid',
              borderLeftColor: typeof bgColor === 'undefined' ? 'green' : bgColor,
              borderTopWidth: halfSize + 'px',
              borderTopStyle: 'solid',
              borderTopColor: 'transparent',
              borderBottomWidth: halfSize + 'px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'transparent',
            }}
          />
        );

        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: triSize + 'px',
            }}
          >
            <div
              className={recClassNames}
              style={{ backgroundColor: typeof bgColor === 'undefined' ? 'green' : bgColor }}
            >
              {content}
            </div>
            {triResult}
          </div>
        );
      } else if (direction == 'top') {
      /*
      * Bottom sided arrow
      */
        triResult = (
          <div
            className={triClassNames}
            style={{
              borderTopWidth: (typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              borderTopStyle: 'solid',
              borderTopColor: typeof bgColor === 'undefined' ? 'cyan' : bgColor,
              borderLeftWidth: halfSize + 'px',
              borderLeftStyle: 'solid',
              borderLeftColor: 'transparent',
              borderRightWidth: halfSize + 'px',
              borderRightStyle: 'solid',
              borderRightColor: 'transparent',
            }}
          />
        );

        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: triSize + 'px',
            }}
          >
            <div
              className={recClassNames}
              style={{ backgroundColor: typeof bgColor === 'undefined' ? 'cyan' : bgColor }}
            >
              {content}
            </div>
            {triResult}
          </div>
        );
      } else if (direction == 'bottom') {
      /*
      * Top sided arrow
      */
        triResult = (
          <div
            className={triClassNames}
            style={{
              borderBottomWidth: (typeof triSize === 'undefined' ? '12' : triSize) + 'px',
              borderBottomStyle: 'solid',
              borderBottomColor: typeof bgColor === 'undefined' ? 'blue' : bgColor,
              borderLeftWidth: halfSize + 'px',
              borderLeftStyle: 'solid',
              borderLeftColor: 'transparent',
              borderRightWidth: halfSize + 'px',
              borderRightStyle: 'solid',
              borderRightColor: 'transparent',
            }}
          />
        );

        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: triSize + 'px',
            }}
          >
            {triResult}
            <div
              className={recClassNames}
              style={{ backgroundColor: typeof bgColor === 'undefined' ? 'blue' : bgColor }}
            >
              {content}
            </div>
          </div>
        );
      }
    }
  }
}

Bubble.propTypes = {
  direction: PropTypes.string.isRequired,
  floated: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  triSize: PropTypes.number,
  bgColor: PropTypes.string,
};

export default withStyles(styles, { name: 'RMBubble' })(Bubble);
