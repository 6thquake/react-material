import React from 'react';
import Bubble from 'react-material/Bubble';
import Button from 'react-material/Button';
import FormControl from 'react-material/FormControl';
import FormLabel from 'react-material/FormLabel';
import FormControlLabel from 'react-material/FormControlLabel';
import Radio from 'react-material/Radio';
import RadioGroup from 'react-material/RadioGroup';
import Grid from 'react-material/Grid';
import { withStyles } from 'react-material/styles';

/*
 * Left & Right sided rectangle styles that can be customized.
*/
const styles = {
  customization: {
    fontSize: 15,
    fontFamily: 'calgary',
    borderRadius: 5,
    width: 'auto',
    height: 'auto',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      arrowOriginalDirection: 'left',
      floatOriginal: 'false',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.display == 'block') {
      this.setState({display: 'none'});
    }
    else {
      this.setState({display: 'block'});
    }
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
      display: 'none',
    });
  };

  componentDidUpdate(prevProps, prevState) {
    document.getElementById("" + prevState.arrowOriginalDirection + prevState.floatOriginal).setAttribute("style", "display: none");
    document.getElementById(""+ this.state.arrowOriginalDirection + this.state.floatOriginal).removeAttribute("style");
  }

  componentDidMount() {
    document.getElementById(""+ this.state.arrowOriginalDirection + this.state.floatOriginal).removeAttribute("style");
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Arrow Direction</FormLabel>
              <RadioGroup
                aria-label="arrowDirection"
                name="arrowDirection"
                value={this.state.arrowOriginalDirection}
                onChange={this.handleChange('arrowOriginalDirection')}>
                <FormControlLabel value="left" control={<Radio />} label="Left" />
                <FormControlLabel value="right" control={<Radio />} label="Right" />
                <FormControlLabel value="top" control={<Radio />} label="Top" />
                <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Floated?</FormLabel>
              <RadioGroup
                id="floated"
                aria-label="floated"
                name="floated"
                value={this.state.floatOriginal}
                onChange={this.handleChange('floatOriginal')} >
                <FormControlLabel value="true" control={<Radio />} label="Float" />
                <FormControlLabel value="false" control={<Radio />} label="Non-float" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <div id="leftfalse" style={{display: 'none'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="raised" onClick={this.handleClick}>
            Click Me
          </Button>
          <div style={{ display: this.state.display, position: 'relative' }}>
            <Bubble
              direction='left'
              floated={false}
              content="Hello, this is simply a test bubble dialog conversation."
              triSize="12"
              bgColor="cyan"
              classes={{ customization: classes.customization }} />
          </div>
        </div>
        </div>

        <div id="rightfalse" style={{display: 'none'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{ display: this.state.display, position: 'relative' }}>
            <Bubble
              direction='right'
              floated={false}
              content="Hello, this is simply a test bubble dialog conversation."
              triSize="12"
              bgColor="cyan"
              classes={{ customization: classes.customization }} />
          </div>
          <Button variant="raised" onClick={this.handleClick}>
            Click Me
          </Button>
        </div>
        </div>

        <div id='topfalse' style={{display: 'none'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ display: this.state.display, position: 'relative' }}>
              <Bubble
                direction='top'
                floated={false}
                content="Hello, this is simply a test bubble dialog conversation."
                triSize="12"
                bgColor="cyan"
                classes={{ customization: classes.customization }} />
            </div>
            <Button variant="raised" onClick={this.handleClick}>
              Click Me
            </Button>
          </div>
        </div>

        <div id="bottomfalse" style={{display: 'none'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Button variant="raised" onClick={this.handleClick}>
            Click Me
          </Button>
          <div style={{ display: this.state.display, position: 'relative' }}>
            <Bubble
              direction='bottom'
              floated={false}
              content="Hello, this is simply a test bubble dialog conversation."
              triSize="12"
              bgColor="cyan"
              classes={{ customization: classes.customization }} />
          </div>
        </div>
        </div>

        <div id="lefttrue" style={{display: 'none'}}>
        <div style={{ position: 'relative' }}>
          <Button variant="raised" onClick={this.handleClick}>
            Click Me
          </Button>
          <div style={{ display: this.state.display, position: 'relative', left: '50%' }}>
            <Bubble
              direction='left'
              floated={true}
              content="Hello, this is simply a test bubble dialog conversation."
              triSize="12"
              bgColor="cyan"
              classes={{ customization: classes.customization }} />
          </div>
        </div>
        </div>

        <div id="righttrue" style={{display: 'none'}}>
        <div style={{ position: 'relative' }}>
          <Button variant="raised" onClick={this.handleClick}>
            Click Me
          </Button>
          <div style={{ display: this.state.display, position: 'relative', left: '-100%' }}>
            <Bubble
              direction='right'
              floated={true}
              content="Hello, this is simply a test bubble dialog conversation."
              triSize="12"
              bgColor="cyan"
              classes={{ customization: classes.customization }} />
          </div>
        </div>
        </div>

        <div id="toptrue" style={{display: 'none'}}>
        <div style={{ position: 'relative' }}>
          <Button variant="raised" onClick={this.handleClick}>
            Click Me
          </Button>
          <div style={{ display: this.state.display, position: 'relative', right: '25%' }}>
            <Bubble
              direction='top'
              floated={true}
              content="Hello, this is simply a test bubble dialog conversation."
              triSize="12"
              bgColor="cyan"
              classes={{ customization: classes.customization }} />
          </div>
        </div>
        </div>

        <div id="bottomtrue" style={{display: 'none'}}>
        <div style={{ position: 'relative' }}>
          <Button variant="raised" onClick={this.handleClick}>
            Click Me
          </Button>
            <div style={{ display: this.state.display, position: 'relative', right: '25%' }}>
              <Bubble
                direction='bottom'
                floated={true}
                content="Hello, this is simply a test bubble dialog conversation."
                triSize="12"
                bgColor="cyan"
                classes={{ customization: classes.customization }} />
            </div>
        </div>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(App);
