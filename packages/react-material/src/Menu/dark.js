// const menuPrefixCls = 'rm-menu';
const styles = (theme, menuPrefixCls) => {
  return {
    // dark theme
    '&-dark, &-dark &-sub': {
      color: 'rgba(255,255,255,.65) !important',
      background: '#001529 !important',
      [`& .${menuPrefixCls}-submenu-title .${menuPrefixCls}-submenu-arrow`]: {
        opacity: .45,
        transition: 'all .3s !important',
        '&:after, &:before': {
          background: `${theme.palette.common.white} !important`
        }
      }
    },
    '&-dark&-submenu-popup': {
      background: 'transparent !important'
    },
    '&-dark &-inline&-sub': {
      background: '#000c17 !important',
      boxShadow: '0 2px 8px rgba(0, 0, 0, .45) inset !important'
    },
    '&-dark&-horizontal': {
      borderBottomColor: '#001529 !important'
    },
    '&-dark&-horizontal > &-item, &-dark&-horizontal > &-submenu': {
      borderColor: '#000c17 !important',
      borderBottom: 0
    },
    '&-dark &-item, &-dark &-item-group-title, &-dark &-item > a': {
      color: 'rgba(255,255,255,.65) !important'
    },
    '&-dark&-inline, &-dark&-vertical, &-dark&-vertical-left, &-dark&-vertical-right': {
      borderRight: 0
    },
    '&-dark&-inline &-item, &-dark&-vertical &-item, &-dark&-vertical-left &-item, &-dark&-vertical-right &-item': {
      borderRight: 0,
      marginLeft: 0,
      left: 0,
      '&:after': {
        borderRight: 0
      }
    },
    '&-dark&-inline &-item, &-dark&-inline &-submenu-title': {
      width: '100%'
    },
    '&-dark &-item:hover,&-dark &-item-active,&-dark &-submenu-active,&-dark &-submenu-open,&-dark &-submenu-selected,&-dark &-submenu-title:hover': {
      backgroundColor: 'transparent',
      color: `${theme.palette.common.white} !important`,
      '&> a': {
        color: `${theme.palette.common.white} !important`
      },
      [`&> .${menuPrefixCls}-submenu-title,> .${menuPrefixCls}-submenu-title:hover`]: {
        [`&> .${menuPrefixCls}-submenu-arrow`]: {
          opacity: 1,
          '&:after, &:before': {
            background: `${theme.palette.common.white} !important`
          }
        }
      }
    },
    '&-dark &-item-selected': {
      borderRight: 0,
      color: `${theme.palette.common.white} !important`,
      '&:after': {
        borderRight: 0
      },
      '&> a, > a:hover': {
        color:`${theme.palette.common.white} !important`
      }
    },
    '&&-dark &-item-selected, &-submenu-popup&-dark &-item-selected': {
      backgroundColor: `${theme.palette.primary.main}  !important`
    },
    // Disabled state sets text to dark gray and nukes hover/tab effects
    '&-dark &-item-disabled, &-dark &-submenu-disabled': {
      '&, > a': {
        opacity: 0.8,
        color: 'rgba(255,255,255,.35) !important'
      },
      [`&> .${menuPrefixCls}-submenu-title`]: {
        color: 'rgba(255,255,255,.35) !important'
      }
    }
  }
};
export default styles;
