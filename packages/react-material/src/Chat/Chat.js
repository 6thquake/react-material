import React from 'react';
import {avatars} from '../../../../docs/src/pages/demos/chat/Chat.js';
import Avatar from '../Avatar';
import Bubble from '../Bubble';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';

/*
 * To set styles used for render in App.
*/
export const renderStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

export const styles = theme => ({});

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      ancestor: 'ancestor',
    };
  }

  componentDidMount() {
    this.setState({
      ancestor: document.getElementsByName('ancestor'),
    });
  }

  render() {
    const { isLeft, triSize, bgColor, classes } = this.props;

    return isLeft ? ( //left dialog chart
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 20 }}>
        <div name="ancestor">
          <Avatar alt={avatars.lAvatar.alt} src={avatars.lAvatar.src} style={{ marginRight: 10 }} />
          <Bubble direction='left' floated='false' ancestor={ this.state.ancestor } bgColor={ bgColor } triSize={ triSize } classes={ classes }>
            {this.props.children}
          </Bubble>
        </div>
      </div>
    ) : (
      //right dialog chart
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
        <div name="ancestor">
          <Bubble direction="right" floated="false" ancestor={ this.state.ancestor } bgColor={ bgColor } triSize={ triSize } classes={ classes }>
            {this.props.children}
          </Bubble>
          <Avatar alt={avatars.rAvatar.alt} src={avatars.rAvatar.src} style={{ marginLeft: 10 }} />
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  /**
   *
   */
  isLeft: PropTypes.bool.isRequired,
  /**
   *
   */
  content: PropTypes.string.isRequired,
};

export default withStyles(styles, { name: 'RMChat' })(Chat);
