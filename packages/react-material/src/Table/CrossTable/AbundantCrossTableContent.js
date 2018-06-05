import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import update from 'immutability-helper';

import { CrossTableData, sortAs } from './CrossTableUtilities';

import CrossTable from './CrossTable';
import CrossTableAttribute from './CrossTableAttribute';
import DropZone from './CrossTableDropZone';
import { withStyles } from '../../styles';

const styles = (theme) => ({
  table: {
    color: '#2a3f5f',
    fontFamily: 'Verdana',
    borderCollapse: 'collapse'
  },

  renderers:{
    border: '1px solid #a2b1c6',
    background: '#f2f5fa',
    paddingLeft: '5px',
    userSelect: 'none'
  },

  axis: {
    border: '1px solid #a2b1c6',
    background: '#f2f5fa',
    padding: '5px',
    minWidth: '20px',
    minHeight: '20px',
    height: '20px'
  },
  vaxis:{
    verticalAlign: 'top'
  },

  orders:{
    cursor: 'pointer',
    width: '15px',
    marginLeft: '5px',
    display: 'inline-block',
    userSelect: 'none',
    textDecoration: 'none !important'
  }
});

class AbundantCrossTableContent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      unusedOrder: [],
      zIndices: {},
      maxZIndex: 1000
    };
  }

  componentWillMount() {
    this.materializeInput(this.props.data);
  }

  componentWillUpdate(nextProps) {
    this.materializeInput(nextProps.data);
  }

  materializeInput(nextData) {
    if (this.data === nextData) {
      return;
    }
    this.data = nextData;

    const attrValues = {};
    const materializedInput = [];
    let recordsProcessed = 0;
    CrossTableData.forEachRecord(this.data, this.props.derivedAttributes, function(
      record
    ) {
      materializedInput.push(record);
      for (const attr of Object.keys(record)) {
        if (!(attr in attrValues)) {
          attrValues[attr] = {};
          if (recordsProcessed > 0) {
            attrValues[attr].null = recordsProcessed;
          }
        }
      }
      for (const attr in attrValues) {
        const value = attr in record ? record[attr] : 'null';
        if (!(value in attrValues[attr])) {
          attrValues[attr][value] = 0;
        }
        attrValues[attr][value]++;
      }
      recordsProcessed++;
    });

    this.materializedInput = materializedInput;
    this.attrValues = attrValues;
  }

  sendPropUpdate(command) {
    this.props.onChange(update(this.props, command));
  }

  propUpdater(key) {
    return value => this.sendPropUpdate({[key]: {$set: value}});
  }

  setValuesInFilter(attribute, values) {
    this.sendPropUpdate({
      valueFilter: {
        [attribute]: {
          $set: values.reduce((r, v) => {
            r[v] = true;
            return r;
          }, {}),
        },
      },
    });
  }

  addValuesToFilter(attribute, values) {
    if (attribute in this.props.valueFilter) {
      this.sendPropUpdate({
        valueFilter: {
          [attribute]: values.reduce((r, v) => {
            r[v] = {$set: true};
            return r;
          }, {}),
        },
      });
    } else {
      this.setValuesInFilter(attribute, values);
    }
  }

  removeValuesFromFilter(attribute, values) {
    this.sendPropUpdate({
      valueFilter: {[attribute]: {$unset: values}},
    });
  }

  makeDnDCell(items, onChange, classes) {
    return (
      <td 
        className={classes}
        >
        <DropZone items={items} onDrop={onChange} 
              attrValuess={this.attrValues}
              valueFilters={this.props.valueFilter}
              sorters={this.props.sorters}
              menuLimit={this.props.menuLimit}
              setValuesInFilter={this.setValuesInFilter.bind(this)}
              addValuesToFilter={this.addValuesToFilter.bind(this)}
              removeValuesFromFilter={this.removeValuesFromFilter.bind(this)}
              zIndices={this.state.zIndices}
              maxZIndex={this.state.maxZIndex}>
        </DropZone>
      </td>
    );
  }

  render() {
    let { classes } = this.props;

    const numValsAllowed =
      this.props.aggregators[this.props.aggregatorName]([])().numInputs || 0;

    const rendererName =
      this.props.rendererName in this.props.renderers
        ? this.props.rendererName
        : Object.keys(this.props.renderers)[0];

    const rendererCell = (
      <td className={classes.renderers}>
        <CrossTableAttribute
          label="renderer"
          current={rendererName}
          values={Object.keys(this.props.renderers)}
          setValue={this.propUpdater('rendererName')}
        />
      </td>
    );

    const sortIcons = {
      key_a_to_z: {
        rowSymbol: '↕',
        colSymbol: '↔',
        next: 'value_a_to_z',
      },
      value_a_to_z: {
        rowSymbol: '↓',
        colSymbol: '→',
        next: 'value_z_to_a',
      },
      value_z_to_a: {rowSymbol: '↑', colSymbol: '←', next: 'key_a_to_z'},
    };


    const aggregatorCell = (

      <td className={classes.axis}>
        <CrossTableAttribute
          label="aggregators"
          current={this.props.aggregatorName}
          values={Object.keys(this.props.aggregators)}
          setValue={this.propUpdater('aggregatorName')}
        />
        <a
          role="button"
          className={classes.orders}
          onClick={() =>
            this.propUpdater('rowOrder')(sortIcons[this.props.rowOrder].next)
          }
        >
          {sortIcons[this.props.rowOrder].rowSymbol}
        </a>
        <a
          role="button"
          className={classes.orders}
          onClick={() =>
            this.propUpdater('colOrder')(sortIcons[this.props.colOrder].next)
          }
        >
          {sortIcons[this.props.colOrder].colSymbol}
        </a>
        {numValsAllowed > 0 && <br />}
        {new Array(numValsAllowed).fill().map((n, i) => [
          <CrossTableAttribute
            label="value"
            key={i}
            current={this.props.vals[i]}
            values={Object.keys(this.attrValues).filter(
              e =>
                !this.props.hiddenAttributes.includes(e) &&
                !this.props.hiddenFromAggregators.includes(e)
            )}
            setValue={value =>
              this.sendPropUpdate({
                vals: {$splice: [[i, 1, value]]},
              })
            }
          />,
          i + 1 !== numValsAllowed ? <br key={`br${i}`} /> : null,
        ])}
      </td>
    );

    const unusedAttrs = Object.keys(this.attrValues)
      .filter(
        e =>
          !this.props.rows.includes(e) &&
          !this.props.cols.includes(e) &&
          !this.props.hiddenAttributes.includes(e) &&
          !this.props.hiddenFromDragDrop.includes(e)
      )
      .sort(sortAs(this.state.unusedOrder));

    const unusedLength = unusedAttrs.reduce((r, e) => r + e.length, 0);
    const horizUnused = unusedLength < this.props.unusedOrientationCutoff;

    const unusedAttrsCell = this.makeDnDCell(
      unusedAttrs,
      order => this.setState({unusedOrder: order}),
      classes.axis
    );

    const colAttrs = this.props.cols.filter(
      e =>
        !this.props.hiddenAttributes.includes(e) &&
        !this.props.hiddenFromDragDrop.includes(e)
    );

    const colAttrsCell = this.makeDnDCell(
      colAttrs,
      this.propUpdater('cols').bind(this),
      classes.axis
    );

    const rowAttrs = this.props.rows.filter(
      e =>
        !this.props.hiddenAttributes.includes(e) &&
        !this.props.hiddenFromDragDrop.includes(e)
    );
    const rowAttrsCell = this.makeDnDCell(
      rowAttrs,
      this.propUpdater('rows').bind(this),
      classes.axis
    );
    const outputCell = (
      <td>
        <CrossTable
          {...update(this.props, {
            data: {$set: this.materializedInput},
          })}
        />
      </td>
    );

    if (horizUnused) {
      return (
        <table className={classes.table} width="100%">
          <tbody>
            <tr>
              {rendererCell}
              {unusedAttrsCell}
            </tr>
            <tr>
              {aggregatorCell}
              {colAttrsCell}
            </tr>
            <tr>
              {rowAttrsCell}
              {outputCell}
            </tr>
          </tbody>
        </table>
      );
    }

    return (
      <table className={classes.table}>
        <tbody>
          <tr>
            {rendererCell}
            {aggregatorCell}
            {colAttrsCell}
          </tr>
          <tr>
            {unusedAttrsCell}
            {rowAttrsCell}
            {outputCell}
          </tr>
        </tbody>
      </table>
    );
  }
}

AbundantCrossTableContent.propTypes = Object.assign({}, CrossTable.propTypes, {
  onChange: PropTypes.func.isRequired,
  hiddenAttributes: PropTypes.arrayOf(PropTypes.string),
  hiddenFromAggregators: PropTypes.arrayOf(PropTypes.string),
  hiddenFromDragDrop: PropTypes.arrayOf(PropTypes.string),
  unusedOrientationCutoff: PropTypes.number,
  menuLimit: PropTypes.number,
});

AbundantCrossTableContent.defaultProps = Object.assign({}, CrossTable.defaultProps, {
  hiddenAttributes: [],
  hiddenFromAggregators: [],
  hiddenFromDragDrop: [],
  unusedOrientationCutoff: 85,
  menuLimit: 500,
});

export default withStyles(styles)(AbundantCrossTableContent);