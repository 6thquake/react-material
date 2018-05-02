import React ,{ Component}from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { ListItemIcon, ListItemText } from 'material-ui/List';
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
  menuItemSelect:{
    backgroundColor: '#eee',
    '& $primary, & $icon': {
      color: 'blue',
    },
  },
  primary: {},
  icon: {},
});
class ListItemComposition  extends Component {
  constructor(props) {
    super(props);
  }

  toMenuItem = (data, classes) => {
    let {renderLabel = 'text', renderValue = 'value' } = this.props
    let list = data.map((item, index) => {
      let hasSub = item.subItems && item.subItems.length > 0
      let checked = this.props.checkedIndex === index
      return (
        <MenuItem 
          key = {index} 
          className={checked?classes.menuItemSelect: ''}
          onClick={this.handleItemClick(item, index)}
        >
          
          <ListItemText classes={{ primary: classes.primary }} inset primary={item[renderLabel]} />
          {hasSub?(<ListItemIcon className={classes.icon}>
              <PlayArrow />
          </ListItemIcon>):''}
        </MenuItem>
      )
    })
    return list
  }

  // Event zoom
  handleItemClick = (item, index) =>(e)=> {
    let info = {
      level: this.props.level,
      index: index,
      next: this.props.dataSource[index].subItems || [],
      item: this.props.dataSource
    }
    this.props.onChange(info)
  }
  render() {
    const { classes, dataSource, open} = this.props;
    let t = null
    if (dataSource && dataSource.length > 0 && open){
      t = (
        <Paper>
          <MenuList>
            {this.toMenuItem(dataSource, classes)}
          </MenuList>
        </Paper>
      )
    }
    return t
  }
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);
