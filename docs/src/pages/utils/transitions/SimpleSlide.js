import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Switch from 'material-ui/Switch';
import Paper from 'material-ui/Paper';
import Slide from 'material-ui/transitions/Slide';

const styles = theme => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing.unit * 2,
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class SimpleSlide extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Switch checked={checked} onChange={this.handleChange} aria-label="collapse" />
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Slide>
        </div>
      </div>
    );
  }
}

SimpleSlide.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlide);
