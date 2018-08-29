import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Grid from '@6thquake/react-material/Grid';
import Paper from '@6thquake/react-material/Paper';
import Typography from '@6thquake/react-material/Typography';
import ButtonBase from '@6thquake/react-material/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subheading">
                Standard license
              </Typography>
              <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
              <Typography color="textSecondary">ID: 1030114</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subheading">$19.00</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);
