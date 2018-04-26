import React , {Component} from 'react';
import Pagination  from 'react-material/Pagination';

class PaginationTest extends Component {
   constructor(props){
     super(props);
     this.state={
             pageConfig: {
               currentPage: 1,
               pageSize: 4,
               total:20,
               totalPage: 5,
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
        return (
            <Pagination
            {...this.state.pageConfig}
            pageCallbackFn={this.pageCallbackFn.bind(this)}
            />
        );
    }
}
export default PaginationTest;
