import React , {Component} from 'react';
import Pagination  from 'react-material/Pagination';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
    //width:'190px'
  },
};
class PaginationTest extends Component {
   constructor(props){
     super(props);
     this.state={
             pageConfig: {
               currentPage: 1,
               pageSize: 4,
               total:20
           }
     }
   }
pageCallbackFn(i) {
    this.setState({
      pageConfig: {
        ...this.state.pageConfig,
        currentPage:i
      }
    });
  };
    render() {
      const { classes } = this.props;
        return (
          <div className={classes.root}>
            <Pagination
            {...this.state.pageConfig}
            pageCallbackFn={this.pageCallbackFn.bind(this)}
            />
          </div>
        );
    }
}
export default withStyles(styles)(PaginationTest);
