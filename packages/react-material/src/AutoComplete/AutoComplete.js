import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncAutoComplete from './AsyncAutoComplete';
import withStyles from '../styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class AutoComplete extends Component {
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
        const op = this.menuItems(this.state.text);
        const start = this.state.PaginationProps.page * this.state.PaginationProps.rowsPerPage;
        const end =
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
        const op = this.menuItems(this.state.text);
        const start = this.state.PaginationProps.page * this.state.PaginationProps.rowsPerPage;
        const end =
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
        count: children && children.length,
      },
    });
  }

  render() {
    const { classes, onChange, value, ...others } = this.props;
    const { optionsArray } = this.state;
    return (
      <div className={classes.root}>
        <AsyncAutoComplete
          {...others}
          select
          value={value}
          PaginationProps={this.state.PaginationProps}
          onChangePage={this.onChangePage.bind(this)}
          onChangeInput={this.onfilter.bind(this)}
          onChange={onChange}
        >
          {optionsArray}
        </AsyncAutoComplete>
      </div>
    );
  }
}
AutoComplete.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   */
  disabled: PropTypes.bool,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  multiple: PropTypes.bool,
  /**
   * The input value.
   */
  onChange: PropTypes.func,
  /**
   * page size
   */
  placeholder: PropTypes.string,
  /**
   * placeholder
   */
  rowsPerPage: PropTypes.num,

  /**
   * decided Synchronize autocomplete is disabled
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
};

AutoComplete.defaultProps = {
  multiple: false,
};
export default withStyles(styles, { name: 'RMAutoComplete' })(AutoComplete);
