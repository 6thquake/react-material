import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Paper from 'react-material/Paper';
import Anchor from 'react-material/Anchor';
import { CompatibleGrid as Grid } from 'react-material/Grid';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function PercentageGridExample(props) {
  const { classes } = props;
  let links=[
    {
      href: '#how-it-works',
      label: 'How-it-works'
    },
    // PercentageGrid grid
    {
      href: '#percentage-grid',
      label: 'Percentage grid'
    },

    {
      href: '#spacing',
      label: 'Spacing'
    },
    {
      href: '#full-width-vs-centered',
      label: 'Full-width-vs-centered'
    },
    {
      href: '#interactive',
      label: 'Interactive'
    },
    {
      href: '#auto-layout',
      label: 'Auto-layout'
    },
    {
      href: '#css-grid-layout',
      label: 'CSS Grid Layout'
    },
    {
      href: '#limitations',
      label: 'Limitations'
    },
    {
      href: '#api',
      label: 'API'
    },
  ]
  let style = {
    position: 'fixed',
    top: 100,
    right: '0',
    width: 300,
    zIndex: 900,
  }

  return (
    <div className={classes.root}>
      <Anchor
          style={style}
          links={links}
        ></Anchor>
      <Grid id='cnchor-box' container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3 </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>nesting</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>nesting</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>nesting</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>nesting</Paper>
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>default order 1: </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>default order 2: </Paper>
            </Grid>
            <Grid item xs={6} push={3} sm={3}>
              <Paper className={classes.paper}>default order 3:  push=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3} pull={3}>
              <Paper className={classes.paper}>default order 4:  pull=3</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3} offset={3}>
              <Paper className={classes.paper}>offset</Paper>
            </Grid>
            
          </Grid>
        </Grid>
        
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={12} lg={6}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={{span: 6, offset:2, push: 2}} sm={{span:3, offset: 3, push: 3}} >
            <Paper className={classes.paper}>size: object</Paper>
        </Grid>
        <Grid item xs={6} sm={{span:3, pull:3}} md={{span:9, push:3}}>
            <Paper className={classes.paper}>size: object</Paper>
        </Grid>         
      </Grid>
    </div>
  );
}

PercentageGridExample.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PercentageGridExample);
