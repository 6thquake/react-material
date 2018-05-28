import React from 'react'
import PropTypes from 'prop-types'
import Paper from '../Paper'
import { withStyles } from '../styles';

const styles = (theme) => ({
  box:{
    position: 'fixed',
    top: 10,
    minWidth: 100,
    margin: 20,
    display: 'flex',
    overflow: 'hidden',
    // zIndex: 900
  }, 
  anchorWrapper:{
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  
  ul: {
    position: 'relative',
    zIndex: 2
  },
  active: {
    color:` ${theme.palette.primary.dark} !important`
  },
  wrapper: {
    position: 'relative',
    paddingRight: theme.spacing.unit * 40
  },
  activeMask: {
    position: 'absolute',
    backgroundColor: '#f3f3f3',
    borderLeft: `2px solid ${theme.palette.primary.dark}`,
    transition: 'all .2s ease',
    zIndex: 1,
    width: '100%',
    right: 2,
    height: 40,
  },
  link: {
    display: 'flex',
    height: 40,
    alignItems: 'center',
    'text-decoration':'none',
    'color':'#333',
    '&:selection': {
      color: 'red'
    },
    minWidth: 300,
    // overflow: 'hidden',
    // 'text-overflow':'ellipsis',
    // whiteSpace: 'nowrap',
  },

  line: {
    height: 'inherit',
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
    linkHigth: 10,
    links: {}
  }
  level = 0
  container = null
  wrapper = null
  componentDidMount() {
    let sel = this.props.container 
    this.container = document.querySelector(sel) || window
    this.container.addEventListener('scroll', throttling(this.scrollHandle))
    this.setLinks(this.props.links)
  }

  scrollHandle = (e) => {
    let { links } = this.props
    this.setLinks(links)
  }

  setLink = (link)=> {
    var sel = link.href;
    let ele = document.querySelector(sel)
    let dh = ele ? this.getOffsetTop(ele, this.container) : 0
    let rect = ele? ele.getBoundingClientRect() : 0
    // 这里确定了是否高亮某一个 link
    if (dh <= 150 && dh >= -rect.height / 2) {
      let activeLink = {
        [sel]: true
      }

      let links = document.querySelectorAll('a')
      let target = null
      for( let link of links){
        if(link.name === sel){
          target =  link
          break
        }
      }
      this.setMask(target, this.wrapper)
      this.setState({
        links: activeLink
      })
    }
    if(link.children){
      this.setLinks(link.children)
    }
  }

  // 设置高亮 mask 的高度
  setMask = (target, wrapper) => {
    let h = this.getOffsetTop(target, wrapper)
    this.setState({
      linkHigth: h,
    })
  }

  setLinks(links){
    let array = links
    for (var index = 0; index < array.length; index++) {
      this.setLink(array[index])
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

  handleLinkClick = (index)=>(e) => {
    let ele = e.target
    let links = {
      [ele.name]: true
    }

    this.setMask(ele, this.wrapper)
    this.setState({
      activeLinkIndex: index,
      links: links
    })
  }

  renderItem = (link, index, children)=>{
    let {
      classes
    } = this.props
    let linkClass = this.state.links[link.href] ? `${classes.link} ${classes.active}` : classes.link
    return (
      <li key={index}>
        <a 
          name={link.href}
          onClick={this.handleLinkClick(index)} 
          className={linkClass} 
          href={link.href}>{link.label}
        </a>
        {children && this.renderLinks(children)}
      </li>
    )
  }
  renderLink = (link, index) => {
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
    const {classes, links, style} = this.props
    const maskStyle  = {
      top: this.state.linkHigth
    }
    return (
      <Paper className={classes.box} style={style}>
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
  links: PropTypes.array.isRequired,
  container: PropTypes.string,
  style: PropTypes.object
}

Anchor.defaultProps = {
  style: {
    position: 'fixed',
    top: 10,
    minWidth: 100,
    margin: 20,
    zIndex: 900
  }
}

export default withStyles(styles)(Anchor)
