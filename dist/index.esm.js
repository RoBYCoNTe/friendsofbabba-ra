import { useTranslate as useTranslate$1, useGetIdentity, LoadingIndicator, getResources as getResources$1, defaultTheme, Notification, HttpError, resolveBrowserLocale, useLocale } from 'react-admin';
import * as React from 'react';
import React__default, { useCallback, createElement, useRef, useState, useEffect, useMemo as useMemo$1 } from 'react';
import { makeStyles, withStyles, createStyles, createTheme } from '@material-ui/core/styles';
import { useMediaQuery, AppBar as AppBar$1, Toolbar, IconButton as IconButton$1, makeStyles as makeStyles$1, List, ListSubheader, Divider, Badge as Badge$1, ListItem, ListItemIcon, ListItemText, Drawer, Typography as Typography$1, MenuItem as MenuItem$1 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Menu$2 from '@material-ui/core/Menu';
import classnames from 'classnames';
import { toggleSidebar, usePermissions as usePermissions$1, useMutation, useRedirect, useRefresh, useNotify } from 'ra-core';
import { useDispatch, useSelector, connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, withRouter } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import get from 'lodash/get';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ThemeProvider } from '@material-ui/styles';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import { stringify } from 'query-string';
import { set, get as get$1 } from 'lodash';
import moment from 'moment';
import polyglotI18nProvider from 'ra-i18n-polyglot';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var UserMenu = function UserMenu(_ref) {
  var logout = _ref.logout,
      children = _ref.children;

  var _React$useState = React__default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var open = Boolean(anchorEl);

  var handleMenu = function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(IconButton, {
    onClick: handleMenu,
    color: "inherit"
  }, /*#__PURE__*/React__default.createElement(AccountCircle, null)), /*#__PURE__*/React__default.createElement(Menu$2, {
    id: "menu-appbar",
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: open,
    onClose: handleClose
  }, !children && logout, React__default.Children.map(children, function (child) {
    return child !== logout ? /*#__PURE__*/React__default.cloneElement(child, {
      onClick: handleClose
    }) : logout;
  })));
};

UserMenu.propTypes = {
  logout: PropTypes.element.isRequired
};

var useStyles$3 = makeStyles(function (theme) {
  return {
    title: {
      flexGrow: 1
    },
    titleSidebarClose: {
      marginLeft: theme.spacing(2)
    },
    appBar: {
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: function appBarShift(_ref) {
      var drawerWidth = _ref.drawerWidth;
      return {
        marginLeft: drawerWidth,
        width: "calc(100% - ".concat(drawerWidth - 2, "px)"),
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      };
    },
    menuButton: _defineProperty({
      marginRight: theme.spacing(2),
      marginLeft: -20
    }, theme.breakpoints.down("sm"), {
      marginRight: theme.spacing(0)
    }),
    hide: {
      display: "none"
    },
    spacer: {
      flex: 1,
      flexGrow: 1
    }
  };
});

var AppBar = function AppBar(_ref2) {
  var open = _ref2.open,
      logout = _ref2.logout,
      drawerWidth = _ref2.drawerWidth,
      location = _ref2.location,
      _ref2$userMenu = _ref2.userMenu,
      userMenu = _ref2$userMenu === void 0 ? UserMenu : _ref2$userMenu;
  var classes = useStyles$3({
    drawerWidth: drawerWidth
  });
  var dispatch = useDispatch();
  var translate = useTranslate$1();
  var isXSmall = useMediaQuery(function (theme) {
    return theme.breakpoints.down("xs");
  });

  var _useGetIdentity = useGetIdentity(),
      identity = _useGetIdentity.identity;

  var handleToggleSidebar = useCallback(function () {
    return dispatch(toggleSidebar());
  }, [dispatch]);
  return /*#__PURE__*/React__default.createElement(AppBar$1, {
    position: "fixed",
    color: "secondary",
    className: classnames(classes.appBar, _defineProperty({}, classes.appBarShift, open && !isXSmall))
  }, /*#__PURE__*/React__default.createElement(Toolbar, null, /*#__PURE__*/React__default.createElement(IconButton$1, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleToggleSidebar,
    edge: "start",
    className: classnames(classes.menuButton, _defineProperty({}, classes.hide, open && !isXSmall))
  }, /*#__PURE__*/React__default.createElement(MenuIcon, null)), /*#__PURE__*/React__default.createElement(Typography, {
    className: classnames(classes.title, _defineProperty({}, classes.titleSidebarClose, !open)),
    variant: "h6",
    id: "react-admin-title",
    noWrap: true
  }), !isXSmall && /*#__PURE__*/React__default.createElement("div", {
    className: classes.spacer
  }), !isXSmall && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body1"
  }, translate("app.welcome", identity)), /*#__PURE__*/React__default.createElement(LoadingIndicator, null), /*#__PURE__*/React__default.createElement(userMenu, {
    logout: logout,
    location: location
  })));
};

AppBar.propTypes = {
  open: PropTypes.bool.isRequired,
  logout: PropTypes.element.isRequired,
  drawerWidth: PropTypes.number.isRequired,
  userMenu: PropTypes.elementType
};

var _excluded$5 = ["children", "open", "label"];
var useStyles$2 = makeStyles$1(function (theme) {
  return {
    subHeader: {
      backgroundColor: theme.palette.background.paper,
      zIndex: theme.zIndex.appBar,
      fontWeight: "bold",
      color: theme.palette.text.primary
    }
  };
});

