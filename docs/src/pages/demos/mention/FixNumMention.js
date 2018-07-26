import React, { Component } from 'react';
import Mention from '@6thquake/react-material/Mention';
import { withStyles } from '@6thquake/react-material/styles';
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

class FixNumMentionTest extends Component {
  constructor() {
    super();
    this.state = {
      pageConfig: {
        page: 0,
        rowsPerPage: 4,
        count: 12,
      },
      selectedItem: ['Taylor'],
      dataSource: [],
      inputValue: '@Taylor',
      showError: true,
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
        count: filteredData.length,
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
    if (items.length != 2) {
      this.setState({
        showError: true,
      });
    } else {
      this.setState({
        showError: false,
      });
    }
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
          showError={this.state.showError}
        />
        {this.state.showError && 'Please @ two people!'}
      </div>
    );
  }
}
export default withStyles(styles)(FixNumMentionTest);
