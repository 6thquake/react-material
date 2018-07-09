import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import Input from '../Input';
import MenuItem from '../MenuItem';
import Select from '../Select';
import Typography from '../Typography';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import IconButton from '../IconButton';
import {withLocale} from '../LocaleProvider';
const styles = theme => ({
  root: {
    fontSize: theme.typography.pxToRem(12),
    '&:last-child': {
      padding: 0,
    },
  },
  toolbar: {
    height: 56,
    minHeight: 56,
    paddingRight: 2,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  spacer: {
    flex: '1 1 100%',
  },
  menuItem: {},
  caption: {
    flexShrink: 0,
  },
  firstpage:{
    cursor:'pointer',
    marginLeft:10
  },
  lastpage:{
    cursor:'pointer',
    marginRight:10
  },
  input: {
    fontSize: 'inherit',
    flexShrink: 0,
  },
  pageinput:{
    fontSize:12,
    width:50,
    height:28,
    cursor:'text',
    color:'#666',
    padding:'0 7px',
    border: 'solid 1px #d9d9d9',
    borderRadius:6,
    margin:'0 8px',
    '&:focus':{
      borderColor: 'blue',
      transition: 'all 0.3s',
    },
    '&:hove':{
      transition: 'all 0.3s',
      borderColor: 'blue',
    }
  },
  selectRoot: {
    marginRight: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit,
    color: theme.palette.text.secondary,
  },
  select: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit * 2,
  },
  jump:{
    lineHeight:28,
  },
  selectIcon: {
    top: 1,
  },
  actions: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});
class Pagination extends Component {

