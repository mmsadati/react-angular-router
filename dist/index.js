'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactRouterDom = require('react-router-dom');

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var OutLet = function (_Component) {
  inherits(OutLet, _Component);

  function OutLet() {
    classCallCheck(this, OutLet);
    return possibleConstructorReturn(this, (OutLet.__proto__ || Object.getPrototypeOf(OutLet)).apply(this, arguments));
  }

  createClass(OutLet, [{
    key: 'render',
    value: function render() {
      var forRoot = this.props.forRoot;


      return React__default.createElement(
        reactRouterDom.BrowserRouter,
        null,
        React__default.createElement(
          reactRouterDom.Switch,
          null,
          forRoot.map(function (item, index) {
            return React__default.createElement(RouterConfig, { key: index, component: item.component, path: item.path, item: item });
          })
        )
      );
    }
  }]);
  return OutLet;
}(React.Component);

OutLet.propTypes = {
  forRoot: PropTypes.array
};
var Atag = function (_Component2) {
  inherits(Atag, _Component2);

  function Atag() {
    classCallCheck(this, Atag);
    return possibleConstructorReturn(this, (Atag.__proto__ || Object.getPrototypeOf(Atag)).apply(this, arguments));
  }

  createClass(Atag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          routeLink = _props.routeLink,
          children = _props.children,
          routerLinkActive = _props.routerLinkActive,
          queryParams = _props.queryParams;


      var queryArr = [],
          readyQueryParams = void 0;

      for (var query in queryParams) {
        queryArr.push(query);
      }
      readyQueryParams = ('' + routeLink + queryArr.map(function (item, index) {
        return '' + (index === 0 ? '?' : '') + item + '=' + queryParams[item] + (index !== queryArr.length - 1 ? '&' : '');
      })).split(',').join('');

      return React__default.createElement(
        React__default.Fragment,
        null,
        React__default.createElement(
          reactRouterDom.Link,
          { to: readyQueryParams },
          children
        )
      );
    }
  }]);
  return Atag;
}(React.Component);

Atag.propTypes = {
  routeLink: PropTypes.string,
  children: PropTypes.any,
  routerLinkActive: PropTypes.string,
  queryParams: PropTypes.object
};
var RouterConfig = function RouterConfig(_ref) {
  var item = _ref.item,
      rest = objectWithoutProperties(_ref, ['item']);


  var Component = item.component;

  if (item.path === '**') {
    return React__default.createElement(reactRouterDom.Route, rest);
  }

  if (item.redirectTo) {
    return React__default.createElement(reactRouterDom.Redirect, _extends({}, rest, { from: '/' + item.path, to: item.redirectTo }));
  }

  if (item.canActivate) {

    var isRouteRender = function isRouteRender() {
      var guard = true;
      for (var index = 0; index < item.canActivate.length; index++) {
        if (item.canActivate[index]() === false) {
          guard = false;
          break;
        }
      }
      return guard;
    };

    return React__default.createElement(reactRouterDom.Route, { path: item.path, render: function render(props) {
        return isRouteRender() ? React__default.createElement(Component, props) : React__default.createElement(reactRouterDom.Redirect, { to: '/not-found' });
      } });
  }

  return React__default.createElement(reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
      return React__default.createElement(Component, props);
    } }));
};

exports.OutLet = OutLet;
exports.Atag = Atag;
//# sourceMappingURL=index.js.map
