import {fade} from '../styles/colorManipulator';

const treePrefixCls = 'rm-tree';
const treeDefaultOpenIcon = "arrow_drop_down";
const treeShowlineOpenIcon = "remove";
const treeShowlineCloseIcon = "add";
// const treeDocIcon = "brightness_1";
const treeDocIcon = "folder_open";
const borderColorBase = '#d9d9d9';
function checkboxFn(checkboxPrefixCls, theme) {
  const checkboxSize = 16;
  const inputDisabledBg = '#f5f5f5',
    borderColorSplit = fade('#000', .91);  // split border inside a component
  const borderWidthBase = '1px';            // width of the border for a component
  const borderStyleBase = 'solid';
  const checkWidth = checkboxSize / 14 * 5;
  const checkHeight = checkboxSize / 14 * 8;
  const checkboxInnerPrefixCls = `${checkboxPrefixCls}-inner`;
  const indeterminateWidth = checkboxSize / 14 * 8;
  const indeterminateHeight = checkboxSize / 14;
  // 一般状态
  return {
    [`.${checkboxPrefixCls}`]: {
      // .reset-component;
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      outline: 'none',
      display: 'inline-block',
      lineHeight: 1,
      position: 'relative',
      verticalAlign: 'middle',
      top: '-0.09em',
      [`& .${checkboxPrefixCls}-wrapper:hover &-inner,&:hover &-inner,&-input:focus + &-inner`]: {
        borderColor: theme.palette.primary.main
      },
      '&-checked:after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '2px',
        border: `1px solid ${theme.palette.primary.main}`,
        content: '""',
        animation: 'antCheckboxEffect 0.36s ease-in-out',
        animationFillMode: 'both',
        visibility: 'hidden'
      },
      [`&:hover:after,.${checkboxPrefixCls}-wrapper:hover &:after`]: {
        visibility: 'visible'
      },
      '&-inner': {
        position: 'relative',
        top: 0,
        left: 0,
        display: 'block',
        width: checkboxSize+'px',
        height: checkboxSize+'px',
        border: `${borderWidthBase} ${borderStyleBase} ${borderColorBase}`,
        borderRadius: '2px',
        backgroundColor: '#fff',
        transition: 'all .3s',
        '&:after': {
          transform: 'rotate(45deg) scale(0)',
          position: 'absolute',
          left: (checkboxSize - checkWidth ) / 2 - 0.5 * (checkboxSize / 14) + 'px',
          top: (checkboxSize - checkHeight) / 2 - 2 * (checkboxSize / 14) + 'px',
          display: 'table',
          width: checkWidth + 'px',
          height: checkHeight + 'px',
          border: '2px solid #fff',
          borderTop: 0,
          borderLeft: 0,
          content: '" "',
          transition: 'all .1s @ease-in-back',
        }
      },
      '&-input': {
        position: 'absolute',
        left: 0,
        zIndex: 1,
        cursor: 'pointer',
        opacity: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%'
      }
    },
    // 半选状态
    [`.${checkboxPrefixCls}-indeterminate .${checkboxInnerPrefixCls}:after`]: {
      content: '" "',
      transform: 'scale(1)',
      position: 'absolute',
      left: (checkboxSize - 2 - indeterminateWidth) / 2,
      top: (checkboxSize - 3 - indeterminateHeight) / 2,
      width: indeterminateWidth,
      height: indeterminateHeight
    },
    [`.${checkboxPrefixCls}-indeterminate.${checkboxPrefixCls}-disabled .${checkboxInnerPrefixCls}:after`]: {
      borderColor: fade('#000', .25)
    },
    // 选中状态
    [`.${checkboxPrefixCls}-checked .${checkboxInnerPrefixCls}:after `]: {
      transform: 'rotate(45deg) scale(1)',
      position: 'absolute',
      display: 'table',
      border: '2px solid #fff',
      borderTop: 0,
      borderLeft: 0,
      content: '" "',
      transition: 'all .2s @ease-out-back .1s'
    },
    [`.${checkboxPrefixCls}-checked,.${checkboxPrefixCls}-indeterminate`]: {
      [`& .${checkboxInnerPrefixCls}`]: {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    },
    [`.${checkboxPrefixCls}-disabled`]: {
      cursor: 'not-allowed',
      [`&.${checkboxPrefixCls}-checked`]: {
        [`& .${checkboxInnerPrefixCls}:after`]: {
          animationName: 'none',
          borderColor: fade('#000', .25)
        }
      },
      [`& .${checkboxPrefixCls}-input`]: {
        cursor: 'not-allowed'
      },
      [`& .${checkboxInnerPrefixCls}`]: {
        borderColor: `${borderColorBase} !important`,
        backgroundColor: inputDisabledBg,
        '&:after': {
          animationName: 'none',
          borderColor: inputDisabledBg
        }
      },
      '& + span': {
        color: fade('#000', .25),
        cursor: 'not-allowed'
      }
    },
    [`.${checkboxPrefixCls}-wrapper`]: {
      // .reset-component;
      lineHeight: 'unset',
      cursor: 'pointer',
      display: 'inline-block',
      '& + &': {
        marginLeft: '8px'
      }
    },
    [`.${checkboxPrefixCls}-wrapper + span,.${checkboxPrefixCls} + span`]: {
      paddingLeft: '8px',
      paddingRight: '8px'
    },
    [`.${checkboxPrefixCls}-group`]: {
      // .reset-component;
      display: 'inline-block',
      '&-item': {
        display: 'inline-block',
        marginRight: '8px',
        '&:last-child': {
          marginRight: 0
        }
      },
      '&-item + &-item': {
        marginLeft: 0
      }
    }
  };
}

