import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Paper from '@6thquake/react-material/Paper';
import Watermark from '@6thquake/react-material/Watermark';

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
          <Watermark
            container={'parent'}
            text={'bottom-end'}
            placement={'bottom-end'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'bottom-start'}
            placement={'bottom-start'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'bottom'}
            placement={'bottom'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'left-end'}
            placement={'left-end'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'left-start'}
            placement={'left-start'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'left'}
            placement={'left'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'right-end'}
            placement={'right-end'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'right-start'}
            placement={'right-start'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'right'}
            placement={'right'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'top-end'}
            placement={'top-end'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'top-start'}
            placement={'top-start'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'top'}
            placement={'top'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
          <Watermark
            container={'parent'}
            text={'center'}
            placement={'center'}
            fontColor="rgba(255, 0, 0, 0.34)"
          />
        </Paper>
      </div>
    </div>
  );
}

WatermarkDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WatermarkDemo);
