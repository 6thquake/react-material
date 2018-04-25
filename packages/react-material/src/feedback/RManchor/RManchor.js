import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({

  box:{
    position: 'fixed',
    top: 10,
    minWidth: 100,
    margin: 20
  }, 
  anchorWrapper:{
    borderLeft: '2px #ccc solid',
    marginLeft:20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  active: {
    color: '#108ee9'
  },
  anchorItem: {
    position: 'relative',
    right: 10,
    textDecoration:'none',
    color:'black',
  },
  itemBox:{
    display: 'flex',
    alignItems: 'center'
  },
  link: {

  },
  ball: {
    position: 'absolute',
    width: '9px',
    height: '9px',
    borderRadius: '9px',
    border:'3px solid #108ee9',
    backgroundColor: '#fff',
    left: -8.5,
    transition:' top .3s ease-in-out',

  }
})

const throttling = (fn, wait, maxTimelong) =>{
  wait = wait || 100
  maxTimelong = maxTimelong || 300
  var timeout = null,
    startTime = Date.now()

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

class RManchor extends React.Component {

  state = {
    activeLinkIndex: -1,
  }
  container = null

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
      let dh = this.getOffsetTop(ele, this.container)
      let rect = ele.getBoundingClientRect()
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
    this.setState({
      activeLinkIndex: index
    })
  }
  render() {
    const {classes , links, style} = this.props
    return (
      <Paper className={classes.box} style = {style}>
        <div className={classes.anchorWrapper}>
          {
            links.map((link, index)=>{
              return (
                <a onClick={this.handleLinkClick(index)} key={index} href={link.href} className={classes.anchorItem}>

                  <ListItem className={this.state.activeLinkIndex == index ? classes.active : ''}>
                    <div className={classes.itemBox}>
                      {(this.state.activeLinkIndex == index) && (<span className={classes.ball}></span>)}
                      <div>
                        {link.label}
                      </div>
                    </div>
                  </ListItem>
                </a>
              )
            })
          }
        </div>
      </Paper>
    )
  }
}

RManchor.propTypes = {
  
}

RManchor.defaultProps = {
  style: {
    position: 'fixed',
    top: 10,
    minWidth: 100,
    margin: 20
  }
}

export default withStyles(styles)(RManchor)
