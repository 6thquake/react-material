import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Card from '@6thquake/react-material/Card';
import CardActions from '@6thquake/react-material/CardActions';
import CardContent from '@6thquake/react-material/CardContent';
import CardMedia from '@6thquake/react-material/CardMedia';
import Button from '@6thquake/react-material/Button';
import Grid from '@6thquake/react-material/Grid';
import Typography from '@6thquake/react-material/Typography';

const styles = {
  item: {
    flexGrow: 1,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    height: 0,
    paddingTop: '65%',
  },
};

const themes = [
  {
    name: 'Dashboard',
    description:
      'A minimal dasboard with taskbar and mini variant draw. ' +
      'The chart is courtesy of Recharts, but it is simple to substitute an alternative.',
    src: '/static/images/layouts/dashboard.png',
    href: '/page-layout-examples/dashboard',
    source:
      'https://github.com/6thquake/react-material/tree/master/docs/src/pages/page-layout-examples/dashboard',
  },
  {
    name: 'Sign-in',
    description: 'A simple sign-in page.',
    src: '/static/images/layouts/sign-in.png',
    href: '/page-layout-examples/sign-in',
    source:
      'https://github.com/6thquake/react-material/tree/master/docs/src/pages/page-layout-examples/sign-in',
  },
  {
    name: 'Blog',
    description:
      'A sophisticated blog page layout. Markdown support is courtesy of react-markdown, ' +
      'but is easily replaced.',
    src: '/static/images/layouts/blog.png',
    href: '/page-layout-examples/blog',
    source:
      'https://github.com/6thquake/react-material/tree/master/docs/src/pages/page-layout-examples/blog',
  },
  {
    name: 'Checkout',
    description:
      'A step-by-step checkout page layout. ' +
      'Adapt the number of steps to suit your needs, or make steps optional.',
    src: '/static/images/layouts/checkout.png',
    href: '/page-layout-examples/checkout',
    source:
      'https://github.com/6thquake/react-material/tree/master/docs/src/pages/page-layout-examples/checkout',
  },
  {
    name: 'Album',
    description: 'A reponsive album / gallery page layout with a hero unit and footer.',
    src: '/static/images/layouts/album.png',
    href: '/page-layout-examples/album',
    source:
      'https://github.com/6thquake/react-material/tree/master/docs/src/pages/page-layout-examples/album',
  },
  {
    name: 'Pricing',
    description:
      'Quickly build an effective pricing table for your potential customers with this page ' +
      'layout.',
    src: '/static/images/layouts/pricing.png',
    href: '/page-layout-examples/pricing',
    source:
      'https://github.com/6thquake/react-material/tree/master/docs/src/pages/page-layout-examples/pricing',
  },
];

function PageLayoutExamples(props) {
  const { classes } = props;
  return (
    <Grid container spacing={16}>
      {themes.map(theme => (
        <Grid item sm={6} md={4} className={classes.item} key={theme.name}>
          <Card className={classes.card}>
            <CardMedia
              component="a"
              href={theme.href}
              className={classes.cardMedia}
              image={theme.src}
              title={theme.name}
              target="_blank"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="headline" align="left" component="h2">
                {theme.name}
              </Typography>
              <Typography component="p">{theme.description}</Typography>
            </CardContent>
            <CardActions>
              <Button component="a" href={theme.source} size="small" color="primary">
                Source code
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

PageLayoutExamples.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageLayoutExamples);
