import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import RMcascadeItem from './RMCI'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menuBox:{
    // width: 200,
    display: 'flex',
    flexDirection: 'row'
  },
  noData:{
    padding: theme.spacing.unit,
    width: 200,
  }
});


class TextFields extends React.Component {
  constructor(props){
    super(props)
    this.series = []
  }
  state = {
    open: false,
    opens: [true, false, false, false, false],
    data: [this.props.dataSource],
    textFieldValue: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleInputClick = (e) =>{
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    })
  }
  handlePopOverClose=()=>{
    this.setState({
      open: false,
    })
  }

  handelMenuChange = (e) => {
    let {level, next } = e
    this.updateSeries(e)
    this.updateMenuData(next, level)
    this.updateNextMenu(e)
    this.setTextFieldValue()
    // 将信息传给父组件
    this.props.onChange && this.props.onChange(this.series)
  }

  updateSeries = (e) => {
    // 清空当前级之后的数据 并更新当前级数据
    let { item, level, index } = e
    this.series.splice(level)
    this.series[level] = item[index]
  }

  updateMenuData = (next, level) => {
    let opens = this.state.opens
    for (let i = level; i < opens.length - 1; i++) {
      opens[i + 1] = false
    }
    this.setState({
      opens: opens
    })
  }

  updateNextMenu = (e) => {
    let { level, next } = e
    let data = next
    if (this.state.opens[level + 1] === false && data.length > 0) {
      let opens = this.state.opens
      opens[level + 1] = true
      let items = this.state.data
      items[level + 1] = data
      this.setState({
        opens: opens,
        data: items
      })
    }
  }
  // 
  setTextFieldValue = () => {
    let text = this.series.map((item, index) => {
      return item.text
    }).join(' / ')
    this.setState({
      textFieldValue: text
    })
  }

  renderMenuItems() {
    let levels = [0, 1, 2, 3, 4]

    let list = levels.map((item, index) => {
      return (
        <RMcascadeItem
          children={this.props.children}
          key={item}
          level={item}
          open={this.state.opens[item]}
          dataSource={this.state.data[item]}
          onChange={this.handelMenuChange}
        >

        </RMcascadeItem>
      )
    })
    return list
  }
  render() {
    const { classes , label, dataSource} = this.props;
    const { open, anchorEl} = this.state
    const hasData = dataSource && dataSource.length > 0
    const t = <div className={classes.noData}>NO Data</div>
    return (
      <div className={classes.container}>
        <TextField
          onClick={this.handleInputClick}
          id="select"
          label={label}
          className={classes.textField}
          value={this.state.textFieldValue}
          onChange={this.handleChange()}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
        </TextField>
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
          onClose = {
            this.handlePopOverClose
          }
        >
          <div className={classes.menuBox}>
            {hasData?this.renderMenuItems(): t}
          </div>
        </Popover>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
