import React from 'react';
import PropTypes from 'prop-types';
import { CrossTableData } from './CrossTableUtilities';
import CrossTableRenderers from './CrossTableRenderers';

/* eslint-disable react/prop-types */
// eslint can't see inherited propTypes!

class CrossTable extends React.PureComponent {
  render() {
    const Renderer = this.props.renderers[
      this.props.rendererName in this.props.renderers
        ? this.props.rendererName
        : Object.keys(this.props.renderers)[0]
    ];
    return <Renderer {...this.props} />;
  }
}

CrossTable.propTypes = Object.assign({}, CrossTableData.propTypes, {
  rendererName: PropTypes.string,
  renderers: PropTypes.objectOf(PropTypes.func),
});

CrossTable.defaultProps = Object.assign({}, CrossTableData.defaultProps, {
  rendererName: 'Table',
  renderers: CrossTableRenderers,
});

export default CrossTable;