var MenuGroup = function MenuGroup(_ref) {
  var children = _ref.children,
      open = _ref.open,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded$5);

  var classes = useStyles$2();
  return /*#__PURE__*/React__default.createElement(List, {
    subheader: open ? /*#__PURE__*/React__default.createElement(ListSubheader, {
      className: classes.subHeader
    }, label) : null
  }, React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) && /*#__PURE__*/React__default.cloneElement(child, _objectSpread2({
      open: open
    }, props));
  }), /*#__PURE__*/React__default.createElement(Divider, null));
};

MenuGroup.propTypes = {
  /** Children to render inside the MenuGroup */
  children: PropTypes.node,

  /** Indicates if sidebar is open or not. */
  open: PropTypes.bool,

  /** Label to use for this group. */
  label: PropTypes.string.isRequired,

  /** Name of the groups to merge. */
  group: PropTypes.string
};

var _excluded$4 = ["titleAccess", "children"];

var Badge = function Badge(_ref) {
  _ref.titleAccess;
      var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$4);

  return /*#__PURE__*/React__default.createElement(Badge$1, props, children);
};

var _excluded$3 = ["location", "badge", "to", "icon", "label", "sub", "onMenuClick", "permissions", "open"];

var isSelected = function isSelected(location, to) {
  var selected = location.pathname === to || location.pathname.indexOf("".concat(to, "?")) === 0 || location.pathname.indexOf("".concat(to, "/")) === 0;
  return selected;
};

var MenuItem = function MenuItem(_ref) {
  var location = _ref.location,
      badge = _ref.badge,
      to = _ref.to,
      icon = _ref.icon,
      label = _ref.label,
      sub = _ref.sub,
      onMenuClick = _ref.onMenuClick;
      _ref.permissions;
      var open = _ref.open,
      props = _objectWithoutProperties(_ref, _excluded$3);

  return /*#__PURE__*/React__default.createElement(ListItem, _extends({}, props, {
    button: true,
    component: props.href ? "a" : Link,
    to: to,
    onClick: onMenuClick,
    selected: isSelected(location, to)
  }), /*#__PURE__*/React__default.createElement(ListItemIcon, null, badge && badge.show !== false ? /*#__PURE__*/React__default.createElement(Badge, {
    color: badge.color,
    variant: badge.variant,
    badgeContent: badge.value
  }, /*#__PURE__*/createElement(icon)) : /*#__PURE__*/createElement(icon)), open && /*#__PURE__*/React__default.createElement(ListItemText, {
    primary: label,
    secondary: sub,
    primaryTypographyProps: {
      style: {
        whiteSpace: "normal"
      }
    },
    secondaryTypographyProps: {
      style: {
        whiteSpace: "normal"
      }
    }
  }));
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  badge: PropTypes.shape({
    show: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(["standard", "dot", "dot-small"]),
    color: PropTypes.oneOf(["default", "primary", "secondary", "error"])
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  onMenuClick: PropTypes.func
};

var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (Comp) {
    return funcs.reduceRight(function (prev, curr) {
      return curr(prev);
    }, Comp);
  };
};

var createMenuItem = function createMenuItem(item, badges, translate) {
  var _item$options;

  return {
    localize: item.options.localize,
    badge: get(badges, "".concat(item.name), null),
    order: get(item, "options.order", 0),
    label: translate("menu.items.".concat(item.name)),
    icon: item.icon,
    sub: ((_item$options = item.options) === null || _item$options === void 0 ? void 0 : _item$options.sub) || item.sub,
    to: item.path || "/".concat(item.name)
  };
};

var createGroups = function createGroups(_ref) {
  var order = _ref.order,
      resources = _ref.resources,
      permissions = _ref.permissions,
      badges = _ref.badges,
      hasDashboard = _ref.hasDashboard,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      translate = _ref.translate;
  var groups = (hasDashboard ? [{
    path: "/",
    name: "dashboard",
    icon: DashboardIcon,
    options: {
      group: translate("menu.groups.dashboard")
    }
  }] : []).concat(resources.filter(function (r) {
    return r.hasList && r.options && r.icon;
  })).concat(items.map(function (i) {
    return _objectSpread2(_objectSpread2({}, i), {}, {
      options: {
        roles: i.roles,
        group: i.group,
        localize: i.localize
      }
    });
  })).filter(function (item) {
    return permissions && (item.options.roles === undefined || item.options.roles.filter(function (role) {
      return permissions(role);
    }).length > 0);
  }).reduce(function (groups, resource) {
    var groupName = resource.options ? resource.options.group : "";
    var group = groups.find(function (g) {
      return g.label === groupName;
    });

    if (group) {
      group.items.push(createMenuItem(resource, badges, translate));
      group.items.sort(function (a, b) {
        return a.order > b.order ? 1 : a.order < b.order ? -1 : 0;
      });
    } else {
      group = {
        label: groupName,
        items: [createMenuItem(resource, badges, translate)],
        order: get(order, groupName, 1000)
      };
      groups.push(group);
    }

    return groups;
  }, []);
  groups.sort(function (a, b) {
    return a.order > b.order ? 1 : a.order < b.order ? -1 : 0;
  });
  return groups;
};

var _require = require("ra-core"),
    usePermissions = _require.usePermissions,
    getResources = _require.getResources,
    useTranslate = _require.useTranslate;

var _require2 = require("react"),
    useMemo = _require2.useMemo;

var _require3 = require("react-redux"),
    shallowEqual = _require3.shallowEqual;

var useMenu = function useMenu(_ref) {
  var order = _ref.order,
      hasDashboard = _ref.hasDashboard,
      badges = _ref.badges,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items;
  var translate = useTranslate();

  var _usePermissions = usePermissions(),
      loaded = _usePermissions.loaded,
      permissions = _usePermissions.permissions;

  var resources = useSelector(getResources, shallowEqual);
  var menu = useMemo(function () {
    return loaded ? createGroups({
      order: order,
      resources: resources,
      permissions: permissions,
      badges: badges,
      hasDashboard: hasDashboard,
      items: items,
      translate: translate
    }) : [];
  }, [order, resources, permissions, badges, loaded, hasDashboard, items, translate]);
  return menu;
};

var Menu = function Menu(_ref) {
  var hasDashboard = _ref.hasDashboard,
      open = _ref.open,
      location = _ref.location,
      onMenuClick = _ref.onMenuClick,
      badges = _ref.badges,
      items = _ref.items,
      children = _ref.children,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? "build" : _ref$mode,
      order = _ref.order;

  var _useGetIdentity = useGetIdentity(),
      loading = _useGetIdentity.loading,
      loaded = _useGetIdentity.loaded,
      identity = _useGetIdentity.identity;

  var _usePermissions = usePermissions$1(),
      permissions = _usePermissions.permissions;

  var menu = useMenu({
    order: order,
    hasDashboard: hasDashboard,
    badges: badges,
    items: items
  });
  var translate = useTranslate$1();

  if (loading || !loaded || !identity || identity === null || identity.id <= 0) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement(List, {
    component: "nav"
  }, mode === "build" && menu.map(function (group, idx) {
    return /*#__PURE__*/React__default.createElement(MenuGroup, {
      key: idx,
      open: open,
      label: translate("menu.groups.".concat(group.label))
    }, group.items.map(function (item, index) {
      return /*#__PURE__*/React__default.createElement(MenuItem, _extends({}, item, {
        key: index,
        open: open,
        location: location,
        onMenuClick: onMenuClick
      }));
    }));
  }), React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) && /*#__PURE__*/React__default.cloneElement(child, {
      open: open,
      menu: menu,
      location: location,
      permissions: permissions,
      onMenuClick: onMenuClick
    });
  }));
};

