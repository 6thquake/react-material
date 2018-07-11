import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './RMTooltip.css';

function getElementLeft(element) {
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;

  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }

  return actualLeft;
}

function getElementTop(element) {
  var actualTop = element.offsetTop;
  var current = element.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

class TooltipElement extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}
  componentWillUnmount() {}

  componentWillReceiveProps(nextProps) {}
  componentDidMount() {}

  render() {
    return ReactDOM.createPortal(
      <div
        className={`rm-tooltip ${!this.props.showTag && 'rm-tooltip-hidden'} rm-tooltip-placement-${
          this.props.placement
        }`}
        style={{ left: `${this.props.left}px`, top: `${this.props.top}px` }}
      >
        <div className="rm-tooltip-content">
          <div className="rm-tooltip-arrow" />
          <div className="rm-tooltip-inner">
            <span> {this.props.title} </span>
          </div>
        </div>
      </div>,
      document.body,
    );
  }
}

class RMTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      placement: props.placement,
      title: props.title,
      // getTooltipContainer: props.getTooltipContainer,
      // arrowPointAtCenter: props.arrowPointAtCenter,
      showTag: false,
      left: 0,
      top: 0,
      styleLeft: 0,
      styleTop: 0,
      elementWidth: 0,
      elementHeight: 0,
    };
    const position = [
      'top',
      'left',
      'right',
      'bottom',
      'topLeft',
      'topRight',
      'bottomLeft',
      'bottomRight',
      'leftTop',
      'leftBottom',
      'rightTop',
      'rightBottom',
    ];

    try {
      if (!this.state.placement) {
        this.state.placement = 'top';
      } else if (!position.includes(this.state.placement)) {
        throw new Error('not correct placement!!');
      }
      this.state.baseElemnet = React.Children.only(this.state.children); //验证是否只有唯一的根元素
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {}
  componentDidUpdate() {
    let tooltip = ReactDOM.findDOMNode(this);

    const positionGroup = {
      top: ['topLeft', 'top', 'topRight'],
      right: ['rightTop', 'right', 'rightBottom'],
      bottom: ['bottomLeft', 'bottom', 'bottomRight'],
      left: ['leftTop', 'left', 'leftBottom'],
    };

    this.state.TooltipElementDomWidth = tooltip.clientWidth;
    this.state.TooltipElementDomHeight = tooltip.clientHeight;

    if (positionGroup.top.includes(this.state.placement)) {
      //top Group
      if (this.state.placement == 'top') {
        //top
        if (parseInt(this.state.TooltipElementDomWidth) >= parseInt(this.state.elementWidth)) {
          //tooltip宽度大于基本元素宽度
          let diff =
            parseInt(this.state.TooltipElementDomWidth) / 2 - parseInt(this.state.elementWidth) / 2;
          this.state.styleLeft = this.state.styleLeft - diff;
        } else {
          let diff =
            parseInt(this.state.elementWidth) / 2 - parseInt(this.state.TooltipElementDomWidth) / 2;
          this.state.styleLeft = this.state.styleLeft + diff;
        }
      } else if (this.state.placement == 'topRight') {
        //topRight
        if (parseInt(this.state.TooltipElementDomWidth) >= parseInt(this.state.elementWidth)) {
          //tooltip宽度大于基本元素宽度
          let diff =
            parseInt(this.state.TooltipElementDomWidth) - parseInt(this.state.elementWidth);
          this.state.styleLeft = this.state.styleLeft - diff;
        } else {
          let diff =
            parseInt(this.state.elementWidth) - parseInt(this.state.TooltipElementDomWidth);
          this.state.styleLeft = this.state.styleLeft + diff;
        }
      }

      this.state.styleTop = this.state.styleTop - this.state.TooltipElementDomHeight;
    } else if (positionGroup.right.includes(this.state.placement)) {
      //右侧
      if (this.state.placement == 'right') {
        if (parseInt(this.state.TooltipElementDomHeight) >= parseInt(this.state.elementHeight)) {
          //tooltip宽度大于基本元素高度
          let diff =
            parseInt(this.state.TooltipElementDomHeight) / 2 -
            parseInt(this.state.elementHeight) / 2;
          this.state.styleTop = this.state.styleTop - diff;
        } else {
          let diff =
            parseInt(this.state.elementHeight) / 2 -
            parseInt(this.state.TooltipElementDomHeight) / 2;
          this.state.styleTop = this.state.styleTop + diff;
        }
      } else if (this.state.placement == 'rightBottom') {
        if (parseInt(this.state.TooltipElementDomHeight) >= parseInt(this.state.elementHeight)) {
          //tooltip宽度大于基本元素高度
          let diff =
            parseInt(this.state.TooltipElementDomHeight) - parseInt(this.state.elementHeight);
          this.state.styleTop = this.state.styleTop - diff;
        } else {
          let diff =
            parseInt(this.state.elementHeight) - parseInt(this.state.TooltipElementDomHeight);
          this.state.styleTop = this.state.styleTop + diff;
        }
      }
      this.state.styleLeft = this.state.styleLeft + this.state.elementWidth;
    } else if (positionGroup.bottom.includes(this.state.placement)) {
      //底部
      if (this.state.placement == 'bottom') {
        if (parseInt(this.state.TooltipElementDomWidth) >= parseInt(this.state.elementWidth)) {
          //tooltip宽度大于基本元素宽度
          let diff =
            parseInt(this.state.TooltipElementDomWidth) / 2 - parseInt(this.state.elementWidth) / 2;
          this.state.styleLeft = this.state.styleLeft - diff;
        } else {
          let diff =
            parseInt(this.state.elementWidth) / 2 - parseInt(this.state.TooltipElementDomWidth) / 2;
          this.state.styleLeft = this.state.styleLeft + diff;
        }
      } else if (this.state.placement == 'bottomRight') {
        if (parseInt(this.state.TooltipElementDomWidth) >= parseInt(this.state.elementWidth)) {
          //tooltip宽度大于基本元素宽度
          let diff =
            parseInt(this.state.TooltipElementDomWidth) - parseInt(this.state.elementWidth);
          this.state.styleLeft = this.state.styleLeft - diff;
        } else {
          let diff =
            parseInt(this.state.elementWidth) - parseInt(this.state.TooltipElementDomWidth);
          this.state.styleLeft = this.state.styleLeft + diff;
        }
      }
      this.state.styleTop = this.state.styleTop + this.state.elementHeight;
    } else if (positionGroup.left.includes(this.state.placement)) {
      //left
      if (this.state.placement == 'left') {
        if (parseInt(this.state.TooltipElementDomHeight) >= parseInt(this.state.elementHeight)) {
          //tooltip宽度大于基本元素高度
          let diff =
            parseInt(this.state.TooltipElementDomHeight) / 2 -
            parseInt(this.state.elementHeight) / 2;
          this.state.styleTop = this.state.styleTop - diff;
        } else {
          let diff =
            parseInt(this.state.elementHeight) / 2 -
            parseInt(this.state.TooltipElementDomHeight) / 2;
          this.state.styleTop = this.state.styleTop + diff;
        }
      } else if (this.state.placement == 'leftBottom') {
        if (parseInt(this.state.TooltipElementDomHeight) >= parseInt(this.state.elementHeight)) {
          //tooltip宽度大于基本元素高度
          let diff =
            parseInt(this.state.TooltipElementDomHeight) - parseInt(this.state.elementHeight);
          this.state.styleTop = this.state.styleTop - diff;
        } else {
          let diff =
            parseInt(this.state.elementHeight) - parseInt(this.state.TooltipElementDomHeight);
          this.state.styleTop = this.state.styleTop + diff;
        }
      }
      this.state.styleLeft = this.state.styleLeft - this.state.TooltipElementDomWidth;
    } else {
      return false;
    }

    tooltip.style.left = this.state.styleLeft + 'px';
    tooltip.style.top = this.state.styleTop + 'px';
  }

  componentWillUnmount() {}

  onMouseOver = e => {
    e.preventDefault();
    this.setState({ showTag: true });

    let styleLeft = getElementLeft(e.currentTarget);
    let styleTop = getElementTop(e.currentTarget);

    const elementWidth = e.currentTarget.offsetWidth;
    const elementHeight = e.currentTarget.offsetHeight;

    this.setState({ styleLeft: styleLeft });
    this.setState({ styleTop: styleTop });
    this.setState({ elementWidth: elementWidth });
    this.setState({ elementHeight: elementHeight });

    const positionGroup = {
      top: ['topLeft', 'top', 'topRight'],
      right: ['rightTop', 'right', 'rightBottom'],
      bottom: ['bottomLeft', 'bottom', 'bottomRight'],
      left: ['leftTop', 'left', 'leftBottom'],
    };

    /*  setTimeout(() => {
            let TooltipElementDom = ReactDOM.findDOMNode(this);
            this.state.TooltipElementDomWidth = TooltipElementDom.clientWidth;
            this.state.TooltipElementDomHeight = TooltipElementDom.clientHeight;

            if (positionGroup.top.includes(this.state.placement)) {//top Group

                if(this.state.placement ==  "top"){//top
                    if (parseInt(this.state.TooltipElementDomWidth) >= parseInt(elementWidth)) {//tooltip宽度大于基本元素宽度
                        let diff = parseInt(this.state.TooltipElementDomWidth) / 2 - parseInt(elementWidth) / 2;
                        styleLeft = styleLeft - diff;
                    } else {
                        let diff = parseInt(elementWidth) / 2 - parseInt(this.state.TooltipElementDomWidth) / 2;
                        styleLeft = styleLeft + diff;
                    }
    
                }else if(this.state.placement ==  "topRight"){//topRight
                    if (parseInt(this.state.TooltipElementDomWidth) >= parseInt(elementWidth)) {//tooltip宽度大于基本元素宽度
                        let diff = parseInt(this.state.TooltipElementDomWidth) - parseInt(elementWidth) ;
                        styleLeft = styleLeft - diff;
                    } else {
                        let diff = parseInt(elementWidth) - parseInt(this.state.TooltipElementDomWidth) ;
                        styleLeft = styleLeft + diff;
                    }
                }

                styleTop = styleTop - this.state.TooltipElementDomHeight;

            } else if (positionGroup.right.includes(this.state.placement)) {//右侧
                if(this.state.placement ==  "right"){
                    if (parseInt(this.state.TooltipElementDomHeight) >= parseInt(elementHeight)) {//tooltip宽度大于基本元素高度
                        let diff = parseInt(this.state.TooltipElementDomHeight) / 2 - parseInt(elementHeight) / 2;
                        styleTop = styleTop - diff;
                    } else {
                        let diff = parseInt(elementHeight) / 2 - parseInt(this.state.TooltipElementDomHeight) / 2;
                        styleTop = styleTop + diff;
                    }
                }else if(this.state.placement ==  "rightBottom"){
                    if (parseInt(this.state.TooltipElementDomHeight) >= parseInt(elementHeight)) {//tooltip宽度大于基本元素高度
                        let diff = parseInt(this.state.TooltipElementDomHeight)  - parseInt(elementHeight) ;
                        styleTop = styleTop - diff;
                    } else {
                        let diff = parseInt(elementHeight)  - parseInt(this.state.TooltipElementDomHeight) ;
                        styleTop = styleTop + diff;
                    }
                }
                

                styleLeft = styleLeft + elementWidth;
            } else if (positionGroup.bottom.includes(this.state.placement)) {//底部

                if(this.state.placement ==  "bottom"){
                    if (parseInt(this.state.TooltipElementDomWidth) >=parseInt(elementWidth)) {//tooltip宽度大于基本元素宽度
                        let diff = parseInt(this.state.TooltipElementDomWidth) / 2 - parseInt(elementWidth) / 2;
                        styleLeft = styleLeft - diff;
                    } else {
                        let diff = parseInt(elementWidth) / 2 - parseInt(this.state.TooltipElementDomWidth) / 2;
                        styleLeft = styleLeft + diff;
                    }
                }else if(this.state.placement ==  "bottomRight"){
                    if (parseInt(this.state.TooltipElementDomWidth) >=parseInt(elementWidth)) {//tooltip宽度大于基本元素宽度
                        let diff = parseInt(this.state.TooltipElementDomWidth)  - parseInt(elementWidth);
                        styleLeft = styleLeft - diff;
                    } else {
                        let diff = parseInt(elementWidth)  - parseInt(this.state.TooltipElementDomWidth);
                        styleLeft = styleLeft + diff;
                    }
                }
                styleTop = styleTop + elementHeight;
            } else if (positionGroup.left.includes(this.state.placement)) {//left
                if(this.state.placement ==  "left"){
                    if (parseInt(this.state.TooltipElementDomHeight) >= parseInt(elementHeight)) {//tooltip宽度大于基本元素高度
                        let diff = parseInt(this.state.TooltipElementDomHeight) / 2 - parseInt(elementHeight) / 2;
                        styleTop = styleTop - diff;
                    } else {
                        let diff = parseInt(elementHeight) / 2 - parseInt(this.state.TooltipElementDomHeight) / 2;
                        styleTop = styleTop + diff;
                    }
                }else if(this.state.placement ==  "leftBottom"){
                    if (parseInt(this.state.TooltipElementDomHeight) >= parseInt(elementHeight)) {//tooltip宽度大于基本元素高度
                        let diff = parseInt(this.state.TooltipElementDomHeight)  - parseInt(elementHeight) ;
                        styleTop = styleTop - diff;
                    } else {
                        let diff = parseInt(elementHeight)  - parseInt(this.state.TooltipElementDomHeight) ;
                        styleTop = styleTop + diff;
                    }
                }
                styleLeft = styleLeft - this.state.TooltipElementDomWidth;
            } else {
                return false;
            }



            this.setState({ left: styleLeft });
            this.setState({ top: styleTop });
        }, 0); */
  };

  onMouseOut = e => {
    e.preventDefault();
    this.setState({ showTag: false });
  };

  render() {
    const childrenWithProps = React.cloneElement(this.state.baseElemnet, {
      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut,
    });

    return (
      <React.Fragment>
        <TooltipElement {...this.state} />
        {childrenWithProps}
      </React.Fragment>
    );
  }
}

export default RMTooltip;
