import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Switch from 'material-ui/Switch';
import Paper from 'material-ui/Paper';
import Collapse from 'material-ui/transitions/Collapse';

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

class SimpleCollapse extends React.Component {
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
          <Collapse in={checked}>
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Collapse>
          <Collapse in={checked} collapsedHeight="40px">
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Collapse>
        </div>
      </div>
    );
  }
}

SimpleCollapse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCollapse);
