import dark from './dark';
import { fade } from '../../styles/colorManipulator';

const menuPrefixCls = 'rm-menu';

const styles = theme => {
  const menu = {
    menuCollapsedWidth: '72',
    fontSizeBase: '14px',
    textColor: fade('#000', 0.65),
    lineHeightBase: 1.5,
    boxShadowBase: '0 2px 8px rgba(0, 0, 0, .15)',

    borderColorSplit: 'border-color-split',
    menuItemColor: fade('#000', 0.65),
    menuBg: '#fff',
    menuItemGroupTitleColor: fade('#000', 0.45),

    menuItemActiveBg: fade(theme.palette.primary.main, 0.1),
    menuHoverBg: fade('#000', 0.08),
    // menuHoverBg: fade(theme.palette.primary.main, .05),

    menuHighlightColor: theme.palette.primary.main,
    disabledColor: fade('#000', 0.25),
    textColorDark: fade('#fff', 0.85),

    menuDarkColor: fade('#fff', 0.87),
    menuDarkBg: fade('#000', 0.87),
    menuDarkArrowColor: '#fff',
    menuDarkSubmenuBg: fade('#000', 0.87),
    menuDarkHoverBg: fade('#9e9e9e', 0.3),
    menuDarkHighlightColor: '#fff',

    menuDarkItemSelectedBg: fade(theme.palette.primary.main, 0.35),

    disabledColorDark: fade('#fff', 0.35),
    easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    border: {
      width: '1px',
      style: 'solid',
      color: '#e8e8e8',
      radius: '4px',
      colorSplit: '#e8e8e8', // todo @border-color-split;
    },
    menuItem: {
      height: '40px',
      lineHeight: '40px',
      fontSize: '14px',
    },
    iconStyle: {
      fontSize: 'inherit',
      marginRight: '8px',
      verticalAlign: 'text-bottom',
    },
    ...theme.menu,
  };

  const border = menu.border;

  const menuItem = menu.menuItem;

  const iconStyle = menu.iconStyle;

  const iconfontCssPrefix = 'material-icons';

  return {
    '@global': {
      [`.${menuPrefixCls}`]: {
        ...theme.typography.body1,
        boxShadow: menu.boxShadowBase,
        color: menu.menuItemColor,
        background: menu.menuBg,
        outline: 'none',
        margin: 0,
        padding: 0,
        paddingLeft: 0,
        listStyle: 'none',
        lineHeight: 0,
        transition: 'background .3s, width .2s',
        zoom: 1,
        '@global .material-icons, svg': {
          ...iconStyle,
        },
        '& *': {
          boxSizing: 'border-box',
        },
        '&:before, &:after': {
          content: "' '",
          display: 'table',
        },
        '&:after': {
          clear: 'both',
          visibility: 'hidden',
          fontSize: 0,
          height: 0,
        },
        '& ul,& ol': {
          listStyle: 'none',
          margin: 0,
          padding: 0,
        },

        '&-hidden': {
          display: 'none',
        },

        '&-item-group-title': {
          color: menu.menuItemGroupTitleColor,
          fontSize: menu.fontSizeBase,
          lineHeight: menu.lineHeightBase,
          padding: '8px 16px',
          transition: 'all .3s',
        },
        '&-submenu, &-submenu-inline': {
          transition: `border-color .3s ${menu.easeInOut}, background .3s ${
            menu.easeInOut
          }, padding .15s ${menu.easeInOut}`,
        },

        '&-item:active, &-submenu-title:active': {
          background: menu.menuItemActiveBg,
        },
        '&-submenu &-sub': {
          cursor: 'initial',
          transition: `background .3s ${menu.easeInOut}, padding .3s ${menu.easeInOut}`,
        },
        '&-item > a': {
          display: 'block',
          color: `${menu.menuItemColor} !important`,
          '&:hover': {
            color: `${menu.menuHighlightColor} !important`,
          },
          '&:focus': {
            textDecoration: 'none',
          },
          '&:before': {
            position: 'absolute',
            backgroundColor: 'transparent',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            content: "' '",
          },
        },
        '&-item-divider': {
          height: 1,
          overflow: 'hidden',
          backgroundColor: '#e8e8e8', // theme.palette.divider,
          lineHeight: 0,
        },
        '&-item:hover, &-item-active, &:not(&-inline) &-submenu-open, &-submenu-active': {
          color: menu.menuHighlightColor,
          background: menu.menuHoverBg,
        },
        '&-submenu-title:hover': {
          color: menu.menuHighlightColor,
        },
        '&-horizontal &-item, &-horizontal &-submenu': {
          marginTop: -1,
        },
        '&-horizontal > &-item:hover, &-horizontal > &-item-active, &-horizontal > &-submenu &-submenu-title:hover': {
          backgroundColor: 'transparent',
        },
        '&-item-selected': {
          color: menu.menuHighlightColor,
          '&> a, > a:hover': {
            color: menu.menuHighlightColor,
          },
        },
        '&:not(&-horizontal) &-item-selected': {
          backgroundColor: menu.menuItemActiveBg,
        },
        '&-inline, &-vertical, &-vertical-left': {
          borderRight: `${border.width} ${border.style} ${border.color}`,
        },
        '&-vertical-right': {
          borderLeft: `${border.width} ${border.style} ${border.color}`,
        },
        '&-vertical&-sub, &-vertical-left&-sub, &-vertical-right&-sub': {
          borderRight: 0,
          padding: 0,
          transformOrigin: '0 0',
          [`& .${menuPrefixCls}-item`]: {
            borderRight: 0,
            marginLeft: 0,
            left: 0,
            '&:after': {
              borderRight: 0,
            },
          },
          [`&> .${menuPrefixCls}-item,&> .${menuPrefixCls}-submenu`]: {
            transformOrigin: '0 0',
          },
        },
        '&-horizontal&-sub, &-vertical&-sub, &-vertical-left&-sub, &-vertical-right&-sub': {
          minWidth: 160,
        },
        '&-item, &-submenu-title': {
          cursor: 'pointer',
          margin: 0, // '0 !important',
          padding: '0 20px',
          position: 'relative',
          display: 'block',
          whiteSpace: 'nowrap',
          transition: `color .3s ${menu.easeInOut}, border-color .3s ${
            menu.easeInOut
          }, background .3s ${menu.easeInOut}, padding .15s ${menu.easeInOut}`,
          [`& .${iconfontCssPrefix}`]: {
            minWidth: 14,
            marginRight: 10,
            transition: `font-size .15s ${menu.easeInOut}, margin .3s ${menu.easeInOut}`,
            '&+ span': {
              transition: `opacity .3s ${menu.easeInOut}, width .3s ${menu.easeInOut}`,
              opacity: 1,
            },
          },
        },
        '& > &-item-divider': {
          height: 1,
          margin: '1px 0',
          overflow: 'hidden',
          padding: 0,
          lineHeight: 0,
          backgroundColor: border.colorSplit,
        },

        '&-submenu': {
          '&-popup': {
            position: 'absolute',
            borderRadius: border.radius,
            zIndex: theme.zIndex.drawer,
          },
          [`& > .${menuPrefixCls}`]: {
            backgroundColor: menu.menuBg,
            borderRadius: border.radius,
            '&-submenu-title:after': {
              transition: `transform .3s ${menu.easeInOut}`,
            },
          },

          [`&-inline > .${menuPrefixCls}-submenu-title .${menuPrefixCls}-submenu-arrow`]: {
            '&:before': {
              transform: 'rotate(-45deg) translateX(2px)',
            },
            '&:after': {
              transform: 'rotate(45deg) translateX(-2px)',
            },
          },
          '&-open': {
            [`&.${menuPrefixCls}-submenu-inline > .${menuPrefixCls}-submenu-title .${menuPrefixCls}-submenu-arrow`]: {
              transform: 'translateY(-2px)',
              '&:after': {
                transform: 'rotate(-45deg) translateX(-2px)',
              },
              '&:before': {
                transform: 'rotate(45deg) translateX(2px)',
              },
            },
          },
          '&-vertical, &-vertical-left, &-vertical-right, &-inline': {
            [`&> .${menuPrefixCls}-submenu-title .${menuPrefixCls}-submenu-arrow`]: {
              transition: `transform .3s ${menu.easeInOut}`,
              position: 'absolute',
              top: '50%',
              right: 16,
              width: 10,
              '&:before, &:after': {
                content: "' '",
                position: 'absolute',
                verticalAlign: 'baseline',
                background: menu.menuItemColor,
                backgroundImage: `linear-gradient(to right, ${menu.menuItemColor}, ${
                  menu.menuItemColor
                })`,
                width: 6,
                height: 1.5,
                borderRadius: 2,
                transition: `background .3s ${menu.easeInOut}, transform .3s ${
                  menu.easeInOut
                }, top .3s ${menu.easeInOut}`,
              },
              '&:before': {
                transform: 'rotate(45deg) translateY(-2px)',
              },
              '&:after': {
                transform: 'rotate(-45deg) translateY(2px)',
              },
            },
            [`&> .${menuPrefixCls}-submenu-title:hover .${menuPrefixCls}-submenu-arrow`]: {
              '&:after, &:before': {
                background: `${menu.menuHighlightColor}`,
              },
            },
          },
        },

        '&-vertical &-submenu-selected, &-vertical-left &-submenu-selected, &-vertical-right &-submenu-selected': {
          color: menu.menuHighlightColor,
          '&> a': {
            color: menu.menuHighlightColor,
          },
        },
        '&-horizontal': {
          border: 0,
          borderBottom: `${border.width} ${border.style} ${border.color}`,
          boxShadow: 'none',
          lineHeight: '46px',
          [`&> .${menuPrefixCls}-item,& > .${menuPrefixCls}-submenu`]: {
            position: 'relative',
            top: 1,
            float: 'left',
            borderBottom: '2px solid transparent',
            '&:hover,&-active,&-open,&-selected': {
              borderBottom: `2px solid ${menu.menuHighlightColor}`,
              color: menu.menuHighlightColor,
            },
            '& > a': {
              display: 'block',
              color: menu.menuItemColor,
              '&:hover': {
                color: menu.menuHighlightColor,
              },
              '&:before': {
                bottom: -2,
              },
            },
          },
          '&:after': {
            content: "'\\20'",
            display: 'block',
            height: 0,
            clear: 'both',
          },
        },
        '&-inline': {
          width: '100%',
          [`& .${menuPrefixCls}-selected,& .${menuPrefixCls}-item-selected`]: {
            '&:after': {
              transition: `transform .15s ${menu.easeInOut}, opacity .15s ${menu.easeInOut}`,
              opacity: 1,
              transform: 'scaleY(1)',
            },
          },
          [`& .${menuPrefixCls}-item,& .${menuPrefixCls}-submenu-title`]: {
            width: 'calc(100% + 1px)',
          },
          [`& .${menuPrefixCls}-submenu-title`]: {
            paddingRight: 34,
          },
        },
        '&-vertical, &-vertical-left, &-vertical-right, &-inline': {
          [`& .${menuPrefixCls}-item`]: {
            position: 'relative',
            '&:after': {
              content: "''",
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              borderRight: `3px solid ${menu.menuHighlightColor}`,
              transform: 'scaleY(.0001)',
              opacity: 0,
              transition: `transform .15s ${menu.easeInOut}, opacity .15s ${menu.easeInOut}`,
            },
          },
          [`& .${menuPrefixCls}-item,& .${menuPrefixCls}-submenu-title`]: {
            padding: '0 16px',
            fontSize: menu.fontSizeBase,
            lineHeight: menuItem.height,
            height: menuItem.height,
            marginTop: 4,
            marginBottom: 4,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          // disable margin collapsed
          [`& .${menuPrefixCls}-submenu`]: {
            paddingBottom: 0.01,
          },
          [`& .${menuPrefixCls}-item:not(:last-child)`]: {
            marginBottom: theme.spacing.unit,
          },
          [`&> .${menuPrefixCls}-item,
    > .${menuPrefixCls}-submenu > .${menuPrefixCls}-submenu-title`]: {
            lineHeight: menuItem.lineHeight,
            height: menuItem.height,
          },
        },

        '&-inline-collapsed': {
          width: `${menu.menuCollapsedWidth}px`,
          // width: `${menu.menuCollapsedWidth}px`,
          [`& > .${menuPrefixCls}-item,
          &> .${menuPrefixCls}-item-group > .${menuPrefixCls}-item-group-list > .${menuPrefixCls}-item,
          &> .${menuPrefixCls}-submenu > .${menuPrefixCls}-submenu-title`]: {
            left: 0,
            textOverflow: 'clip',
            padding: `0 ${(menu.menuCollapsedWidth - 24) / 2}px !important`,
            [`& .${menuPrefixCls}-submenu-arrow`]: {
              display: 'none',
            },

            [`& .${iconfontCssPrefix},svg`]: {
              fontSize: 24,
              lineHeight: menuItem.lineHeight,
              margin: 0,
              '&+ span': {
                maxWidth: 0,
                display: 'inline-block',
                opacity: 0,
              },
            },
          },
          '&-tooltip': {
            pointerEvents: 'none',
            [`& .${iconfontCssPrefix}`]: {
              display: 'none',
            },
            '& a': {
              color: menu.textColorDark,
            },
          },
          [`& .${menuPrefixCls}-item-group-title`]: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            paddingLeft: 4,
            paddingRight: 4,
          },
        },
        '&-item-group-list': {
          margin: 0,
          padding: 0,
          [`& .${menuPrefixCls}-item,
          & .${menuPrefixCls}-submenu-title`]: {
            padding: '0 16px 0 28px',
          },
        },
        '&-root&-vertical, &-root&-vertical-left, &-root&-vertical-right, &-root&-inline': {
          boxShadow: 'none',
        },
        '&-sub&-inline': {
          padding: 0,
          border: 0,
          boxShadow: 'none',
          borderRadius: 0,
          [`& > .${menuPrefixCls}-item,
    & > .${menuPrefixCls}-submenu > .${menuPrefixCls}-submenu-title`]: {
            lineHeight: menuItem.lineHeight,
            height: menuItem.height,
            listStyleType: 'disc',
            listStylePosition: 'inside',
          },
          [`& .${menuPrefixCls}-item-group-title`]: {
            paddingLeft: 32,
          },
        },
        // Disabled state sets text to gray and nukes hover/tab effects
        '&-item-disabled, &-submenu-disabled': {
          color: `${menu.disabledColorDark} !important`,
          cursor: 'not-allowed',
          background: 'none',
          borderColor: 'transparent !important',
          '&> a': {
            color: `${menu.disabledColor} !important`,
            pointerEvents: 'none',
          },
          [`&> .${menuPrefixCls}-submenu-title`]: {
            color: `${menu.disabledColor} !important`,
            cursor: 'not-allowed',
          },
        },
        ...dark(menu, menuPrefixCls),
      },
    },
  };
};

export default styles;
