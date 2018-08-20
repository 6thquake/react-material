import React from 'react';
import PropTypes from 'prop-types';
import { CrossTabulationData } from './CrossTabulationUtilities';
import CrossTabulationRenderers from './CrossTabulationRenderers';

class CrossTabulation extends React.PureComponent {
  render() {
    const Renderer = this.props.renderers[
      this.props.rendererName in this.props.renderers
        ? this.props.rendererName
        : Object.keys(this.props.renderers)[0]
    ];
    return <Renderer {...this.props} />;
  }
}

CrossTabulation.propTypes = Object.assign({}, CrossTabulationData.propTypes, {
  rendererName: PropTypes.string,
  renderers: PropTypes.objectOf(PropTypes.func),
});

CrossTabulation.defaultProps = Object.assign({}, CrossTabulationData.defaultProps, {
  rendererName: 'Table',
  renderers: CrossTabulationRenderers,
});

export default CrossTabulation;
