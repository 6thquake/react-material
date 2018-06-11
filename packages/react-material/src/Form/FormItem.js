import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import {PercentageGrid as Grid} from '../Grid';
// import Grid from '../Grid';

const style = theme => ({
  'form-item': {
    lineHeight: '48px',
    '&:before,&:after': {
      content: '""',
      display: 'table'
    },
    '&:after': {
      clear: 'both'
    }
  },
  'form-item-direction-column': {
    lineHeight: 'normal'
  },
  'form-item-label': {
    height: '48px',
    textAlign: 'right',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  'form-item-label-colon': {
    '& label': {
      '&:after': {
        content: '":"',
        margin: '0 10px 0 4px'
      }
    }
  },
  'form-item-label-required': {
    '& label': {
      '&:before': {
        marginRight: '4px',
        content: '"*"',
        fontSize: '14px',
        color: '#f5222d'
      }
    }
  },
  'form-item-label-direction-column': {
    width: '100%',
    height: 'auto',
    textAlign: 'left'
  },
  'form-item-wrapper': {}
});

class FormItem extends Component {
  state = {};

  renderLabel() {
    const {classes, colon, label, required, labelDirection} = this.props;

    let labelChildren = label;

    if (colon && typeof label === 'string' && label.trim() !== '') {
      labelChildren = label.replace(/[：|:]\s*$/, '');
    }

    const className = classnames(
      classes['form-item-label'],
      colon ? classes['form-item-label-colon'] : '',
      required ? classes['form-item-label-required'] : '',
      labelDirection === 'column' ? classes['form-item-label-direction-column'] : ''
    );

    return (
      <Grid className={className} item xs={12} sm={3} key="label">
        <label>{labelChildren}</label>
      </Grid>
    )
  }

  renderWrapper() {
    const {classes, children} = this.props;
    return (
      <Grid className={classes['form-item-wrapper']} item xs={12} sm={9} key="wrapper">
        {children}
      </Grid>
    )
  }

  renderChildren() {
    return [this.renderLabel(), this.renderWrapper()]
  }

  renderFormItem(children) {
    const {classes, labelDirection} = this.props;
    const className = classnames(
      classes['form-item'],
      labelDirection === 'column' ? classes['form-item-direction-column'] : ''
    );

    return (
      <Grid container className={className}>
        {children}
      </Grid>
    )
  }

  render() {
    const children = this.renderChildren();
    return this.renderFormItem(children);
  }
}

FormItem.propTypes = {
  classes: PropTypes.object.isRequired,
  required: PropTypes.bool,
  colon: PropTypes.bool,
  label: PropTypes.any
};

FormItem.defaultProps = {
  required: false,
  colon: true,
  label: '',
  labelDirection: 'row'
};

export default withStyles(style)(FormItem)
