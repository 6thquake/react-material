/**
 * Created By wmhuang
 */
import React, {Component} from 'react'
import './pagination.css'

class RMPagination extends Component {
    componentWillReceiveProps(nextProps){
        console.log('nextProps',nextProps);
    }
    componentDidMount() {
        this.props.pageCallbackFn(this.props.currentPage)
    }
    createPage() {
        const { currentPage,pageSize,total,totalPage} = this.props;
        // const {currentPage} = this.state;
        // const {currentPage, pageSize,total,totalPage} = this.state;
        return <div className="paginationDiv">
                    <div className='flotRight'>
                        <a className={currentPage == 1? 'prev disable' : 'prev'}
                           onClick={this.prePageHandeler.bind(this)}>
                        </a>
                        <a className={currentPage == totalPage? 'next disable' : 'next'}
                           onClick={this.nextPageHandeler.bind(this)}>
                        </a>
                    </div>
                    <span>{total==0?total:(currentPage-1)*pageSize+1 }- {currentPage*pageSize>total?total:currentPage*pageSize} of {total}</span>
                </div>
    }
    pageClick(currentPage) {
        const getCurrentPage = this.props.pageCallbackFn;
        // this.setState({
        //     currentPage:currentPage
        // });
        //将当前页码返回父组件
        getCurrentPage(currentPage)
    }
    //Previous page
    prePageHandeler() {
        let {currentPage} = this.props;
        if (--currentPage === 0) {
            return false
        }
        this.pageClick(currentPage)
    }
    // Next page
    nextPageHandeler() {
        let {currentPage,totalPage} = this.props;
        if (++currentPage > totalPage) {
            return false
        }
        this.pageClick(currentPage)
    }
    render() {
        const pageList = this.createPage();
        return pageList

    }
}
RMPagination.defaultProps={
    currentPage: 1,
    pageSize: 5,
    total:1,
    totalPage: 1
};

export default RMPagination