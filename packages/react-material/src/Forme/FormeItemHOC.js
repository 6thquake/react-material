import {Component} from "react";
import FormeItem from './FormeItem';

function FormeItemHOC(WrappedComponent) {
  class FormeItemComponent extends Component {
    render() {
      const {label, required, colon, labelDirection, ...rest} = this.props;
      return (
        <FormeItem label={label} required={required} colon={colon} labelDirection={labelDirection}>
          <WrappedComponent label={label} required={required} {...rest}/>
        </FormeItem>
      )
    }
  }

  return FormeItemComponent;
}

export default FormeItemHOC;
