import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Button from '@6thquake/react-material/Button';
import Tooltip from '@6thquake/react-material/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  customWidth: {
    maxWidth: 500,
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
});

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. 
Praesent non nunc mollis, fermentum neque at, semper arcu. 
Nullam eget est sed sem iaculis gravida eget vitae justo. 
`;

function VariableWidth({ classes }) {
  return (
    <div>
      <Tooltip title={longText}>
        <Button className={classes.button}>Default Width [300px]</Button>
      </Tooltip>
      <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
        <Button className={classes.button}>Custom Width [500px]</Button>
      </Tooltip>
      <Tooltip title={longText} classes={{ tooltip: classes.noMaxWidth }}>
        <Button className={classes.button}>No wrapping</Button>
      </Tooltip>
    </div>
  );
}

VariableWidth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VariableWidth);
