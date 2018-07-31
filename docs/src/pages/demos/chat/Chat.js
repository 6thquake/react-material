import React from 'react';
import Avatar from '@6thquake/react-material/Avatar';
import Chat, { renderStyle } from '@6thquake/react-material/Chat';
import { withStyles } from '@6thquake/react-material/styles';
/*
 * Left & Right sided rectangle styles that can be customized.
*/
const styless = {
  customization: {
    fontSize: 15,
    fontFamily: 'calgary',
    borderRadius: 5,
    width: 200,
  },
};

/*
 * Left & right parties' avatar sources.
*/
const avatars = {
  lAvatar: {
    src: '/static/images/cards/live-from-space.jpg',
    alt: 'Test Portrait',
  },
  rAvatar: {
    src: '/static/images/remy.jpg/',
    alt: 'Remy Sharp',
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
          avatar={
            <Avatar
              alt={avatars.rAvatar.alt}
              src={avatars.rAvatar.src}
              style={{ marginLeft: 10 }}
            />
          }
          isLeft={false}
          triSize="12"
          bgColor="cyan"
          classes={{ customization: classes.customization }}
        >
          Hello, this is simply a test bubble dialog conversation.
        </Chat>
        <Chat
          avatar={
            <Avatar
              alt={avatars.lAvatar.alt}
              src={avatars.lAvatar.src}
              style={{ marginRight: 10 }}
            />
          }
          isLeft={true}
          bgColor="yellow"
          triSize="12"
          classes={{ customization: classes.customization }}
        >
          Oh hi there. I see. So is there anything I can do for the test?
        </Chat>
        <Chat
          avatar={
            <Avatar
              alt={avatars.lAvatar.alt}
              src={avatars.lAvatar.src}
              style={{ marginRight: 10 }}
            />
          }
          isLeft={true}
          triSize="12"
          bgColor="yellow"
          classes={{ customization: classes.customization }}
        >
          Or you're simply asking me to try it and offer some feedback?
        </Chat>
      </div>
    );
  }
}

export default withStyles(styless)(App);
