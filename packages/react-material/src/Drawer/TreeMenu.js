import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '../styles';
import List, {ListItem, ListItemText, ListItemIcon} from '../List';

import Collapse from '../transitions/Collapse';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});


class MenuList extends React.Component {
  static childContextTypes = {
    level: PropTypes.number,
  }
  static contextTypes = {
    level: PropTypes.number,
    itemKeysMap: PropTypes.object,
  }

  getChildContext() {
    return {
      level: this.context.level + 1
    }
  }

  itemKeyToProps(item) {
    const {itemKeysMap} = this.context;
    let result = {};
    for (const key in itemKeysMap) {
      const resultKey = itemKeysMap[key];
      result[key] = item[resultKey];
    }
    return result;
  }

  render() {
    const {list} = this.props;
    return list ? <List>
      {
        list.map((item, index) =>
          //用户自定的item
          <Item key={index} {...this.itemKeyToProps(item)}/>
        )
      }

    </List> : null;
  }
}

MenuList.propTypes = {
  list: PropTypes.object.isRequired
};
// MenuList.defaultProps = {
//   list: {}
// }
class Item extends React.Component {
  static contextTypes = {
    level: PropTypes.number,
    inlineIndent: PropTypes.number
  }
  state = {
    open: this.props.open
  }
  handleClick = () => {
    const {
      onClick,
      onHandle
    } = this.props;
    if (onHandle instanceof Promise) {
      if(this.handle !== 'pendding'){
        onHandle.then(()=>{
          this.handle = 'resolve';
        },()=>{
          this.handle = 'reject';
        }).catch(()=>{
          this.handle = 'reject';
        });
      }
    }else {
      onHandle();
    }
    onClick();
    this.setState({open: !this.state.open});
  };

  render() {
    const {
      name,
      icon,
      children,
      beforeChildren,
      before,
      style,
      className
    } = this.props;
    const {
      level,
      inlineIndent
    } = this.context;
    return before() ? <React.Fragment>
      <ListItem button onClick={this.handleClick} className={className} style={{paddingLeft: level * inlineIndent,...style}}>
        {icon && <ListItemIcon>
          {icon}
        </ListItemIcon>}
        <ListItemText primary={name}/>
      </ListItem>
      {beforeChildren() && children && <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        <MenuList list={children}/>
      </Collapse>}
    </React.Fragment> : null;
  }
}

Item.propTypes = {
  name: PropTypes.node,
  icon: PropTypes.element,
  children: PropTypes.array,
  beforeChildren: PropTypes.func,
  before: PropTypes.func,
  onClick: PropTypes.func,
  onHandle: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.object,
  open: PropTypes.bool
};
Item.defaultProps = {
  open: false,
  before: () => true,
  beforeChildren: () => true,
  onClick:()=>true,
  onHandle:()=>true
};

class TreeMenu extends React.Component {
  static childContextTypes = {
    level: PropTypes.number,
    itemKeysMap: PropTypes.object,
    inlineIndent: PropTypes.number
  }

  getChildContext() {
    return {
      level: 0,
      itemKeysMap: this.props.itemKeysMap,
      inlineIndent: this.props.inlineIndent
    }
  }

  render() {
    return (
      <MenuList list={this.props.list}/>
    );
  }
}

TreeMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  /**
   * 要展示的menu
   */
  list: PropTypes.array.isRequired,
  /**
   * 缩进
   */
  inlineIndent: PropTypes.number,
  /**
   * menu的每一项数据的key值
   */
  itemKeysMap: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.string,
    beforeChildren: PropTypes.string,
    before: PropTypes.string,
    onClick: PropTypes.string,
    onHandle: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
    open: PropTypes.string
  })
};
TreeMenu.defaultProps = {
  inlineIndent: 10,
  itemKeysMap: {
    name: 'name',
    icon: 'icon',
    children: 'children',
    beforeChildren: 'beforeChildren',
    before: 'before',
    onClick: 'onClick',
    onHandle: 'onHandle',
    style: 'style',
    className: 'className',
    open: 'open'
  }
};

export default withStyles(styles)(TreeMenu);



