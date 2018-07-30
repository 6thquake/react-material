import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutoComplete from './AutoComplete';
import { withStyles } from '../styles';
import { filter, find } from '../utils/filter';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class SyncAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PaginationProps: {
        page: 0,
        rowsPerPage: 5,
        count: 0,
      },
      text: '',
    };
    this.state.optionsArray = this.props.showPagination ? [] : this.menuItems(this.state.text);
  }
  onChangePage(i) {
    this.setState(
      {
        PaginationProps: {
          ...this.state.PaginationProps,
          page: i,
        },
      },
      () => {
        let op = this.menuItems(this.state.text);
        let start = this.state.PaginationProps.page * this.state.PaginationProps.rowsPerPage;
        let end =
          (this.state.PaginationProps.page + 1) * this.state.PaginationProps.rowsPerPage > op.length
            ? undefined
            : (this.state.PaginationProps.page + 1) * this.state.PaginationProps.rowsPerPage;
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
        PaginationProps: {
          ...this.state.PaginationProps,
          page: 0,
          count: op.length,
        },
      },
      () => {
        let op = this.menuItems(this.state.text);
        let start = this.state.PaginationProps.page * this.state.PaginationProps.rowsPerPage;
        let end =
          (this.state.PaginationProps.page + 1) * this.state.PaginationProps.rowsPerPage > op.length
            ? undefined
            : (this.state.PaginationProps.page + 1) * this.state.PaginationProps.rowsPerPage;
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
      PaginationProps: {
        ...this.state.PaginationProps,
        rowsPerPage: rowsPerPage || 5,
        count: children.length,
      },
    });
  }
  render() {
    const { classes, onChange, value, ...others } = this.props;
    const { optionsArray } = this.state;
    return (
      <div className={classes.root}>
        <AutoComplete
          {...others}
          select
          value={value}
          PaginationProps={this.state.PaginationProps}
          onChangePage={this.onChangePage.bind(this)}
          onChangeInput={this.onfilter.bind(this)}
          onChange={onChange}
        >
          {optionsArray}
        </AutoComplete>
      </div>
    );
  }
}
SyncAutoComplete.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   * You can only use it when the `native` property is `false` (default).
   */
  multiple: PropTypes.bool,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: PropTypes.func,
  /**
   * The input value.
   * This property is required when the `native` property is `false` (default).
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  /**
   * page size
   */
  rowsPerPage: PropTypes.num,
  /**
   * placeholder
   */
  placeholder: PropTypes.string,

  /**
   * decided select is disabled
   */
  disabled: PropTypes.bool,
};

SyncAutoComplete.defaultProps = {
  multiple: false,
};
export default withStyles(styles)(SyncAutoComplete);
