import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Paper from 'react-material/Paper';
import Grid from '../Grid/Grid';
// import Divider from 'react-material/Divider'

// import Divider from '@material-ui/core/Divider';

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

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
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
        <Grid item xs={6} sm={3} push={3}>
          <Paper className={classes.paper}>4: xs=6 sm=3 push=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={24}>
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
              <Paper className={classes.paper}>1: xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>2: xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} push={3} sm={3}>
              <Paper className={classes.paper}>3: xs=6 sm=3 push=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3} pull={3}>
              <Paper className={classes.paper}>4: xs=6 sm=3 pull=3</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3} offset={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
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
        <Grid item xs={{ span: 6, offset: 2, push: 2 }} sm={{ span: 3, offset: 3, push: 3 }}>
          <Paper className={classes.paper}>4: xs=6 sm=3 push=3 before</Paper>
        </Grid>
        <Grid item xs={6} sm={{ span: 3, pull: 3 }} md={{ span: 9, push: 3 }}>
          <Paper className={classes.paper}>4: xs=6 sm=3 push=3 after</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
