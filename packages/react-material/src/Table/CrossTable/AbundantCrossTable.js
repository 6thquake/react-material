import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import AbundantCrossTableContent from './AbundantCrossTableContent';
import CrossTableRenderers from './CrossTableRenderers';
import withDragAndDrop from '../../DragAndDrop/withDragAndDrop'

class AbundantCrossTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {crossTableState: props};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({crossTableState: nextProps});
    }

    render() {
        return (
            <AbundantCrossTableContent
                renderers={Object.assign(
                    {},
                    CrossTableRenderers
                )}
                {...this.state.crossTableState}
                onChange={s => this.setState({crossTableState: s})}
                unusedOrientationCutoff={Infinity}
            />
        );
    }
}

export default withDragAndDrop(AbundantCrossTable);