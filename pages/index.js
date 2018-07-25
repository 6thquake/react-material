import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Head from 'next/head';
import { withStyles } from '@6thquake/react-material/styles';
import Typography from '@6thquake/react-material/Typography';
import Button from '@6thquake/react-material/Button';
import withRoot from 'docs/src/modules/components/withRoot';
import HomeSteps from 'docs/src/modules/components/HomeSteps';
import HomeBackers from 'docs/src/modules/components/HomeBackers';
import HomeFooter from 'docs/src/modules/components/HomeFooter';
import Link from 'docs/src/modules/components/Link';

const styles = theme => ({
  root: {
    flex: '1 0 100%',
  },
  hero: {
    minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  content: {
    paddingBottom: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 12,
    },
  },
  text: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    maxWidth: 500,
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
  logo: {
    margin: '20px 0',
    width: '100%',
    height: '35vw',
    maxHeight: 200,
  },
  steps: {
    maxWidth: theme.spacing.unit * 130,
    margin: 'auto',
  },
  step: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
  stepIcon: {
    marginBottom: theme.spacing.unit,
  },
  markdownElement: {},
});

function PageHome(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Head>
        <title>React-Material</title>
      </Head>
      <div className={classes.hero}>
        <div className={classes.content}>
          <img src="/static/images/logo.svg" alt="React-Material Logo" className={classes.logo} />
          <div className={classes.text}>
            <Typography variant="display2" component="h1" color="inherit" gutterBottom>
              {'React-Material'}
            </Typography>
            <Typography
              variant="headline"
              component="h2"
              color="inherit"
              className={classes.headline}
            >
              {"React-Material components that implement Google's Material Design."}
            </Typography>
            <Button
              component={buttonProps => (
                <Link
                  variant="button"
                  prefetch
                  href="/getting-started/installation"
                  {...buttonProps}
                />
              )}
              className={classes.button}
              variant="raised"
            >
              {'Get Started'}
            </Button>
          </div>
        </div>
      </div>
      <HomeSteps />
      <HomeBackers />
      <HomeFooter />
    </div>
  );
}

PageHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRoot,
  withStyles(styles),
)(PageHome);
