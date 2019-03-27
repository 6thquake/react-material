import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import { withRouter } from 'react-router-dom';
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
    const { size, theme, fontSize, fontColor } = this.props;
    const ctx = this.ctx;
    if (!ctx) {
      return;
    }
    const { text } = this.props;
    // const fontSize = theme.typography.fontSize;
    // const fontColor = theme.palette.divider;

    const deg = (45 * Math.PI) / 180;
    this.canvas.width = size;
    this.canvas.height = size;
    ctx.rotate(deg);
    ctx.font = `${fontSize}px ${theme.typography.fontFamily}`;
    ctx.fillStyle = fontColor;
    ctx.fillText(text, size / 2, 0);
    const mark = this.canvas.toDataURL('image/png', 1);
    this.setState({
      mark,
    });
  }

  render() {
    const { mark } = this.state;
    const { type, container, classes, size } = this.props;

    const position = container === 'window' ? 'fixed' : 'absolute';

    const positionStyle = {
      position,
    };

    const style = {
      ...positionStyle,
    };

    const canvasStyle = {
      width: size,
      height: size,
    };
    const imgStyle = {
      ...positionStyle,
      'background-image': `url(${mark})`,
    };

    return (
      <div className={classes.root} style={style}>
        {mark && <div className={classNames(classes.mark, classes[type])} style={imgStyle} />}
        <canvas
          ref={e => {
            this.canvas = e;
          }}
          className={classes.canvas}
          style={canvasStyle}
        />
      </div>
    );
  }
}

Watermark.defaultProps = {
  text: '',
  type: 'stretch', // stretch, rightBottom,
  container: 'window', // parent, window
  size: 100,
  fontSize: 14,
  fontColor: 'rgba(0, 0, 0, 0.12)',
};

Watermark.propTypes = {
  container: PropTypes.oneOf(['parent', 'window']),
  fontColor: PropTypes.string,
  fontSize: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text: PropTypes.string,
  type: PropTypes.oneOf(['stretch', 'rightBottom']),
};

export default withStyles(styles, { withTheme: true })(withRouter(Watermark));
