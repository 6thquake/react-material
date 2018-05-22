import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import update from 'immutability-helper';
import {CrossTableData, sortAs, getSort} from 'react-material/Table/Utilities';
import CrossTable from 'react-material/Table/CrossTable';
import Sortable from 'react-sortablejs';
import Draggable from 'react-draggable';

import TableRenderers from 'react-material/Table/TableRenderers';
import Dropzone from 'react-dropzone';
import tips from './tips';
import { loadCSS } from 'fg-loadcss/src/loadCSS';

import Input, { InputLabel } from 'react-material/Input';
import { MenuItem } from 'react-material/Menu';
import { FormControl, FormHelperText } from 'react-material/Form';
import Select from 'react-material/Select';


if(process.browser) {
  loadCSS(
      '/static/crosstable.css',
      document.querySelector('#insertion-point-jss'),
    );
}


class DraggableAttribute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false, top: 0, left: 0, filterText: ''};
  }

  toggleValue(value) {
    if (value in this.props.valueFilter) {
      this.props.removeValuesFromFilter(this.props.name, [value]);
    } else {
      this.props.addValuesToFilter(this.props.name, [value]);
    }
  }

  matchesFilter(x) {
    return x
      .toLowerCase()
      .trim()
      .includes(this.state.filterText.toLowerCase().trim());
  }

  selectOnly(e, value) {
    e.stopPropagation();
    this.props.setValuesInFilter(
      this.props.name,
      Object.keys(this.props.attrValues).filter(y => y !== value)
    );
  }

  getFilterBox() {
    const showMenu =
      Object.keys(this.props.attrValues).length < this.props.menuLimit;

    const values = Object.keys(this.props.attrValues);
    const shown = values
      .filter(this.matchesFilter.bind(this))
      .sort(this.props.sorter);

    return (
      <Draggable handle=".rm-ct-DragHandle">
        <div
          className="rm-ct-FilterBox"
          style={{
            display: 'block',
            cursor: 'initial',
            zIndex: this.props.zIndex,
            top: this.state.top + 'px',
            left: this.state.left + 'px',
          }}
          onClick={() => this.props.moveFilterBoxToTop(this.props.name)}
        >
          <a onClick={() => this.setState({open: false})} className="rm-ct-CloseX">
            ×
          </a>
          <span className="rm-ct-DragHandle">☰</span>
          <h4>{this.props.name}</h4>

          {showMenu || <p>(too many values to show)</p>}

          {showMenu && (
            <p>
              <input
                type="text"
                placeholder="Filter values"
                className="rm-ct-Search"
                value={this.state.filterText}
                onChange={e =>
                  this.setState({
                    filterText: e.target.value,
                  })
                }
              />
              <br />
              <a
                role="button"
                className="rm-ct-Button"
                onClick={() =>
                  this.props.removeValuesFromFilter(
                    this.props.name,
                    Object.keys(this.props.attrValues).filter(
                      this.matchesFilter.bind(this)
                    )
                  )
                }
              >
                Select {values.length === shown.length ? 'All' : shown.length}
              </a>{' '}
              <a
                role="button"
                className="rm-ct-Button"
                onClick={() =>
                  this.props.addValuesToFilter(
                    this.props.name,
                    Object.keys(this.props.attrValues).filter(
                      this.matchesFilter.bind(this)
                    )
                  )
                }
              >
                Deselect {values.length === shown.length ? 'All' : shown.length}
              </a>
            </p>
          )}

          {showMenu && (
            <div className="rm-ct-CheckContainer">
              {shown.map(x => (
                <p
                  key={x}
                  onClick={() => this.toggleValue(x)}
                  className={x in this.props.valueFilter ? '' : 'selected'}
                >
                  <a className="rm-ct-Only" onClick={e => this.selectOnly(e, x)}>
                    only
                  </a>
                  <a className="rm-ct-OnlySpacer">&nbsp;</a>

                  {x === '' ? <em>null</em> : x}
                </p>
              ))}
            </div>
          )}
        </div>
      </Draggable>
    );
  }

  toggleFilterBox(event) {
    const bodyRect = document.body.getBoundingClientRect();
    const rect = event.nativeEvent.target.getBoundingClientRect();
    this.setState({
      open: !this.state.open,
      top: 10 + rect.top - bodyRect.top,
      left: 10 + rect.left - bodyRect.left,
    });
    this.props.moveFilterBoxToTop(this.props.name);
  }

  render() {
    const filtered =
      Object.keys(this.props.valueFilter).length !== 0
        ? 'rm-ct-FilteredAttribute'
        : '';
    return (
      <li data-id={this.props.name}>
        <span className={'rm-ct-Attr ' + filtered}>
          {this.props.name}
          <span
            className="rm-ct-Triangle"
            onClick={this.toggleFilterBox.bind(this)}
          >
            {' '}
            ▾
          </span>
        </span>

        {this.state.open ? this.getFilterBox() : null}
      </li>
    );
  }
}

