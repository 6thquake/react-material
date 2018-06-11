import {Component} from "react";
import FormeItem from './FormeItem';

const convertValidationsToObject = (validations) => {
  if (typeof validations === 'string') {
    return validations.split(/,(?![^{[]*[}\]])/g).reduce((validationsAccumulator, validation) => {
      let args = validation.split(':');
      const validateMethod = args.shift();

      args = args.map((arg) => {
        try {
          return JSON.parse(arg);
        } catch (e) {
          return arg; // It is a string if it can not parse it
        }
      });

      if (args.length > 1) {
        throw new Error('Formsy does not support multiple args on string validations. Use object format of validations instead.');
      }

      // Avoid parameter reassignment
      const validationsAccumulatorCopy = Object.assign({}, validationsAccumulator);
      validationsAccumulatorCopy[validateMethod] = args.length ? args[0] : true;
      return validationsAccumulatorCopy;
    }, {});
  }

  return validations || {};
};

function FormeItemHOC(WrappedComponent) {
  class FormeItemComponent extends Component {
    render() {
      const {colon, labelDirection, ...rest} = this.props;
      let required = false;
      if (this.props.required) {
        required = true;
      }
      if (convertValidationsToObject(this.props.validations)['isRequired']) {
        required = true;
      }

      return (
        <FormeItem label={this.props.label} required={required} colon={colon} labelDirection={labelDirection}>
          <WrappedComponent {...rest}/>
        </FormeItem>
      )
    }
  }

  const name = WrappedComponent.displayName || WrappedComponent.name;
  FormeItemComponent.displayName = `formeItemHOC-${name}`;

  return FormeItemComponent;
}

export default FormeItemHOC;
