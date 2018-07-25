import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import SelectRoot from './SyncSelect';
import Pagination from '../Pagination/Pagination';
import AsyncSelectFilter from './AsyncSelectFilter';
import Divider from '../Divider';
import { withStyles } from '../styles';

const styles = theme => ({
  selectMenu: {
    whiteSpace: 'pre-wrap',
  },
  root: {
    width: '100%',
  },
});

class Select extends Component {
  static propTypes = {
    /**
     * callback to parent component when select options
     */
    onChange: PropTypes.func,
    /**
     * page size
     */
    rowsPerPage: PropTypes.num,
    /**
     * select value,
     */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    ]),
    /**
     * placeholder
     */
    placeholder: PropTypes.string,
    /**
     * decided multiple select
     */
    multiple: PropTypes.bool,
    /**
     * decided select is disabled
     */
    disabled: PropTypes.bool,
    /**
     * If true ,show the filter box
     */
    showFilter: PropTypes.bool,
    /**
     * If true ,show the pagination box
     */
    showPination: PropTypes.bool,
  };
  static defaultProps = {
    placeholder: 'please input something',
    showFilter: false,
    showPination: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      paginationProps: {
        page: 0,
        rowsPerPage: 5,
        count: 0,
      },
      text: '',
    };
    this.state.optionsArray = this.props.showPination ? [] : this.menuItems(this.state.text);
  }
  onChangePage(i) {
    this.setState(
      {
        paginationProps: {
          ...this.state.paginationProps,
          page: i,
        },
      },
      () => {
        let op = this.menuItems(this.state.text);
        let start = this.state.paginationProps.page * this.state.paginationProps.rowsPerPage;
        let end =
          (this.state.paginationProps.page + 1) * this.state.paginationProps.rowsPerPage > op.length
            ? undefined
            : (this.state.paginationProps.page + 1) * this.state.paginationProps.rowsPerPage;
        this.setState({
          optionsArray: op.slice(start, end),
        });
      },
    );
  }
  onfilter(e) {
    const op = this.menuItems(e.target.value);
    this.setState(
      {
        text: e.target.value,
        paginationProps: {
          ...this.state.paginationProps,
          page: 0,
          count: op.length,
        },
      },
      () => {
        let op = this.menuItems(this.state.text);
        let start = this.state.paginationProps.page * this.state.paginationProps.rowsPerPage;
        let end =
          (this.state.paginationProps.page + 1) * this.state.paginationProps.rowsPerPage > op.length
            ? undefined
            : (this.state.paginationProps.page + 1) * this.state.paginationProps.rowsPerPage;
        this.setState({
          optionsArray: op.slice(start, end),
        });
      },
    );
  }
  menuItems(text) {
    const { children } = this.props;
    let filterData = [];
    if (children) {
      filterData = React.Children.toArray(children).filter(child => {
        return (
          !text ||
          child.props.children.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
          child.props.value.toLowerCase().indexOf(text.toLowerCase()) !== -1
        );
      });
      return filterData;
    }
  }
  componentDidMount() {
    const { children, rowsPerPage } = this.props;
    this.setState({
      // optionsArray: children,
      paginationProps: {
        ...this.state.paginationProps,
        rowsPerPage: rowsPerPage || 5,
        count: children.length,
      },
    });
  }
  render() {
    const {
      children,
      placeholder,
      multiple,
      classes,
      disabled,
      htmlFor,
      onChange,
      renderValue,
      value,
      showPination,
      showFilter,
      displayEmpty,
      ...other
    } = this.props;
    const { text, paginationProps, optionsArray } = this.state;
    return (
      <SelectRoot
        {...other}
        multiple={multiple}
        value={value}
        displayEmpty={displayEmpty}
        onChange={onChange}
        classes={{
          ...classes,
          root: classes.root,
          selectMenu: classes.selectMenu,
        }}
        inputProps={{
          placeholder: placeholder,
          id: htmlFor,
        }}
        disabled={disabled}
        renderValue={selected => {
          if (renderValue) {
            return renderValue(selected);
          } else {
            let displaySingle = '';
            const displayMultiple = [];
            React.Children.map(children, child => {
              if (!React.isValidElement(child)) {
                return null;
              }
              let selected;

              if (multiple) {
                if (!Array.isArray(value)) {
                  throw new Error(
                    'Material-UI: the `value` property must be an array ' +
                      'when using the `Select` component with `multiple`.',
                  );
                }

                selected = value.indexOf(child.props.value) !== -1;
                if (selected) {
                  displayMultiple.push(child.props.children);
                }
              } else {
                selected = value === child.props.value;
                if (selected) {
                  displaySingle = child.props.children;
                }
              }
            });
            return multiple ? displayMultiple.join(', ') : displaySingle;
          }
        }}
      >
        {showFilter ? (
          <AsyncSelectFilter
            fullWidth={true}
            autoFocus={true}
            text={text}
            placeholder={placeholder}
            onChange={this.onfilter.bind(this)}
          />
        ) : null}
        {optionsArray}
        {showPination ? <Divider /> : null}
        {showPination ? (
          <Pagination {...paginationProps} onChangePage={this.onChangePage.bind(this)} />
        ) : null}
      </SelectRoot>
    );
  }
}
export default withStyles(styles)(Select);
