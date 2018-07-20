import React from 'react';
import { renderStyle } from 'react-material/Chat';
import Chat from 'react-material/Chat';
import { withStyles } from 'react-material/styles';

/*
 * Left & Right sided rectangle styles that can be customized.
*/
const styless = {
  customization: {
    fontSize: 15,
    fontFamily: 'calgary',
    borderRadius: 5,
    width: 200,
    height: 100,
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
        <Chat
          isLeft={false}
          content="Hello, this is simply a test bubble dialog conversation."
          avatarAlt="Remy Sharp"
          avatarSrc="/static/images/remy.jpg/"
          triSize="12"
          bgColor="cyan"
          classes={{ customization: classes.customization }}
        />
        <Chat
          isLeft={true}
          content="Oh hi there. I see. So is there anything I can do for the test?"
          avatarAlt="Test Portrait"
          avatarSrc="/static/images/cards/live-from-space.jpg"
          bgColor="yellow"
          triSize="12"
          classes={{ customization: classes.customization }}
        />
        <Chat
          isLeft={true}
          content="Or you're simply asking me to try it and offer some feedback?"
          avatarAlt="Test Portrait"
          avatarSrc="/static/images/cards/live-from-space.jpg"
          triSize="12"
          bgColor="yellow"
          classes={{ customization: classes.customization }}
        />
      </div>
    );
  }
}

export default withStyles(styless)(App);