Menu.propTypes = {
  hasDashboard: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  onMenuClick: PropTypes.func,

  /** List of custom menu items that will be merged with existing menu. */
  items: PropTypes.arrayOf(PropTypes.shape({
    /** Name of the menu item. */
    name: PropTypes.string.isRequired,

    /** Icon used for this menu item. */
    icon: PropTypes.elementType.isRequired,

    /** Path connected to the routing system (ex. /posts). */
    path: PropTypes.string,

    /** List of roles allowed. */
    roles: PropTypes.arrayOf(PropTypes.string)
  })),

  /**
   * Indicates generation mode for menu. If you want to compose it use custom
   * and create your own menu using MenuGroup and MenuItems.
   **/
  mode: PropTypes.oneOf(["build", "custom"]),

  /** Allows configuration of groups */
  order: PropTypes.object,

  /** Badges config. */
  badges: PropTypes.objectOf(PropTypes.shape({
    show: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.oneOf(["primary", "secondary", "default", "error"])
  }))
};
var Menu$1 = compose(withRouter, connect(function (state) {
  return {
    open: state.admin.ui.sidebarOpen,
    resources: getResources$1(state)
  };
}))(Menu);

var useStyles$1 = makeStyles$1(function (theme) {
  return {
    brand: {
      paddingLeft: theme.spacing(1),
      display: "flex",
      flexGrow: 1,
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center"
    },
    title: {
      fontWeight: "bold",
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(-0.5),
      "&:hover": {
        color: theme.palette.primary.main
      }
    },
    drawer: {
      zIndex: 1,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: function drawerOpen(_ref) {
      var drawerWidth = _ref.drawerWidth;
      return {
        width: drawerWidth - 1,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      };
    },
    drawerClose: _defineProperty({
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1
    }, theme.breakpoints.up("sm"), {
      width: theme.spacing(7) + 1
    }),
    toolbar: _objectSpread2({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar)
  };
});

var Sidebar = function Sidebar(_ref2) {
  var _classnames, _classnames2;

  var children = _ref2.children,
      open = _ref2.open,
      drawerWidth = _ref2.drawerWidth,
      appTitle = _ref2.appTitle,
      appSubTitle = _ref2.appSubTitle,
      appVersion = _ref2.appVersion;
  var classes = useStyles$1({
    drawerWidth: drawerWidth
  });
  var dispatch = useDispatch();
  var handleToggleSidebar = useCallback(function () {
    return dispatch(toggleSidebar());
  }, [dispatch]);
  var isXSmall = useMediaQuery(function (theme) {
    return theme.breakpoints.down("xs");
  });
  return /*#__PURE__*/React__default.createElement(Drawer, {
    open: open,
    onClose: handleToggleSidebar,
    variant: isXSmall ? "temporary" : "permanent",
    className: classnames(classes.drawer, (_classnames = {}, _defineProperty(_classnames, classes.drawerOpen, open), _defineProperty(_classnames, classes.drawerClose, !open), _classnames)),
    classes: {
      paper: classnames((_classnames2 = {}, _defineProperty(_classnames2, classes.drawerOpen, open), _defineProperty(_classnames2, classes.drawerClose, !open), _classnames2))
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.brand
  }, /*#__PURE__*/React__default.createElement(Typography$1, {
    className: classes.title,
    href: "/",
    variant: "h6",
    color: "inherit"
  }, appTitle), /*#__PURE__*/React__default.createElement(Typography$1, {
    color: "textSecondary",
    variant: "caption"
  }, appSubTitle, " (", appVersion, ")")), /*#__PURE__*/React__default.createElement(IconButton$1, {
    onClick: handleToggleSidebar
  }, /*#__PURE__*/React__default.createElement(ChevronLeftIcon, null))), React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.cloneElement(child, {
      onMenuClick: isXSmall ? handleToggleSidebar : undefined
    });
  }));
};

