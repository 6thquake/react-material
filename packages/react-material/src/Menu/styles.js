import dark from './dark';
const menuPrefixCls = 'rm-menu';
const styles = theme => {
  const menuItem = {
    height: theme.spacing.unit * 5,
    lineHeight: `${theme.spacing.unit * 5}px`,
    fontSize: theme.typography.fontSize
  };
  const active = {
    backgroundColor: theme.palette.primary[50],
    color: theme.palette.primary.main,
    light: theme.palette.primary.light,
  };
  const border = {
    width: '1px',
    style: 'solid',
    color: theme.palette.divider,
    radius: '4px'
  };
  const iconfontCssPrefix = 'material-icons';
  const iconStyle = {
    fontSize: 'inherit',
    marginRight: theme.spacing.unit,
    verticalAlign: 'text-bottom'
  };
  // console.log(theme);
  return {
    '@global': {
      [`.${menuPrefixCls}`]: {
        ...theme.typography.body1,
        outline: 'none',
        margin: 0,
        padding: 0,
        paddingLeft: 0,
        listStyle: 'none',
        boxShadow: theme.shadows[1],
        background: theme.palette.background.default,
        lineHeight: 0,// Fix display inline-block gap
        transition: 'background .3s, width .2s',
        zoom: 1,
        '@global .material-icons,[class*=MuiSvgIcon-root]': {
          ...iconStyle
        },
        '&:before, &:after': {
          content: "' '",
          display: 'table',
        },
        '&:after': {
          clear: 'both',
          visibility: 'hidden',
          fontSize: 0,
          height: 0
        },
        '& ul,& ol': {
          listStyle: 'none',
          margin: 0,
          padding: 0
        },

        '&-hidden': {
          display: 'none'
        },

        '&-item-group-title': {
          ...theme.typography.subheading,
          padding: '8px 16px',
          transition: 'all .3s',
          color: theme.palette.text.secondary

          //         color: @menu-item-group-title-color;
          // font-size: @font-size-base;
          // line-height: @line-height-base;
          // padding: 8px 16px;
          // transition: all .3s;
        },
        '&-submenu, &-submenu-inline': {
          transition: `border-color .3s ${theme.transitions.easing.easeInOut}, background .3s ${theme.transitions.easing.easeInOut}, padding .15s ${theme.transitions.easing.easeInOut}`
        },

        '&-item:active, &-submenu-title:active': {
          background: active.backgroundColor
        },
        '&-submenu &-sub': {
          cursor: 'initial',
          transition: `background .3s ${theme.transitions.easing.easeInOut}, padding .3s ${theme.transitions.easing.easeInOut}`
        },
        '&-item > a': {
          display: 'block',
          // color: @menu-item-color,
          '&:hover': {
            color: active.light
          },
          '&:focus': {
            textDecoration: 'none'
          },
          '&:before': {
            position: 'absolute',
            backgroundColor: 'transparent',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            content: "' '"
          }
        },
        '&-item-divider': {
          height: 1,
          overflow: 'hidden',
          backgroundColor: theme.palette.divider,
          lineHeight: 0,
        },
        '&-item:hover, &-item-active, &:not(&-inline) &-submenu-open, &-submenu-active, &-submenu-title:hover': {
          color: active.light,
        },

        '&-horizontal &-item, &-horizontal &-submenu': {
          marginTop: -1
        },
        '&-horizontal > &-item:hover, &-horizontal > &-item-active, &-horizontal > &-submenu &-submenu-title:hover': {
          backgroundColor: 'transparent'
        },
        '&-item-selected': {
          color: active.light,
          '&> a, > a:hover': {
            color: active.light
          }
        },
        '&:not(&-horizontal) &-item-selected': {
          backgroundColor: active.backgroundColor
        },
        '&-inline, &-vertical, &-vertical-left': {
          borderRight: `${border.width} ${border.style} ${border.color}`
        },
        '&-vertical-right': {
          borderLeft: `${border.width} ${border.style} ${border.color}`
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
              borderRight: 0
            }
          },
          [`&> .${menuPrefixCls}-item,&> .${menuPrefixCls}-submenu`]: {
            transformOrigin: '0 0'
          }
        },
        '&-horizontal&-sub, &-vertical&-sub, &-vertical-left&-sub, &-vertical-right&-sub': {
          minWidth: 160
        },
        '&-item, &-submenu-title': {
          cursor: 'pointer',
          margin: 0,
          padding: '0 20px',
          position: 'relative',
          display: 'block',
          whiteSpace: 'nowrap',
          transition: `color .3s ${theme.transitions.easing.easeInOut}, border-color .3s ${theme.transitions.easing.easeInOut}, background .3s ${theme.transitions.easing.easeInOut}, padding .15s ${theme.transitions.easing.easeInOut}`,
          [`& .${iconfontCssPrefix}`]: {
            minWidth: 14,
            marginRight: 10,
            transition: `font-size .15s ${theme.transitions.easing.easeInOut}, margin .3s ${theme.transitions.easing.easeInOut}`,
            '&+ span': {
              transition: `opacity .3s ${theme.transitions.easing.easeInOut}, width .3s ${theme.transitions.easing.easeInOut}`,
              opacity: 1
            }
          }
        },
        '& > &-item-divider': {
          height: 1,
          margin: '1px 0',
          overflow: 'hidden',
          padding: 0,
          lineHeight: 0,
          backgroundColor: theme.palette.divider
        },

        '&-submenu': {
          '&-popup': {
            position: 'absolute',
            borderRadius: border.radius,
            zIndex: theme.zIndex.drawer
          },
          [`& > .${menuPrefixCls}`]: {
            backgroundColor: theme.palette.background.default,
            borderRadius: border.radius,
            '&-submenu-title:after': {
              transition: `transform .3s ${theme.transitions.easing.easeInOut}`
            }
          },

          [`&-inline > .${menuPrefixCls}-submenu-title .${menuPrefixCls}-submenu-arrow`]: {
            '&:before': {
              transform: 'rotate(-45deg) translateX(2px)'
            },
            '&:after': {
              transform: 'rotate(45deg) translateX(-2px)'
            }
          },
          '&-open': {
            [`&.${menuPrefixCls}-submenu-inline > .${menuPrefixCls}-submenu-title .${menuPrefixCls}-submenu-arrow`]: {
              transform: 'translateY(-2px)',
              '&:after': {
                transform: 'rotate(-45deg) translateX(-2px)'
              },
              '&:before': {
                transform: 'rotate(45deg) translateX(2px)'
              }
            }
          },
          '&-vertical, &-vertical-left, &-vertical-right, &-inline': {
            [`&> .${menuPrefixCls}-submenu-title .${menuPrefixCls}-submenu-arrow`]: {
              transition: `transform .3s ${theme.transitions.easing.easeInOut}`,
              position: 'absolute',
              top: '50%',
              right: 16,
              width: 10,
              '&:before, &:after': {
                content: "' '",
                position: 'absolute',
                verticalAlign: 'baseline',
                background: theme.palette.common.white,
                backgroundImage: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary})`,
                width: 6,
                height: 1.5,
                borderRadius: 2,
                transition: `background .3s ${theme.transitions.easing.easeInOut}, transform .3s ${theme.transitions.easing.easeInOut}, top .3s ${theme.transitions.easing.easeInOut}`
              },
              '&:before': {
                transform: 'rotate(45deg) translateY(-2px)'
              },
              '&:after': {
                transform: 'rotate(-45deg) translateY(2px)'
              }
            },
            [`&> .${menuPrefixCls}-submenu-title:hover .${menuPrefixCls}-submenu-arrow`]: {
              '&:after, &:before': {
                background: `linear-gradient(to right, ${active.light}, ${active.light})`
              }
            }
          },
        },


        '&-vertical &-submenu-selected, &-vertical-left &-submenu-selected, &-vertical-right &-submenu-selected': {
          color: active.light,
          '&> a': {
            color: active.light
          }
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
            [`&:hover,&-active,&-open,&-selected`]: {
              borderBottom: `2px solid ${active.light}`,
              color: active.light
            },
            '& > a': {
              display: 'block',
              color: theme.palette.text.primary,
              '&:hover': {
                color: active.light
              },
              '&:before': {
                bottom: -2
              }
            }
          },
          '&:after': {
            content: "'\\20'",
            display: 'block',
            height: 0,
            clear: 'both'
          }
        },
        '&-inline': {
          width: '100%',
          [`& .${menuPrefixCls}-selected,& .${menuPrefixCls}-item-selected`]: {
            '&:after': {
              transition: `transform .15s ${theme.transitions.easing.easeInOut}, opacity .15s ${theme.transitions.easing.easeInOut}`,
              opacity: 1,
              transform: 'scaleY(1)'
            }
          },
          [`& .${menuPrefixCls}-item,& .${menuPrefixCls}-submenu-title`]: {
            width: "calc(100% + 1px)"
          },
          [`& .${menuPrefixCls}-submenu-title`]: {
            paddingRight: 34
          }
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
              borderRight: `3px solid ${active.color}`,
              transform: 'scaleY(.0001)',
              opacity: 0,
              transition: `transform .15s ${theme.transitions.easing.easeInOut}, opacity .15s ${theme.transitions.easing.easeInOut}`
            }
          },
          [`& .${menuPrefixCls}-item,& .${menuPrefixCls}-submenu-title`]: {
            padding: '0 16px',
            ...menuItem,
            marginTop: 4,
            marginBottom: 4,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          },
          // disable margin collapsed
          [`& .${menuPrefixCls}-submenu`]: {
            paddingBottom: 0.01
          },
          [`& .${menuPrefixCls}-item:not(:last-child)`]: {
            marginBottom: theme.spacing.unit
          },
          [`&> .${menuPrefixCls}-item,
    > .${menuPrefixCls}-submenu > .${menuPrefixCls}-submenu-title`]: {
            lineHeight: menuItem.lineHeight,
            height: menuItem.height
          }
        },

        '&-inline-collapsed': {
          width: theme.spacing.unit * 10,
          [`& > .${menuPrefixCls}-item,
          &> .${menuPrefixCls}-item-group > .${menuPrefixCls}-item-group-list > .${menuPrefixCls}-item,
          &> .${menuPrefixCls}-submenu > .${menuPrefixCls}-submenu-title`]: {
            left: 0,
            textOverflow: 'clip',
            padding: `0 ${( theme.spacing.unit * 10 - 16) / 2}px !important`,
            [`& .${menuPrefixCls}-submenu-arrow`]: {
              display: 'none'
            },

            [`& .${iconfontCssPrefix},[class*=MuiSvgIcon-root]`]: {
              fontSize: 16,
              lineHeight: menuItem.lineHeight,
              margin: 0,
              '&+ span': {
                maxWidth: 0,
                display: 'inline-block',
                opacity: 0
              }
            }
          },
          '&-tooltip': {
            pointerEvents: 'none',
            [`& .${iconfontCssPrefix}`]: {
              display: 'none'
            },
            '& a': {
              color: theme.palette.common.white
            }
          },
          [`& .${menuPrefixCls}-item-group-title`]: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            paddingLeft: 4,
            paddingRight: 4
          }
        },
        '&-item-group-list': {
          margin: 0,
          padding: 0,
          [`& .${menuPrefixCls}-item,
          & .${menuPrefixCls}-submenu-title`]: {
            padding: '0 16px 0 28px'
          }
        },
        '&-root&-vertical, &-root&-vertical-left, &-root&-vertical-right, &-root&-inline': {
          boxShadow: 'none'
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
            listStylePosition: 'inside'
          },
          [`& .${menuPrefixCls}-item-group-title`]: {
            paddingLeft: 32
          }
        },
        // Disabled state sets text to gray and nukes hover/tab effects
        '&-item-disabled, &-submenu-disabled': {
          color: `${theme.palette.text.disabled} !important`,
          cursor: 'not-allowed',
          background: 'none',
          borderColor: 'transparent !important',
          '&> a': {
            color: `${theme.palette.text.disabled} !important`,
            pointerEvents: 'none'
          },
          [`&> .${menuPrefixCls}-submenu-title`]: {
            color: `${theme.palette.text.disabled} !important`,
            cursor: 'not-allowed'
          }
        },
       ...dark(theme,menuPrefixCls)
      }
    }
  }
};

export default styles;
