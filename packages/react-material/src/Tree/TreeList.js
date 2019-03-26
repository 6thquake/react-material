/**
 * @ignore - do not document.
 */

Object.defineProperty(exports, '__esModule', { value: true });

const _createClass = (function() {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function(Constructor, protoPros, staticProps) {
    if (protoPros) defineProperties(Constructor.prototype, protoPros);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

const _reactTransitionGroup = require('react-transition-group');
const _listItem = require('./ListItem');

const _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialized-super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      `Super expression must either be null or a function ,not ${typeof superClass}`,
    );
  }
  subClass.prototype = Object.create(superClass && subClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  });
  if (superClass) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
  }
}

const TreeList = (function(_Component) {
  _inherits(TreeList, _Component);

  function TreeList(props) {
    _classCallCheck(this, TreeList);

    const _this = _possibleConstructorReturn(
      this,
      (TreeList.__proto__ || Object.getPrototypeOf(TreeList)).call(this, props),
    );
    _this.state = {
      expandedListItems: [],
      activeListItem: null,
      seatchTerm: '',
    };
    _this.searchMode = false;
    _this.handleTouchTap = _this.handleTouchTap.bind(this);
    return _this;
  }

  _createClass(TreeList, [
    {
      key: 'handleTouchTap',
      value: function handleTouchTap(listItem, index) {
        if (this.searchMode) {
          if (!listItem.childen) {
            this.setState({ activeListItem: index });
          }
        } else if (listItem.childen) {
          const indexOfListItemInArray = this.state.expandedListItems.indexOf(index);
          if (indexOfListItemInArray === -1) {
            this.setState({
              expandedListItems: this.state.expandedListItems.concat([index]),
            });
          } else {
            const newArray = [].concat(this.state.expandedListItems);
            newArray.splice(indexOfListItemInArray, 1);
            this.setState({
              expandedListItems: newArray,
            });
          }
        } else {
          this.setState({
            activeListItem: index,
          });
        }
        if (this.searchMode && this.props.handleTouchTapInSearch)
          this.props.handleTounchInSearchMode(listItem, index);
        if (!this.searchMode && this.props.handleTouchTap)
          this.props.handleTouchTap(listItem, index);
      },
    },
    {
      key: 'render',
      value: function render() {
        const _this2 = this;
        const _props = this.props;

        const children = _props.children;

        const listItems = _props.listItems;

        const contentKey = _props.contentKey;

        const style = this.props.styel ? this.props.style : {};
        const startingDepth = this.props.startingDepth ? this.props.startingDepth : 1;
        const expandedListItems = this.props.expandedListItems
          ? this.props.expandedListItems
          : this.state.expandedListItems;
        const activeListItem = this.props.activeListItem
          ? this.props.activeListItem
          : this.state.activeListItem;
        const listHeight = this.props.listHeight ? this.props.listHeight : '32px';
        const _props2 = this.props;

        const haveSearchbar = _props2.haveSearchbar;

        const onSearch = _props.onSearch;

        const icons = _props2.icons;

        let listItemsModifed = listItems.map((listItem, i, inputArray) => {
          listItem._styles = {
            root: {
              paddingLeft:
                activeListItem === i
                  ? (listItem.depth - startingDepth + 1) * 16 - 5
                  : (listItem.depth - startingDepth + 1) * 16,
              borderLeft: activeListItem === i ? '5px solid #2B95fD' : 'none',
              fontWeight: listItem.children ? 400 : 300,
              height: listHeight,
              cursor: listItem.disabled ? 'not-allowed' : 'pointer',
              color: listItem.disabled ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.87)',
              overflow: 'hidden',
              transform: 'translateZ(0)',
              transition: 'none',
            },
          };
          return listItem;
        });
        const searchTerm = this.props.searchTerm ? this.props.searchTerm : this.state.searchTerm;
        if (searchTerm) {
          this.searchMode = true;
          listItemsModifed = listItemsModifed
            .map(tagListItemsWithSearchTerm(searchTerm))
            .map((listItem, i, inputArray) => {
              listItem._shouldRender =
                listItem.searchMatch || childIsTaggedWithSearch(listItem, inputArray);
              if (listItem.highlight) {
                const left = listItem[contentKey].substring(0, listItem.highlight[0]);
                const middle = listItem[contentKey].substring(
                  listItem.highlight[0],
                  listItem.highlight[0] + listItem.highlight[1],
                );
                const right = listItem[contentKey].substring(
                  listItem.highlight[0] + listItem.highlight[1],
                );
                listItem._primaryText = _react2.default.createElement(
                  'span',
                  null,
                  left,
                  {
                    style: {
                      display: 'inline-block',
                      backgroundColor: 'rgba(255,235,59,0.5',
                      padding: '3px',
                    },
                  },
                  middle,
                  right,
                );
              } else {
                listItem._primaryText = listItem[contentKey];
              }
              return listItem;
            });
        } else {
          this.searchMode = false;
          listItemsModifed = listItemsModifed.map((listItem, i) => {
            listItem._shouldRender =
              listItem.depth >= startingDepth && parentsAreExpanded(listItem);
            listItem._primaryText = listItem[contentKey];
            return listItem;
          });
        }

        const listItemsJSX = listItemsModifed.map((listItem, i) => {
          if (listItem._shouldRender) {
            return _react2.default.createElement(_listItem2.default, {
              key: `treeListItem-${i}`,
              primaryText: listItem._primaryText,
              style: Object.assign({}, listItem._style.root),
              leftIcon: getLeftIcon(listItem, i, expandedListItems),
              onClick() {
                if (listItem.disabled) return;
                _this2.handleTouchTap(listItem, i);
              },
            });
          }
          return null;
        });

        const styles = {
          root: {
            padding: 0,
            paddingBottom: 8,
            paddingTop: children ? 0 : 8,
          },
          searchInput: {
            width: '100%',
            padding: '10px 0px',
            marginBottom: 10,
            border: 0,
            borderBottom: '1px solid #CCCCCC',
          },
        };
        return _react2.default.createElement(
          'div',
          { style: Object.assign({}, styles.root, style) },
          children,
          haveSearchbar &&
            _react2.default.createElement(
              'form',
              {
                style: { padding: '0px 16px' },
                onSubmit: function onSubmit(e) {
                  e.preventDefault();
                  if (onSearch) {
                    onSearch();
                  } else {
                    _this2.setState({ searchTerm: document.getElementById('searchfield').value });
                  }
                },
              },
              _react2.default.createElement('input', {
                style: Object.assign({}, styles.searchInput, style.searchInput),
                type: 'text',
                placeholder: 'Search',
                id: 'searchfield',
              }),
            ),
          _react2.default.createElement(
            _reactTransitionGroup.CSSTransitionGroup,
            {
              transitionName: 'tree-list',
              transitionEnterTimeout: 300,
              transitionLeaveTimeout: 150,
            },
            listItemsJSX,
          ),
        );

        function getLeftIcon(listItem, index, expandedListItems) {
          if (icons) {
            if (listItem.children) {
              if (expandedListItems.indexOf(index) === -1) {
                return icons.leftIconCollapsed;
              }
              return icons.leftIconExpand;
            }
          }
        }

        function parentsAreExpanded(listItem) {
          if (listItem.depth > startingDepth) {
            if (expandedListItems.indexOf(listItem.parentIndex) === -1) {
              return false;
            }
            const parent = listItems.filter((_listItem, index) => {
              return index === listItem.parentIndex;
            })[0];
            return parentsAreExpanded(parent);
          }
          return true;
        }

        function tagListItemsWithSearchTerm(searchTerm, listItem) {
          const f = function f(listItem) {
            const searchTerms = searchTerm.split(' ');
            let match = false;
            let matchIndex = void 0;

            let matchTermLength = void 0;

            if (searchTerms[0] !== '') {
              searchTerms.forEach(searchTerm => {
                const content = listItem[contentKey] ? listItem[contentKey] : '';
                matchIndex = content.toLowerCase().indexOf(searchTerm.toLowerCase());
                if (matchIndex !== -1) {
                  match = true;
                  matchTermLength = searchTerm.length;
                }
              });
            }

            if (match) {
              return Object.assign({}, listItem, {
                searchMatched: true,
                highlight: [matchIndex, matchTermLength],
              });
            }
            return listItem;
          };

          if (listItem) {
            return f(listItem);
          }
          return f;
        }

        function childIsTaggedWithSearch(listItem, listItems) {
          if (listItem.children) {
            for (let i = 0; i < listItem.children.length; i++) {
              for (let j = 0; j < listItems.length; j++)
                if (listItems[j].searchMatched) return true;
            }
          }
        }
      },
    },
  ]);
  return TreeList;
})(_react.Component);

TreeList.propTypes = {
  activeListItem: _propTypes2.default.number,
  contentKey: _propTypes2.default.string.isRequired,
  expandedListItems: _propTypes2.default.array,
  handleTouchTap: _propTypes2.default.func,
  haveSearchbar: _propTypes2.default.bool,
  icons: _propTypes2.default.object,
  listHeight: _propTypes2.default.number,
  listItems: _propTypes2.default.array.isRequired,
  onSearch: _propTypes2.default.func,
  style: _propTypes2.default.object,
};

exports.default = TreeList;