Sidebar.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  config: PropTypes.object,
  drawerWidth: PropTypes.number.isRequired,
  appName: PropTypes.string,
  appSubTitle: PropTypes.string,
  appVersion: PropTypes.string
};

var _excluded$2 = ["theme"];

var styles = function styles(theme) {
  return createStyles({
    root: {
      display: "flex"
    },
    toolbar: _objectSpread2({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar),
    content: _defineProperty({
      flexGrow: 1,
      padding: theme.spacing(3)
    }, theme.breakpoints.down("xs"), {
      padding: theme.spacing(0)
    })
  });
};

var LayoutWithoutTheme = /*#__PURE__*/function (_React$Component) {
  _inherits(LayoutWithoutTheme, _React$Component);

  var _super = _createSuper(LayoutWithoutTheme);

  function LayoutWithoutTheme(props) {
    var _this;

    _classCallCheck(this, LayoutWithoutTheme);

    _this = _super.call(this, props);
    /**
     * Reset the error state upon navigation
     *
     * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
     */

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false,
      errorMessage: null,
      errorInfo: null
    });

    props.history.listen(function () {
      if (_this.state.hasError) {
        _this.setState({
          hasError: false
        });
      }
    });
    return _this;
  }

  _createClass(LayoutWithoutTheme, [{
    key: "componentDidCatch",
    value: function componentDidCatch(errorMessage, errorInfo) {
      this.setState({
        hasError: true,
        errorMessage: errorMessage,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$appBar = _this$props.appBar,
          appBar = _this$props$appBar === void 0 ? AppBar : _this$props$appBar,
          children = _this$props.children,
          classes = _this$props.classes,
          error = _this$props.error,
          dashboard = _this$props.dashboard,
          logout = _this$props.logout,
          _this$props$menu = _this$props.menu,
          menu = _this$props$menu === void 0 ? Menu$1 : _this$props$menu,
          _this$props$notificat = _this$props.notification,
          notification = _this$props$notificat === void 0 ? Notification : _this$props$notificat,
          open = _this$props.open,
          _this$props$sidebar = _this$props.sidebar,
          sidebar = _this$props$sidebar === void 0 ? Sidebar : _this$props$sidebar,
          title = _this$props.title,
          appTitle = _this$props.appTitle,
          appSubTitle = _this$props.appSubTitle,
          appVersion = _this$props.appVersion,
          drawerWidth = _this$props.drawerWidth,
          location = _this$props.location;
      var _this$state = this.state,
          hasError = _this$state.hasError,
          errorMessage = _this$state.errorMessage,
          errorInfo = _this$state.errorInfo;
      return /*#__PURE__*/React__default.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/React__default.createElement(CssBaseline, null), /*#__PURE__*/createElement(sidebar, {
        open: open,
        appTitle: appTitle,
        appSubTitle: appSubTitle,
        appVersion: appVersion,
        drawerWidth: drawerWidth,
        children: /*#__PURE__*/createElement(menu, {
          open: open,
          logout: logout,
          hasDashboard: !!dashboard,
          menuConfig: this.props.menu
        })
      }), /*#__PURE__*/React__default.createElement("main", {
        id: "main-content",
        className: classes.content
      }, /*#__PURE__*/createElement(appBar, {
        title: title,
        open: open,
        logout: logout,
        location: location,
        drawerWidth: drawerWidth
      }), /*#__PURE__*/React__default.createElement("div", {
        className: classes.toolbar
      }), hasError ? /*#__PURE__*/createElement(error, {
        error: errorMessage,
        errorInfo: errorInfo,
        title: title
      }) : children), /*#__PURE__*/createElement(notification));
    }
  }]);

  return LayoutWithoutTheme;
}(React__default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    open: state.admin.ui.sidebarOpen
  };
};

var EnhancedLayout = compose(connect(mapStateToProps, {} // Avoid connect passing dispatch in props
), withRouter, withStyles(styles, {
  name: "RaLayout"
}))(LayoutWithoutTheme);

