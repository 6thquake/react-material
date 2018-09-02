import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@6thquake/react-material/styles';
import Typography from '@6thquake/react-material/Typography';
import Button from '@6thquake/react-material/Button';
import withRoot from 'docs/src/modules/components/withRoot';
import HomeSteps from 'docs/src/modules/components/HomeSteps';
// import Tidelift from 'docs/src/modules/components/Tidelift';
import HomeBackers from 'docs/src/modules/components/HomeBackers';
import HomeFooter from 'docs/src/modules/components/HomeFooter';
import AppFrame from 'docs/src/modules/components/AppFrame';
import Link from 'docs/src/modules/components/Link';
import Head from 'docs/src/modules/components/Head';

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
    backgroundColor: theme.palette.primary.main,
    // theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    letterSpacing: '.7rem',
    textIndent: '.7rem',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 28,
    },
    whiteSpace: 'nowrap',
  },
  headline: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit,
    maxWidth: 500,
    textAlign: 'center',
  },
  content: {
    paddingBottom: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 12,
    },
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
  logo: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
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

class HomePage extends React.Component {
  componentDidMount() {
    if (window.location.hash !== '') {
      window.location.replace(`https://react-material.com/${window.location.hash}`);
    }
  }

  render() {
    const classes = this.props.classes;

    return (
      <AppFrame>
        <div className={classes.root}>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
{
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "React-Material",
  "url": "/",
  "logo": "/static/brand.png",
  "sameAs": [
    "https://twitter.com/lico_liu"
  ]
}
            `,
            }}
          />
          <Head />
          {/*<Tidelift />*/}
          <div className={classes.hero}>
            <div className={classes.content}>
              <img
                src="/static/images/logo.svg"
                alt="React-Material Logo"
                className={classes.logo}
              />
              <div className={classes.text}>
                <Typography
                  variant="display2"
                  align="center"
                  component="h1"
                  color="inherit"
                  gutterBottom
                  className={classes.title}
                >
                  {'REACT-MATERIAL'}
                </Typography>
                <Typography
                  variant="headline"
                  component="h2"
                  color="inherit"
                  gutterBottom
                  className={classes.headline}
                >
                  {"React components that implement Google's Material Design."}
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
                  variant="outlined"
                  color="primary"
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
      </AppFrame>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRoot,
  withStyles(styles),
)(HomePage);
