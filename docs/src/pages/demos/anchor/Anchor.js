import React from 'react';
import Paper from 'react-material/Paper';
import Grid from 'react-material/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Divider from 'react-material/Divider';
import Anchor from 'react-material/Anchor';
import FormControl from 'react-material/FormControl';
import FormLabel from 'react-material/FormLabel';
import FormControlLabel from 'react-material/FormControlLabel';
import Radio from 'react-material/Radio';
import RadioGroup from 'react-material/RadioGroup';


export const styles = (theme)=> {
  return {
    tBox: {
      overflow: 'scroll',
      marginTop: 20,
      height: 500,
      marginBottom: 100,
    },
    sub: {
      marginRight: 50
    },
    paper: {
      // background: theme.palette.primary.main
    }
  }
}

class App extends React.Component {
  target = null
  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    })
  }
  handleAnchorChange=(e)=>{
    console.log('anchor', e)
  }
  state={
    orientation: 'vertical'
  }
  render() {
    const { classes } = this.props
    const {orientation} = this.state
    let a = {
      fontSize: 40,
      display: 'block',
    }
    let p = {
      margin: 100,
      padding: 50,
    }

    let p1 = {
      margin: 100,
      padding: 50,
    }
    const links = [
      {
        href: '#a1',
        label: '#1dsdss'
      },
      {
        href: '#a2',
        label: '#2ewrwrwe'
      },
      {
        href: '#a3',
        label: '#3',
        children: [
          {
            href: '#sub31',
            label: 'sub31',
            children: [{
              href: '#sub311',
              label: 'sub31'
            }, {
              href: '#sub321',
              label: 'sub321'
            }, {
              href: '#sub331',
              label: 'sub331'
            }, ]

          }, {
            href: '#sub32',
            label: 'sub32'
          }, {
            href: '#sub33',
            label: 'sub33'
          },
        ]
      },
      {
        href: '#a4',
        label: '#4'
      },
      {
        href: '#a5',
        label: '#5'
      },
      {
        href: '#a6',
        label: '#6'
      }
    ]
    const links2= [{
        href: '#a1',
        label: '#1dsdss'
      },
      {
        href: '#a2',
        label: '#2ewrwrwe'
      },
      {
        href: '#a3',
        label: '#3',
      },
      {
        href: '#a4',
        label: '#4'
      },
      {
        href: '#a5',
        label: '#5'
      },
      {
        href: '#a6',
        label: '#6'
      }
    ]

    let style = {
      position: 'fixed',
      top: 100,
      right: '0',
      top: 80,
      width: 260,
      zIndex: 20,
      // background: 
    }
    let style2 = {
      position:'fixed',
       top: 70,
       left: 250,
       zIndex: 20
    }
    let linkStyle ={
      color: "teal",

    }
    let linkActiveStyle = {
      color: 'red'
    }

    return (

      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">orientation: </FormLabel>
          <RadioGroup
            aria-label="orientation"
            name="orientation"
            value={this.state.orientation}
            onChange={this.handleChange('orientation')}
          >
            <FormControlLabel value="vertical" control={<Radio />} label="vertical" />
            <FormControlLabel value="horizontal" control={<Radio />} label="horizontal" />
          </RadioGroup>
        </FormControl>
        {
          orientation !== 'horizontal' ?
          <Paper className={classes.paper} style={style}>
            <Anchor
              linkStyle={linkStyle}
              container={'#t-box'}
              linkActiveStyle={linkActiveStyle}
              links={links}
              onChange={this.handleAnchorChange}
            ></Anchor>
          </Paper> :
          <Paper className={classes.paper} style={style2}>
            <Anchor
              // linkStyle={linkStyle}
              orientation='horizontal'
              container={'#t-box'}
              links={links2}
              linkActiveStyle={linkActiveStyle}
              onChange={this.handleAnchorChange}
            ></Anchor>
          </Paper>
        }

        
        
        <Divider />
        <Paper ref={(node) => { this.container = node; }} id={'t-box'} className={classes.tBox}>
          <p id="a1" style={p}>
            <a style={a} href="#a1">1</a>
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          </p>
          <Divider />
          
          <p id="a2" style={p}>
            <a style={a} href="#a2">2</a>
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          </p>
          <div id="a3" style={p}>
            <a style={a} href="#a3">3</a>
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            <Grid container className={classes.sub}>
              <Grid item  xs={12}>
                <a id='sub31' href="#sub31">sub31</a>
                The TextField is a convenience wrapper<br/>
                for the most common cases(80 % ).It cannot be all things to all people,<br/>
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
              </Grid>
              <Grid item  xs={12}>
                <a id='sub311' href="#sub311">sub311</a>
                The TextField is a convenience wrapper<br/>
                for the most common cases(80 % ).It cannot be all things to all people,<br/>
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
              </Grid>
              <Grid  item xs={12}>
                <a id='sub321' href="#sub321">sub321</a>
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
              </Grid>
              <Grid item xs={12}>
                <a id='sub331' href="#sub331">sub331</a>
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
              </Grid>
              <Grid  item xs={12}>
                <a id='sub32' href="#sub32">sub32</a>
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
              </Grid>
              <Grid item xs={12}>
                <a id='sub33' href="#sub33">sub33</a>
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
                The TextField is a convenience wrapper
                for the most common cases(80 % ).It cannot be all things to all people,
                otherwise the API would grow out of control.
              </Grid>
              
            </Grid>

          </div >
          <Divider />

          <p id="a4" style={p}>
            <a style={a} href="#a4">4</a>
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          </p>
          <Divider />
          <p id="a5" style={p}>
            <a style={a} href="#a5">5</a>
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
          </p>
            <Divider />
            <p id="a6" style={p}>
              <a style={a} href="#a6">6</a>
              The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
              The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
              The TextField is a convenience wrapper for the most common cases (80%). It cannot be all things to all people, otherwise the API would grow out of control.
            </p>
          <Divider />
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(App)
