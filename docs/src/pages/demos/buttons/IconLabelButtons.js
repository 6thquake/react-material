import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@6thquake/react-material/Button';
import { withStyles } from '@6thquake/react-material/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@6thquake/react-material/Icon';
import SaveIcon from '@material-ui/icons/Save';

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
      <Button variant="contained" color="secondary" className={classes.button}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Send
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      <Button variant="contained" color="default" className={classes.button}>
        Upload
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
      <Button variant="contained" disabled color="secondary" className={classes.button}>
        <KeyboardVoiceICon className={classes.leftIcon} />
        Talk
      </Button>
      <Button variant="contained" size="small" className={classes.button}>
        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>
    </div>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);
