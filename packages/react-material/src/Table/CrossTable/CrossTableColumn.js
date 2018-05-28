import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Popover from '../../Popover';
import Chip from '../../Chip';
import Grid from '../../Grid';
import Button from '../../Button';
import TextField from '../../TextField';

import DragSource from './CrossTableDragSource';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { withStyles } from '../../styles';

const styles = (theme) => ({
  container:{
    display:'inline-block'
  },
  box:{
    width: '300px',
    backgroundColor: '#fff',
    textAlign: 'center',
    userSelect: 'none',
    minHeight: '100px',
    padding: '8px',
    margin: '0px'
  },
  input :{
    color: '#506784',
    padding: '0 3px',
    fontSize: '14px',
    '&:focus': {
    }
  },
  p:{
    padding: '2px 0px',
    margin: '0px'
  },
  h4: {
    margin: '2px'
  },
  button: {
    color: '#2a3f5f',
    margin: '0px'
  },
  closeX :{
    fontSize: '18px',
    cursor: 'pointer',
    textDecoration: 'none !important'
  },
  filter:{
    textAlign: 'left',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflowY: 'scroll',
    width: '100%',
    maxHeight: '30vh'
  },
  item:{
    margin: '0',
    marginBottom: '1px',
    padding: '4px 4px 4px 32px',
    cursor: 'default',
    '&:hover': {
      background: '#f2f7ff'
    }
  },
  selectedItem:{
    margin: '0',
    marginBottom: '1px',
    padding: '4px 4px 4px 32px',
    cursor: 'default',
    background: '#ebf0f8',
    '&:before':{
      content: '"√"',
      fontSize: '12px',
      position: 'absolute',
      left: '12px'
    }
  },
  only: {
    display: 'none',
    width: '35px',
    float: 'left',
    fontSize: '12px',
    paddingLeft: '5px',
    cursor: 'pointer'
  },
  onlySpacer: {
    display: 'block',
    width: '35px',
    float: 'left'
  },
  filtered:{
    fontStyle: 'italic'
  }
});

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
    let { classes } = this.props;
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
            className={classes.box}
            style={{
              cursor: 'initial'
            }}
          >
            <Grid container spacing={0}>
                <Grid item xs={1}>
                  <span>☰</span>
                </Grid>
                <Grid item xs={10}>
                  <h4 className={classes.h4}>{this.props.name}</h4>
                </Grid>
                <Grid item xs={1}>
                  <a onClick={() => this.setState({open: false})} className={classes.closeX}>
                    ×
                  </a>
                </Grid>
            </Grid>

            {showMenu || <p>(too many values to show)</p>}

            {showMenu && (
              <p className={classes.p}>
                <TextField
                  label="Filter"
                  placeholder="Filter values"
                  className={classes.input}
                  value={this.state.filterText}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={e =>
                    this.setState({
                      filterText: e.target.value,
                    })
                  }
                />
                <br />
                <Button
                  role="button"
                  className={classes.button}
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
                </Button>{' '}
                <Button
                  role="button"
                  className={classes.button}
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
                </Button>
              </p>
            )}

            {showMenu && (
              <div className={classes.filter}>
                {shown.map(x => (
                  <p
                    key={x}
                    onClick={() => this.toggleValue(x)}
                    className={x in this.props.valueFilter ? classes.item : classes.selectedItem}
                  >
                    <a className={classes.only} onClick={e => this.selectOnly(e, x)}>
                      only
                    </a>
                    <a className={classes.onlySpacer}>&nbsp;</a>

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
    let { classes } = this.props;

    const filtered =
      Object.keys(this.props.valueFilter).length !== 0
        ? classes.filtered
        : null;

    const { connectDragSource, isDragging } = this.props;

    return (
      <DragSource {...this.props}>
        <div className={classes.container} data-id={this.props.name}>
          <Chip
            label={this.props.name}
            onDelete={this.toggleFilterBox.bind(this)}
            className={filtered}
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

export default withStyles(styles)(CrossCrossTableColumn);