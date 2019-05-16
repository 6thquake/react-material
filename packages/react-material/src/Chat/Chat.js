import React from 'react';
import Avatar from '../Avatar';
import Bubble from '../Bubble';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';

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
    this.state = {
      ancestor: 'ancestor',
    };
  }

  componentDidMount() {
    this.setState({
      ancestor: document.getElementsByName('ancestor'),
    });
  }

  render() {
    // const { index, isLeft, triSize, bgColor, avatar, classes } = this.props;
    const { isLeft, avatar, bubbleProps } = this.props;

    return isLeft ? ( // left dialog chart
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 20 }}>
        <div name="ancestor">
          {avatar}
          <Bubble
            {...bubbleProps}
            style={{ marginLeft: 10 }}
            direction="left"
            floated="false"
            ancestor={this.state.ancestor}
          >
            {this.props.children}
          </Bubble>
        </div>
      </div>
    ) : (
      // right dialog chart
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
        <div name="ancestor">
          {avatar}
          <Bubble
            {...bubbleProps}
            style={{ marginRight: 10 }}
            direction="right"
            floated="false"
            ancestor={this.state.ancestor}
          >
            {this.props.children}
          </Bubble>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  /**
   * specifies that the chat component should be placed along the left or right side of its container.
   */
  avatar: PropTypes.instanceOf(Avatar).isRequired,
  /**
   * the content of the chat component.
   */
  bgColor: PropTypes.string,
  /**
   * the avatar of the chat component.
   */
  content: PropTypes.string.isRequired,
  /**
   * the font size of the content.
   */
  isLeft: PropTypes.bool.isRequired,
  /**
   * the background color of the chat bubble.
   */
  triSize: PropTypes.number,
};

export default withStyles(styles, { name: 'RMChat' })(Chat);
