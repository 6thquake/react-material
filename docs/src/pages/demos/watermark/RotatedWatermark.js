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
            text={'00000000000.'}
            fontSize={16}
            fontColor="rgba(255, 0, 0, 0.34)"
            degree={0}
          />
          <Watermark
            container={'parent'}
            text={'454545454545.'}
            fontSize={16}
            fontColor="rgba(0, 255, 0, 0.34)"
            degree={45}
          />
          <Watermark
            container={'parent'}
            text={'909090909090.'}
            fontSize={16}
            fontColor="rgba(0, 0, 255, 0.34)"
            degree={90}
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
