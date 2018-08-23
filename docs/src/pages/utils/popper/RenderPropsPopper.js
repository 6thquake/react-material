import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Popper from '@6thquake/react-material/Popper';
import Typography from '@6thquake/react-material/Typography';
import Button from '@6thquake/react-material/Button';
import Fade from '@6thquake/react-material/Fade';
import Paper from '@6thquake/react-material/Paper';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

function RenderPropsPopper(props) {
  const { classes } = props;

  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const id = open ? 'render-props-popper' : null;
        return (
          <React.Fragment>
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={event => {
                updateAnchorEl(anchorEl ? null : event.currentTarget);
              }}
            >
              Toggle Popper
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography className={classes.typography}>
                      The content of the Popper.
                    </Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

RenderPropsPopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RenderPropsPopper);
