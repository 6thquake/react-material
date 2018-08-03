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

    this.state = {
      test: 0,
    };
  }

  componentDidMount() {
    let _this = this;

    this.timerId = setTimeout(() => {
      _this.setState({
        test: 1,
      });
    }, 1000);
  }

  renderTest(classes) {
    if (this.state.test == 0) {
      return (
        <div>
          <Chat
            avatar={ <Avatar alt={avatars.rAvatar.alt} src={avatars.rAvatar.src} style={{ marginLeft: 10 }} /> }
            isLeft={false}
            bubbleProps={{
              triSize:"12",
              bgColor:"cyan",
              index: 0,
              classes:{ customization: classes.customization }
            }}

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
            bubbleProps={{
              triSize: '12',
              bgColor: 'yellow',
              index: 1,
              classes: { customization: classes.customization }
            }}
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
            bubbleProps={{
              triSize: '12',
              bgColor: 'yellow',
              index: 2,
              classes: { customization: classes.customization }
            }}
          >
            Or you're simply asking me to try it and offer some feedback?
          </Chat>
        </div>
      );
    }
    else if (this.state.test == 1) {
      return (
        <div>
          <Chat
            avatar={
              <Avatar
                alt={avatars.rAvatar.alt}
                src={avatars.rAvatar.src}
                style={{ marginRight: 10 }}
              />
            }
            isLeft={true}
            bubbleProps={{
              triSize: '12',
              bgColor: 'cyan',
              index: 0,
              classes: { customization: classes.customization }
            }}
          >
            Hello, this is simply a test bubble dialog conversation.
          </Chat>
          <Chat
            avatar={
              <Avatar
                alt={avatars.lAvatar.alt}
                src={avatars.lAvatar.src}
                style={{ marginLeft: 10 }}
              />
            }
            isLeft={false}
            bubbleProps={{
              triSize: '12',
              bgColor: 'yellow',
              index: 1,
              classes: { customization: classes.customization }
            }}
          >
            Oh hi there. I see. So is there anything I can do for the test?
          </Chat>
          <Chat
            avatar={
              <Avatar
                alt={avatars.lAvatar.alt}
                src={avatars.lAvatar.src}
                style={{ marginLeft: 10 }}
              />
            }
            isLeft={false}
            bubbleProps={{
              triSize: '12',
              bgColor: 'yellow',
              index: 2,
              classes: { customization: classes.customization }
            }}
          >
            Or you're simply asking me to try it and offer some feedback?
          </Chat>
        </div>
      );
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={renderStyle}>{this.renderTest(classes)}</div>
    );
  }
}

export default withStyles(styless)(App);
