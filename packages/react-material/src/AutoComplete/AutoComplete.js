import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import TextField from '../TextField';
import Paper from '../Paper';
import Chip from '../Chip';
import Pagination from '../Pagination/Pagination';
import Divider from '../Divider';
import MenuItem from '../MenuItem';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  textarea: {
    width: '100%',
  },
  modal: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    outline: 0,
    backgroundColor: 'rgb(0, 0, 0)',
    opacity: 0,
    zIndex: 1,
  },
  paper: {
    position: 'absolute',
    zIndex: 200,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    padding: '10px',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  inputHold: {
    padding: '10px 0 7px',
  },
});
class AutoComplete extends Component {
  static propTypes = {
    /**
     * Callback fired when the input value is changed.
     */
    onChangeInput: PropTypes.func,
    /**
     * Callback fired when the current page of pagination  is changed.
     */
    onChangePage: PropTypes.func,
    /**
     * autocomplete options,
     */
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    ),
    /**
     * Pagination component config
     */
    paginationProps: PropTypes.object,
    /**
     * placeholder
     */
    placeholder: PropTypes.string,
    /**
     * option item label and value,when assignment option by options
     */
    mapper: PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    }),
    /**
     * Decided multiple select;If true, value must be an array and the menu will support multiple selections.
     */
    multiple: PropTypes.bool,
    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * 	The value of the Input element, required for a controlled component.
     */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      ),
    ]),
    /**
     * Decided autocomplete is disabled
     */
    disabled: PropTypes.bool,
  };
  static defaultProps = {
    paginationProps: {
      page: 0,
      rowsPerPage: 5,
      count: 0,
    },
    placeholder: 'please input something',
    multiple: false,
    disabled: false,
  };
  constructor() {
    super();
    this.state = {
      open: false,
      inputValue: '',
      selectedItem: [],
      page:0,
    };
  }
  handleChange(event) {
    this.setState({
      open: true,
      inputValue: event.target.value,
    });
    this.props.onChangeInput(event);
  }
  handleDelete = item => event => {
    if (this.props.disabled) {
      return;
    }
    const value = [...this.props.value];
    value.splice(value.indexOf(item), 1);
    let target;
    if (event.target) {
      target = event.target;
    }
    event.persist();
    event.target = { ...target, value };
    this.props.onChange(event);
  };
  handleItemClick = child => event => {
    this.setState({
      inputValue: '',
    });
    if (!this.props.multiple) {
      this.setState({ open: false });
    }
    const { onChange } = this.props;
    if (onChange) {
      let value;
      let target;
      if (event.target) {
        target = event.target;
      }
      const selecttext = child ? child.props.value : event.target.textContent;
      if (this.props.multiple) {
        value = Array.isArray(this.props.value) ? [...this.props.value] : [];
        const itemIndex = value.indexOf(selecttext);
        if (itemIndex === -1) {
          value.push(selecttext);
        } else {
          value.splice(itemIndex, 1);
        }
      } else {
        value = selecttext;
        this.setState({
          inputValue: value,
        });
      }
      event.persist();
      event.target = { ...target, value };
      onChange(event, child);
    }
  };
  handleBlur = event => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    } else {
      const { onChange } = this.props;
      if (onChange) {
        let value;
        let target;
        if (event.target) {
          target = event.target;
        }
        const selecttext = this.state.inputValue;
        if (this.props.multiple) {
          value = Array.isArray(this.props.value) ? [...this.props.value] : [];
          const itemIndex = value.indexOf(selecttext);
          if (itemIndex === -1) {
            if (selecttext) {
              value.push(selecttext);
            }
          }
          this.setState({ open: false, inputValue: '' });
        } else {
          value = selecttext;
          this.setState({
            open: false,
            inputValue: value,
          });
        }
        event.persist();
        event.target = { ...target, value };
        onChange(event);
      }
    }
  };
  componentDidMount() {
    if (!this.props.multiple) {
      this.setState({
        inputValue: this.props.value,
      });
    }
  }
  render() {
    const {
      paginationProps,
      onChangePage,
      classes,
      placeholder,
      children,
      multiple,
      value,
      options,
      mapper,
      disabled,
    } = this.props;
    const { open, inputValue } = this.state;
    let items;
    if (options) {
      items = options
        ? options.map((item,index) => {
            let selected = false;

            switch (typeof item) {
              case 'string':
                if (multiple) {
                  if (!Array.isArray(value)) {
                    throw new Error(
                      'React-Material: the `value` property must be an array ' +
                        'when using the `AutoComplete` component with `multiple`.',
                    );
                  }
                  selected = value.indexOf(item) !== -1;
                } else {
                  selected = value === item;
                }
                return (
                  <MenuItem
                    key={index}
                    value={item}
                    selected={selected}
                    onClick={this.handleItemClick(null)}
                  >
                    {item}
                  </MenuItem>
                );
              case 'object':
                if (multiple) {
                  if (!Array.isArray(value)) {
                    throw new Error(
                      'React-Material: the `value` property must be an array ' +
                        'when using the `AutoComplete` component with `multiple`.',
                    );
                  }
                  selected = value.indexOf(typeof mapper['value']==='function'?mapper['value'](item,index):item[mapper['value']]) !== -1;
                } else {
                  selected = value === (typeof mapper['value']==='function'?mapper['value'](item,index):item[mapper['value']]);
                }
                return (
                  <MenuItem
                    key={index}
                    value={item[mapper['value']]}
                    selected={selected}
                    onClick={this.handleItemClick(null)}
                  >
                    {typeof mapper['label']==='function'?mapper['label'](item,index):item[mapper['label']]}
                  </MenuItem>
                );
              default:
                throw new Error(
                  'AutoComplete[options] only supports type `string[] | Object[]`.',
                );
            }
          })
        : [];
    } else {
      items = React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null;
        }
        let selected = false;
        if (multiple) {
          if (!Array.isArray(value)) {
            throw new Error(
              'React-Material: the `value` property must be an array ' +
                'when using the `AutoComplete` component with `multiple`.',
            );
          }
          selected = value.indexOf(child.props.value) !== -1;
        } else {
          selected = value === child.props.value;
        }
        return React.cloneElement(child, {
          onClick: this.handleItemClick(child),
          role: 'option',
          selected,
          value: undefined, // The value is most likely not a valid HTML attribute.
          'data-value': child.props.value, // Instead, we provide it as a data attribute.
        });
      });
    }
    return (
      <div className={classes.root}>
        {open ? <div onClick={this.handleBlur} className={classes.modal} /> : null}
        <div className={classes.container}>
          {multiple ? (
            <TextField
              disabled={disabled}
              className={classes.textarea}
              onChange={this.handleChange.bind(this)}
              value={inputValue}
              multiline
              rows="1"
              InputProps={{
                classes: {
                  root: classes.inputRoot,
                  input: classes.inputHold,
                },
                startAdornment: value.map(item => (
                  <Chip
                    key={item}
                    label={item}
                    className={classes.chip}
                    onDelete={this.handleDelete(item)}
                  />
                )),
                placeholder: value.length > 0 ? '' : placeholder,
              }}
            />
          ) : (
            <TextField
              disabled={disabled}
              className={classes.textarea}
              onChange={this.handleChange.bind(this)}
              value={inputValue}
              placeholder={placeholder}
            />
          )}
          {open ? (
            <Paper className={classes.paper} square>
              {items}
              <Divider />
              <Pagination {...paginationProps} onChangePage={onChangePage} />
            </Paper>
          ) : null}
        </div>
      </div>
    );
  }
}
export default withStyles(styles, { name: 'RMAutoComplete' })(AutoComplete);