function iconFont(content) {
  return {
    fontFamily: "'Material Icons'",
    content: `"${content}"`
  }
}

function treeSwitcherIcon(type = treeDefaultOpenIcon) {
  return {
    '&:after': {
      fontSize: '20px',
      transform: `scale(1)  rotate(0deg)`,
      // transform: `scale(${7/12}) rotate(0deg)`,
      display: 'inline-block',
      ...iconFont(type),
      fontWeight: 'bold',
      transition: 'transform .3s',
    }
  };
}

function treeShowLineIcon(type) {
  return {
    '&:after': {
      fontSize: '12px',
      transform: 'scale(1) rotate(0deg)',
      display: 'inline-block',
      ...iconFont(type),
      verticalAlign: 'baseline',
      fontWeight: 'normal',
      transition: 'transform .3s'
    }
  };
}

const styles = theme => {
  const highlightColor = '#f5222d',
    textColor = fade('#000', .65),
    itemHoverBg = fade(theme.palette.primary.main, .1),
    disabledColor = fade('#000', .25),
    treeAhowlineIconColor = fade('#000', .45);
  return {
    '@global': {
      ...checkboxFn(`${treePrefixCls}-checkbox`,theme),
      [`.${treePrefixCls}`]: {
        fontSize: '14px',
        lineHeight: 1.5,
        color: textColor,
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        listStyle: 'none',
        // '@keyframes loadingCircle': {
        //   '0%': {
        //     transformOrigin: '50% 50%',
        //     transform: 'rotate(0deg)'
        //   },
        //   '100%': {
        //     transformOrigin: '50% 50%',
        //     transform: 'rotate(360deg)'
        //   }
        // },
        '& ol, & ul': {
          listStyle: 'none',
          margin: 0,
          padding: 0,
        },
        '& li': {
          padding: '4px 0',
          margin: 0,
          listStyle: 'none',
          whiteSpace: 'nowrap',
          outline: 0,
          '& span[draggable],& span[draggable="true"]': {
            userSelect: 'none',
            borderTop: '2px transparent solid',
            borderBottom: '2px transparent solid',
            marginTop: '-2px',
            /* Required to make elements draggable in old WebKit */
            '-khtml-user-drag': 'element',
            '-webkit-user-drag': 'element'
          },
          '&.drag-over': {
            '& > span[draggable]': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              opacity: 0.8,
            },
          },
          '&.drag-over-gap-top': {
            '& > span[draggable]': {
              borderTopColor: theme.palette.primary.main
            }
          },
          '&.drag-over-gap-bottom': {
            '& > span[draggable]': {
              borderBottomColor: theme.palette.primary.main
            }
          },
          '&.filter-node': {
            '& > span': {
              color: `${highlightColor} !important`,
              fontWeight: '500 !important'
            }
          },
          '& ul': {
            margin: 0,
            padding: '0 0 0 18px'
          },
          [`& .${treePrefixCls}-node-content-wrapper`]: {
            display: 'inline-block',
            padding: '0 5px',
            borderRadius: '2px',
            margin: 0,
            cursor: 'pointer',
            textDecoration: 'none',
            verticalAlign: 'top',
            color: textColor,
            transition: 'all .3s',
            position: 'relative',
            height: '24px',
            lineHeight: '24px',
            '&:hover': {
              backgroundColor: itemHoverBg
            },
            [`&.${treePrefixCls}-node-selected`]: {
              backgroundColor: fade(theme.palette.primary.main, .2)
            }
          },
          '& span': {
            [`&.${treePrefixCls}-checkbox`]: {
              margin: '4px 4px 0 2px'
            },
            [`&.${treePrefixCls}-switcher,&.${treePrefixCls}-iconEle`]: {
              margin: 0,
              width: '24px',
              height: '24px',
              lineHeight: '24px',
              display: 'inline-block',
              verticalAlign: 'middle',
              border: '0 none',
              cursor: 'pointer',
              outline: 'none',
              textAlign: 'center',
              '& .material-icons':{
                verticalAlign:'baseline',
                fontSize:'inherit',
                lineHeight:'inherit',
              }
            },
            [`&.${treePrefixCls}-icon_loading`]: {
              position: 'absolute',
              left: 0,
              top: '1px',
              background: '#fff',
              transform: 'translateX(-100%)',
              transition: 'all .3s',
              '&:after': {
                display: 'inline-block',
                ...iconFont("\E64D"),
                animation: 'loadingCircle 1s infinite linear',
                color: theme.palette.primary.main,
              }
            },
            [`&.${treePrefixCls}-switcher`]: {
              [`&.${treePrefixCls}-switcher-noop `]: {
                cursor: 'default'
              },
              [`&.${treePrefixCls}-switcher_open`]: {
                ...treeSwitcherIcon()
              },
              [`&.${treePrefixCls}-switcher_close`]:(()=>{
                let styles = treeSwitcherIcon();
                styles['&:after'].transform = 'rotate(270deg) scale(1)';
                return {...styles};
              })()
              //   [`&.${treePrefixCls}-switcher_close`]: {
              //   ...treeSwitcherIcon(),
              //   // '&:after': {
              //   //   transform: 'rotate(270deg) scale(0.59)'
              //   // }
              // }
            }
          },
          '&:last-child > span': {
            [`&.${treePrefixCls}-switcher,&.${treePrefixCls}-iconEle`]: {
              '&:before': {
                display: 'none'
              }
            }
          }
        },
        '&> li': {
          '&:first-child': {
            paddingTop: '7px'
          },
          '&:last-child': {
            paddingBottom: '7px'
          }
        },
        '&-child-tree': {
          display: 'none',
          '&-open': {
            display: 'block'
          }
        },
        'li&-treenode-disabled': {
          [`&> span:not(.${treePrefixCls}-switcher),
  > .${treePrefixCls}-node-content-wrapper,
  > .${treePrefixCls}-node-content-wrapper span`]: {
            color: disabledColor,
            cursor: 'not-allowed'
          },
          [`&> .${treePrefixCls}-node-content-wrapper:hover`]: {
            background: 'transparent'
          }
        },
        '&-icon__open': {
          marginRight: '2px',
          verticalAlign: 'top'
        },
        '&-icon__close': {
          marginRight: '2px',
          verticalAlign: 'top'
        },
        '&&-show-line': {
          '& li': {
            position: 'relative',
            '& span': {
              [`&.${treePrefixCls}-switcher`]: {
                background: '#fff',
                color: treeAhowlineIconColor,
                '&:after':{
                  lineHeight:1,
                  border:`1px solid ${treeAhowlineIconColor}`,
                  borderRadius:'2px'
                },
                [`&.${treePrefixCls}-switcher-noop`]: {
                  ...treeShowLineIcon(treeDocIcon),
                },
                [`&.${treePrefixCls}-switcher-noop:after`]:{
                  border:'none'
                },
                [`&.${treePrefixCls}-switcher_open`]: {
                  ...treeShowLineIcon(treeShowlineOpenIcon)
                },
                [`&.${treePrefixCls}-switcher_close`]: {
                  ...treeShowLineIcon(treeShowlineCloseIcon)
                }
              }
            }
          },
          '& li:not(:last-child):before': {
            content: '"  "',
            width: '1px',
            borderLeft:  `1px solid ${borderColorBase}`,
            height: '100%',
            position: 'absolute',
            left: '12px',
            margin: '22px 0'
          }
        }
      }
// .@{tree-prefix-cls} {
//   .reset-component;
//
//
//   }
    }
  }
};
export default styles;

