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

  static getDerivedStateFromProps(nextProps, prevState) {
    let ancestor = nextProps.ancestor;
    let self = nextProps.self;
    let parent = nextProps.parent;
    let floated = nextProps.floated;
    let direction = nextProps.direction;
    const transHeight = Number(parent.height) / 2 + parent.height;

    if (floated == 'false') {//typeof(ancestor) != 'string') {
      if (typeof(ancestor) != 'string') {//floated == false) {
        if (direction == 'left') {
          if (self.getAttribute("style") != null) {
            self.removeAttribute("style");
          }
          ancestor.setAttribute("style", "display: flex; justify-content: flex-start; align-items: center; flex-direction: row");
        }
        else if (direction == 'right') {
          if (self.getAttribute("style") != null) {
            self.removeAttribute("style");
          }
          ancestor.setAttribute("style", "display: flex; justify-content: flex-start; align-items: center; flex-direction: row-reverse");
        }
        else if (direction == 'top') {
          if (self.getAttribute("style") != null) {
            self.removeAttribute("style");
          }
          ancestor.setAttribute("style", "display: flex; justify-content: flex-start; align-items: center; flex-direction: column-reverse");
        }
        else if (direction == 'bottom') {
          if (self.getAttribute("style") != null) {
            self.removeAttribute("style");
          }
          ancestor.setAttribute("style", "display: flex; justify-content: flex-start; align-items: center; flex-direction: column");
        }
      }
    }
    else {
      if (typeof(self) != 'string') {
        if (direction == 'left') {
          if (self.getAttribute("style") != null) {
            self.removeAttribute("style");
          }
          if (ancestor.getAttribute("style") != null) {
            ancestor.removeAttribute("style");
          }
        }
        else if (direction == 'right') {
          if (self.getAttribute("style") != null) {
            self.removeAttribute("style");
          }
          self.setAttribute("style", "transform: translate(-100%," + (-transHeight) + "px);");
          if (ancestor.getAttribute("style") != null) {
            ancestor.removeAttribute("style");
          }
        }
        else if (direction == 'top') {
          if (self.getAttribute("style") != null) {
            self.removeAttribute("style");
          }
          if (ancestor.getAttribute("style") != null) {
            ancestor.removeAttribute("style");
          }
        }
        else if (direction == 'bottom') {
          if (self.getAttribute("style") != null) {
            self.removeAttribute("style");
          }
          if (ancestor.getAttribute("style") != null) {
            ancestor.removeAttribute("style");
          }
        }
      }
    }

    return null;
  }

  componentDidUpdate(prevProps, prevStates) {
    //top style
    if (document.getElementById("self") != null) {
      if (prevProps.direction == 'top' && prevProps.floated == 'true') {
        const dis = document.getElementById("self").getBoundingClientRect().height + prevProps.parent.height + (typeof prevProps.triSize === 'undefined' ? 22 : Number(prevProps.triSize) + 10);
        document.getElementById('self').setAttribute("style", "transform: translate(" + (-(prevProps.parent.width / 2)) + "px," + (-dis) + "px)");
      }
      else if (prevProps.direction == 'bottom' && prevProps.floated == 'true') {
        const dis = typeof prevProps.triSize === 'undefined' ? 22 : Number(prevProps.triSize) + 10;
        document.getElementById('self').setAttribute("style", "transform: translate("+(-(prevProps.parent.width / 2))+"px,"+dis+"px)");
      }
    }
  }

  render() {
    const { parent, direction, floated, triSize, bgColor, classes } = this.props;
    const transHeight = Number(parent.height) / 2;
    const halfSize = typeof triSize === 'undefined' ? 6 : Number(triSize) / 2;
    const transDis = typeof triSize === 'undefined' ? 22 : Number(triSize) + 10;
    const lFXDis = parent.width + transDis;
    const lFYDis = parent.height + transHeight;
    const recClassNames = classNames(classes.recStyle, classes.customization);
    const triClassNames = classNames(classes.triStyle);
    let triResult;

    /*
    * Floated bubble
    */
    if (floated == 'true') {
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
            style={{ backgroundColor: typeof bgColor === 'undefined' ? 'white' : bgColor, position: 'relative', transform: 'translate('+lFXDis+'px,'+(-lFYDis)+'px)' }}>
            {triResult}
            {this.props.children}
          </div>
        );
      }
      else if (direction == 'right') {
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
          <div className={recClassNames}
               style={{ backgroundColor: typeof bgColor === 'undefined' ? 'green' : bgColor, position: 'relative' }}>
            {triResult}
            {this.props.children}
          </div>
        );
      }
      else if (direction == 'top') {
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
          <div id='self'
            className={recClassNames}
            style={{ backgroundColor: typeof bgColor === 'undefined' ? 'cyan' : bgColor, position: 'relative' }}
          >
            {triResult}
            {this.props.children}
          </div>
        );
      }
      else if (direction == 'bottom') {
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
            style={{ backgroundColor: typeof bgColor === 'undefined' ? 'blue' : bgColor, position: 'relative' }}
          >
            {triResult}
            {this.props.children}
          </div>
        );
      }
    }
    else {
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
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                {triResult}
                <div className={recClassNames} style={{ backgroundColor: typeof bgColor === 'undefined' ? 'white' : bgColor }}>
                  {this.props.children}
                </div>
              </div>
        );
      }
      else if (direction == 'right') {
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
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <div className={recClassNames}
                   style={{ backgroundColor: typeof bgColor === 'undefined' ? 'green' : bgColor }}>
                {this.props.children}
              </div>
              {triResult}
            </div>
        );
      }
      else if (direction == 'top') {
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
          <div id="transform">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <div className={recClassNames} style={{ backgroundColor: typeof bgColor === 'undefined' ? 'cyan' : bgColor }}>
              {this.props.children}
            </div>
            {triResult}
          </div>
          </div>
        );
      }
      else if (direction == 'bottom') {
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
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {triResult}
            <div
              className={recClassNames}
              style={{ backgroundColor: typeof bgColor === 'undefined' ? 'blue' : bgColor }}
            >
              {this.props.children}
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
