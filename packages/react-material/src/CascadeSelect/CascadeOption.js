import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuList from '../MenuList';
import MenuItem from '../MenuItem';
import Paper from '../Paper';
import { withStyles } from '../styles';
import ListItemIcon from '../ListItemIcon';
import ListItemText from '../ListItemText';
import PlayArrow from '@material-ui/icons/PlayArrow';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  menuItemSelect: {
    backgroundColor: '#eee',
    '& $primary, & $icon': {
      color: 'blue',
    },
  },
  primary: {},
  icon: {},
});

class CascadeOption extends Component {
  constructor(props) {
    super(props);
  }

  toMenuItem = (data, classes) => {
    let {
      mapper
    } = this.props;

    let list = data.map((item, index) => {
      let label = item[mapper.label || 'label'] 
      let value = item[mapper.value || 'value']
      if (typeof mapper.label === 'function') {
        label = mapper.label(item, index)
      }
      if (typeof mapper.value === 'function') {
        value = mapper.value(item, index)
      }
      let hasSub = item.subItems && item.subItems.length > 0;
      let checked = this.props.checkedIndex === index;
      return (
        <MenuItem
          key={value}
          value={value}
          className={checked ? classes.menuItemSelect : ''}
          onClick={this.handleItemClick(item, index)}
        >
          <ListItemText classes={{ primary: classes.primary }} inset primary={label} />
          {hasSub ? (
            <ListItemIcon className={classes.icon}>
              <PlayArrow />
            </ListItemIcon>
          ) : (
            ''
          )}
        </MenuItem>
      );
    });
    return list;
  };

  // Event zoom
  handleItemClick = (item, index) => e => {
    let info = {
      level: this.props.level,
      index: index,
      next: this.props.options[index].subItems || [],
      item: this.props.options,
    };
    this.props.onChange(info);
  };
  render() {
    const { classes, options, open } = this.props;
    let t = null;
    if (options && options.length > 0 && open) {
      t = (
        <Paper>
          <MenuList>{this.toMenuItem(options, classes)}</MenuList>
        </Paper>
      );
    }
    return t;
  }
}

CascadeOption.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { name: 'RMCascadeOption' })(CascadeOption);