var Layout = function Layout(_ref) {
  var themeOverride = _ref.theme,
      props = _objectWithoutProperties(_ref, _excluded$2);

  var themeProp = useRef(themeOverride);

  var _useState = useState(function () {
    return createTheme(themeOverride);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  useEffect(function () {
    if (themeProp.current !== themeOverride) {
      themeProp.current = themeOverride;
      setTheme(createTheme(themeOverride));
    }
  }, [themeOverride, themeProp, theme, setTheme]);
  return /*#__PURE__*/React__default.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default.createElement(EnhancedLayout, props));
};

Layout.propTypes = {
  theme: PropTypes.object,
  appTitle: PropTypes.string.isRequired,
  appSubTitle: PropTypes.string,
  appVersion: PropTypes.string,
  drawerWidth: PropTypes.number
};
Layout.defaultProps = {
  theme: defaultTheme,
  appTitle: "React Admin",
  appSubTitle: "Material-UI",
  appVersion: "1.0.0",
  drawerWidth: 240
};

var _excluded$1 = ["className", "classes", "redirectTo", "icon", "label"];
var useStyles = makeStyles(function (theme) {
  return {
    menuItem: {
      color: theme.palette.text.secondary
    },
    icon: {
      minWidth: theme.spacing(5)
    }
  };
}, {
  name: "RaUserMenuItem"
});
var UserMenuItem = /*#__PURE__*/React.forwardRef(function UserMenuItem(props, ref) {
  var className = props.className;
      props.classes;
      props.redirectTo;
      var icon = props.icon,
      label = props.label,
      rest = _objectWithoutProperties(props, _excluded$1);

  var classes = useStyles(props);
  return /*#__PURE__*/React.createElement(MenuItem$1, _extends({
    className: classnames("user-menu-item", classes.menuItem, className),
    ref: ref,
    component: props.to ? Link : "a"
  }, rest), /*#__PURE__*/React.createElement(ListItemIcon, {
    className: classes.icon
  }, icon ? icon : /*#__PURE__*/React.createElement(ExitIcon, null)), label);
});
UserMenuItem.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func
};

var fetchJson = function fetchJson(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(url, _objectSpread2({}, options)).then(function (response) {
    return response.text().then(function (text) {
      return {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        body: text
      };
    });
  }).then(function (_ref) {
    var status = _ref.status,
        statusText = _ref.statusText,
        headers = _ref.headers,
        body = _ref.body;
    var json;

    try {
      json = JSON.parse(body);
    } catch (e) {// not json, no big deal
    }

    if (status < 200 || status >= 300) {
      return Promise.reject(new HttpError((json && json.data && json.data.message ? json.data.message : json.message) || statusText, status, json));
    }

    return Promise.resolve({
      status: status,
      headers: headers,
      body: body,
      json: json
    });
  });
};

function getHeaders() {
  var token = localStorage.getItem("token");
  var headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ".concat(token)
  });
  return headers;
}

// Remove unwanted _joinData props from JSON object before submission to the rest service.
var createDataFormatter = function createDataFormatter(data) {
  return Object.keys(data).reduce(function (r, key) {
    return _objectSpread2(_objectSpread2({}, r), {}, _defineProperty({}, key, Array.isArray(data[key]) ? data[key].map(function (item) {
      if (item._joinData === null) {
        return {
          id: item.id
        };
      }

      return item;
    }) : data[key]));
  }, {});
};

var convertFileToBase64 = function convertFileToBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = reject;
  });
};

var convertFile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", file.rawFile ? convertFileToBase64(file).then(function (convertedFile) {
              return {
                data: convertedFile,
                name: file.rawFile.name,
                size: file.rawFile.size,
                type: file.rawFile.type
              };
            }) : Promise.resolve(file));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function convertFile(_x) {
    return _ref.apply(this, arguments);
  };
}();

