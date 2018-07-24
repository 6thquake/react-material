import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@6thquake/react-material/MenuList';
import MenuItem from '@6thquake/react-material/MenuItem';
import Paper from '@6thquake/react-material/Paper';
import { withStyles } from '@6thquake/react-material/styles';
import ListItemIcon from '@6thquake/react-material/ListItemIcon';
import ListItemText from '@6thquake/react-material/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

function ListItemComposition(props) {
  const { classes } = props;

  return (
    <Paper>
      <MenuList>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Sent mail" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Inbox" />
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);
