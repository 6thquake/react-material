import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import red from '@6thquake/react-material/colors/red';
import blue from '@6thquake/react-material/colors/blue';
import SvgIcon from '@6thquake/react-material/SvgIcon';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function SvgIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <HomeIcon className={classes.icon} />
      <HomeIcon className={classes.icon} color="primary" />
      <HomeIcon className={classes.icon} color="secondary" />
      <HomeIcon className={classes.icon} color="action" />
      <HomeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
      <HomeIcon color="disabled" className={classes.icon} style={{ fontSize: 36 }} />
      <HomeIcon
        className={classes.icon}
        color="primary"
        style={{ fontSize: 36 }}
        component={svgProps => (
          <svg {...svgProps}>
            <defs>
              <linearGradient id="gradient1">
                <stop offset="30%" stopColor={blue[400]} />
                <stop offset="70%" stopColor={red[400]} />
              </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
          </svg>
        )}
      />
    </div>
  );
}

SvgIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);
