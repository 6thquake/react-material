import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Popover from '../../Popover';
import Chip from '../../Chip';

import DragSource from './CrossTableDragSource';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


class CrossCrossTableColumn extends React.Component {
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
      <DragSource {...this.props}>
        <div style={{display:'inline-block'}} data-id={this.props.name}>
          <Chip
            label={this.props.name}
            onDelete={this.toggleFilterBox.bind(this)}
            className={'rm-ct-Attr ' + filtered}
            deleteIcon={<KeyboardArrowDownIcon />}
          />
          {this.state.open ? this.getFilterBox() : null}
        </div>
      </DragSource>
    );
  }
}

CrossCrossTableColumn.defaultProps = {
  valueFilter: {},
};

CrossCrossTableColumn.propTypes = {
  name: PropTypes.string.isRequired,
  addValuesToFilter: PropTypes.func.isRequired,
  removeValuesFromFilter: PropTypes.func.isRequired,
  attrValues: PropTypes.objectOf(PropTypes.number).isRequired,
  valueFilter: PropTypes.objectOf(PropTypes.bool),
  sorter: PropTypes.func.isRequired,
  menuLimit: PropTypes.number,
  zIndex: PropTypes.number,
};

export default CrossCrossTableColumn;