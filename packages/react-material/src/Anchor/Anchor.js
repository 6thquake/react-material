import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Typography from 'react-material/Typography';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  box:{
    position: 'fixed',
    top: 10,
    minWidth: 100,
    margin: 20,
    display: 'flex',
    // flexDirection: ''
    // alignItems: 'stretch'
    overflow: 'hidden'
  }, 
  anchorWrapper:{

    // borderLeft: '2px #ccc solid',
    // marginLeft:20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  
  ul: {
    position: 'relative',
    zIndex: 2
  },
  active: {
    color: '#108ee9'
  },
  wrapper: {
    position: 'relative',
    paddingRight: theme.spacing.unit * 40
  },
  activeMask: {
    position: 'absolute',
    backgroundColor: '#f3f3f3',
    borderLeft: '2px solid #009A61',
    transition: 'all .2s ease',
    zIndex: 1,
    width: '100%',
    right: 2,
    height: 40,
    // opacity: 0.8
  },
  itemBox:{
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    display: 'flex',
    height: 40,
    alignItems: 'center'
  },
  linkBox: {
    paddingLeft: theme.spacing.unit 
  },
  line: {
    height: 'inherit',
    // width: '2px',
    backgroundColor: '#ccc',
    marginLeft:20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 2,
  }
})

const throttling = (fn, wait, maxTimelong) =>{
  wait = wait || 100
  maxTimelong = maxTimelong || 300
  var timeout = null
  var  startTime = Date.now()

  return function (e) {
    if (timeout !== null) clearTimeout(timeout)
    var curTime = Date.now()
    if (curTime - startTime >= maxTimelong) {
      fn(e)
      startTime = curTime
    } else {
      timeout = setTimeout((e) => { fn(e)}, wait)
    }
  }
}

class Anchor extends React.Component {

  state = {
    activeLinkIndex: -1,
    linkHigth: 0
  }
  level = 0
  container = null
  wrapper = 'wrapper'
  componentDidMount() {
    let sel = this.props.container 
    this.container = document.querySelector(sel) || window
    this.container.addEventListener('scroll', throttling(this.scrollHandle))
    this.findLinktarget()
  }

  scrollHandle = (e) => {
    this.findLinktarget()
  }

  findLinktarget(){
    let array = this.props.links
    for (var index = 0; index < array.length; index++) {
      var sel = array[index].href;
      let ele = document.querySelector(sel)
      // console.log('====element====', sel, ele)

      let dh = ele? this.getOffsetTop(ele, this.container) : 0
      let rect = ele !== null? ele.getBoundingClientRect() : 0
      // 这里确定了是否高亮某一个 link
      if(dh <= 150 && dh >= -rect.height / 2){
        this.setState({
          activeLinkIndex: index
        })
      }
    }
  }

  // 找到子元素在父元素中的相对位置
  getOffsetTop(element, container) {
    let eleRectTop = element.getBoundingClientRect().top 
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return eleRectTop - container.clientTop;
    }
    let containerRectTop = container.getBoundingClientRect().top
    return eleRectTop - containerRectTop
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  componentWillUnmount() {
    
  }

  handleLinkClick = (index)=>(e) => {
    console.log('click one', e.target,e.target.getBoundingClientRect().top)
    // let h = e.target.getBoundingClientRect().top
    let parent = document.querySelector('#wrapper')
    console.log('parent  ',this.wrapper)

    let h = this.getOffsetTop(e.target, this.wrapper)
    this.setState({
      activeLinkIndex: index,
      linkHigth: h
    })
  }

  renderItem = (link, index, children)=>{
    let {
      classes
    } = this.props

    return (
      <li key={index}  className={classes.anchorItem}>
        <a onClick={this.handleLinkClick(index)} className={classes.link} href={link.href}>{link.label}</a>
        {children && this.renderLinks(children)}
      </li>
    )
  }
  renderLink = (link, index) => {
    
    // let result = null
    // if(link.children){
    //   return <div className={classes.linkBox}> {this.renderLinks(link.children)}</div>
    // }
    return this.renderItem(link, index, link.children)
    
  }
  renderLinks = (links) => {
    let {classes} = this.props
    let result = links.map((link, index)=>{
      return this.renderLink(link, index)
    })
    
    
    return <ul className={classes.ul}>{result}</ul>
  }

  render() {
    const {classes , links, style} = this.props
    const maskStyle  = {
      top: this.state.linkHigth
    }
    return (
      <Paper className={classes.box} style = {style}>
        <div className={classes.line}></div>
        <div ref={(e)=>{this.wrapper= e}} className={classes.wrapper}>
          <div className={classes.activeMask} style={maskStyle}></div>
          <div className={classes.anchorWrapper}>
            {
              this.renderLinks(links)
            }
          </div>
        </div>
      </Paper>
    )
  }
}

Anchor.propTypes = {
  
}

Anchor.defaultProps = {
  style: {
    position: 'fixed',
    top: 10,
    minWidth: 100,
    margin: 20
  }
}

export default withStyles(styles)(Anchor)
