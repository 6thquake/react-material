/**
 * @ignore - do not document.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AbundantCrossTabulationContent from './AbundantCrossTabulationContent';
import CrossTabulationRenderers from './CrossTabulationRenderers';
import withDragAndDrop from '../../DragAndDrop/withDragAndDrop';

class AbundantCrossTabulation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { crossTableState: props };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ crossTableState: nextProps });
  }

  render() {
    return (
      <AbundantCrossTabulationContent
        renderers={Object.assign({}, CrossTabulationRenderers)}
        {...this.state.crossTableState}
        onChange={s => this.setState({ crossTableState: s })}
        unusedOrientationCutoff={Infinity}
      />
    );
  }
}

export default withDragAndDrop()(AbundantCrossTabulation);
