import React, { Component } from 'react';

import { withStyles } from '../styles';

import Chip from '../Chip';

let styles = {
  color: {
    primaryLight: {
      background: '#7986cb',
      border: '0',
      color: '#fff',
      '&:focus': {
        background: '#7986cb',
      },
    },
    primaryMain: {
      background: '#3f51b5',
      border: '0',
      color: '#fff',

      '&:focus': {
        background: '#3f51b5',
      },
    },
    primaryDark: {
      background: '#303f9f',
      border: '0',
      color: '#fff',
      '&:focus': {
        background: '#303f9f',
      },
    },
    secondaryLight: {
      background: '#ff4081',
      border: '0',
      color: '#fff',
      '&:focus': {
        background: '#ff4081',
      },
    },
    secondaryMain: {
      background: '#f50057',
      border: '0',
      color: '#fff',
      '&:focus': {
        background: '#f50057',
      },
    },
    secondaryDark: {
      background: '#c51162',
      border: '0',
      color: '#fff',
      '&:focus': {
        background: '#c51162',
      },
    },
    errorLight: {
      background: '#e57373',
      border: '0',
      color: '#fff',
      '&:focus': {
        background: '#e57373',
      },
    },
    errorMain: {
      background: '#f44336',
      border: '0',
      color: '#fff',
      '&:focus': {
        background: '#e57373',
      },
    },
    errorDark: {
      background: '#d32f2f',
      border: '0',
      color: '#fff',
      '&:focus': {
        background: '#d32f2f',
      },
    },
  },
  size: {
    small: {
      minHeight: '28px',
      fontSize: '0.8125rem',
    },
    medium: {
      minHeight: '32px',
      fontSize: '0.875rem',
    },
    large: {
      minHeight: '36px',
      fontSize: '0.9375rem',
    },
  },
  mixin: {},
};

for (let color in styles.color) {
  for (let size in styles.size) {
    let _key = color + size;
    styles.mixin[_key] = { ...styles.color[color], ...styles.size[size] };
  }
}

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
      onClose: props.onClose,
      color: props.color,
      size: props.size,
      closable: props.closable,
    };
  }

  componentDidMount() {}

  handleDelete = e => {
    this.setState({ close: true });
    this.props.onClose(e);
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
  };

  render() {
    const { label, classes, ...props } = this.props;

    props.color = this.state.color;
    props.size = this.state.size;
    props.closable = this.state.closable;

    const { close } = this.state;

    const { color, size, closable } = props;

    const ChipShow = closable ? (
      <Chip
        classes={{ root: classes[color + size] }}
        onDelete={this.handleDelete.bind(this)}
        label={label}
      />
    ) : (
      <Chip classes={{ root: classes[color + size] }} label={label} />
    );
    return !close ? ChipShow : null;
  }
}

Tag.defaultProps = {
  size: 'medium',
  closable: false,
  color: 'primaryMain',
};

export default withStyles(styles.mixin, { name: 'RMTag' })(Tag);

/**
 * @ignore - do not document.
 */