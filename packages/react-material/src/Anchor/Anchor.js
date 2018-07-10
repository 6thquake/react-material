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
    width: '100%'
  }, 

  anchorWrapper:{
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: theme.spacing.unit * 4,
  },

  ul: {
    position: 'relative',
    zIndex: 2,
    listStyleType: 'none',
    paddingLeft: theme.spacing.unit * 4,
  },

  li: {},

  active: {
    color:` ${theme.palette.primary.dark} !important`
  },
  
  wrapper: {
    position: 'relative',
    paddingRight: 0
  },

  activeMask: {
    position: 'absolute',
    backgroundColor: fade(theme.palette.primary.main, 0.2),
    borderLeft: `2px solid ${theme.palette.primary.dark}`,
    transition: 'all .2s ease',
    zIndex: 1,
    width: '100%',
    right: 0,
    // height: 40,
    left: -2
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.common.black,
    cursor: 'pointer',
    height: 40,
  },

  hoLink: {
    color: theme.palette.common.black,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.2),
    },
    padding: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 2}px`,
    textAlign: 'center',
    cursor: 'pointer',
    minWidth: 120,
  },

  line: {
    height: 'inherit',
    backgroundColor: theme.palette.grey['300'],
    marginLeft:0,
    marginTop: 0,
    marginBottom: 0,
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
     }
   }
 }

class Anchor extends React.Component {
  state = {
    linkToTop: 10,
    linkHeight:40,
    links: {},
    active: '',
  }
  level = 0
  container = null
  wrapper = null
  componentDidMount() {
    let sel = this.props.container 
    this.container = document.querySelector(sel) || window
    this.ths = throttling(this.scrollHandle, 5, 20)
    this.container.addEventListener('scroll', this.ths)
    this.setLinks(this.props.links)
  }
  componentWillUnmount(){
    this.container.removeEventListener('scroll', this.ths, false)
  }
  scrollHandle = (e) => {
    let { links } = this.props
    this.setLinks(links)
  }

  // find the nearest link to the contianer
  nearestLink = (links) => {
    let min = {
      key: '',
      value: Infinity
    }
    for(let link of links){
      let sel = link.href
    let ele = document.querySelector(sel)
      let dh = ele ? this.getOffsetTop(ele, this.container) : Infinity
      if(dh > 50 && sel === this.props.links[0].href){
        sel = ''
      }
      let absDh = Math.abs(dh)
      if (absDh < min.value) {

        min = {
          key: sel,
          value: absDh
        }
      }
      if(link.children){
        let m = this.nearestLink(link.children)
        if(m.value < min.value){
          min = m
        }
    }
    }
    return min
  }
  // 激活高亮选项
  changeActiveLink = (sel) => {
    let {
      onChange,
    } = this.props
    if (this.state.active !== sel) {
      let dir = this.scrollDirection(this.state.active, sel)
      onChange && onChange({
        name: sel,
        direction: dir
      })
      this.state.active = sel
    }

    let activeLink = {
      [sel]: true
    }
    this.setMask(sel)
    this.setState({
      links: activeLink
    })
    return true
  }
  // 计算滚动条的滚动方向
  scrollDirection = (pre, cur) => {
    if(pre === ''){
      return 'down'
    }
    if(cur === ''){
      return 'up'
    }
    let preHeight = document.querySelector(pre).getBoundingClientRect().top
    let curHeight = document.querySelector(cur).getBoundingClientRect().top
    let dh = preHeight - curHeight
    if(dh > 0){
      return 'up'
    }else{
      return 'down'
    }
  }

  // 设置高亮 mask 的高度
  setMask = (sel) => {
    let { orientation } = this.props
    if (orientation != 'horizontal') {
      let links = this.wrapper.querySelectorAll('a')
      let target = null
      for (let link of links) {
        if (link.name === sel) {
          target = link
          break
        }
      }
      let top = target && this.getOffsetTop(target, this.wrapper)
      let height = target && target.getBoundingClientRect().height
      this.setState({
        linkToTop: top,
        linkHeight: height,
      })
    }
  }

  setLinks(links){
    let nearestLink = this.nearestLink(links)
    this.changeActiveLink(nearestLink.key)
  }

  // 找到子元素在父元素中的相对位置
  getOffsetTop(element, container) {
    let eleRectTop = element.getBoundingClientRect().top 
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return eleRectTop - container.clientTop;
    }
    let containerRectTop = container.getBoundingClientRect().top
    return (eleRectTop - containerRectTop)
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
      <li key={index} className={classes.li}>
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
    return <div ref={(e)=> {this.setRef(e)}} className={classes.horizontalAnchor}>{result}</div>
  }

  scrollToAnchor = (id)=> {
    if(this.props.type === 'hash'){
      return scrollToAnchor(id)
    }
  }
  setRef =(e)=> {
    this.wrapper = e
  }
  render() {
    const {
      classes,
      links,
      style,
      orientation
    } = this.props
    const {
      active,
      linkToTop,
      linkHeight
    } = this.state
    const maskStyle  = {
      top: linkToTop,
      height: linkHeight
    }
    
    return (
      orientation == 'horizontal' ? this.renderHorizontalLinks(links) :
      <div className={classes.box} style={style}>
        <div className={classes.line}></div>
        <div ref={this.setRef} className={classes.wrapper}>
          {active && <div className={classes.activeMask} style={maskStyle}></div>}
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

export default withStyles(styles, { name: 'RMAnchor' })(Anchor)
