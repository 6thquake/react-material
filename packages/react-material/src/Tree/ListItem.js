/**
 * @ignore - do not document.
 */

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function() {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      `Super expression must either be null or a function, not ${typeof superClass}`,
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
  }
}

const ListItem = (function(_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(
      this,
      (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments),
    );
  }

  _createClass(ListItem, [
    {
      key: 'render',
      value: function render() {
        const _props = this.props;

        const primaryText = _props.primaryText;

        const style = _props.style;
        const _props2 = this.props;

        const onTouchTap = _props2.onTouchTap;

        const leftIcon = _props2.leftIcon;

        const styles = {
          root: {
            cursor: 'pointer',
            transition: 'all 0.25s ease-in-out',
          },
          primaryText: {
            lineHeight: '330px',
          },
        };

        return _react2.default.createElement(
          'div',
          {
            style: Object.assign({}, styles.root, style),
            onClick: onTouchTap,
          },
          leftIcon,
          _react2.default.createElement(
            'Link',
            {
              style: Object.assign({}, styles.primaryText),
              to: '/Menu',
            },
            primaryText,
          ),
        );
      },
    },
  ]);

  return ListItem;
})(_react.Component);

ListItem.propTypes = {
  leftIcon: _propTypes2.default.element,
  onTouchTap: _propTypes2.default.func,
  primaryText: _propTypes2.default.string.isRequired,
  rightIcon: _propTypes2.default.element,
  style: _propTypes2.default.object.isRequired,
};

exports.default = ListItem;
