import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      // Do the opposite of the docs in order to help catching issues.
      boxSizing: 'content-box',
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
      // Disable transitions to avoid flaky screenshots
      transition: 'none !important',
      animation: 'none !important',
    },
    body: {
      margin: 0,
      overflowX: 'hidden',
    },
  },
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit,
  },
});

class TestViewer extends React.Component {
  getChildContext() {
    return {
      url: {
        pathname: '/',
      },
    };
  }

  render() {
    const { children, classes } = this.props;

    return <div className={classes.root}>{children}</div>;
  }
}

TestViewer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

TestViewer.childContextTypes = {
  url: PropTypes.object,
};

export default withStyles(styles)(TestViewer);
