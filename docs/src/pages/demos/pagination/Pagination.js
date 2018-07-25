import React, { Component } from 'react';
import Pagination from '@6thquake/react-material/Pagination';
import { withStyles } from '@6thquake/react-material/styles';
import Divider from '@6thquake/react-material/Divider';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class PaginationTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationProps: {
        page: 0,
        rowsPerPage: 5,
        count: 20,
      },
    };
  }

  onChangePage(i) {
    console.log(i, typeof i);
    this.setState({
      paginationProps: {
        ...this.state.paginationProps,
        page: i,
      },
    });
  }
  onChangeRowsPerPage(e) {
    console.log('onChangeRowsPerPage', e.target.value);
    this.setState({
      paginationProps: {
        ...this.state.paginationProps,
        rowsPerPage: e.target.value,
      },
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Pagination
          {...this.state.paginationProps}
          onChangePage={this.onChangePage.bind(this)}
          onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
        />
        <Divider />
        <Pagination
          showTwoEnds
          {...this.state.paginationProps}
          onChangePage={this.onChangePage.bind(this)}
          onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
        />
        <Divider />
        <Pagination
          showSizeChanger
          {...this.state.paginationProps}
          onChangePage={this.onChangePage.bind(this)}
          onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
        />
        <Divider />
        <Pagination
          showQuickJumper
          {...this.state.paginationProps}
          onChangePage={this.onChangePage.bind(this)}
          onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
        />
        <Divider />
        <Pagination
          showTwoEnds
          showSizeChanger
          {...this.state.paginationProps}
          onChangePage={this.onChangePage.bind(this)}
          onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
        />
        <Divider />
        <Pagination
          showQuickJumper
          showTwoEnds
          {...this.state.paginationProps}
          onChangePage={this.onChangePage.bind(this)}
          onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
        />
        <Divider />
        <Pagination
          showSizeChanger
          showQuickJumper
          showTwoEnds
          {...this.state.paginationProps}
          onChangePage={this.onChangePage.bind(this)}
          onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
        />
        <Divider />
        <Pagination
          showSizeChanger
          showQuickJumper
          showTwoEnds
          noIcon
          {...this.state.paginationProps}
          onChangePage={this.onChangePage.bind(this)}
          onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
        />
        <Divider />
      </div>
    );
  }
}
export default withStyles(styles)(PaginationTest);
