import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import update from 'immutability-helper';
import { CrossTableData, sortAs, getSort } from 'react-material/Table/Utilities';
import CrossTable from 'react-material/Table/CrossTable';

import TableRenderers from 'react-material/Table/TableRenderers';
import tips from './tips';
import { loadCSS } from 'fg-loadcss/src/loadCSS';

import Grid from 'react-material/Grid';

import Input, { InputLabel } from 'react-material/Input';
import { MenuItem } from 'react-material/Menu';
import { FormControl, FormHelperText } from 'react-material/Form';
import Select from 'react-material/Select';

import Popover from 'react-material/Popover';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Chip from 'react-material/Chip';

import { DragSource, DropTarget } from 'react-dnd';

import withDragAndDrop from 'react-material/DragAndDrop/withDragAndDrop'


if(process.browser) {
  loadCSS(
      '/static/crosstable.css',
      document.querySelector('#insertion-point-jss'),
    );
}

const ItemTypes = {
  FILTER: 'filterBox',
  COLUMN:'column',
  CHIP: 'chip'
};

const columnSource = {
  beginDrag(props, monitor, component) {
    console.log(props)
    return {name: props.name};
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    component.props.dragOut();
  }
};

const columnTarget = {
  drop(props, monitor, component) {
    // 获取正在拖放的数据
    const item = monitor.getItem();
    // 更新组件状态

    let items = component.state.items;
    items.push(item.name);
    component.setState({
      items: items
    });

    component.props.onDrop(items);
  }
};

function chipDragcollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}


class DragSource2 extends React.Component {
  render() {
    const { connectDragSource, connectDragPreview, children } = this.props;

    return connectDragSource(
          <div style={{display:'inline-block'}}>{children}</div>
    );
  }
}
const DragSource3 = DragSource(ItemTypes.CHIP, columnSource, chipDragcollect)(DragSource2);


function chipDropcollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: props.items};
  }

  dragOut = val => {
    return () => {
      let items = this.state.items;
      let index = items.indexOf(val);

      if(index > -1) {
        items.splice(index,1);
        this.setState({
          items: items
        });
      }
    };
  }

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div style={{display:'inline-block', width: '100%', height: '100%'}}>
        {this.state.items.map((value, index) => (
          <DraggableAttribute
              name={value}
              key={value}
              attrValues={this.props.attrValuess[value]}
              valueFilter={this.props.valueFilters[value] || {}}
              zIndex={this.props.zIndices[value] || this.props.maxZIndex}
              sorter={getSort(this.props.sorters,value)}
              dragOut={this.dragOut(value).bind(this)}
              {...this.props}
            />
        ))}
      </div>
    );
  }
}

const DropZone2 = DropTarget(ItemTypes.CHIP, columnTarget, chipDropcollect)(DropZone);


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
        <Popover
          open={!!this.state.anchorEl && this.state.open}
          anchorEl={this.state.anchorEl}
          anchorReference={'anchorEl'}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <div
            className="rm-ct-FilterBox"
            style={{
              cursor: 'initial'
            }}
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
        </Popover>
    );
  }

  toggleFilterBox(event) {
    this.setState({
      open: !this.state.open,
      anchorEl: event.target
    });
  }

  render() {
    const filtered =
      Object.keys(this.props.valueFilter).length !== 0
        ? 'rm-ct-FilteredAttribute'
        : '';

    const { connectDragSource, isDragging } = this.props;

    return (
      <DragSource3 {...this.props}>
        <div style={{display:'inline-block'}} data-id={this.props.name}>
          <Chip
            label={this.props.name}
            onDelete={this.toggleFilterBox.bind(this)}
            className={'rm-ct-Attr ' + filtered}
            deleteIcon={<KeyboardArrowDownIcon />}
          />
          {this.state.open ? this.getFilterBox() : null}
        </div>
      </DragSource3>
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
  sorter: PropTypes.func.isRequired,
  menuLimit: PropTypes.number,
  zIndex: PropTypes.number,
};

//const DraggableAttribute2 = DragSource(ItemTypes.COLUMN, columnSource, collect)(DraggableAttribute);

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

  makeDnDCell(items, onChange, classes) {
    return (
      <td 
        className={classes}
        >
        <DropZone2 items={items} onDrop={onChange} 
              attrValuess={this.attrValues}
              valueFilters={this.props.valueFilter}
              sorters={this.props.sorters}
              menuLimit={this.props.menuLimit}
              setValuesInFilter={this.setValuesInFilter.bind(this)}
              addValuesToFilter={this.addValuesToFilter.bind(this)}
              removeValuesFromFilter={this.removeValuesFromFilter.bind(this)}
              zIndices={this.state.zIndices}
              maxZIndex={this.state.maxZIndex}>
        </DropZone2>
      </td>
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
      this.propUpdater('cols').bind(this),
      'rm-ct-AxisContainer rm-ct-HorizList rm-ct-Cols'
    );

    const rowAttrs = this.props.rows.filter(
      e =>
        !this.props.hiddenAttributes.includes(e) &&
        !this.props.hiddenFromDragDrop.includes(e)
    );
    const rowAttrsCell = this.makeDnDCell(
      rowAttrs,
      this.propUpdater('rows').bind(this),
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
        this.state = {crossTableState: props};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({crossTableState: nextProps});
    }

    render() {
        return (
            <CrossTableUI
                renderers={Object.assign(
                    {},
                    TableRenderers
                )}
                {...this.state.crossTableState}
                onChange={s => this.setState({crossTableState: s})}
                unusedOrientationCutoff={Infinity}
            />
        );
    }
}

class App extends React.Component {
    componentWillMount() {
        this.setState({
            textarea: JSON.stringify(tips),
            mode: 'demo',
            filename: 'Sample Dataset: Tips',
            crossTableState: {
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
                    'Party Size': (a, b)=>{
                      return a - b;
                    }
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

    onType(event) {
      this.setState({
                    mode: 'text',
                    filename: 'Data from <textarea>',
                    textarea: event.target.value,
                    crossTableState: {data: JSON.parse(event.target.value)},
                })
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                  <p>initial data or paste some data below:</p>
                  <textarea
                      style={{width: '100%'}}
                      rows="10"
                      value={this.state.textarea}
                      onChange={this.onType.bind(this)}
                      placeholder="Paste from a spreadsheet or CSV-like file"
                  />
                  <p>
                    <em>Note: the data never leaves your browser!</em>
                  </p>
                </Grid>
                <Grid item xs={12}>
                    <CrossTableUISmartWrapper {...this.state.crossTableState} />
                </Grid>
            </Grid>
          );
    }
}  

export default withStyles()(withDragAndDrop(App));
