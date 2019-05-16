import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Badge from '@6thquake/react-material/Badge';
import IconButton from '@6thquake/react-material/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@6thquake/react-material/AppBar';
import Tabs from '@6thquake/react-material/Tabs';
import Tab from '@6thquake/react-material/Tab';
import Typography from '@6thquake/react-material/Typography';
import Button from '@6thquake/react-material/Button';
import Paper from '@6thquake/react-material/Paper';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function SimpleBadge(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Badge className={classes.margin} badgeContent={4}>
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
        <IconButton aria-label="4 pending messages" className={classes.margin}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
      </div>
      <AppBar position="static" className={classes.margin}>
        <Tabs value={0}>
          <Tab
            label={
              <Badge className={classes.padding} color="secondary" badgeContent={4}>
                Item One
              </Badge>
            }
          />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <Badge color="primary" badgeContent={400} className={classes.margin} max={99}>
        <Typography className={classes.padding}>Typography</Typography>
      </Badge>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Button variant="contained">Button</Button>
      </Badge>
      <div>
        <Badge variant="standard" color="primary" badgeContent={4} className={classes.margin}>
          <Typography className={classes.padding}>Typography</Typography>
        </Badge>
        <Badge variant="dot" color="primary" badgeContent={4} className={classes.margin}>
          <Typography className={classes.padding}>Typography</Typography>
        </Badge>
        <Badge
          variant="text"
          color="primary"
          badgeContent={'text text text'}
          className={classes.margin}
        >
          <Typography className={classes.padding}>Typography</Typography>
        </Badge>
        <Badge variant="ribbon" color="primary" badgeContent={'新'} className={classes.margin}>
          <Typography className={classes.padding}>Typography</Typography>
        </Badge>
        <Badge variant="mark" color="primary" badgeContent={'热'} className={classes.margin}>
          <Typography className={classes.padding}>Typography</Typography>
        </Badge>
      </div>
      <div>
        <Badge variant="standard" color="primary" badgeContent={4} className={classes.margin}>
          <Button variant="contained">Button</Button>
        </Badge>
        <Badge variant="dot" color="primary" badgeContent={4} className={classes.margin}>
          <Button variant="contained">Button</Button>
        </Badge>
        <Badge
          variant="text"
          color="primary"
          badgeContent={'text text text'}
          className={classes.margin}
        >
          <Button variant="contained">Button</Button>
        </Badge>
        <Badge variant="ribbon" color="primary" badgeContent={'新'} className={classes.margin}>
          <Button variant="contained">Button</Button>
        </Badge>
        <Badge variant="mark" color="primary" badgeContent={'热'} className={classes.margin}>
          <Button variant="contained">Button</Button>
        </Badge>
      </div>
      <div>
        <Badge
          variant="ribbon"
          color="primary"
          badgeContent={'新'}
          className={classes.margin}
          color="error"
        >
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </Paper>
        </Badge>
        <Badge
          variant="mark"
          color="primary"
          badgeContent={'热'}
          className={classes.margin}
          color="error"
        >
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </Paper>
        </Badge>
      </div>
    </div>
  );
}

SimpleBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBadge);
