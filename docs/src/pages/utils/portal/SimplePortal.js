import React from 'react';
import PropTypes from 'prop-types';
import Portal from '@6thquake/react-material/Portal';
import Button from '@6thquake/react-material/Button';
import Typography from '@6thquake/react-material/Typography';
import { withStyles } from '@6thquake/react-material/styles';

const styles = theme => ({
  alert: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`,
    border: '1px solid',
    borderColor: theme.palette.text.primary,
  },
});

class SimplePortal extends React.Component {
  container = null;

  state = {
    show: false,
  };

  handleClick = () => {
    this.setState(state => ({ show: !state.show }));
  };

  render() {
    const { classes } = this.props;
    const { show } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>{show ? 'Unmount children' : 'Mount children'}</Button>
        <div className={classes.alert}>
          <Typography>It looks like I will render here.</Typography>
          {show ? (
            <Portal container={this.container}>
              <Typography>But I actually render here!</Typography>
            </Portal>
          ) : null}
        </div>
        <div
          className={classes.alert}
          ref={ref => {
            this.container = ref;
          }}
        />
      </div>
    );
  }
}

SimplePortal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePortal);
