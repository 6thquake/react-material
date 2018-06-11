import {Component} from "react";
import PropTypes from 'prop-types';

function FormeHOC(WrappedComponent, OriginComponent) {
  class FormeComponent extends Component {
    isForm = () => !!this.context.formsy;

    render() {
      const {forwardedRef, ...rest} = this.props;
      const isForm = this.isForm();
      return isForm ? <WrappedComponent {...rest} ref={forwardedRef}/> : <OriginComponent {...rest} ref={forwardedRef}/>
    }
  }

  const name = OriginComponent.displayName || OriginComponent.name;
  FormeComponent.displayName = `formeHOC-${name}`;

  FormeComponent.contextTypes = {
    formsy: PropTypes.object
  };

  return React.forwardRef((props, ref) => <FormeComponent {...props} forwardedRef={ref}/>);
}

export default FormeHOC;
