import React, { Component } from 'react';
import Pagination  from 'react-material/Pagination';
import { withStyles } from 'react-material/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class PaginationTest extends Component {
  constructor(props){
   super(props);
    this.state={
           pageConfig: {
             currentPage: 0,
             pageSize: 5,
             total:20
         }
    }
  }

  pageCallbackFn(i) {
    console.log(i,typeof i);
    this.setState({
      pageConfig: {
        ...this.state.pageConfig,
        currentPage:i
      }
    });
  };
  onChangeRowsPerPage(e){
    console.log('onChangeRowsPerPage',e.target.value);
      this.setState({
        pageConfig: {
          ...this.state.pageConfig,
          pageSize:e.target.value
        }
      });
  }
  render() {
    const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Pagination
          {...this.state.pageConfig}
          pageCallbackFn ={this.pageCallbackFn.bind(this)}
          onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
          />
          <Pagination
            showTwoEnds
            {...this.state.pageConfig}
            pageCallbackFn ={this.pageCallbackFn.bind(this)}
            onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
          />
          <Pagination
            showSizeChanger
            {...this.state.pageConfig}
            pageCallbackFn ={this.pageCallbackFn.bind(this)}
            onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
          />
          <Pagination
            showQuickJumper
            {...this.state.pageConfig}
            pageCallbackFn ={this.pageCallbackFn.bind(this)}
            onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
          />
          <Pagination
            showTwoEnds
            showSizeChanger
            {...this.state.pageConfig}
            pageCallbackFn ={this.pageCallbackFn.bind(this)}
            onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
          />
          <Pagination
            showQuickJumper
            showTwoEnds
            {...this.state.pageConfig}
            pageCallbackFn ={this.pageCallbackFn.bind(this)}
            onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
          />
          <Pagination
            showSizeChanger
            showQuickJumper
            showTwoEnds
            {...this.state.pageConfig}
            pageCallbackFn ={this.pageCallbackFn.bind(this)}
            onChangeRowsPerPage={this.onChangeRowsPerPage.bind(this)}
          />
        </div>
      );
  }
}
export default withStyles(styles)(PaginationTest);
