import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import List from '@6thquake/react-material/List';
import ListItem from '@6thquake/react-material/ListItem';
import ListItemIcon from '@6thquake/react-material/ListItemIcon';
import ListItemText from '@6thquake/react-material/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function InsetList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText inset primary="Chelsea Otakan" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Eric Hoffman" />
        </ListItem>
      </List>
    </div>
  );
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetList);
