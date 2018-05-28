import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '../styles';

const styles = theme => ({
  paginationDiv: {
    display: 'block',
    marginTop: '5px',
    color: '#535353',
    lineHeight: '29px',
    textAlign: 'center',
    marginRight: '10px',
    '@global span':{
      display: 'block',
        float: 'right',
        fontSize: '16px',
        marginRight: '20px',
    }
  },
    flotRight:{
      float: 'right',
      '@global a':{
        width: '25px',
        height: '30px',
        padding: '0 10px',
        textDecoration:'none' ,
        cursor: 'pointer',
}
},
    prev:{
      '&:before':{
          content: '"<"',
          fontSize: '16px',
          fontWeight: 'bold',
        }
    },
    next:{
      '&:before':{
        content: '">"',
        fontSize: '16px',
        fontWeight: 'bold',
      }
    },
    disable:{
      borderColor: '#e5e5e5',
      cursor: 'no-drop',
      '&:before':{
        color: '#a0a0a0',
        borderColor: '#337ab7'
      }
    }
});
class Pagination extends Component {

  static propTypes = {
    /**
     * This is currentPage of pagination
     */
    currentPage : PropTypes.number,
    /**
     * This is page size of pagination
     */
    pageSize: PropTypes.number,
    /**
     * This is total count of pagination
     */
    total: PropTypes.number.isRequired,
    /**
     * This is call current page back to parent component
     */
    pageCallbackFn: PropTypes.func.isRequired
  };
  static defaultProps = {
    currentPage: 1,
    pageSize: 5,
    total:0,
    pageCallbackFn:function () {
      console.log('need callback function to getback currentpage')
    }
  };
  constructor(props){
    super(props);
    this.state={
      textOpen:true
    }
  }
    componentWillReceiveProps(nextProps){
       // console.log('nextProps',nextProps);
    }
    componentDidMount() {
        console.log(this.div.clientWidth);
        //分页的宽度小于200px时，只显示前后页按钮
        if(this.div.clientWidth<250){
          this.setState({
            textOpen:false
          })
        }
        this.props.pageCallbackFn(this.props.currentPage)
    }
    createPage() {
        const { classes, currentPage,pageSize,total} = this.props;
        const {textOpen}=this.state;
        const totalPage = Math.ceil(total/pageSize);
        return <div className={classes.paginationDiv} ref={(div) => this.div = div}>
                    <div className={classes.flotRight}>
                        <a className={classes.prev + ' '+(currentPage == 1? classes.disable : '')}
                           onClick={this.prePageHandeler.bind(this)}>
                        </a>
                        <a className={classes.next + ' '+(currentPage == totalPage? classes.disable : '')}
                           onClick={this.nextPageHandeler.bind(this)}>
                        </a>
                    </div>
                   {textOpen?<span>{total==0?total:(currentPage-1)*pageSize+1 }- {currentPage*pageSize>total?total:currentPage*pageSize} of {total}</span>:null}
                </div>
    }
    pageClick(currentPage) {
        const getCurrentPage = this.props.pageCallbackFn;
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
        let {currentPage,total,pageSize} = this.props;
        const totalPage = Math.ceil(total/pageSize);
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
export default withStyles(styles)(Pagination);