var createFilesParser = function createFilesParser() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data, fileFields) {
      var i, field, value, files, file;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < fileFields.length)) {
                _context.next = 19;
                break;
              }

              field = fileFields[i];
              value = get$1(data, field);

              if (!(value && Array.isArray(value))) {
                _context.next = 11;
                break;
              }

              _context.next = 7;
              return Promise.all(value.map(function (file) {
                return convertFile(file);
              }));

            case 7:
              files = _context.sent;
              data = set(data, field, files);
              _context.next = 16;
              break;

            case 11:
              if (!value) {
                _context.next = 16;
                break;
              }

              _context.next = 14;
              return convertFile(value);

            case 14:
              file = _context.sent;
              data = set(data, field, file);

            case 16:
              i++;
              _context.next = 1;
              break;

            case 19:
              return _context.abrupt("return", Promise.resolve(data));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var createDataProvider = function createDataProvider(_ref) {
  var apiUrl = _ref.apiUrl,
      _ref$fileFields = _ref.fileFields,
      fileFields = _ref$fileFields === void 0 ? [] : _ref$fileFields,
      _ref$filesParser = _ref.filesParser,
      filesParser = _ref$filesParser === void 0 ? createFilesParser() : _ref$filesParser,
      _ref$prepareData = _ref.prepareData,
      prepareData = _ref$prepareData === void 0 ? function (data) {
    return createDataFormatter(data);
  } : _ref$prepareData;
  return {
    getInfo: function getInfo(resource, params) {
      var url = "".concat(apiUrl, "/").concat(resource, "/info?").concat(stringify(params));
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref2) {
        var json = _ref2.json;
        return {
          data: json.data
        };
      });
    },
    getBadges: function getBadges() {
      var url = "".concat(apiUrl, "/stats/badges");
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref3) {
        var json = _ref3.json;
        return {
          data: json
        };
      });
    },
    getList: function getList(resource, params) {
      var _params$pagination = params.pagination,
          page = _params$pagination.page,
          perPage = _params$pagination.perPage;
      var _params$sort = params.sort,
          field = _params$sort.field,
          order = _params$sort.order;
      var filter = Object.keys(params.filter || {}).reduce(function (f, filterName) {
        return _objectSpread2(_objectSpread2({}, f), {}, _defineProperty({}, filterName, params.filter[filterName] instanceof Array ? params.filter[filterName].join(",") : params.filter[filterName]));
      }, {});

      var query = _objectSpread2({
        sort: field,
        direction: order,
        page: page,
        limit: perPage
      }, filter);

      var url = "".concat(apiUrl, "/").concat(resource, "?").concat(stringify(query));
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref4) {
        var json = _ref4.json;
        return {
          data: json.data,
          total: parseInt(json.pagination.count, 10)
        };
      });
    },
    getOne: function getOne(resource, params) {
      var url = "".concat(apiUrl, "/").concat(resource) + (params.id ? "/".concat(params.id) : "");
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref5) {
        var json = _ref5.json;
        return {
          data: json.data
        };
      });
    },
    getMany: function getMany(resource, params) {
      var query = {
        ids: params.ids.map(function (id) {
          return id.id ? id.id : id;
        }).join(",")
      };
      var url = "".concat(apiUrl, "/").concat(resource, "?").concat(stringify(query));
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref6) {
        var json = _ref6.json;
        return {
          data: json.data,
          total: parseInt(json.pagination.count, 10)
        };
      });
    },
    getManyReference: function getManyReference(resource, params) {
      var _params$pagination2 = params.pagination,
          page = _params$pagination2.page,
          perPage = _params$pagination2.perPage;
      var _params$sort2 = params.sort,
          field = _params$sort2.field,
          order = _params$sort2.order;
      var filter = Object.keys(params.filter || {}).reduce(function (f, filterName) {
        return _objectSpread2(_objectSpread2({}, f), {}, _defineProperty({}, filterName, params.filter[filterName] instanceof Array ? params.filter[filterName].join(",") : params.filter[filterName]));
      }, {});

      var query = _objectSpread2(_defineProperty({
        sort: field,
        direction: order,
        page: page,
        limit: perPage
      }, params.target, params.id), filter);

      var url = "".concat(apiUrl, "/").concat(resource, "?").concat(stringify(query));
      var options = {
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref7) {
        var json = _ref7.json;
        return {
          data: json.data,
          total: parseInt(json.pagination.count, 10)
        };
      });
    },
    create: function create(resource, params) {
      return filesParser(params.data, fileFields).then(function (data) {
        var url = "".concat(apiUrl, "/").concat(resource);
        var options = {
          method: "POST",
          body: JSON.stringify(prepareData(data, resource, params)),
          headers: getHeaders()
        };
        return fetchJson(url, options).then(function (_ref8) {
          var json = _ref8.json;
          return {
            data: _objectSpread2(_objectSpread2({}, json.data || params.data), {}, {
              id: json.data.id
            })
          };
        });
      });
    },
    update: function update(resource, params) {
      return filesParser(params.data, fileFields).then(function (data) {
        var id = data && data.pk ? data.pk : params.id;
        var url = "".concat(apiUrl, "/").concat(resource) + (id ? "/".concat(id) : "");
        var options = {
          method: "PUT",
          body: JSON.stringify(prepareData(data)),
          headers: getHeaders()
        };
        return fetchJson(url, options).then(function (_ref9) {
          var json = _ref9.json;
          return {
            data: _objectSpread2({
              id: data.pk
            }, json.data)
          };
        });
      });
    },
    updateMany: function updateMany(resource, params) {
      return Promise.all(params.ids.map(function (id) {
        return fetchJson("".concat(apiUrl, "/").concat(resource, "/").concat(id), {
          method: "PUT",
          body: JSON.stringify(params.data),
          headers: getHeaders()
        });
      })).then(function (responses) {
        return {
          data: responses.map(function (response) {
            return response.json;
          })
        };
      });
    },
    delete: function _delete(resource, params) {
      var url = "".concat(apiUrl, "/").concat(resource, "/").concat(params.id);
      var options = {
        method: "DELETE",
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref10) {
        var json = _ref10.json;
        return {
          data: json
        };
      });
    },
    deleteMany: function deleteMany(resource, params) {
      return Promise.all(params.ids.map(function (id) {
        return fetch("".concat(apiUrl, "/").concat(resource, "/").concat(id), {
          method: "DELETE",
          headers: getHeaders()
        }).then(function (response) {
          return response.json();
        });
      })).then(function (responses) {
        var errors = responses.filter(function (r) {
          return r.data && r.data.code && (r.data.code === 409 || r.data.code === 403);
        });

        if (errors.length > 0) {
          return Promise.reject(errors.map(function (e) {
            return e.data.message;
          }).join("\n"));
        }

        return {
          data: responses.map(function (_ref11) {
            var json = _ref11.json;
            return {
              data: json
            };
          })
        };
      });
    },
    post: function post(resource, params) {
      var url = "".concat(apiUrl, "/").concat(resource);
      var body = params.body;
      var options = {
        body: JSON.stringify(body),
        method: "POST",
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref12) {
        var json = _ref12.json;
        return {
          data: json
        };
      });
    },
    get: function get(resource, params) {
      var query = params.query;
      var queryString = stringify(query);
      var url = "".concat(apiUrl, "/").concat(resource, "?").concat(queryString);
      var options = {
        method: "GET",
        headers: getHeaders()
      };
      return fetchJson(url, options).then(function (_ref13) {
        var json = _ref13.json;
        return {
          data: json
        };
      });
    },
    getTransactions: function getTransactions(resource, params) {
      var url = "".concat(apiUrl, "/workflow/transactions/").concat(resource, "/").concat(params.id);
      return fetchJson(url, {
        headers: getHeaders()
      }).then(function (_ref14) {
        var json = _ref14.json;
        return {
          data: json.data
        };
      });
    }
  };
};

