import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

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
    name: 'Material Dashboard Pro',
    description: 'Material Dashboard Pro React is a Premium Material-UI Admin.',
    src: '/static/images/themes/creative-tim.png',
    price: '$59',
    category: 'Admin & Dashboard',
    href: 'https://www.creative-tim.com/product/material-dashboard-pro-react?partner=104080',
  },
  {
    name: 'Material Dashboard',
    description: 'Material Dashboard React is a Free Material-UI Admin.',
    src: '/static/images/themes/creative-tim.png',
    price: 'FREE',
    category: 'Admin & Dashboard',
    href: 'https://www.creative-tim.com/product/material-dashboard-react?partner=104080',
  },
];

function PremiumThemes(props) {
  const { classes } = props;
  return (
    <Grid container spacing={16}>
      {themes.map(theme => (
        <Grid item xs={12} sm={6}>
          <Card key={theme.name} className={classes.card}>
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
