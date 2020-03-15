import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

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


      return React.createElement(
        BrowserRouter,
        null,
        React.createElement(
          Switch,
          null,
          forRoot.map(function (item, index) {
            return React.createElement(RouterConfig, { key: index, component: item.component, path: item.path, item: item });
          })
        )
      );
    }
  }]);
  return OutLet;
}(Component);

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

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          Link,
          { to: readyQueryParams },
          children
        )
      );
    }
  }]);
  return Atag;
}(Component);

Atag.propTypes = {
  routeLink: PropTypes.string,
  children: PropTypes.any,
  routerLinkActive: PropTypes.string,
  queryParams: PropTypes.object
};
var RouterConfig = function RouterConfig(_ref) {
  var item = _ref.item,
      rest = objectWithoutProperties(_ref, ['item']);


  var Component$$1 = item.component;

  if (item.path === '**') {
    return React.createElement(Route, rest);
  }

  if (item.redirectTo) {
    return React.createElement(Redirect, _extends({}, rest, { from: '/' + item.path, to: item.redirectTo }));
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

    return React.createElement(Route, { path: item.path, render: function render(props) {
        return isRouteRender() ? React.createElement(Component$$1, props) : React.createElement(Redirect, { to: '/not-found' });
      } });
  }

  return React.createElement(Route, _extends({}, rest, { render: function render(props) {
      return React.createElement(Component$$1, props);
    } }));
};

export { OutLet, Atag };
//# sourceMappingURL=index.es.js.map
