import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    pointerEvents: 'none',
    position: 'fixed',
    zIndex: theme.zIndex.tooltip + 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    background: 'transparent',
  },
  canvas: {
    display: 'none',
  },
  mark: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    visibility: 'hidden',
  },
  stretch: {
    backgroundRepeat: 'repeat',
  },
  'bottom-end': { backgroundPosition: 'bottom 0px right 0px' },
  'bottom-start': { backgroundPosition: 'bottom 0px left 0px' },
  bottom: { backgroundPosition: 'bottom' },
  'left-end': { backgroundPosition: 'bottom 0px left 0px' },
  'left-start': { backgroundPosition: 'top 0px left 0px' },
  left: { backgroundPosition: 'left' },
  'right-end': { backgroundPosition: 'bottom 0px right 0px' },
  'right-start': { backgroundPosition: 'top 0px right 0px' },
  right: { backgroundPosition: 'right' },
  'top-end': { backgroundPosition: 'top 0px right 0px' },
  'top-start': { backgroundPosition: 'top 0px left 0px' },
  top: { backgroundPosition: 'top' },
  center: {
    backgroundPosition: 'center',
  },
});

class Watermark extends React.Component {
  state = {
    mark: '',
  };

  canvas = null;

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.draw();
  }

  draw() {
    const ctx = this.ctx;
    if (!ctx) {
      return;
    }

    const { placement, text, fontSize, fontColor, spacing, theme } = this.props;
    let { degree } = this.props;

    if (Math.abs(degree) >= 180) {
      degree %= 180;
    }

    if (placement !== 'stretch') {
      degree = 0;
    }

    const deg = (degree * Math.PI) / 180;

    const { width, height } = this.textDom.getBoundingClientRect();

    const width2 = Math.cos(deg) * width + Math.sin(deg) * height + Math.sin(deg) * spacing;
    const height2 = Math.sin(deg) * width + Math.cos(deg) * height + Math.cos(deg) * spacing;

    this.canvas.width = width2;
    this.canvas.height = height2;

    ctx.rotate(deg);

    ctx.font = `${fontSize}px ${theme.typography.fontFamily}`;
    ctx.fillStyle = fontColor;
    ctx.fillText(text, Math.sin(deg) * spacing, Math.cos(deg) * spacing);

    const mark = this.canvas.toDataURL('image/png', 1);
    this.setState({
      mark,
    });
  }

  render() {
    const { mark } = this.state;
    const { placement, container, text, fontSize, spacing, classes } = this.props;

    const position = container === 'window' ? 'fixed' : 'absolute';

    const positionStyle = {
      position,
    };

    const style = {
      ...positionStyle,
    };

    const canvasStyle = {
      // width: size,
      // height: size,
    };
    const imgStyle = {
      ...positionStyle,
      'background-image': `url(${mark})`,
    };

    return (
      <div className={classes.root} style={style}>
        {mark && <div className={classNames(classes.mark, classes[placement])} style={imgStyle} />}
        <canvas
          ref={e => {
            this.canvas = e;
          }}
          className={classes.canvas}
          style={canvasStyle}
        />
        <span
          ref={e => {
            this.textDom = e;
          }}
          className={classes.text}
          style={{ fontSize, margin: spacing }}
        >
          {text}
        </span>
      </div>
    );
  }
}

Watermark.defaultProps = {
  text: '',
  placement: 'stretch',
  container: 'window',
  fontSize: 14,
  fontColor: 'rgba(0, 0, 0, 0.12)',
  degree: 45,
  spacing: 8,
};

Watermark.propTypes = {
  container: PropTypes.oneOf(['parent', 'window']),
  degree: PropTypes.number,
  fontColor: PropTypes.string,
  fontSize: PropTypes.number,
  placement: PropTypes.oneOf([
    'stretch',
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top',
  ]),
  spacing: PropTypes.number,
  text: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(Watermark);