var createAuthProvider = function createAuthProvider(_ref) {
  var apiUrl = _ref.apiUrl;
  return {
    login: function login(params) {
      var username = params.username,
          password = params.password;
      var requestURL = "".concat(apiUrl, "/users/login");
      var request = new Request(requestURL, {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json"
        })
      });
      return fetch(request).then(function (response) {
        return response.json();
      }).then(function (_ref2) {
        var data = _ref2.data,
            success = _ref2.success;

        if (!success) {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("roles", JSON.stringify(data.roles));
        localStorage.setItem("profile", JSON.stringify(data.profile));
      });
    },
    logout: function logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("roles");
      localStorage.removeItem("profile");
      return Promise.resolve();
    },
    checkAuth: function checkAuth() {
      return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
    },
    checkError: function checkError(error) {
      if (error.status === 401 || error.status === 500) {
        return Promise.reject();
      }

      return Promise.resolve();
    },
    getPermissions: function getPermissions() {
      var roles = JSON.parse(localStorage.getItem("roles"));
      return Promise.resolve(function (v) {
        return roles && roles.some(function (r) {
          return v.includes(r.code);
        });
      });
    },
    getIdentity: function getIdentity() {
      var profile = JSON.parse(localStorage.getItem("profile"));
      return Promise.resolve(profile);
    },
    impersonate: function impersonate(id) {
      var requestURL = "".concat(apiUrl, "/users/impersonate/?id=").concat(id);
      var request = new Request(requestURL, {
        method: "POST",
        headers: getHeaders()
      });
      return fetch(request).then(function (response) {
        return response.json();
      }).then(function (_ref3) {
        var success = _ref3.success,
            data = _ref3.data;

        if (!success) {
          throw new Error(data.message);
        }

        ["token", "roles", "username", "profile"].forEach(function (param) {
          var toSaveParam = "admin_".concat(param);
          localStorage.setItem(toSaveParam, localStorage.getItem(param));
          localStorage.setItem(param, ["profile", "roles"].indexOf(param) !== -1 ? JSON.stringify(data[param]) : data[param]);
        });
        localStorage.setItem("impersonate", true);
      });
    },
    stopImpersonate: function stopImpersonate() {
      ["token", "roles", "username", "profile"].forEach(function (param) {
        var savedParam = "admin_".concat(param);
        localStorage.setItem(param, localStorage.getItem(savedParam));
        localStorage.removeItem(savedParam);
      });
      localStorage.setItem("impersonate", false);
      return Promise.resolve();
    }
  };
};

var createManyFormatter = function createManyFormatter() {
  return function (many) {
    var array = many ? many.map(function (p) {
      return p.id;
    }) : [];
    return array;
  };
};

var createManyParser = function createManyParser() {
  return function (many) {
    var objects = many ? many.map(function (id) {
      return {
        id: id
      };
    }) : [];
    return objects;
  };
};

var createI18nProvider = function createI18nProvider(_ref) {
  var _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? "en" : _ref$locale,
      languages = _ref.languages;
  return polyglotI18nProvider(function () {
    if (process.env.NODE_ENV !== "production") {
      localStorage.setItem("locale", locale);
    }

    moment.locale(locale);
    return get$1(languages, locale, {});
  }, resolveBrowserLocale());
};

var mapFieldErrors = function mapFieldErrors(field, errors) {
  var keys = Object.keys(errors);
  var messages = keys.filter(function (k) {
    return typeof errors[k] === "string";
  });

  if (messages.length > 0) {
    return _defineProperty({}, field, messages.map(function (m) {
      return errors[m];
    }).join("\n"));
  } else {
    var out = keys.reduce(function (errorMap, key) {
      return _objectSpread2(_objectSpread2({}, errorMap), mapFieldErrors(key, errors[key]));
    }, {});
    return _defineProperty({}, field, out);
  }
};

var cakephpErrorMapper = function cakephpErrorMapper(errors) {
  var fields = Object.keys(errors);
  var validationErrors = fields.reduce(function (errorsMap, field) {
    return _objectSpread2(_objectSpread2({}, errorsMap), mapFieldErrors(field, errors[field]));
  }, {});
  return validationErrors;
};

var createErrorMapper = function createErrorMapper() {
  return function (error, notify) {
    var errors = get$1(error, "body.data.errors", null);
    var message = get$1(error, "body.data.message", null);

    if (message) {
      notify(message, {
        type: "error"
      });
    }

    if (errors) {
      var mappedErrors = cakephpErrorMapper(errors);
      return mappedErrors;
    } else {
      return false;
    }
  };
};