  static propTypes = {
    /**
     * Properties applied to the back arrow `IconButton` component.
     */
    backIconButtonProps: PropTypes.object,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: PropTypes.object.isRequired,
    /**
     * Properties applied to the next arrow `IconButton` element.
     */
    nextIconButtonProps: PropTypes.object,
    /**
     * The zero-based index of the current page.
     */
    currentPage : PropTypes.number,
    /**
     * This is page size of pagination
     */
    pageSize: PropTypes.number,
    /**
     * Customize the displayed rows label.
     */
    labelDisplayedRows: PropTypes.func,
    /**
     * This is total count of pagination
     */
    total: PropTypes.number.isRequired,
    /**
     * This is call current page back to parent component
     */
    pageCallbackFn: PropTypes.func.isRequired,
    /**
     * Callback fired when the number of rows per page is changed.
     */
    onChangeRowsPerPage: PropTypes.func,
    /**
     * 	Useful to customize the rows per page label. Invoked with a { from, to, count, page } object.
     */
    labelRowsPerPage: PropTypes.node,
    /**
     * Customizes the options of the rows per page select field. If less than two options are available, no select field will be displayed.
     */
    rowsPerPageOptions: PropTypes.array,
    /**
     * show page size option.
     */
    showSizeChanger: PropTypes.bool,
    /**
     * show jump to xx page.
     */
    showQuickJumper: PropTypes.bool,
    /**
     * show jump to first and last page button.
     */
    showTwoEnds: PropTypes.bool
  };
  static defaultProps = {
    currentPage: 1,
    pageSize: 5,
    total:0,
    labelRowsPerPage:'Rows per page:',
    rowsPerPageOptions:	[5, 10, 25],
    labelDisplayedRows: ({ from, to, total }) => `${from}-${to} of ${total}`,
  }
  constructor(props){
    super(props);
    this.state={
      minwidth:true,
      value:1
    }
  }
  componentDidMount() {
      console.log(this.div.clientWidth);
      //分页的宽度小于200px时，只显示前后页按钮
      if(this.div.clientWidth<250){
        this.setState({
          minwidth:false
        })
      }
      this.props.pageCallbackFn (this.props.currentPage)
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps!==prevState.preProps){
      return {
        value: nextProps.currentPage+1,
        preProps:nextProps
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { total, pageCallbackFn, currentPage, pageSize } = this.props;
    const newLastPage = Math.max(0, Math.ceil(total / pageSize) - 1);
    if (currentPage > newLastPage) {
      pageCallbackFn( newLastPage);
    }
  }
  createPage(){
      const { classes,
        currentPage,
        pageSize,
        total,
        backIconButtonProps,
        nextIconButtonProps,
        labelDisplayedRows,
        labelRowsPerPage,
        onChangeRowsPerPage,
        rowsPerPageOptions,
        SelectProps,
        showSizeChanger,
        showQuickJumper,
        showTwoEnds,
        homePage,
        lastPage,
        jumpTo,
        page,
        } = this.props;
      const {minwidth,value}=this.state;
      const totalPage = Math.ceil(total/pageSize);
      return <div className={classes.root} ref={(div) => this.div = div}>
                <div className={classes.toolbar}>
                    <div className={classes.spacer} />
                  {rowsPerPageOptions.length > 1&&showSizeChanger && (
                      <Typography variant="caption" className={classes.caption}>
                        {labelRowsPerPage}
                      </Typography>
                    )}
                    {rowsPerPageOptions.length > 1&&showSizeChanger && (
                      <Select
                        classes={{
                          root: classes.selectRoot,
                          select: classes.select,
                          icon: classes.selectIcon,
                        }}
                        input={<Input className={classes.input} disableUnderline />}
                        value={pageSize}
                        onChange={onChangeRowsPerPage}
                        {...SelectProps}
                      >
                        {rowsPerPageOptions.map(rowsPerPageOption => (
                          <MenuItem
                            className={classes.menuItem}
                            key={rowsPerPageOption}
                            value={rowsPerPageOption}
                          >
                            {rowsPerPageOption}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  <Typography variant="caption" className={classes.caption}>
                        {minwidth?labelDisplayedRows({
                          from: total === 0 ? 0 : currentPage * pageSize + 1,
                          to: Math.min(total, (currentPage + 1) * pageSize),
                          total,
                          currentPage,
                        }):null}
                  </Typography>
                  {showTwoEnds?<Typography variant="caption" className={classes.caption + ' '+ classes.jump+' '+ classes.firstpage} onClick={this.goEnd.bind(this,'first')}>
                    {homePage}
                  </Typography>:null}
                  <IconButton
                    onClick={this.prePageHandeler.bind(this)}
                    disabled={currentPage === 0}
                    {...backIconButtonProps}
                  >
                    <KeyboardArrowLeft />
                  </IconButton>
                  <IconButton
                    onClick={this.nextPageHandeler.bind(this)}
                    disabled={currentPage >= totalPage - 1}
                    {...nextIconButtonProps}
                  >
                    <KeyboardArrowRight />
                  </IconButton>
                  {showTwoEnds?<Typography variant="caption" className={classes.caption + ' '+ classes.jump+' '+ classes.lastpage} onClick={this.goEnd.bind(this,'last')}>
                    {lastPage}
                  </Typography>:null}
                  {showQuickJumper?<Typography variant="caption"
                              className={classes.caption + ' '+ classes.jump}>
                    {jumpTo}<Input className={classes.pageinput} disableUnderline  type='number' value={value} onChange={this.jumpTo.bind(this)}/>{page}
                  </Typography>:null}
                </div>
              </div>
  }
  pageClick(currentPage) {
      const getCurrentPage = this.props.pageCallbackFn ;
      //将当前页码返回父组件
      getCurrentPage(currentPage)
  }
  prePageHandeler() {
      let {currentPage} = this.props;
      if (--currentPage === 0) {
          return false
      }
      this.pageClick(currentPage)
  }

  nextPageHandeler() {
      let {currentPage,total,pageSize} = this.props;
      const totalPage = Math.ceil(total/pageSize);
      if (++currentPage > totalPage) {
          return false
      }
      this.pageClick(currentPage)
  }
  goEnd(param){
    console.log(param);
    const {pageSize, total,pageCallbackFn} = this.props,
      totalPage = Math.ceil(total/pageSize),
      getCurrentPage = pageCallbackFn;
    if(param==='first'){
      getCurrentPage(0)
    }
    if(param==='last'){
      getCurrentPage(totalPage-1)
    }
  }
  jumpTo(e){
    const {pageSize, total,pageCallbackFn} = this.props,
      value=e.target.value,
      totalPage = Math.ceil(total/pageSize);
    this.setState({
      value
    },()=>{
      const value = this.state.value;
      if(value<1){
        pageCallbackFn(0);this.setState({
          value:1
        })
      }
      if(value>0&&value<=totalPage){
        pageCallbackFn(value-1)
      }
      if(value>totalPage){
        pageCallbackFn(totalPage-1);
        this.setState({
          value:totalPage
        })
      }
    })
  }
  render() {
      return this.createPage();
  }
}
Pagination = withLocale({name:'Pagination'})(Pagination);
export default withStyles(styles)(Pagination);
