// const menuPrefixCls = 'rm-menu';
const styles = (menu, menuPrefixCls) => {
  return {
    // dark theme
    '&-dark, &-dark &-sub': {
      color: `${menu.menuDarkColor} `,
      background: `${menu.menuDarkBg} !important`,
      [`& .${menuPrefixCls}-submenu-title .${menuPrefixCls}-submenu-arrow`]: {
        // opacity: .45,
        transition: 'all .3s ',
        '&:after, &:before': {
          background: `${menu.menuDarkArrowColor} !important`,
        },
      },
    },

    '&-dark&-submenu-popup': {
      background: 'transparent ',
    },
    '&-dark &-inline&-sub': {
      background: `${menu.menuDarkSubmenuBg} `,
      boxShadow: '0 2px 8px rgba(0, 0, 0, .45) inset ',
    },
    '&-dark&-horizontal': {
      borderBottomColor: `${menu.menuDarkBg} `,
    },
    '&-dark&-horizontal > &-item, &-dark&-horizontal > &-submenu': {
      borderColor: `${menu.menuDarkBg} `,
      borderBottom: 0,
    },
    '&-dark &-item, &-dark &-item-group-title, &-dark &-item > a': {
      color: `${menu.menuDarkColor} `,
    },
    '&-dark&-inline, &-dark&-vertical, &-dark&-vertical-left, &-dark&-vertical-right': {
      borderRight: 0,
    },
    '&-dark&-vertical &-item, &-dark&-vertical-left &-item, &-dark&-vertical-right &-item': {
      borderRight: 0,
      marginLeft: 0,
      left: 0,
      '&:after': {
        borderRight: 0,
      },
    },
    '&-dark&-inline &-item': {
      borderRight: 0,
      marginLeft: 0,
    },
    '&-dark&-inline &-item, &-dark&-inline &-submenu-title': {
      width: '100%',
    },
    '&-dark &-item:hover,&-dark &-item-active,&-dark &-submenu-active,&-dark &-submenu-open,&-dark &-submenu-selected,&-dark &-submenu-title:hover': {
      backgroundColor: 'transparent',
      color: `${menu.menuDarkHighlightColor} `,
      '&> a': {
        color: `${menu.menuDarkHighlightColor} `,
      },
      [`&> .${menuPrefixCls}-submenu-title,> .${menuPrefixCls}-submenu-title:hover`]: {
        [`&> .${menuPrefixCls}-submenu-arrow`]: {
          opacity: 1,
          '&:after, &:before': {
            background: `${menu.menuDarkArrowColor}`,
          },
        },
      },
    },
    '&-dark &-item:hover,&-dark &-submenu-title:hover': {
      backgroundColor: menu.menuDarkHoverBg,
    },
    '&-dark &-item-selected': {
      borderRight: 0,
      color: `${menu.menuDarkHighlightColor} `,
      '&:after': {
        borderRight: 0,
      },
      '&> a, > a:hover': {
        color: `${menu.menuDarkHighlightColor} `,
      },
    },
    '&&-dark &-item-selected, &-submenu-popup&-dark &-item-selected': {
      backgroundColor: `${menu.menuDarkItemSelectedBg}  `,
    },
    // Disabled state sets text to dark gray and nukes hover/tab effects
    '&-dark &-item-disabled, &-dark &-submenu-disabled': {
      '&, > a': {
        opacity: 0.8,
        color: `${menu.disabledColorDark} `,
      },
      [`&> .${menuPrefixCls}-submenu-title`]: {
        color: `${menu.disabledColorDark} `,
      },
    },
  };
};
export default styles;