var _excluded = ["type", "resource", "transform", "onSuccess", "errorMapper"];

var useSaveMutation = function useSaveMutation(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? null : _ref$type,
      resource = _ref.resource,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? undefined : _ref$transform,
      _ref$onSuccess = _ref.onSuccess,
      onSuccess = _ref$onSuccess === void 0 ? undefined : _ref$onSuccess,
      _ref$errorMapper = _ref.errorMapper,
      errorMapper = _ref$errorMapper === void 0 ? createErrorMapper() : _ref$errorMapper,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useMutation = useMutation(),
      _useMutation2 = _slicedToArray(_useMutation, 1),
      mutate = _useMutation2[0];

  var redirect = useRedirect();
  var refresh = useRefresh();
  var notify = useNotify();
  var save = useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return mutate({
                type: type === null ? values.id && values.id > 0 ? "update" : "create" : type,
                resource: resource,
                payload: {
                  id: values.id,
                  data: transform ? transform(values) : values
                }
              }, {
                returnPromise: true
              });

            case 3:
              response = _context.sent;
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", errorMapper(_context.t0, notify));

            case 9:
              if (!onSuccess) {
                if (props.refresh === true) {
                  if (values.id > 0) {
                    refresh();
                  } else {
                    redirect("edit", props.basePath, response.data.id);
                  }
                } else {
                  if (props.redirect !== undefined) {
                    redirect(props.redirect);
                  } else {
                    redirect("list", props.basePath);
                  }
                }

                notify("ra.notification." + (values.id > 0 ? "updated" : "created"), {
                  type: "info",
                  messageArgs: {
                    smart_count: 1
                  }
                });
              } else onSuccess(response, values);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [mutate, type, resource, props.redirect, props.refresh, redirect, refresh, notify, props.basePath, onSuccess, transform, errorMapper]);
  return save;
};

var useManyFormatter = function useManyFormatter() {
  var memoizedFn = useMemo$1(function () {
    return createManyFormatter();
  }, []);
  return memoizedFn;
};

var useManyParser = function useManyParser() {
  var memoizedFn = useMemo$1(function () {
    return createManyParser();
  }, []);
  return memoizedFn;
};

var useAuthProvider = function useAuthProvider(_ref) {
  var apiUrl = _ref.apiUrl;
  var memoizedFn = useMemo$1(function () {
    return createAuthProvider({
      apiUrl: apiUrl
    });
  }, [apiUrl]);
  return memoizedFn;
};

var useDataProvider = function useDataProvider(_ref) {
  var apiUrl = _ref.apiUrl,
      fileFields = _ref.fileFields;
  var memoizedFn = useMemo$1(function () {
    return createDataProvider({
      apiUrl: apiUrl,
      fileFields: fileFields
    });
  }, [apiUrl, fileFields]);
  return memoizedFn;
};

var useI18nProvider = function useI18nProvider(_ref) {
  var apiUrl = _ref.apiUrl,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? "en" : _ref$locale,
      _ref$languages = _ref.languages,
      languages = _ref$languages === void 0 ? {} : _ref$languages;
  var memoizedFn = useMemo$1(function () {
    return createI18nProvider({
      apiUrl: apiUrl,
      locale: locale,
      languages: languages
    });
  }, [apiUrl, locale, languages]);
  return memoizedFn;
};

var useI18nLanguages = function useI18nLanguages(_ref) {
  var apiUrl = _ref.apiUrl;

  var _useState = useState({
    loading: true,
    languages: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  useEffect(function () {
    var headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    fetch("".concat(apiUrl, "/languages/load"), {
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (_ref2) {
      var data = _ref2.data;
      return setData({
        loading: false,
        languages: data
      });
    });
  }, [apiUrl]);
  return data;
};

var queued = [];

var putMessage = function putMessage(apiUrl, locale, message) {
  return message.indexOf("[") === -1 && message.indexOf("]") === -1 && queued.indexOf("".concat(locale, "-").concat(message)) === -1 && queued.push("".concat(locale, "-").concat(message)) && fetch("".concat(apiUrl, "/languages/put-message"), {
    method: "PUT",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      code: locale,
      message: {
        code: message,
        text: message
      }
    })
  });
};

var useI18nCatcher = function useI18nCatcher(_ref) {
  var apiUrl = _ref.apiUrl,
      loading = _ref.loading;
  var locale = useLocale();
  React.useMemo(function () {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    if (loading) {
      return;
    }

    var consoleError = console.error;

    console.error = function (message) {
      if (typeof message === "string" && message.indexOf("Missing translation for key: ") >= 0) {
        message = message.replace("Warning: Missing translation for key: ", "");
        message = message.split('"').join("").trim();

        if (message.indexOf(" ") !== -1) {
          return;
        }

        var lc = localStorage.getItem("locale") || locale;
        putMessage(apiUrl, lc, message);
        return;
      }

      consoleError.apply(console, arguments);
    };
  }, [apiUrl, locale]);
  return true;
};

export { AppBar, Layout, Menu$1 as Menu, MenuGroup, MenuItem, Sidebar, UserMenu, UserMenuItem, createAuthProvider, createDataProvider, createI18nProvider, createManyFormatter, createManyParser, useAuthProvider, useDataProvider, useI18nCatcher, useI18nLanguages, useI18nProvider, useManyFormatter, useManyParser, useSaveMutation };
