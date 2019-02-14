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
});

class Bubble extends React.Component {
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let self = nextProps.self;
    let index = nextProps.index;

    let ancestor = nextProps.ancestor;
    let floated = nextProps.floated;
    let direction = nextProps.direction;

    if (typeof ancestor != 'string') {
      if (typeof index !== 'undefined') {
        //有多个ancestor，应该改变ancestor与元素下标对应的
        if (floated == 'false') {
          //非悬浮，不需要设置self样式
          if (typeof self != 'undefined' && self.getAttribute('style') != null) {
            self.removeAttribute('style');
          }

          if (direction == 'left') {
            //左边
            ancestor[index].setAttribute(
              'style',
              'display: flex; justify-content: flex-start; align-items: center; flex-direction: row',
            );
          } else if (direction == 'right') {
            //右边
            ancestor[index].setAttribute(
              'style',
              'display: flex; justify-content: flex-start; align-items: center; flex-direction: row-reverse',
            );
          } else if (direction == 'top') {
            //上边
            ancestor[index].setAttribute(
              'style',
              'display: flex; justify-content: flex-start; align-items: center; flex-direction: column-reverse',
            );
          } else if (direction == 'bottom') {
            //下边
            ancestor[index].setAttribute(
              'style',
              'display: flex; justify-content: flex-start; align-items: center; flex-direction: column',
            );
          }
        } else {
          //悬浮，不需要设置ancestor样式
          if (typeof self != 'undefined' && typeof self != 'string') {
            if (ancestor[index].getAttribute('style') != null) {
              ancestor[index].removeAttribute('style');
            }

            if (direction == 'left') {
              //左边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            } else if (direction == 'right') {
              //右边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            } else if (direction == 'top') {
              //上边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            } else if (direction == 'bottom') {
              //下边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            }
          }
        }
      } else {
        //只有一个ancestor，不存在改变flex-direction的情况
        if (floated == 'false') {
          //非悬浮，不需要设置self样式
          if (typeof self != 'undefined' && self.getAttribute('style') != null) {
            self.removeAttribute('style');
          }

          if (direction == 'left') {
            //左边
            ancestor[0].setAttribute(
              'style',
              'display: flex; justify-content: flex-start; align-items: center; flex-direction: row',
            );
          } else if (direction == 'right') {
            //右边
            ancestor[0].setAttribute(
              'style',
              'display: flex; justify-content: flex-start; align-items: center; flex-direction: row-reverse',
            );
          } else if (direction == 'top') {
            //上边
            ancestor[0].setAttribute(
              'style',
              'display: flex; justify-content: flex-start; align-items: center; flex-direction: column-reverse',
            );
          } else if (direction == 'bottom') {
            //下边
            ancestor[0].setAttribute(
              'style',
              'display: flex; justify-content: flex-start; align-items: center; flex-direction: column',
            );
          }
        } else {
          //悬浮，不需要设置ancestor样式
          if (typeof self != 'undefined' && typeof self != 'string') {
            if (ancestor[0].getAttribute('style') != null) {
              ancestor[i].removeAttribute('style');
            }

            if (direction == 'left') {
              //左边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            } else if (direction == 'right') {
              //右边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            } else if (direction == 'top') {
              //上边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            } else if (direction == 'bottom') {
              //下边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            }
          }
        }
      }
    }

    /*for (let i = 0; i < ancestor.length; i++) {
        if (floated == 'false') {  //非悬浮，不需要设置self样式
          if (typeof self != 'undefined' && self.getAttribute('style') != null) {
            self.removeAttribute('style');
          }

          if (direction == 'left') {  //左边
            ancestor[i].setAttribute('style', 'display: flex; justify-content: flex-start; align-items: center; flex-direction: row',);
          }
          else if (direction == 'right') {  //右边
            ancestor[i].setAttribute('style', 'display: flex; justify-content: flex-start; align-items: center; flex-direction: row-reverse',);
          }
          else if (direction == 'top') {  //上边
            ancestor[i].setAttribute('style', 'display: flex; justify-content: flex-start; align-items: center; flex-direction: column',);
          }
          else if (direction == 'bottom') {  //下边
            ancestor[i].setAttribute('style', 'display: flex; justify-content: flex-start; align-items: center; flex-direction: column',
            );
          }
        }
        else {  //悬浮，不需要设置ancestor样式
          if (typeof self != 'undefined' && typeof self != 'string') {
            if (ancestor[i].getAttribute('style') != null) {
              ancestor[i].removeAttribute('style');
            }

            if (direction == 'left') {  //左边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            }
            else if (direction == 'right') {  //右边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            }
            else if (direction == 'top') {  //上边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            }
            else if (direction == 'bottom') {  //下边
              if (typeof self != 'undefined' && self.getAttribute('style') != null) {
                self.removeAttribute('style');
              }
            }
          }
        }
      }
    }*/

    return null;
  }

  componentDidUpdate(prevProps, prevStates) {
    //floated style
    if (document.getElementById('self') != null) {
      if (prevProps.direction == 'left' && prevProps.floated == 'true') {
        //悬浮+左边
        const dis =
          Number(document.getElementById('self').getBoundingClientRect().height) / 2 +
          prevProps.parent.height / 2;
        const transDis =
          typeof prevProps.triSize === 'undefined' ? 22 : Number(prevProps.triSize) + 10;
        const lFXDis =
          typeof prevProps.parent === 'undefined' ? 0 : prevProps.parent.width + transDis;

        document
          .getElementById('self')
          .setAttribute('style', 'transform: translate(' + lFXDis + 'px,' + -dis + 'px)');
      } else if (prevProps.direction == 'right' && prevProps.floated == 'true') {
        //悬浮+右边
        const dis =
          Number(document.getElementById('self').getBoundingClientRect().height) / 2 +
          prevProps.parent.height / 2;

        document
          .getElementById('self')
          .setAttribute('style', 'transform: translate(-100%,' + -dis + 'px)');
      } else if (prevProps.direction == 'top' && prevProps.floated == 'true') {
        //悬浮+上边
        const dis =
          document.getElementById('self').getBoundingClientRect().height +
          prevProps.parent.height +
          (typeof prevProps.triSize === 'undefined' ? 22 : Number(prevProps.triSize) + 10);
        document
          .getElementById('self')
          .setAttribute(
            'style',
            'transform: translate(' + -(prevProps.parent.width / 2) + 'px,' + -dis + 'px)',
          );
      } else if (prevProps.direction == 'bottom' && prevProps.floated == 'true') {
        //悬浮+下边
        const dis = typeof prevProps.triSize === 'undefined' ? 22 : Number(prevProps.triSize) + 10;
        document
          .getElementById('self')
          .setAttribute(
            'style',
            'transform: translate(' + -(prevProps.parent.width / 2) + 'px,' + dis + 'px)',
          );
      }
    }
  }

  render() {
    const { direction, floated, index, triSize, bgColor, classes } = this.props;
    const halfSize = typeof triSize === 'undefined' ? 6 : Number(triSize) / 2;
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
            style={{
              backgroundColor: typeof bgColor === 'undefined' ? 'white' : bgColor,
              position: 'relative',
            }}
          >
            {triResult}
            {this.props.children}
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
              position: 'relative',
            }}
          >
            {triResult}
            {this.props.children}
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
            id="self"
            className={recClassNames}
            style={{
              backgroundColor: typeof bgColor === 'undefined' ? 'cyan' : bgColor,
              position: 'relative',
            }}
          >
            {triResult}
            {this.props.children}
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
              position: 'relative',
            }}
          >
            {triResult}
            {this.props.children}
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
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            {triResult}
            <div
              className={recClassNames}
              style={{ backgroundColor: typeof bgColor === 'undefined' ? 'white' : bgColor }}
            >
              {this.props.children}
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
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <div
              className={recClassNames}
              style={{ backgroundColor: typeof bgColor === 'undefined' ? 'green' : bgColor }}
            >
              {this.props.children}
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
          <div id="transform">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <div
                className={recClassNames}
                style={{ backgroundColor: typeof bgColor === 'undefined' ? 'cyan' : bgColor }}
              >
                {this.props.children}
              </div>
              {triResult}
            </div>
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
            }}
          >
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
  triSize: PropTypes.number,
  bgColor: PropTypes.string,
};

export default withStyles(styles, { name: 'RMBubble' })(Bubble);
