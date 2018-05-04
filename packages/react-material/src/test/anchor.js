import React from 'react'
import Paper from 'material-ui/Paper'

import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Divider from 'material-ui/Divider'
import Anchor from '../Anchor'
export const styles = {
  tBox: {
    overflow: 'scroll',
    marginTop: 20,
    borderRadius: '10px solid pink',
    height: 500,
    marginBottom: 100,
  },
}

class Anchor extends React.Component {
  target=null
  render() {
    const { classes } = this.props
    let a = {
      fontSize: 40,
      display: 'block',
    }
    let p = {
      margin: 100,
      padding:50,
      border: '10px solid red',
      background: 'green'
    }

    let p1 = {
      margin: 100,
      padding: 50,
    }
    const links = [
      {
        href: '#a1',
        label: 'test1'
      },
      {
        href: '#a2',
        label: 'test2'
      },
      {
        href: '#a3',
        label: 'test3'
      },
      {
        href: '#a4',
        label: 'test4'
      },
      {
        href: '#a5',
        label: 'test5'
      },
      {
        href: '#a6',
        label: 'test6'
      }
    ]

    let style = {
      position: 'fixed',
    }
    return (
      
      <div>
        <Paper >
          <Anchor
          style = {style}
          container={'#t-box'} 
          links={links}
          ></AAnchor
        <p id='a11' style={p1}>
          <a style={a} href="#a1">1</a>
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
        </p>
        <Divider />
        <p id='a12' style={p1}>
          <a style={a} href="#a1">1</a>
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
        </p>
        <Divider />
        <p id='a13' style={p1}>
          <a style={a} href="#a1">1</a>
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
        </p>
        <Divider />
        </Paper>

      <div ref={(node) => { this.container = node; }} id={'t-box'} className={classes.tBox}>
          
        <p id='a1' style={p}>
          <a style={a} href="#a1">test1</a>
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
        </p>
        <Divider/>
        
        <p id='a2' style={p}>
          <a style={a} href="#a2">test2</a>
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
        </p>
        <p id='a3' style={p}>
          <a style={a} href="#a3">test3</a>
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
        </p >
        <Divider />
        
        <p id='a4' style={p}>
          <a style={a} href="#a4">test4</a>
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
        </p>
        <Divider/>
        <p id='a5' style={p}>
          <a style={a} href="#a5">test5</a>
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
        </p>
        <Divider />
        <p id='a6' style={p}>
          <a style={a} href="#a6">test6</a>
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
        </p>
        <Divider />
      </div>
      </div>
    )
  }
}

export default withStyles(styles)(Anchor)
