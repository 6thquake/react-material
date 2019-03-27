import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Paper from '@6thquake/react-material/Paper';
import Typography from '@6thquake/react-material/Typography';
import Watermark from '@6thquake/react-material/Watermark';
import Button from '@6thquake/react-material/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  box: {
    position: 'relative',
    width: 400,
    height: 400,
    margin: 32,
  },
});

function WatermarkDemo(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.root} elevation={1}>
        <Paper className={classes.box}>
          <Button variant="contained" color="primary" className={classes.button}>
            Primary
          </Button>
          <Watermark fontColor="#996699" />
        </Paper>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
        <Watermark fontSize={20} />
      </div>
    </div>
  );
}

WatermarkDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WatermarkDemo);
