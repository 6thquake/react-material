import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@6thquake/react-material/styles';
import Typography from '@6thquake/react-material/Typography';
import Grid from '@6thquake/react-material/Grid';
import Button from '@6thquake/react-material/Button';
import Divider from '@6thquake/react-material/Divider';
import FileDownloadIcon from '@material-ui/docs/svgIcons/FileDownload';
import BuildIcon from '@material-ui/icons/Build'; // eslint-disable-line import/no-unresolved
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MarkdownElement from '@material-ui/docs/MarkdownElement';
import NoSsr from '@6thquake/react-material/NoSsr';
import Link from 'docs/src/modules/components/Link';

const styles = theme => ({
  step: {
    border: `12px solid ${theme.palette.background.paper}`,
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 4}px`,
    },
    [theme.breakpoints.up('md')]: {
      borderRightWidth: 12,
      borderLeftWidth: 12,
    },
  },
  leftStep: {
    borderBottomWidth: 0,
    [theme.breakpoints.up('md')]: {
      borderBottomWidth: 12,
      borderRightWidth: 0,
    },
  },
  rightStep: {
    borderTopWidth: 0,
    [theme.breakpoints.up('md')]: {
      borderTopWidth: 12,
      borderLeftWidth: 0,
    },
  },
  stepTitle: {
    display: 'flex',
    marginBottom: theme.spacing.unit * 3,
    alignItems: 'center',
  },
  stepIcon: {
    color: theme.palette.primary.dark,
    marginRight: theme.spacing.unit * 2,
    fontSize: 30,
  },
  stepBody: {
    minHeight: 270,
  },
  markdownElement: {
    maxWidth: `calc(100vw - ${(theme.spacing.unit * 5 + 1) * 2}px)`,
    '& pre, & pre[class*="language-"], & code': {
      backgroundColor: 'transparent',
    },
    '& pre, & pre[class*="language-"]': {
      padding: theme.spacing.unit,
      margin: 0,
    },
  },
  divider: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2,
  },
  link: {
    marginTop: theme.spacing.unit,
    display: 'block',
  },
  img: {
    maxWidth: 500,
    width: '100%',
    height: 'auto',
  },
});

function HomeSteps(props) {
  const classes = props.classes;

  return (
    <Grid container>
      <Grid item xs={12} md={4} className={classNames(classes.step, classes.leftStep)}>
        <div className={classes.stepTitle}>
          <FileDownloadIcon className={classes.stepIcon} />
          <Typography variant="title">Installation</Typography>
        </div>
        <div className={classes.stepBody}>
          <Typography variant="subheading" gutterBottom>
            {`
            Install React-Material's source files via npm.
            We take care of injecting the CSS needed.
            `}
          </Typography>
          <MarkdownElement
            className={classes.markdownElement}
            text={`
  \`\`\`sh
  $ npm install @6thquake/react-material
  \`\`\`
                `}
          />
          <Typography variant="subheading" gutterBottom>
            {'or use yarn.'}
          </Typography>
          <MarkdownElement
            className={classes.markdownElement}
            text={`
  \`\`\`sh
  $ yarn add react-material@next
  \`\`\`
                `}
          />
        </div>
        <Divider className={classes.divider} />
        <Button
          component={buttonProps => (
            <Link variant="button" prefetch href="/getting-started/installation" {...buttonProps} />
          )}
        >
          Read installation docs
        </Button>
      </Grid>
      <Grid item xs={12} md={4} className={classes.step}>
        <div className={classes.stepTitle}>
          <BuildIcon className={classes.stepIcon} />
          <Typography variant="title">Usage</Typography>
        </div>
        <div className={classes.stepBody}>
          <Typography variant="subheading" gutterBottom>
            {'React-Material components work in isolation. They are self-supporting.'}
          </Typography>
          <MarkdownElement
            className={classes.markdownElement}
            text={`
  \`\`\`jsx
  import React from 'react';
  import Button from '@6thquake/react-material/Button';

  const App = () => (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
  \`\`\`
                `}
          />
        </div>
        <Divider className={classes.divider} />
        <Button
          component={buttonProps => (
            <Link variant="button" prefetch href="/getting-started/usage" {...buttonProps} />
          )}
        >
          Explore the docs
        </Button>
      </Grid>
      <Grid item xs={12} md={4} className={classNames(classes.step, classes.rightStep)}>
        <div className={classes.stepTitle}>
          <WhatshotIcon className={classes.stepIcon} />
          <Typography variant="title">Premium Themes</Typography>
        </div>
        <div className={classes.stepBody}>
          <Typography variant="subheading" gutterBottom>
            {`Take React-Material to the next level with premium themes from
              our official marketplace—all built on React-Material.`}
          </Typography>
          <Link prefetch href="/premium-themes" className={classes.link}>
            <NoSsr>
              <img className={classes.img} alt="themes" src="/static/images/themes.jpg" />
            </NoSsr>
          </Link>
        </div>
        <Divider className={classes.divider} />
        <Button
          component={buttonProps => (
            <Link variant="button" prefetch href="/premium-themes" {...buttonProps} />
          )}
        >
          Browse themes
        </Button>
      </Grid>
    </Grid>
  );
}

HomeSteps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSteps);
