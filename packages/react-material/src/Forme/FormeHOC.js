import {Component} from "react";
import PropTypes from 'prop-types';

function FormeHOC(WrappedComponent, OriginComponent) {
  class FormeComponent extends Component {
    isForm = () => !!this.context.formsy;

    render() {
      const isForm = this.isForm();
      return isForm ? <WrappedComponent {...this.props}/> : <OriginComponent {...this.props}/>;
    }
  }

  FormeComponent.contextTypes = {
    formsy: PropTypes.object
  };

  return FormeComponent;
}

export default FormeHOC;
