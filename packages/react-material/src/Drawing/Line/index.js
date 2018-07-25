import PropTypes from 'prop-types';
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PubSub from 'pubsub-js';
import Arrow from '../Arrow.js';
const defaultAnchor = { x: 0.5, y: 1 };
const defaultBorderColor = '#000';
const defaultBorderStyle = 'solid';
const defaultBorderWidth = 1;

const optionalStyleProps = {
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.number,
  className: PropTypes.string,
  zIndex: PropTypes.number,
};

export default class LineTo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromAnchor: 'center middle',
      toAnchor: 'center middle',
    };
  }
  componentWillMount() {
    //this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
    //this.toAnchor = this.parseAnchor(this.props.toAnchor);
    this.delay = this.parseDelay(this.props.delay);
  }

  componentDidMount() {
    this.delay = this.parseDelay(this.props.delay);
    if (typeof this.delay !== 'undefined') {
      this.deferUpdate(this.delay);
    }
    this.pubsub_token = PubSub.subscribe(
      'boxMove',
      function(msg, data) {
        this.setState({
          fromAnchor: data[0],
          toAnchor: data[1],
        });
      }.bind(this),
    );
  }
  componentWillReceiveProps(nextProps) {
    /*  if (nextProps.fromAnchor !== this.props.fromAnchor) {
            this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
        }
        if (nextProps.toAnchor !== this.props.toAnchor) {
            this.toAnchor = this.parseAnchor(this.props.toAnchor);
        }*/
    this.delay = this.parseDelay(nextProps.delay);
    if (typeof this.delay !== 'undefined') {
      this.deferUpdate(this.delay);
    }
  }

  componentWillUnmount() {
    if (this.t) {
      clearTimeout(this.t);
      this.t = null;
    }
  }

  shouldComponentUpdate() {
    // Always update component if the parent component has been updated.
    // The reason for this is that we would not only like to update
    // this component when the props have changed, but also when
    // the position of our target elements has changed.
    // We could return true only if the positions of `from` and `to` have
    // changed, but that may be expensive and unnecessary.
    return true;
  }

  // Forced update after delay (MS)
  deferUpdate(delay) {
    if (this.t) {
      clearTimeout(this.t);
    }
    this.t = setTimeout(() => this.forceUpdate(), delay);
  }

  parseDelay(value) {
    if (typeof value === 'undefined') {
      return value;
    } else if (typeof value === 'boolean' && value) {
      return 0;
    }
    const delay = parseInt(value, 10);
    if (isNaN(delay) || !isFinite(delay)) {
      throw new Error(`LinkTo could not parse delay attribute "${value}"`);
    }
    return delay;
  }

  parseAnchorText(value) {
    // Try to infer the relevant axis.
    switch (value) {
      case 'top':
        return { y: 0 };
      case 'left':
        return { x: 0 };
      case 'top-middle':
        return { y: 0.25 };
      case 'left-center':
        return { x: 0.25 };
      case 'middle':
        return { y: 0.5 };
      case 'center':
        return { x: 0.5 };
      case 'middle-bottom':
        return { y: 0.75 };
      case 'center-right':
        return { x: 0.75 };
      case 'bottom':
        return { y: 1 };
      case 'right':
        return { x: 1 };
    }
    return null;
  }

  parseAnchor(value) {
    if (!value) {
      return defaultAnchor;
    }
    const parts = value.split(' ');
    if (parts.length > 2) {
      throw new Error('LinkTo anchor format is "<x> <y>"');
    }
    const [x, y] = parts;
    return Object.assign(
      {},
      defaultAnchor,
      x ? this.parseAnchorText(x) : {},
      y ? this.parseAnchorText(y) : {},
    );
  }

  detect() {
    const { from, to } = this.props;
    if (!from || !to) {
      return false;
    }

    const anchor0 = this.parseAnchor(this.state.fromAnchor);
    const anchor1 = this.parseAnchor(this.state.toAnchor);
    const box0 = from.getBoundingClientRect();
    const box1 = to.getBoundingClientRect();

    let offsetX = window.pageXOffset;
    let offsetY = window.pageYOffset;

    const x0 = box0.left + box0.width * anchor0.x + offsetX;
    const x1 = box1.left + box1.width * anchor1.x + offsetX;
    const y0 = box0.top + box0.height * anchor0.y + offsetY;
    const y1 = box1.top + box1.height * anchor1.y + offsetY;

    return { x0, y0, x1, y1 };
  }

  render() {
    const points = this.detect();
    const doc = document.documentElement;
    const body = document.body;
    const offsetX =
      (doc.scrollLeft || body.scrollLeft || 0) - (doc.clientLeft || body.clientLeft || 0);
    const offsetY = (doc.scrollTop || body.scrollTop || 0) - (doc.clientTop || body.clientTop || 0);
    const toX = points.x1 - offsetX-120;
    const toY = points.y1 - offsetY-415;

    return points ? (
      <div>
        <Line {...points} {...this.props} toX={toX} toY={toY} />
      </div>
    ) : null;
  }
}

LineTo.propTypes = Object.assign(
  {},
  {
    // from: PropTypes.string.isRequired,
    // to: PropTypes.string.isRequired,
    // within: PropTypes.string,
    //fromAnchor: PropTypes.string,
    //toAnchor: PropTypes.string,
    delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  },
  optionalStyleProps,
);

export class Line extends PureComponent {
  componentDidMount() {
    document.body.appendChild(this.el);
    document.body.appendChild(this.arrow);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
    document.body.removeChild(this.arrow);
  }

  render() {
    const { x0, y0, x1, y1 } = this.props;
    const dy = y1 - y0;
    const dx = x1 - x0;

    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    const length = Math.sqrt(dx * dx + dy * dy);

    const linePositionStyle = {
      position: 'absolute',
      top: `${y0}px`,
      left: `${x0}px`,
      width: `${length}px`,
      zIndex: Number.isFinite(this.props.zIndex) ? String(this.props.zIndex) : '1',
      transform: `rotate(${angle}deg)`,
      // Rotate around (x0, y0)
      transformOrigin: '0 0',
    };

    const arrowPositionStyle = {
      transform: `rotate(${angle}deg )`,
      padding: '0',
      margin: '0',
      position: 'absolute',
      top: y1 - 10 + 'px',
      left: x1 - 5 + 'px',
      zIndex: '2',
    }
    const defaultStyle = {
      borderTopColor: this.props.borderColor || defaultBorderColor,
      borderTopStyle: this.props.borderStyle || defaultBorderStyle,
      borderTopWidth: this.props.borderWidth || defaultBorderWidth,
    };

    const lineprops = {
      //className: this.props.className,
      style: Object.assign({}, defaultStyle, linePositionStyle)
    };
    // We need a wrapper element to prevent an exception when then
    // React component is removed. This is because we manually
    // move the rendered DOM element after creation.
    return (
      <div>
        <div className="react-lineto-placeholder">
          <div
            ref={el => {
              this.el = el;
            }}
            {...lineprops}
          />
        </div>
        <div ref={arrow => {
                this.arrow = arrow;
              }}
              style={arrowPositionStyle}>
          <Arrow arrowStyle={this.props.arrowStyle} />
        </div>
      </div>

    );
  }
}

Line.propTypes = Object.assign(
  {},
  {
    x0: PropTypes.number.isRequired,
    y0: PropTypes.number.isRequired,
    x1: PropTypes.number.isRequired,
    y1: PropTypes.number.isRequired,
  },
  optionalStyleProps,
);
