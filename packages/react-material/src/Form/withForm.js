import React, { Component } from 'react';
import PropTypes from 'prop-types';

function withForm(WrappedComponent, OriginComponent) {
  class FormComponent extends Component {
    isForm = () => !!this.context.formsy;

    render() {
      const { forwardedRef, ...rest } = this.props;
      const isForm = this.isForm();
      if (isForm) {
        return <WrappedComponent {...rest} ref={forwardedRef} />;
      }
      return <OriginComponent {...rest} ref={forwardedRef} />;
    }
  }

  const name =
    OriginComponent.displayName ||
    OriginComponent.name ||
    (typeof OriginComponent === 'string' ? OriginComponent : 'Component');
  FormComponent.displayName = `formHOC-${name}`;

  FormComponent.contextTypes = {
    formsy: PropTypes.object,
  };

  return React.forwardRef((props, ref) => <FormComponent {...props} forwardedRef={ref} />);
}

export default withForm;
