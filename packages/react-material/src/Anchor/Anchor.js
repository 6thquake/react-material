import React from 'react'
import PropTypes from 'prop-types'
import Paper from '../Paper'
import {
  withStyles,
  createMuiTheme
} from '../styles'

import Button from '../Button'
import classNames from 'classnames'
import deepmerge from 'deepmerge'
import {
  fade
} from '../styles/colorManipulator';

const theme = createMuiTheme()
const styles = (theme) => ({
  box:{
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.common.white,
    zIndex: 999,
    width: 250
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
  },
  hoLink: {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
    },
    padding: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 2}px`,
    minWidth: 120,
    textAlign: 'center'
  },
  line: {
    height: 'inherit',
    backgroundColor: '#ccc',
    marginLeft:20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 2,
  },
  horizontalAnchor: {
    display: 'flex'
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

 export const scrollToAnchor = (anchorName) => {
   if (anchorName) {
     let anchorElement = document.querySelector(anchorName)
     if (anchorElement) {
       anchorElement.scrollIntoView()
       console.log('scroll to', anchorName)
     }
   }
 }

class Anchor extends React.Component {
  state = {
    linkHigth: 10,
    links: {},
    active: '',
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
    // debugger
    let { onChange } = this.props
    var sel = link.href;
    let ele = document.querySelector(sel)
    let dh = ele ? this.getOffsetTop(ele, this.container) : 0
    let rect = ele? ele.getBoundingClientRect() : 0
    // 这里确定了是否高亮某一个 link
    if (dh <= 150 && dh >= -rect.height / 2) {
      if (this.state.active !== sel){
        onChange && onChange(sel)
        this.state.active = sel
      }

      let activeLink = {
        [sel]: true
      }
      // todo vertical
      let links = this.wrapper.querySelectorAll('a')
      let target = null
      for( let link of links){
        if(link.name === sel){
          target =  link
          break
        }
      }
      target && this.setMask(target, this.wrapper)

      this.setState({
        links: activeLink
      })
    }
    if (link.children) {
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
      classes,
      linkStyle,
      linkActiveStyle,
      type
    } = this.props

    let selected = this.state.links[link.href]
    let defaultActiveStyle = {
      color: theme.palette.primary.dark
    }
    let activeStyle = selected ? deepmerge(defaultActiveStyle, linkActiveStyle) : {}
    let style = deepmerge(linkStyle, activeStyle)
    const prop = {}
    if(type !== 'hash'){
      prop.href = link.href
    }
    return (
      <li key={index}>
        <a 
          name={link.href}
          onClick={this.handleLinkClick(index)} 
          className={classes.link} 
          style= {style}
          onClick={(e)=>this.scrollToAnchor(link.href)}
          {...prop}
          >
          {link.label}
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

  
  renderHorizontalLinks = (links) => {
    let {
      classes,
      linkStyle,
      linkActiveStyle,
      type
    } = this.props
    
    let result = links.map((link, index) => {
      let selected = this.state.links[link.href]
      let defaultActiveStyle = {
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main
      }
      let activeStyle = selected ? deepmerge(defaultActiveStyle, linkActiveStyle):{}
      let style = deepmerge(linkStyle,activeStyle)
      const prop = {}
      if(type !== 'hash'){
        prop.href = link.href
      }
      return (
        <a 
          key={link.href}
          name={link.href}
          onClick={this.handleLinkClick(index)} 
          className={classes.hoLink} 
          style= {style}
          onClick={(e)=>this.scrollToAnchor(link.href)}
          {...prop}
          >{link.label}
        </a>
      )
    })
    return <div ref={(e)=>{this.wrapper= e}} className={classes.horizontalAnchor}>{result}</div>
  }
  scrollToAnchor = (id)=> {
    if(this.props.type === 'hash'){
      return scrollToAnchor(id)
    }
  }
  render() {
    const {
      classes,
      links,
      style,
      orientation
    } = this.props
    
    const maskStyle  = {
      top: this.state.linkHigth
    }
    
    return (
      orientation == 'horizontal' ? this.renderHorizontalLinks(links) :
      <div className={classes.box} style={style}>
        <div className={classes.line}></div>
        <div ref={(e)=>{this.wrapper= e}} className={classes.wrapper}>
          <div className={classes.activeMask} style={maskStyle}></div>
          <div className={classes.anchorWrapper}>
            {
              this.renderLinks(links)
            }
          </div>
        </div>
      </div>
    )
  }
}

Anchor.propTypes = {
  links: PropTypes.array.isRequired,
  container: PropTypes.string,
  style: PropTypes.object,
  linkStyle: PropTypes.object,
  linkActiveStyle:PropTypes.object,
  orientation: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
}

Anchor.defaultProps = {
  linkStyle: {},
  linkActiveStyle: {}
}

export default withStyles(styles)(Anchor)