DraggableAttribute.defaultProps = {
  valueFilter: {},
};

DraggableAttribute.propTypes = {
  name: PropTypes.string.isRequired,
  addValuesToFilter: PropTypes.func.isRequired,
  removeValuesFromFilter: PropTypes.func.isRequired,
  attrValues: PropTypes.objectOf(PropTypes.number).isRequired,
  valueFilter: PropTypes.objectOf(PropTypes.bool),
  moveFilterBoxToTop: PropTypes.func.isRequired,
  sorter: PropTypes.func.isRequired,
  menuLimit: PropTypes.number,
  zIndex: PropTypes.number,
};

class Dropdown extends React.PureComponent {
  handleChange = event => {
    this.props.setValue(event.target.value);
  }

  render() {
    let id = `select-${new Date().getTime()}${Math.floor(Math.random()*1000)}`;
    return (
      <FormControl>
        <InputLabel htmlFor={id}>{this.props.label}</InputLabel>
        <Select
          value={this.props.current}
          onChange={this.handleChange}
          inputProps={{
            name: id,
            id: id,
          }}
        >
          {this.props.values.map(r => (
            <MenuItem value={r}>
              <em>{r}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

class CrossTableUI extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      unusedOrder: [],
      zIndices: {},
      maxZIndex: 1000,
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

  moveFilterBoxToTop(attribute) {
    this.setState(
      update(this.state, {
        maxZIndex: {$set: this.state.maxZIndex + 1},
        zIndices: {[attribute]: {$set: this.state.maxZIndex + 1}},
      })
    );
  }
  
  makeDnDCell(items, onChange, classes) {
    return (
      <Sortable
        options={{
          group: 'shared',
          ghostClass: 'rm-ct-Placeholder',
          filter: '.rm-ct-FilterBox',
          preventOnFilter: false,
        }}
        tag="td"
        className={classes}
        onChange={onChange}
      >
        {items.map(x => (
          <DraggableAttribute
            name={x}
            key={x}
            attrValues={this.attrValues[x]}
            valueFilter={this.props.valueFilter[x] || {}}
            sorter={getSort(this.props.sorters, x)}
            menuLimit={this.props.menuLimit}
            setValuesInFilter={this.setValuesInFilter.bind(this)}
            addValuesToFilter={this.addValuesToFilter.bind(this)}
            moveFilterBoxToTop={this.moveFilterBoxToTop.bind(this)}
            removeValuesFromFilter={this.removeValuesFromFilter.bind(this)}
            zIndex={this.state.zIndices[x] || this.state.maxZIndex}
          />
        ))}
      </Sortable>
    );
  }

  render() {
    const numValsAllowed =
      this.props.aggregators[this.props.aggregatorName]([])().numInputs || 0;

    const rendererName =
      this.props.rendererName in this.props.renderers
        ? this.props.rendererName
        : Object.keys(this.props.renderers)[0];

    const rendererCell = (
      <td className="rm-ct-Renderers">
        <Dropdown
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
      <td className="rm-ct-Vals">
        <Dropdown
          label="aggregators"
          current={this.props.aggregatorName}
          values={Object.keys(this.props.aggregators)}
          setValue={this.propUpdater('aggregatorName')}
        />
        <a
          role="button"
          className="rm-ct-RowOrder"
          onClick={() =>
            this.propUpdater('rowOrder')(sortIcons[this.props.rowOrder].next)
          }
        >
          {sortIcons[this.props.rowOrder].rowSymbol}
        </a>
        <a
          role="button"
          className="rm-ct-ColOrder"
          onClick={() =>
            this.propUpdater('colOrder')(sortIcons[this.props.colOrder].next)
          }
        >
          {sortIcons[this.props.colOrder].colSymbol}
        </a>
        {numValsAllowed > 0 && <br />}
        {new Array(numValsAllowed).fill().map((n, i) => [
          <Dropdown
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
      `rm-ct-AxisContainer rm-ct-Unused ${
        horizUnused ? 'rm-ct-HorizList' : 'rm-ct-VertList'
      }`
    );

    const colAttrs = this.props.cols.filter(
      e =>
        !this.props.hiddenAttributes.includes(e) &&
        !this.props.hiddenFromDragDrop.includes(e)
    );

    const colAttrsCell = this.makeDnDCell(
      colAttrs,
      this.propUpdater('cols'),
      'rm-ct-AxisContainer rm-ct-HorizList rm-ct-Cols'
    );

    const rowAttrs = this.props.rows.filter(
      e =>
        !this.props.hiddenAttributes.includes(e) &&
        !this.props.hiddenFromDragDrop.includes(e)
    );
    const rowAttrsCell = this.makeDnDCell(
      rowAttrs,
      this.propUpdater('rows'),
      'rm-ct-AxisContainer rm-ct-VertList rm-ct-Rows'
    );
    const outputCell = (
      <td className="rm-ct-Output">
        <CrossTable
          {...update(this.props, {
            data: {$set: this.materializedInput},
          })}
        />
      </td>
    );

    if (horizUnused) {
      return (
        <table className="rm-ct-Ui">
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
      <table className="rm-ct-Ui">
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

CrossTableUI.propTypes = Object.assign({}, CrossTable.propTypes, {
  onChange: PropTypes.func.isRequired,
  hiddenAttributes: PropTypes.arrayOf(PropTypes.string),
  hiddenFromAggregators: PropTypes.arrayOf(PropTypes.string),
  hiddenFromDragDrop: PropTypes.arrayOf(PropTypes.string),
  unusedOrientationCutoff: PropTypes.number,
  menuLimit: PropTypes.number,
});

CrossTableUI.defaultProps = Object.assign({}, CrossTable.defaultProps, {
  hiddenAttributes: [],
  hiddenFromAggregators: [],
  hiddenFromDragDrop: [],
  unusedOrientationCutoff: 85,
  menuLimit: 500,
});


class CrossTableUISmartWrapper extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {pivotState: props};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({pivotState: nextProps});
    }

    render() {
        return (
            <CrossTableUI
                renderers={Object.assign(
                    {},
                    TableRenderers
                )}
                {...this.state.pivotState}
                onChange={s => this.setState({pivotState: s})}
                unusedOrientationCutoff={Infinity}
            />
        );
    }
}

class App extends React.Component {
    componentWillMount() {
        this.setState({
            mode: 'demo',
            filename: 'Sample Dataset: Tips',
            pivotState: {
                data: tips,
                rows: ['Payer Gender'],
                cols: ['Party Size'],
                aggregatorName: 'Sum over Sum',
                vals: ['Tip', 'Total Bill'],
                rendererName: 'Grouped Column Chart',
                sorters: {
                    Meal: sortAs(['Lunch', 'Dinner']),
                    'Day of Week': sortAs([
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday',
                    ]),
                },
                tableOptions: {
                    clickCallback: function(e, value, filters, tableData) {
                        var names = [];
                        tableData.forEachMatchingRecord(filters, function(
                            record
                        ) {
                            names.push(record.Meal);
                        });
                        alert(names.join('\n'));
                    },
                },
            },
        });
    }

    onDrop(files) {
        this.setState(
            {
                mode: 'thinking',
                filename: '(Parsing CSV...)',
                textarea: '',
                pivotState: {data: []},
            },
            () =>
                Papa.parse(files[0], {
                    skipEmptyLines: true,
                    error: e => alert(e),
                    complete: parsed =>
                        this.setState({
                            mode: 'file',
                            filename: files[0].name,
                            pivotState: {data: parsed.data},
                        }),
                })
        );
    }

    onType(event) {
        Papa.parse(event.target.value, {
            skipEmptyLines: true,
            error: e => alert(e),
            complete: parsed =>
                this.setState({
                    mode: 'text',
                    filename: 'Data from <textarea>',
                    textarea: event.target.value,
                    pivotState: {data: parsed.data},
                }),
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="text-center">{this.state.filename}</h2>
                    <br />

                    <CrossTableUISmartWrapper {...this.state.pivotState} />
                </div>
            </div>
          );
    }
}  
export default withStyles()(App);
