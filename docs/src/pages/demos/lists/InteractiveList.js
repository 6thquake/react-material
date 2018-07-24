import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import List from '@6thquake/react-material/List';
import ListItem from '@6thquake/react-material/ListItem';
import ListItemAvatar from '@6thquake/react-material/ListItemAvatar';
import ListItemIcon from '@6thquake/react-material/ListItemIcon';
import ListItemText from '@6thquake/react-material/ListItemText';
import ListItemSecondaryAction from '@6thquake/react-material/ListItemSecondaryAction';
import Avatar from '@6thquake/react-material/Avatar';
import IconButton from '@6thquake/react-material/IconButton';
import FormGroup from '@6thquake/react-material/FormGroup';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import Checkbox from '@6thquake/react-material/Checkbox';
import Grid from '@6thquake/react-material/Grid';
import Typography from '@6thquake/react-material/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class InteractiveList extends React.Component {
  state = {
    dense: false,
    secondary: false,
  };

  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;

    return (
      <div className={classes.root}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={dense}
                onChange={(event, checked) => this.setState({ dense: checked })}
                value="dense"
              />
            }
            label="Enable dense"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={secondary}
                onChange={(event, checked) => this.setState({ secondary: checked })}
                value="secondary"
              />
            }
            label="Enable secondary text"
          />
        </FormGroup>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Typography variant="title" className={classes.title}>
              Text only
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="title" className={classes.title}>
              Icon with text
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Typography variant="title" className={classes.title}>
              Avatar with text
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="title" className={classes.title}>
              Avatar with text and icon
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveList);
