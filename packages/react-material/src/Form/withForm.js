import React from 'react';
import {Component} from "react";
import PropTypes from 'prop-types';

function withForm(WrappedComponent, OriginComponent) {
  class FormComponent extends Component {
    isForm = () => !!this.context.formsy;

    render() {
      const {forwardedRef, ...rest} = this.props;
      const isForm = this.isForm();
      return isForm ? <WrappedComponent {...rest} ref={forwardedRef}/> : <OriginComponent {...rest} ref={forwardedRef}/>
    }
  }

  const name = OriginComponent.displayName || OriginComponent.name;
  FormComponent.displayName = `formHOC-${name}`;

  FormComponent.contextTypes = {
    formsy: PropTypes.object
  };

  return React.forwardRef((props, ref) => <FormComponent {...props} forwardedRef={ref}/>);
}

export default withForm;
