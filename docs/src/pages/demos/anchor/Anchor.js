import React from 'react';
import Paper from '@6thquake/react-material/Paper';
import Grid from '@6thquake/react-material/Grid';
import { withStyles } from '@6thquake/react-material/styles';
import Divider from '@6thquake/react-material/Divider';
import Anchor from '@6thquake/react-material/Anchor';
import FormControl from '@6thquake/react-material/FormControl';
import FormLabel from '@6thquake/react-material/FormLabel';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import Radio from '@6thquake/react-material/Radio';
import RadioGroup from '@6thquake/react-material/RadioGroup';

export const styles = theme => {
  return {
    tBox: {
      overflow: 'scroll',
      marginTop: 0,
      height: 500,
      marginBottom: 0,
    },
    sub: {
      marginRight: 50,
    },
    paper: {
      // background: theme.palette.primary.main
    },
  };
};

class App extends React.Component {
  target = null;
  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };
  handleAnchorChange = e => {
    console.log('anchor', e);
  };
  state = {
    orientation: 'vertical',
  };
  render() {
    const { classes } = this.props;
    const { orientation } = this.state;
    let a = {
      fontSize: 40,
      display: 'block',
    };
    let p = {
      margin: 100,
      padding: 50,
    };

    let p1 = {
      margin: 100,
      padding: 50,
    };

    const links = [
      {
        value: '#a1',
        label: '#1dsdss',
      },
      {
        value: '#a2',
        label: '#2ewrwrwe',
      },
      {
        value: '#a3',
        label: '#3',
        children: [
          {
            value: '#sub31',
            label: 'sub31',
            children: [
              {
                value: '#sub311',
                label: 'sub311',
              },
              {
                value: '#sub321',
                label: 'sub321',
              },
              {
                value: '#sub331',
                label: 'sub331',
              },
            ],
          },
          {
            value: '#sub32',
            label: 'sub32',
          },
          {
            value: '#sub33',
            label: 'sub33',
          },
        ],
      },
      {
        value: '#a4',
        label: '#4',
      },
      {
        value: '#a5',
        label: '#5',
      },
      {
        value: '#a6',
        label: '#6',
      },
    ];
    const links2 = [
      {
        value: '#a1',
        label: '#1dsdss',
      },
      {
        value: '#a2',
        label: '#2ewrwrwe',
      },
      {
        value: '#a3',
        label: '#3',
      },
      {
        value: '#a4',
        label: '#4',
      },
      {
        value: '#a5',
        label: '#5',
      },
      {
        value: '#a6',
        label: '#6',
      },
    ];

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
        <Divider />

        <Grid container alignItems={'stretch'} direction={'row'} justify={'flex-start'}>
          <Grid item>
            {orientation == 'horizontal' && (
              <Anchor
                container={'#t-box'}
                onChange={this.handleAnchorChange}
                links={links2}
                horizontal
              />
            )}
          </Grid>
          <Grid
            item
            container
            alignItems={'stretch'}
            direction={'row'}
            justify={'flex-start'}
            spacing={16}
          >
            <Grid item xs>
              <Paper id={'t-box'} className={classes.tBox}>
                <p style={p}>
                  <a style={a} />
                  <a style={a} />
                  The TextField is a convenience wrapper for the most common cases (80%). It cannot
                  be all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control.
                </p>
                <Divider />

                <p id="a1" style={p}>
                  <a style={a} href="#a1">
                    1
                  </a>
                  The TextField is a convenience wrapper for the most common cases (80%). It cannot
                  be all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control.
                </p>
                <Divider />

                <p id="a2" style={p}>
                  <a style={a} href="#a2">
                    2
                  </a>
                  The TextField is a convenience wrapper for the most common cases (80%). It cannot
                  be all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control.
                </p>
                <div style={p}>
                  <a id="a3" style={a} href="#a3">
                    3
                  </a>
                  The TextField is a convenience wrapper for the most common cases (80%). It cannot
                  be all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control.
                  <Grid container className={classes.sub}>
                    <Grid item xs={12}>
                      <a id="sub31" href="#sub31">
                        sub31
                      </a>
                      The TextField is a convenience wrapper
                      <br />
                      for the most common cases(80 % ).It cannot be all things to all people,
                      <br />
                      otherwise the API would grow out of control. The TextField is a convenience
                      wrapper for the most common cases(80 % ).It cannot be all things to all
                      people, otherwise the API would grow out of control. The TextField is a
                      convenience wrapper for the most common cases(80 % ).It cannot be all things
                      to all people, otherwise the API would grow out of control. The TextField is a
                      convenience wrapper for the most common cases(80 % ).It cannot be all things
                      to all people, he TextField is a convenience wrapper <br />
                      for the most common cases(80 % ).It cannot be all things to all people, <br />
                      otherwise the API would grow out of control. The TextField is a convenience
                      wrapper for the most common cases(80 % ).It cannot be all things to all
                      people, otherwise the API would grow out of control. The TextField is a
                      convenience wrapper for the most common cases(80 % ).It cannot be all things
                      to all people, otherwise the API would grow out of control. The TextField is a
                      convenience wrapper for the most common cases(80 % ).It cannot be all things
                      to all people, otherwise the API would grow out of control. he TextField is a
                      convenience wrapper <br />
                      for the most common cases(80 % ).It cannot be all things to all people, <br />
                      otherwise the API would grow out of control. The TextField is a convenience
                      wrapper for the most common cases(80 % ).It cannot be all things to all
                      people, otherwise the API would grow out of control. The TextField is a
                      convenience wrapper for the most common cases(80 % ).It cannot be all things
                      to all people, otherwise the API would grow out of control. The TextField is a
                      convenience wrapper for the most common cases(80 % ).It cannot be all things
                      to all people, otherwise the API would grow out of control. he TextField is a
                      convenience wrapper
                      <br />
                      for the most common cases(80 % ).It cannot be all things to all people,
                      <br />
                      otherwise the API would grow out of control. The TextField is a convenience
                      wrapper for the most common cases(80 % ).It cannot be all things to all
                      people, otherwise the API would grow out of control. The TextField is a
                      convenience wrapper for the most common cases(80 % ).It cannot be all things
                      to all people, otherwise the API would grow out of control. The TextField is a
                      convenience wrapper for the most common cases(80 % ).It cannot be all things
                      to all people, otherwise the API would grow out of control. otherwise the API
                      would grow out of control.
                    </Grid>
                    <Grid item xs={12}>
                      <a id="sub311" href="#sub311">
                        sub311
                      </a>
                      The TextField is a convenience wrapper
                      <br />
                      for the most common cases(80 % ).It cannot be all things to all people,
                      <br />
                      otherwise the API would grow out of control. The TextField is a convenience
                      wrapper for the most common cases(80 % ).It cannot be all things to all
                      people, otherwise the API would grow out of control. The TextField is a
                      convenience wrapper for the most common cases(80 % ).It cannot be all things
                      to all people, otherwise the API would grow out of control. The TextField is a
                      convenience wrapper for the most common cases(80 % ).It cannot be all things
                      to all people, otherwise the API would grow out of control.
                    </Grid>
                    <Grid item xs={12}>
                      <a id="sub321" href="#sub321">
                        sub321
                      </a>
                      The TextField is a convenience wrapper for the most common cases(80 % ).It
                      cannot be all things to all people, otherwise the API would grow out of
                      control. The TextField is a convenience wrapper for the most common cases(80 %
                      ).It cannot be all things to all people, otherwise the API would grow out of
                      control. The TextField is a convenience wrapper for the most common cases(80 %
                      ).It cannot be all things to all people, otherwise the API would grow out of
                      control.
                    </Grid>
                    <Grid item xs={12}>
                      <a id="sub331" href="#sub331">
                        sub331
                      </a>
                      The TextField is a convenience wrapper for the most common cases(80 % ).It
                      cannot be all things to all people, otherwise the API would grow out of
                      control. The TextField is a convenience wrapper for the most common cases(80 %
                      ).It cannot be all things to all people, otherwise the API would grow out of
                      control. The TextField is a convenience wrapper for the most common cases(80 %
                      ).It cannot be all things to all people, otherwise the API would grow out of
                      control. The TextField is a convenience wrapper for the most common cases(80 %
                      ).It cannot be all things to all people, otherwise the API would grow out of
                      control.
                    </Grid>
                    <Grid item xs={12}>
                      <a id="sub32" href="#sub32">
                        sub32
                      </a>
                      The TextField is a convenience wrapper for the most common cases(80 % ).It
                      cannot be all things to all people, otherwise the API would grow out of
                      control. The TextField is a convenience wrapper for the most common cases(80 %
                      ).It cannot be all things to all people, otherwise the API would grow out of
                      control. The TextField is a convenience wrapper for the most common cases(80 %
                      ).It cannot be all things to all people, otherwise the API would grow out of
                      control.
                    </Grid>
                    <Grid item xs={12}>
                      <a id="sub33" href="#sub33">
                        sub33
                      </a>
                      The TextField is a convenience wrapper for the most common cases(80 % ).It
                      cannot be all things to all people, otherwise the API would grow out of
                      control. The TextField is a convenience wrapper for the most common cases(80 %
                      ).It cannot be all things to all people, otherwise the API would grow out of
                      control.
                    </Grid>
                  </Grid>
                </div>
                <Divider />

                <p id="a4" style={p}>
                  <a style={a} href="#a4">
                    4
                  </a>
                  The TextField is a convenience wrapper for the most common cases (80%). It cannot
                  be all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control.
                </p>
                <Divider />
                <p id="a5" style={p}>
                  <a style={a} href="#a5">
                    5
                  </a>
                  The TextField is a convenience wrapper for the most common cases (80%). It cannot
                  be all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control.
                </p>
                <Divider />
                <p id="a6" style={p}>
                  <a style={a} href="#a6">
                    6
                  </a>
                  The TextField is a convenience wrapper for the most common cases (80%). It cannot
                  be all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control. The
                  TextField is a convenience wrapper for the most common cases (80%). It cannot be
                  all things to all people, otherwise the API would grow out of control.
                </p>
                <Divider />
              </Paper>
            </Grid>
            <Grid item>
              {orientation == 'vertical' && (
                <Anchor
                  container={'#t-box'}
                  links={links}
                  onChange={this.handleAnchorChange}
                  // hash
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
