import React, { Component } from 'react';
import { withStyles, createGenerateClassName } from '../styles';
import FormControlLabel from '../FormControlLabel';
import Button from '../Button';
import Radio from '@material-ui/core/Radio';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    background: '#fff',
    borderRadius: 0,
    // border: '1px solid  rgba(0, 0, 0, 0.23)',
    overflow: 'hidden',
  },
  label: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    borderRadius: 'inherit',
  },
  sizeSmall: {
    padding: `${theme.spacing.unit - 1}px ${theme.spacing.unit}px`,
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    fontSize: theme.typography.pxToRem(15),
  },
  vertical: {
    width: theme.spacing.unit * 11,
    '& span': {
      '& label': {
        '& span:last-child': {
          borderBottom: 0,
        },
      },
    },
    '&:first-child': {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    '&:last-child': {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      '& span': {
        '& label': {
          '& span:last-child': {
            borderBottom: '1px solid  rgba(0, 0, 0, 0.23)',
          },
        },
      },
    },
  },
  verticalMediumCircular: {
    '&:first-child': {
      borderTopLeftRadius: (theme.spacing.unit * 11) / 2,
      borderTopRightRadius: (theme.spacing.unit * 11) / 2,
    },
    '&:last-child': {
      borderBottomLeftRadius: (theme.spacing.unit * 11) / 2,
      borderBottomRightRadius: (theme.spacing.unit * 11) / 2,
    },
  },
  verticalSmallCircular: {
    '&:first-child': {
      borderTopLeftRadius: theme.spacing.unit * 4,
      borderTopRightRadius: theme.spacing.unit * 4,
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.spacing.unit * 4,
      borderBottomRightRadius: theme.spacing.unit * 4,
    },
  },
  verticalLargeCircular: {
    '&:first-child': {
      borderTopLeftRadius: theme.spacing.unit * 7,
      borderTopRightRadius: theme.spacing.unit * 7,
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.spacing.unit * 7,
      borderBottomRightRadius: theme.spacing.unit * 7,
    },
  },
  verticalSmall: {
    maxWidth: theme.spacing.unit * 8,
    minWidth: theme.spacing.unit * 8,
    minHeight: 32,
  },
  verticalLarge: {
    width: theme.spacing.unit * 14,
    minHeight: 40,
  },
  horizontal: {
    height: 36,
    '& span': {
      '& label': {
        '& span:last-child': {
          borderRight: 0,
        },
      },
    },
    '&:first-child': {
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
    },
    '&:last-child': {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      '& span': {
        '& label': {
          '& span:last-child': {
            borderRight: '1px solid  rgba(0, 0, 0, 0.23)',
          },
        },
      },
    },
  },
  horizontalSmall: {
    minWidth: theme.spacing.unit * 8,
    height: 32,
    minHeight: 32,
  },
  horizontalLarge: {
    minWidth: theme.spacing.unit * 14,
    height: 40,
  },
  horizontalSmallCircular: {
    '&:first-child': {
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
    },
    '&:last-child': {
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
    },
  },
  horizontalMediumCircular: {
    '&:first-child': {
      borderTopLeftRadius: 18,
      borderBottomLeftRadius: 18,
    },
    '&:last-child': {
      borderTopRightRadius: 18,
      borderBottomRightRadius: 18,
    },
  },
  horizontalLargeCircular: {
    '&:first-child': {
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    '&:last-child': {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
  },
});

class RadioButton extends Component {
  getButtonStyles() {
    const { row, size } = this.context;
    const position = row ? 'horizontal' : 'vertical';
    const postfix = size === 'small' ? 'Small' : 'Large';
    return position + postfix;
  }

  render() {
    const { classes, className: classNamePro, ...other } = this.props;
    const { disabled } = this.props;
    const { row, size, circular } = this.context;
    const Label = getLabel(other);
    const styles = this.getButtonStyles();
    const className = classNames(
      {
        [classes.vertical]: !row,
        [classes.horizontal]: row,
        [classes[styles]]: size !== 'medium',
        [classes[styles + 'Circular']]: circular,
      },
      classNamePro,
    );
    return (
      <Button
        className={className}
        classes={{
          root: classes.root,
          label: classes.label,
        }}
        color="primary"
        disabled={disabled}
      >
        <Label />
      </Button>
    );
  }
}
RadioButton.propTypes = {
  /**
   *  RadioButton 的value
   */
  value: PropTypes.string,
};

RadioButton.contextTypes = {
  row: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  circular: PropTypes.bool,
};

function getLabel(props) {
  const styles = theme => ({
    root: {
      margin: 0,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      borderRadius: 'inherit',
    },
    label: {
      width: '100%',
      height: '100%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'inherit',
      border: '1px solid  rgba(0, 0, 0, 0.23)',
    },
  });
  const { children, ...other } = props;

  function Label(props) {
    const { classes } = props;
    const Radio = getRadio(other);
    return (
      <FormControlLabel
        classes={{
          root: classes.root,
          label: classes.label,
        }}
        {...other}
        control={<Radio />}
        label={children}
      />
    );
  }

  return withStyles(styles, { name: 'RMLabel' })(Label);
}

function getRadio(props) {
  const styles = theme => ({
    root: {
      borderRadius: 'inherit',
      display: 'none',
    },
    checked: {
      '&+span': {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.light}`,
      },
    },
  });
  const radioProps = props;

  function R(props, context) {
    const { classes } = props;
    let { classes: classesPro } = context;
    classesPro = classesPro ? classesPro : {};
    return (
      <Radio
        {...radioProps}
        classes={{
          checked: classNames(classesPro.checked, classes.checked),
          root: classes.root,
        }}
      />
    );
  }
  R.contextTypes = {
    classes: PropTypes.object,
  };
  return withStyles(styles, { name: 'RMRadio' })(R);
}

export default withStyles(styles, { name: 'RMRadioButton' })(RadioButton);
