/* eslint-disable react/no-danger */

import React from 'react';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import 'isomorphic-fetch';

function getLastSeenNotification() {
  const seen = document.cookie.replace(
    /(?:(?:^|.*;\s*)lastSeenNotification\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
  return seen === '' ? 0 : parseInt(seen, 10);
}

function pause(timeout) {
  return new Promise(accept => {
    setTimeout(accept, timeout);
  });
}

let messages = null;

async function getMessages() {
  try {
    if (!messages) {
      await pause(1e3); // Soften the pressure on the main thread.
      const result = await fetch(
        'https://raw.githubusercontent.com/mui-org/material-ui/v1-beta/docs/notifications.json',
      );
      messages = await result.json();
    }
  } catch (err) {
    // Swallow the exceptions.
  }

  messages = messages || [];
}

class Notifications extends React.Component {
  state = {
    open: false,
    message: {},
  };

  componentDidMount = async () => {
    this.mounted = true;
    await getMessages();
    this.handleMessage();
  };

  componentWillUnmout() {
    this.mounted = false;
  }

  mounted = false;

  handleMessage = () => {
    const lastSeen = getLastSeenNotification();
    const unseenMessages = messages.filter(message => message.id > lastSeen);
    if (unseenMessages.length > 0 && this.mounted) {
      this.setState({ message: unseenMessages[0], open: true });
    }
  };

  handleClose = () => {
    this.setState({ open: false });
    document.cookie = `lastSeenNotification=${this.state.message.id};path=/;max-age=31536000`;
  };

  render() {
    const { message, open } = this.state;

    return (
      <Snackbar
        key={message.id}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        SnackbarContentProps={{ 'aria-describedby': 'notification-message' }}
        message={
          <span id="notification-message" dangerouslySetInnerHTML={{ __html: message.text }} />
        }
        action={
          <Button size="small" color="secondary" onClick={this.handleClose}>
            Close
          </Button>
        }
        open={open}
        autoHideDuration={20e3}
        onClose={this.handleClose}
        onExited={this.handleMessage}
      />
    );
  }
}

export default Notifications;
