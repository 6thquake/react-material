import React, { Component } from 'react';
import Mention from 'react-material/Mention';
import { withStyles } from 'react-material/styles';
import MenuItem from 'react-material/MenuItem';
import ListItemIcon from 'react-material/ListItemIcon';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemText from 'react-material/ListItemText';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});
const people = [
  'Aaron',
  'Ada',
  'Barbara',
  'Belinda',
  'Carey',
  'Cara',
  'Davina',
  'Daphne',
  'Fannie',
  'Madge',
  'Olivia',
  'Taylor',
];

class IconMentionTest extends Component {
  constructor() {
    super();
    this.state = {
      pageConfig: {
        currentPage: 0,
        pageSize: 4,
        total: 12,
      },
      selectedItem: [],
      dataSource: [],
      inputValue: '',
    };
  }

  inputChangeCb(filterOption, triggerOption) {
    let filteredData = people.filter(item => {
      return !filterOption || item.toLowerCase().indexOf(filterOption.toLowerCase()) !== -1;
    });
    this.setState({
      dataSource: filteredData,
      pageConfig: {
        ...this.state.pageConfig,
        total: filteredData.length,
      },
    });
  }
  onChange(value) {
    this.setState({
      inputValue: value,
    });
  }
  onSelect(items) {
    this.setState({
      selectedItem: items,
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Mention
          placeholder={'input @ to mention'}
          defaultValue={this.state.inputValue}
          selected={this.state.selectedItem}
          pageConfig={this.state.pageConfig}
          onSearchChange={this.inputChangeCb.bind(this)}
          onChange={this.onChange.bind(this)}
          onSelect={this.onSelect.bind(this)}
        >
          {this.state.dataSource.map(item => (
            <MenuItem key={item} value={item}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Mention>
      </div>
    );
  }
}
export default withStyles(styles)(IconMentionTest);
