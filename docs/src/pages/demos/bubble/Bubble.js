import React from 'react';
import { renderStyle } from 'react-material/Bubble';
import Bubble from 'react-material/Bubble';
import { withStyles } from 'react-material/styles';

/*
 * Left & Right sided bubble styles that can be customized.
*/
const styles = {
  lRectangle: {
    backgroundColor: 'yellow',
    fontSize: 15,
    fontFamily: 'calgary',
    borderRadius: 5,
  },
  lTriangle: {
    borderRight: '12px solid yellow',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    left: -12,
  },
  rRectangle: {
    backgroundColor: 'cyan',
    fontSize: 20,
    fontFamily: 'monospace',
    borderRadius: 5,
  },
  rTriangle: {
    borderLeft: '12px solid cyan',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    right: -12,
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={renderStyle}>
        <Bubble
          isLeft={false}
          content=" "
          alt="Remy Sharp"
          src="/static/images/remy.jpg/"
          classes={{ rRectangle: classes.rRectangle, rTriangle: classes.rTriangle }}
        />
        <Bubble
          isLeft={true}
          content="Oh hi there. I see. So is there anything I can do for the test?"
          alt="Test Portrait"
          src="/static/images/cards/live-from-space.jpg"
          classes={{ lRectangle: classes.lRectangle, lTriangle: classes.lTriangle }}
        />
        <Bubble
          isLeft={true}
          content="Or you're simply asking me to try it and offer some feedback?"
          alt="Test Portrait"
          src="/static/images/cards/live-from-space.jpg"
          classes={{ lRectangle: classes.lRectangle, lTriangle: classes.lTriangle }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(App);
