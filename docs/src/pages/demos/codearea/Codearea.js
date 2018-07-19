import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Codearea, { lightTheme, darkTheme, setPrismTheme } from 'react-material/Codearea';
import Grid from 'react-material/Grid';
import RadioGroup from 'react-material/RadioGroup';
import FormControl from 'react-material/FormControl';
import FormLabel from 'react-material/FormLabel';
import Divider from 'react-material/Divider';
import FormControlLabel from 'react-material/FormControlLabel';
import Radio from 'react-material/Radio';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class SimpleCodearea extends React.Component {
  handleChange = key => (event, value) => {
    this.setState({
      theme: value,
    });
    if (value == 'dark') {
      setPrismTheme(darkTheme);
    } else {
      setPrismTheme(lightTheme);
    }
  };

  state = {
    theme: 'light',
  };

  render() {
    const { classes } = this.props;
    const { orientation } = this.state;

    return (
      <React.Fragment>
        <Grid container alignItems={'stretch'} direction={'column'} justify={'space-between'}>
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">theme: </FormLabel>
              <RadioGroup
                aria-label="theme"
                name="theme"
                value={this.state.theme}
                onChange={this.handleChange('theme')}
              >
                <FormControlLabel value="light" control={<Radio />} label="light" />
                <FormControlLabel value="dark" control={<Radio />} label="dark" />
              </RadioGroup>
            </FormControl>
            <Divider />
          </Grid>
          <Grid item>
            <Codearea language="js">
              {`
                import React from 'react';

                class Square extends React.Component {
                  render() {
                    return (
                      <button className="square">
                        {this.props.value}
                      </button>
                    );
                  }
                }
            `}
            </Codearea>
          </Grid>
          <Grid item>
            <Codearea language="css">
              {`
                  body {
                    font: 100%/1.5 Questrial, sans-serif;
                    tab-size: 4;
                    hyphens: auto;
                  }
                  
                  a {
                    color: inherit;
                  }
                  
                  section h1 {
                    font-size: 250%;
                  }
                  
                  section section h1 {
                    font-size: 150%;
                  }
                `}
            </Codearea>
          </Grid>
          <Grid item>
            <Codearea language="diff">
              {`                  
 'use strict';
 
 var
+  http2 = require('spdy'),
   connect = require('connect'),
   http = require('http'),
   path = require('path'),
@@ -192,8 +193,11 @@ if ("com.expressjs.express" in plugins) {
     }
   }));
 }
-
-http.createServer(app).listen(app.get('port'), function createServerCb() {
+var options = { 
+  key: fs.readFileSync('./ca/server.key'), 
+  cert: fs.readFileSync('./ca/server.crt') 
+} 
+http2.createServer(options,app).listen(app.get('port'), function createServerCb() {
   console.log('Express server listening on port ' + app.get('port'));
   console.log('http://' + app.get('domain') + ':' + app.get('port'));
 })
\ No newline at end of file

              `}
            </Codearea>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

SimpleCodearea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCodearea);
