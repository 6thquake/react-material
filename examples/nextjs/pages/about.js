/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@6thquake/react-material/Button';
import Typography from '@6thquake/react-material/Typography';
import { withStyles } from '@6thquake/react-material/styles';
import Link from 'next/link';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="display1" gutterBottom>
        React-Material
      </Typography>
      <Typography variant="subheading" gutterBottom>
        about page
      </Typography>
      <Typography gutterBottom>
        <Link href="/">
          <a>Go to the main page</a>
        </Link>
      </Typography>
      <Button variant="contained" color="primary">
        Do nothing button
      </Button>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
