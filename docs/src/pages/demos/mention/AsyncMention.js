import React, { Component } from 'react';
import Mention from '@6thquake/react-material/Mention';
import { withStyles } from '@6thquake/react-material/styles';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class AsyncMentionTest extends Component {
  constructor() {
    super();
    this.state = {
      pageConfig: {
        page: 0,
        rowsPerPage: 4,
        count: 12,
      },
      selectedItem: [],
      dataSource: [],
      inputValue: '',
    };
  }

  inputChangeCb(filterString, triggerOption) {
    const promise = new Promise(function(resolve, reject) {
      setTimeout(() => {
        let people = [
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
        let result = people.filter(item => {
          return (
            !filterString || item.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
          );
        });
        resolve(result);
      }, 1000);
    });
    promise.then(result => {
      this.setState({
        dataSource: result,
        pageConfig: {
          ...this.state.pageConfig,
          count: result.length,
        },
      });
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
export default withStyles(styles)(AsyncMentionTest);
