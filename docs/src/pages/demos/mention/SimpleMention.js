import React, { Component } from 'react';
import Mention from 'react-material/Mention';
import { withStyles } from 'react-material/styles';
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

class SimpleMentionTest extends Component {
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
    console.log(value);
    this.setState({
      inputValue: value,
    });
  }
  onSelect(items) {
    console.log(items);
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
          dataSource={this.state.dataSource}
        />
      </div>
    );
  }
}
export default withStyles(styles)(SimpleMentionTest);
