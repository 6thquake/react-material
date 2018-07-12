import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover';
import { withStyles } from '../styles';
import TextField from '../TextField';
import CascadeOption from './CascadeOption';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import InputAdornment from '../InputAdornment';

export const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 200,
  },
  arrowDown: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  menuBox: {
    // width: 200,
    display: 'flex',
    flexDirection: 'row',
  },
  noData: {
    padding: theme.spacing.unit,
    minWidth: 200,
  },
});

class CascadeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.series = [];
  }
  state = {
    open: false,
    opens: [true, false, false, false, false],
    data: [this.props.dataSource],
    textFieldValue: '',
    checkes: [-1, -1, -1, -1, -1],
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleInputClick = e => {
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    });
  };
  handlePopOverClose = () => {
    this.setState({
      open: false,
    });
  };

  handelMenuChange = e => {
    let { level, next } = e;
    this.updateSeries(e);
    this.updateMenuData(next, level);
    this.updateNextMenu(e);
    this.setTextFieldValue();
    this.checkChange(e);
    // 将信息传给父组件
    this.props.onChange && this.props.onChange(this.series);
  };

  updateSeries = e => {
    // 清空当前级之后的数据 并更新当前级数据
    let { item, level, index } = e;
    this.series.splice(level);
    this.series[level] = item[index];
  };

  checkChange(e) {
    let { level, index } = e;
    let checkes = this.state.checkes;
    for (let i = level; i < checkes.length - 1; i++) {
      checkes[i + 1] = -1;
    }
    checkes[level] = index;

    this.setState({
      checkes: checkes,
    });
  }

  updateMenuData = (next, level) => {
    let opens = this.state.opens;
    for (let i = level; i < opens.length - 1; i++) {
      opens[i + 1] = false;
    }
    this.setState({
      opens: opens,
    });
  };

  updateNextMenu = e => {
    let { level, next } = e;
    let data = next;
    if (this.state.opens[level + 1] === false && data.length > 0) {
      let opens = this.state.opens;
      opens[level + 1] = true;
      let items = this.state.data;
      items[level + 1] = data;
      this.setState({
        opens: opens,
        data: items,
      });
    }
  };
  //
  setTextFieldValue = () => {
    let separator = this.props.separator || '/';

    let text = this.series
      .map((item, index) => {
        return item.text;
      })
      .join(` ${separator} `);
    this.setState({
      textFieldValue: text,
    });
  };

  renderMenuItems() {
    let levels = [0, 1, 2, 3, 4];

    let { children, renderLabel = 'label', renderValue = 'value' } = this.props;

    let list = levels.map((item, index) => {
      return (
        <CascadeOption
          children={children}
          key={item}
          level={item}
          open={this.state.opens[item]}
          dataSource={this.state.data[item]}
          onChange={this.handelMenuChange}
          checkedIndex={this.state.checkes[item]}
          renderLabel={renderLabel}
          renderValue={renderValue}
        />
      );
    });
    return list;
  }
  render() {
    const { classes, label, dataSource, notFound, width } = this.props;
    const { open, anchorEl } = this.state;
    const hasData = dataSource && dataSource.length > 0;
    const t = <div className={classes.noData}>{notFound}</div>;
    return (
      <div className={classes.container}>
        <div className={classes.inputBox}>
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowDropDown className={classes.arrowDown} />
                </InputAdornment>
              ),
            }}
            style={{ width }}
            onClick={this.handleInputClick}
            id="select"
            label={label}
            className={classes.textField}
            value={this.state.textFieldValue}
            onChange={this.handleChange()}
            margin="normal"
          />
        </div>
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={open}
          onClose={this.handlePopOverClose}
        >
          <div className={classes.menuBox}>{hasData ? this.renderMenuItems() : t}</div>
        </Popover>
      </div>
    );
  }
}

CascadeSelect.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The separator between different levels
   */
  separator: PropTypes.string,
  /**
   * Callback when finishing cascader select
   */
  onChange: PropTypes.func,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * data options of cascade
   */
  dataSource: PropTypes.array.isRequired,
  /**
   * The key in dataSoure , which will be used to display
   */
  renderLabel: PropTypes.string,
  /**
   *
   */
  notFound: PropTypes.string,
  /**
   *
   */
  width: PropTypes.number,
};


  /**
   * The key in dataSoure, which will be used to distinguish items
   */
  renderValue: PropTypes.string,
  /**
   * The width of cascader
   */
  width: PropTypes.number,
};
CascadeSelect.defaultProps = {
  separator: '/',
  renderLabel: 'label',
  renderValue: 'value',
  width: 150,
  // onChange: e => console.log(e),
};
export default withStyles(styles, { name: 'RMCascadeSelect' })(CascadeSelect);
