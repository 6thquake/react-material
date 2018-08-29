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
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  media: {
    height: 220,
  },
};

const themes = [
  {
    name: 'Material Dashboard',
    description: 'Material Dashboard React is a Free React-Material Admin.',
    src: '/static/images/themes/creative-tim-dashboard.jpg',
    price: 'FREE',
    category: 'Admin & Dashboard',
    href: 'https://www.creative-tim.com/product/material-dashboard-react?partner=104080',
  },
  {
    name: 'Material Kit',
    description: 'A Badass React-Material Kit based on Material Design.',
    src: '/static/images/themes/creative-tim-kit.jpg',
    price: 'FREE',
    category: 'Components',
    href: 'https://www.creative-tim.com/product/material-kit-react?partner=104080',
  },
  {
    name: 'Material Dashboard Pro',
    description: 'Material Dashboard Pro React is a Premium React-Material Admin.',
    src: '/static/images/themes/creative-tim-dashboard.jpg',
    price: '$59',
    category: 'Admin & Dashboard',
    href: 'https://www.creative-tim.com/product/material-dashboard-pro-react?partner=104080',
  },
  {
    name: 'Material Kit Pro',
    description: 'A Badass React-Material Kit based on Material Design.',
    src: '/static/images/themes/creative-tim-kit.jpg',
    price: '$89',
    category: 'Components',
    href: 'https://www.creative-tim.com/product/material-kit-pro-react?partner=104080',
  },
];

function PremiumThemes(props) {
  const { classes } = props;
  return (
    <Grid container spacing={16}>
      {themes.map(theme => (
        <Grid key={theme.name} item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardMedia
              component="a"
              href={theme.href}
              className={classes.media}
              image={theme.src}
              title={theme.name}
            />
            <CardContent className={classes.cardContent}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="headline" align="left" component="h2">
                    {theme.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom>{theme.price}</Typography>
                </Grid>
              </Grid>
              <Typography gutterBottom color="textSecondary">
                {theme.category}
              </Typography>
              <Typography component="p">{theme.description}</Typography>
            </CardContent>
            <CardActions>
              <Button component="a" href={theme.href} size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

PremiumThemes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PremiumThemes);
