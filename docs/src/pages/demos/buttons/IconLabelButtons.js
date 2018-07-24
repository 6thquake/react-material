import React from 'react';
import PropTypes from 'prop-types';
import Button from '@6thquake/react-material/Button';
import classNames from 'classnames';
import { withStyles } from '@6thquake/react-material/styles';
import Delete from '@material-ui/icons/Delete';
import FileUpload from '@material-ui/icons/CloudUpload';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Icon from '@6thquake/react-material/Icon';
import Save from '@material-ui/icons/Save';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function IconLabelButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button} variant="raised" color="secondary">
        Delete
        <Delete className={classes.rightIcon} />
      </Button>
      <Button className={classes.button} variant="raised" color="primary">
        Send
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      <Button className={classes.button} variant="raised" color="default">
        Upload
        <FileUpload className={classes.rightIcon} />
      </Button>
      <Button className={classes.button} variant="raised" disabled color="secondary">
        <KeyboardVoice className={classes.leftIcon} />
        Talk
      </Button>
      <Button className={classes.button} variant="raised" size="small">
        <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>
    </div>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);
