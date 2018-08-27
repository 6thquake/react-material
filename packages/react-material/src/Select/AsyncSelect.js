import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';
import Pagination from '../Pagination/Pagination';
import AsyncSelectFilter from './AsyncSelectFilter';
import Divider from '../Divider';
import { withStyles } from '../styles';
import AsyncSelectRoot from './AsyncSelectRoot';
import throttling from '../utils/throttling';
import yellow from '../colors/yellow'
import Input from '../Input';

const styles = theme => ({
  selectMenu: {
    whiteSpace: 'pre-wrap',
  },
  root: {
    width: '100%',
  },
  icon: {
    color: theme.palette.grey[300],
  },
  inputText: {
    color: theme.palette.common.white,
    '&$disabled': {
      color: theme.palette.grey[200]
    },
  },
  underline: {
    '&:after': {
      borderBottomColor: yellow[500],
    },
    '&:before': {
      borderBottomColor: theme.palette.grey[300],
    },
    // '&$disabled:before': {
    //   borderBottomColor: theme.palette.grey[200],
    // },
    // '&:hover:not($disabled):not($focused):not($error):before': {
    //   borderBottomColor: 'red',
    // },
  },
});

class AsyncSelect extends Component {
  constructor(props) {
    super(props);
    this.throttlingtem = throttling(
      props.onChangeFilter,
      props.debounceProps.wait,
      props.debounceProps.maxTime,
    );
  }
  onChangePage(currentPage1) {
    this.props.onChangePage(currentPage1);
  }
  onChangeFilter(e) {
    if (this.props.debounceAble) {
      e.persist();
      this.throttlingtem(e.target.value);
    } else {
      this.props.onChangeFilter(e.target.value);
    }
  }
  menuItems() {
    const { options, children, mapper } = this.props;
    if (children) {
      return children;
    } else {
      if (Array.isArray(options)) {
        return options.map((name, index) => {
          switch (typeof name) {
            case 'string':
              return (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              );
            case 'object':
              return (
                <MenuItem
                  key={index}
                  value={
                    typeof mapper['value'] === 'function' ? mapper['value'](name, index) : name
                  }
                >
                  {typeof mapper.label === 'function'
                    ? mapper['label'](name, index)
                    : name[mapper['label']]}
                </MenuItem>
              );
            default:
              throw new Error(
                'React-Material:select[dataSource] only supports type `string[] | Object[]`.',
              );
          }
        });
      } else {
        throw new Error('React-Material: the `options` property must be an array ');
      }
    }
  }
  render() {
    const {
      isDark,
      paginationProps,
      placeholder,
      multiple,
      classes,
      disabled,
      htmlFor,
      value,
      onChange,
      onOpen,
      readOnly,
      comparison,
      renderValue,
      ...other
    } = this.props;

    const input = isDark? (
      <Input
        classes={{
          root: classes.inputText,
          underline: classes.underline,
        }}
      />
    ) : <Input/>

    return (
      <AsyncSelectRoot
        {...other}
        input={input}
        readOnly={readOnly}
        disabled={disabled}
        onOpen={onOpen}
        multiple={multiple}
        value={value}
        comparison={comparison}
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
        renderValue={renderValue}
      >
        <AsyncSelectFilter
          fullWidth={true}
          autoFocus={true}
          placeholder={placeholder}
          onChange={this.onChangeFilter.bind(this)}
        />
        {this.menuItems()}
        <Divider />
        <Pagination {...paginationProps} onChangePage={this.onChangePage.bind(this)} />
      </AsyncSelectRoot>
    );
  }
}
AsyncSelect.propTypes = {
  /**
   * callback to parent component when select open
   */
  onOpen: PropTypes.func.isRequired,
  /**
   * callback to parent component when select option
   */
  onChange: PropTypes.func.isRequired,
  /**
   * select value,
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number])),
  ]),
  /**
   * select option,
   */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
  ),
  /**
   * pagination component config
   */
  paginationProps: PropTypes.object,
  /**
   * placeholder of filter box
   */
  placeholder: PropTypes.string,
  /**
   * decided multiple select
   */
  multiple: PropTypes.bool,
  /**
   * callback to parent component when current page change
   */
  onChangePage: PropTypes.func,
  /**
   * callback to parent component when  filter change
   */
  onChangeFilter: PropTypes.func,
  /**
   * decided select is disabled
   */
  disabled: PropTypes.bool,
  /**
   * decided select is readonly
   */
  readonly: PropTypes.bool,
  /**
   * filter function
   */
  filter: PropTypes.fun,
  /**
   * option item label and value,when assignment option by options
   */
  mapper: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }),
  /**
   * compare the  value of selected with option value,return Boolen,
   */
  comparison: PropTypes.func,
  /**
   * Render the selected value,Signature:
   * `function(value: any) => ReactElement`
   * value: The value provided to the component..
   */
  renderValue: PropTypes.func,
  /**
   * If true,aysncselect will add debounce when filter options by filter value.
   */
  debounceAble: PropTypes.bool,
  /**
   * If debounceAble true,config debounce wait and max continue time,the unit is milliseconds.
   */
  debounceProps: PropTypes.shape({
    wait: PropTypes.number,
    maxTime: PropTypes.number,
  }),
};
AsyncSelect.defaultProps = {
  paginationProps: { page: 0, rowsPerPage: 5, count: 0 },
  mapper: { label: 'label', value: 'value' },
  comparison: (select, option) => {
    return select === option;
  },
  debounceProps: {
    wait: 500,
    maxTime: 800,
  },
};
export default withStyles(styles, { name: 'RMAsyncSelect' })(AsyncSelect);
