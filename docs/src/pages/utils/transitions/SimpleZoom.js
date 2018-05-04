import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Switch from 'react-material/Switch';
import Paper from 'react-material/Paper';
import Zoom from 'react-material/transitions/Zoom';

const styles = theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
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

class SimpleZoom extends React.Component {
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
        <Switch checked={checked} onChange={this.handleChange} aria-label="collapse" />
        <div className={classes.container}>
          <Zoom in={checked}>
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Zoom>
          <Zoom in={checked} style={{ transitionDelay: checked ? 500 : 0 }}>
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Zoom>
        </div>
      </div>
    );
  }
}

SimpleZoom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleZoom);
