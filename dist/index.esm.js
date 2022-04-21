import { useTranslate as useTranslate$1, useGetIdentity, LoadingIndicator, getResources as getResources$2, defaultTheme, Notification, HttpError, resolveBrowserLocale, Labeled, ArrayField, SingleFieldList, ChipField, ReferenceManyField, Datagrid, TextField, DateField, Pagination, BooleanField, ReferenceArrayInput, CheckboxGroupInput, ReferenceInput, AutocompleteInput, SelectInput, useRefresh, useNotify, useUpdate, BooleanInput, useInput, SearchInput, TextInput, DateInput, EditButton as EditButton$1, DeleteButton, Loading, List as List$2, SimpleList, SimpleForm, Create as Create$2, Edit, useLocale } from 'react-admin';
import * as React from 'react';
import React__default, { useCallback, createElement, useRef, useState, useEffect, useMemo as useMemo$1, createContext, useContext, Fragment } from 'react';
import { makeStyles, withStyles, createStyles, createTheme } from '@material-ui/core/styles';
import { useMediaQuery, AppBar as AppBar$1, Toolbar, IconButton as IconButton$1, makeStyles as makeStyles$1, List as List$1, ListSubheader, Divider, Badge as Badge$1, ListItem, ListItemIcon, ListItemText, Drawer, Typography as Typography$1, MenuItem as MenuItem$1, Link as Link$1, Dialog, DialogTitle, DialogContent, DialogContentText, TextField as TextField$1, FormControlLabel, Switch, FormHelperText, DialogActions, Button, Menu as Menu$3 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Menu$2 from '@material-ui/core/Menu';
import classnames from 'classnames';
import { toggleSidebar, usePermissions as usePermissions$1, useGetIdentity as useGetIdentity$1, maxLength, useTranslate as useTranslate$2, FieldTitle, useSafeSetState, useMutation, useRedirect, useRefresh as useRefresh$1, useNotify as useNotify$1 } from 'ra-core';
import { useDispatch, useSelector as useSelector$1, connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, withRouter } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import get$1 from 'lodash/get';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ThemeProvider } from '@material-ui/styles';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import { stringify } from 'query-string';
import { set, get as get$2 } from 'lodash';
import moment from 'moment';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { CrudContext as CrudContext$1 } from 'friendsofbabba-ra';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { InputHelperText } from 'ra-ui-materialui';
import TextField$2 from '@material-ui/core/TextField';
import { useFormState } from 'react-final-form';
import ContentCreate from '@material-ui/icons/Create';
import ContentView from '@material-ui/icons/Visibility';

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

var useStyles$6 = makeStyles(function (theme) {
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
  var classes = useStyles$6({
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

var _excluded$h = ["children", "open", "label"];
var useStyles$5 = makeStyles$1(function (theme) {
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
      props = _objectWithoutProperties(_ref, _excluded$h);

  var classes = useStyles$5();
  return /*#__PURE__*/React__default.createElement(List$1, {
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

var _excluded$g = ["titleAccess", "children"];

var Badge = function Badge(_ref) {
  _ref.titleAccess;
      var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$g);

  return /*#__PURE__*/React__default.createElement(Badge$1, props, children);
};

var _excluded$f = ["location", "badge", "to", "icon", "label", "sub", "onMenuClick", "permissions", "open"];

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
      props = _objectWithoutProperties(_ref, _excluded$f);

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
    badge: get$1(badges, "".concat(item.name), null),
    order: get$1(item, "options.order", 0),
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
        order: get$1(order, groupName, 1000)
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

var _require$1 = require("ra-core"),
    usePermissions = _require$1.usePermissions,
    getResources$1 = _require$1.getResources,
    useTranslate = _require$1.useTranslate;

var _require2$1 = require("react"),
    useMemo = _require2$1.useMemo;

var _require3$1 = require("react-redux"),
    shallowEqual$1 = _require3$1.shallowEqual;

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

  var resources = useSelector$1(getResources$1, shallowEqual$1);
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

  return /*#__PURE__*/React__default.createElement(List$1, {
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
    resources: getResources$2(state)
  };
}))(Menu);

var useStyles$4 = makeStyles$1(function (theme) {
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
      zIndex: 10,
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
  var classes = useStyles$4({
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

var _excluded$e = ["theme"];

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
      props = _objectWithoutProperties(_ref, _excluded$e);

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

var _excluded$d = ["className", "classes", "redirectTo", "icon", "label"];
var useStyles$3 = makeStyles(function (theme) {
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
      rest = _objectWithoutProperties(props, _excluded$d);

  var classes = useStyles$3(props);
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
function getToken() {
  return localStorage.getItem("token");
}
function useToken() {
  var token = getToken();
  var headers = getHeaders();
  var headersMemo = useMemo$1(function () {
    return headers;
  }, [headers]);
  return {
    token: token,
    headers: headersMemo
  };
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
              value = get$2(data, field);

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
        var event = new Event("login");
        event.key = "token";
        event.value = data.token;
        document.dispatchEvent(event);
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
      var roles = JSON.parse(localStorage.getItem("roles"));
      return Promise.resolve(_objectSpread2(_objectSpread2({}, profile), {}, {
        roles: roles
      }));
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
    return get$2(languages, locale, {});
  }, resolveBrowserLocale());
};

var _excluded$c = ["component", "componentProps", "components", "addLabel"];

var Component = function Component(_ref) {
  var component = _ref.component,
      componentProps = _ref.componentProps,
      components = _ref.components,
      _ref$addLabel = _ref.addLabel,
      addLabel = _ref$addLabel === void 0 ? true : _ref$addLabel,
      props = _objectWithoutProperties(_ref, _excluded$c);

  var Component = get$2(components, component);

  if (!Component) {
    return addLabel ? /*#__PURE__*/React__default.createElement(Labeled, {
      label: props.label,
      source: props.source,
      fullWidth: true
    }, /*#__PURE__*/React__default.createElement(Typography$1, {
      variant: "body2"
    }, "No component found for ", /*#__PURE__*/React__default.createElement("code", null, component), ".")) : /*#__PURE__*/React__default.createElement(Typography$1, {
      variant: "body2"
    }, "No component found for ", /*#__PURE__*/React__default.createElement("code", null, component), ".");
  }

  return /*#__PURE__*/React__default.createElement(Component, _extends({}, props, componentProps));
};

var _require = require("ra-core"),
    getResources = _require.getResources;

var _require2 = require("react-redux"),
    shallowEqual = _require2.shallowEqual,
    useSelector = _require2.useSelector;

var _require3 = require("lodash"),
    get = _require3.get;

var useCustomComponents = function useCustomComponents(resource) {
  var resources = useSelector(getResources, shallowEqual);
  var r = resources.find(function (r) {
    return r.name === resource;
  });
  return get(r, "options.components");
};

var _excluded$b = ["chipSource"];

var ChipArrayField = function ChipArrayField(_ref) {
  var chipSource = _ref.chipSource,
      props = _objectWithoutProperties(_ref, _excluded$b);

  return /*#__PURE__*/React__default.createElement(ArrayField, props, /*#__PURE__*/React__default.createElement(SingleFieldList, null, /*#__PURE__*/React__default.createElement(ChipField, {
    source: chipSource
  })));
};

var _excluded$a = ["record", "source", "width", "minWidth", "maxWidth", "maxRows", "sortable", "basePath", "sortBy"];
var useStyles$2 = makeStyles$1(function (theme) {
  return {
    root: {
      overflow: "hidden",
      "text-overflow": "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      whiteSpace: "break-spaces"
    }
  };
});

var LongTextField = function LongTextField(_ref) {
  var record = _ref.record,
      source = _ref.source,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? undefined : _ref$width,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? undefined : _ref$minWidth,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? undefined : _ref$maxWidth,
      _ref$maxRows = _ref.maxRows,
      maxRows = _ref$maxRows === void 0 ? 3 : _ref$maxRows;
      _ref.sortable;
      _ref.basePath;
      _ref.sortBy;
      var props = _objectWithoutProperties(_ref, _excluded$a);

  var classes = useStyles$2();
  return /*#__PURE__*/React__default.createElement(Typography$1, _extends({}, props, {
    variant: "body2",
    title: get$2(record, source),
    className: classes.root,
    style: {
      width: width,
      minWidth: minWidth,
      maxWidth: maxWidth,
      WebkitLineClamp: maxRows
    }
  }), get$2(record, source));
};

LongTextField.propTypes = {
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  width: PropTypes.number,
  maxRows: PropTypes.number
};

var useWorkflow = function useWorkflow(_ref) {
  var apiUrl = _ref.apiUrl;

  var _useState = useState({
    loading: false,
    loaded: false,
    data: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      loaded = _useState2$.loaded,
      loading = _useState2$.loading,
      data = _useState2$.data,
      setData = _useState2[1];

  var loadAll = function loadAll(_ref2) {
    var apiUrl = _ref2.apiUrl;

    if (loaded || loading) {
      return;
    }

    setData({
      loading: true
    });
    var headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    fetch("".concat(apiUrl, "/workflow/load"), {
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (_ref3) {
      var data = _ref3.data;
      return setData({
        loaded: true,
        loading: false,
        data: data
      });
    });
  };

  useEffect(function () {
    return loadAll({
      apiUrl: apiUrl
    });
  });
  return {
    loaded: loaded,
    loading: loading,
    data: data
  };
};

var Workflow = /*#__PURE__*/function () {
  function Workflow(data) {
    _classCallCheck(this, Workflow);

    this.states = data.states;
  }
  /**
   * Controlla se l'utente ha il permesso di creazione sullo stato iniziale
   * @param {*} roles Ruoli dell'utente
   */


  _createClass(Workflow, [{
    key: "canCreate",
    value: function canCreate(roles) {
      return this.check("create", roles);
    }
    /**
     * Controlla se l'utente ha il permesso di scrittura sullo stato in cui
     * si trova il record
     * @param {*} roles Ruoli dell'utente
     * @param {*} record
     */

  }, {
    key: "canEdit",
    value: function canEdit(roles, record) {
      return this.check("edit", roles, record);
    }
    /**
     * Controlla se l'utente ha il permesso di lettura sullo stato in cui
     * si trova il record
     * @param {*} roles Ruoli dell'utente
     * @param {*} record
     */

  }, {
    key: "canRead",
    value: function canRead(roles, record) {
      return this.check("read", roles, record);
    }
    /**
     * Controlla se l'utente ha il permesso specificato nella stato in cui
     * si trova il record
     * @param {String} permission
     * @param {*} roles Ruoli dell'utente
     * @param {*} record
     */

  }, {
    key: "check",
    value: function check(permission, roles, record) {
      var perm = "".concat(permission.charAt(0).toUpperCase()).concat(permission.slice(1));
      var can = "can".concat(perm);
      var state = record && record.id > 0 && record.transaction ? this.states.find(function (s) {
        return s.code === record.transaction.state;
      }) : this.states.find(function (s) {
        return s.isInitial;
      });
      var permissions = state.permissions.filter(function (p) {
        return p[can];
      });
      return permissions.some(function (permission) {
        return roles.some(function (role) {
          return permission.role === role.code;
        });
      });
    }
    /**
     * Controlla se l'utente ha il permesso di scrittura per il campo specificato,
     * nello stato in cui si trova il record
     * @param {String} fieldName
     * @param {Array} roles Ruoli dell'utente
     * @param {Object} record
     */

  }, {
    key: "canEditField",
    value: function canEditField(fieldName, roles, record) {
      return this.checkField("edit", roles, fieldName, record);
    }
    /**
     * Controlla se l'utente ha il permesso di lettura per il campo specificato,
     * nello stato in cui si trova il record
     * @param {String} fieldName
     * @param {Array} roles Ruoli dell'utente
     * @param {Object} record
     */

  }, {
    key: "canReadField",
    value: function canReadField(fieldName, roles, record) {
      return this.checkField("read", roles, fieldName, record);
    }
    /**
     * @description
     *  Controlla se l'utente ha i permessi necessari per leggere uno o più campi tra quelli
     *  specificati nell'array fields.
     *
     * @param {Array} fields
     *  Elenco dei campi di cui verificare il permesso.
     * @param {Array} roles
     *  Elenco dei ruoli associati all'utente
     * @param {Object} record
     *  Record principale su cui verificare i permessi di workflow.
     */

  }, {
    key: "canReadFields",
    value: function canReadFields(fields, roles, record) {
      var _this = this;

      return fields.some(function (field) {
        return _this.canReadField(field, roles, record);
      });
    }
    /**
     * Controlla se l'utente ha il permesso per il campo specificato,
     * per lo stato in cui si trova il record
     * @param {String} permission
     * @param {array} roles Ruoli dell'utente
     * @param {String} fieldName
     * @param {Object} record
     */

  }, {
    key: "checkField",
    value: function checkField(permission, roles, fieldName, record) {
      var perm = "".concat(permission.charAt(0).toUpperCase()).concat(permission.slice(1));
      var can = "can".concat(perm);
      var state = record && record.transaction ? this.states.find(function (s) {
        return s.code === record.transaction.state;
      }) : this.states.find(function (s) {
        return s.isInitial;
      });
      var field = state.fields.find(function (f) {
        return f.name === fieldName;
      });

      if (!field) {
        return false;
      }

      var permissions = field.permissions.filter(function (p) {
        return p[can];
      });
      return permissions.some(function (permission) {
        return roles.some(function (role) {
          return permission.role === role.code;
        });
      });
    }
    /**
     * Ottiene gli stati successivi disponibili dell'entità sottoposta a WF.
     * Se si tratta di una creazione (record.id undefined) viene ritornato lo stato
     * iniziale (sempre se si hanno i permessi)
     * @param {*} roles Ruoli dell'utente
     * @param {*} record
     */

  }, {
    key: "getNextStates",
    value: function getNextStates(roles, record) {
      var _this2 = this;

      if (!record) {
        return [];
      }

      var possibleStates = [];

      if (record.transaction) {
        var state = this.states.find(function (state) {
          return state.code === record.transaction.state;
        });
        possibleStates = Object.keys(state.transitions).map(function (code) {
          return _this2.states.find(function (s) {
            return s.code === code;
          });
        });
      } else {
        var initial = this.states.find(function (state) {
          return state.isInitial;
        });
        possibleStates = [initial];
      }

      var nextStates = possibleStates.filter(function (state) {
        return state.permissions.some(function (p) {
          return roles.some(function (r) {
            return r.code === p.role && (p.canCreate || p.canMove);
          });
        });
      });
      return nextStates;
    }
    /**
     * Indica se per il passaggio nello stato specificato è necessario compilare il campo note obbligatoriamente.
     * @param {Object} record
     *  Record per il quale si richiede la verifica.
     * @param {Object} state
     */

  }, {
    key: "needsNotes",
    value: function needsNotes(record, state) {
      if (!record || !state) {
        return false;
      }

      if (record.transaction) {
        var currentState = this.states.find(function (state) {
          return state.code === record.transaction.state;
        });

        if (currentState && currentState.transitions[state.code]) {
          return currentState.transitions[state.code].notesRequired;
        }
      }

      return false;
    }
  }, {
    key: "getState",
    value: function getState(record) {
      var transaction = record.transaction;

      if (!transaction) {
        return null;
      }

      return this.states.find(function (s) {
        return s.code === transaction.state;
      });
    }
  }, {
    key: "getStateByCode",
    value: function getStateByCode(code) {
      return this.states.find(function (s) {
        return s.code === code;
      });
    }
  }]);

  return Workflow;
}();

var WorkflowContext = /*#__PURE__*/createContext({});
var WorkflowProvider = function WorkflowProvider(_ref) {
  var children = _ref.children,
      apiUrl = _ref.apiUrl;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      workflow = _useState2[0],
      setWorkflow = _useState2[1];

  var _useWorkflow = useWorkflow({
    apiUrl: apiUrl
  }),
      data = _useWorkflow.data;

  var getWorkflow = useCallback(function (resource) {
    return get$2(workflow, resource);
  }, [workflow]);
  useEffect(function () {
    if (!data) {
      return;
    }

    var resources = Object.keys(data).reduce(function (workflows, name) {
      return _objectSpread2(_objectSpread2({}, workflows), {}, _defineProperty({}, name, new Workflow(data[name])));
    }, {});
    setWorkflow(resources);
  }, [data]);
  return /*#__PURE__*/React__default.createElement(WorkflowContext.Provider, {
    value: {
      workflows: data,
      getWorkflow: getWorkflow
    }
  }, children);
};

var _excluded$9 = ["label", "record", "resource"];

var StateField = function StateField(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "app.label.workflow.state" : _ref$label,
      record = _ref.record,
      toResolve = _ref.resource,
      props = _objectWithoutProperties(_ref, _excluded$9);

  var _useContext = useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var resource = useMemo$1(function () {
    return toResolve.replace("workflow/transactions/", "");
  }, [toResolve]);
  var workflow = useMemo$1(function () {
    return getWorkflow(resource);
  }, [resource, getWorkflow]);
  var state = useMemo$1(function () {
    return workflow && workflow.getState(_objectSpread2(_objectSpread2({}, record), {}, {
      transaction: get$2(record, "transaction", record)
    })) || undefined;
  }, [record, workflow]);
  return /*#__PURE__*/React__default.createElement(ChipField, _extends({}, props, {
    label: label,
    source: "name",
    record: state,
    color: "primary"
  }));
};

var useFieldLabel = function useFieldLabel(_ref) {
  var resource = _ref.resource;
  var t = useTranslate$1();
  return function (field) {
    var translate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var label = "resources.".concat(resource, ".fields.").concat(field);
    return translate ? t(label) : label;
  };
};

var useStyles$1 = makeStyles$1(function (theme) {
  return {
    root: {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      whiteSpace: "break-spaces"
    },
    link: {
      cursor: "pointer",
      fontWeight: "bold"
    },
    visibility: {
      display: "block",
      clear: "both"
    }
  };
});

var TransactionNotesField = function TransactionNotesField(_ref) {
  var _ref$admin = _ref.admin,
      admin = _ref$admin === void 0 ? false : _ref$admin,
      record = _ref.record,
      source = _ref.source,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 150 : _ref$minWidth,
      _ref$maxRows = _ref.maxRows,
      maxRows = _ref$maxRows === void 0 ? 3 : _ref$maxRows;
  var classes = useStyles$1();
  var fieldLabel = useFieldLabel({
    resource: "transactions"
  });

  var _useMemo = useMemo$1(function () {
    var isPrivate = get$2(record, "is_private", true);
    var value = isPrivate && !admin ? null : get$2(record, source, "");
    var tooLong = value !== null && value.length > 200;
    return {
      isPrivate: isPrivate,
      value: value,
      tooLong: tooLong
    };
  }, [record, admin, source]),
      isPrivate = _useMemo.isPrivate,
      value = _useMemo.value,
      tooLong = _useMemo.tooLong;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMore = _useState2[0],
      setShowMore = _useState2[1];

  var handleToggle = function handleToggle() {
    return setShowMore(!showMore);
  };

  return /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement(Typography$1, {
    className: classes.root,
    style: {
      minWidth: minWidth,
      WebkitLineClamp: showMore ? null : maxRows
    },
    variant: "body2",
    color: value === null ? "textSecondary" : "textPrimary",
    display: "inline"
  }, tooLong === false ? value !== null ? value : fieldLabel("notes.empty") : null, tooLong && (showMore ? value : value.substring(0, 200) + "...")), admin && value !== null && /*#__PURE__*/React__default.createElement(Typography$1, {
    color: isPrivate ? "error" : "textSecondary",
    className: classes.visibility,
    variant: "caption"
  }, fieldLabel("notes.".concat(isPrivate ? "private" : "public"))), tooLong && /*#__PURE__*/React__default.createElement(Link$1, {
    underline: "hover",
    className: classes.link,
    onClick: handleToggle
  }, fieldLabel("notes.".concat(showMore ? "show_less" : "show_more"))));
};

TransactionNotesField.propTypes = {
  minWidth: PropTypes.number,
  maxRows: PropTypes.number
};

var _excluded$8 = ["fullWidth", "addLabel"],
    _excluded2$1 = ["admin", "label"];

var PaginationWrapper = function PaginationWrapper(_ref) {
  _ref.fullWidth;
      _ref.addLabel;
      var props = _objectWithoutProperties(_ref, _excluded$8);

  return /*#__PURE__*/React__default.createElement(Pagination, props);
};

var TransactionLogsField = function TransactionLogsField(_ref2) {
  var _ref2$admin = _ref2.admin,
      admin = _ref2$admin === void 0 ? false : _ref2$admin,
      label = _ref2.label,
      props = _objectWithoutProperties(_ref2, _excluded2$1);

  var _useContext = useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var fieldLabel = useFieldLabel({
    resource: "transactions"
  });
  var workflow = useMemo$1(function () {
    return getWorkflow(props.resource);
  }, [getWorkflow, props.resource]);

  if (!workflow || !props.record) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement("br", null), label && /*#__PURE__*/React__default.createElement(Typography$1, {
    variant: "subtitle1",
    gutterBottom: true
  }, label), label && /*#__PURE__*/React__default.createElement(Divider, null), /*#__PURE__*/React__default.createElement(ReferenceManyField, _extends({
    perPage: 5,
    pagination: /*#__PURE__*/React__default.createElement(PaginationWrapper, null),
    reference: "workflow/transactions/".concat(props.resource),
    sort: {
      field: "Transactions.created",
      order: "desc"
    }
  }, props, {
    source: "id",
    target: "id"
  }), /*#__PURE__*/React__default.createElement(Datagrid, null, admin && /*#__PURE__*/React__default.createElement(TextField, {
    label: fieldLabel("id"),
    source: "id"
  }), /*#__PURE__*/React__default.createElement(DateField, {
    label: fieldLabel("created"),
    source: "created",
    showTime: true,
    sortBy: "Transactions.created"
  }), /*#__PURE__*/React__default.createElement(TextField, {
    label: fieldLabel("user"),
    source: "user.name",
    sortBy: "Users.username"
  }), /*#__PURE__*/React__default.createElement(TransactionNotesField, {
    label: fieldLabel("notes"),
    source: "notes",
    admin: admin,
    sortable: false
  }), /*#__PURE__*/React__default.createElement(StateField, {
    label: fieldLabel("state"),
    sortBy: "Transactions.state"
  }))), /*#__PURE__*/React__default.createElement("br", null));
};

var fields = {
  TextField: TextField,
  DateField: DateField,
  ChipField: ChipField,
  BooleanField: BooleanField,
  // Custom
  ChipArrayField: ChipArrayField,
  LongTextField: LongTextField,
  // Workflow
  StateField: StateField,
  TransactionLogsField: TransactionLogsField
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

var _excluded$7 = ["optionText"];

var ReferenceCheckboxGroupInput = function ReferenceCheckboxGroupInput(_ref) {
  var optionText = _ref.optionText,
      props = _objectWithoutProperties(_ref, _excluded$7);

  var parse = useManyParser();
  var format = useManyFormatter();
  return /*#__PURE__*/React__default.createElement(ReferenceArrayInput, _extends({}, props, {
    parse: parse,
    format: format
  }), /*#__PURE__*/React__default.createElement(CheckboxGroupInput, {
    optionText: optionText
  }));
};

var _excluded$6 = ["optionText"];

var ReferenceAutocompleteInput = function ReferenceAutocompleteInput(_ref) {
  var optionText = _ref.optionText,
      props = _objectWithoutProperties(_ref, _excluded$6);

  return /*#__PURE__*/React__default.createElement(ReferenceInput, props, /*#__PURE__*/React__default.createElement(AutocompleteInput, {
    optionText: optionText
  }));
};

var _excluded$5 = ["filter"];

var StateInput = function StateInput(_ref) {
  var _ref$filter = _ref.filter,
      filter = _ref$filter === void 0 ? undefined : _ref$filter,
      props = _objectWithoutProperties(_ref, _excluded$5);

  var _useContext = useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var workflow = useMemo$1(function () {
    return getWorkflow(props.resource);
  }, [props.resource, getWorkflow]);
  var states = useMemo$1(function () {
    return workflow ? workflow.states.filter(function (s) {
      return !s.isLoop && (filter === undefined || filter(s));
    }) : [];
  }, [workflow, filter]);
  return /*#__PURE__*/React__default.createElement(SelectInput, _extends({}, props, {
    choices: states,
    optionText: "name",
    optionValue: "code"
  }));
};

var useStyles = makeStyles$1(function (theme) {
  return {
    required: {}
  };
});

var ConfirmMove = function ConfirmMove(_ref) {
  var _ref$admin = _ref.admin,
      admin = _ref$admin === void 0 ? false : _ref$admin,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      resource = _ref.resource,
      record = _ref.record,
      state = _ref.state,
      onCancel = _ref.onCancel;
  var classes = useStyles();
  var refresh = useRefresh();
  var notify = useNotify();

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      notes = _useState2[0],
      setNotes = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPrivate = _useState4[0],
      setPrivate = _useState4[1];

  var _useContext = useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var workflow = useMemo$1(function () {
    return getWorkflow(resource);
  }, [getWorkflow, resource]);
  var translate = useTranslate$1();
  var handleChange = useCallback(function (e) {
    return setNotes(e.target.value);
  }, [setNotes]);
  var handlePrivate = useCallback(function (e) {
    return setPrivate(e.target.checked);
  }, [setPrivate]);
  var needsNotes = useMemo$1(function () {
    return workflow && workflow.needsNotes(record, state);
  }, [workflow, record, state]);

  var _useUpdate = useUpdate(resource, record.id, _objectSpread2(_objectSpread2({}, record), {}, {
    state: get$2(state, "code"),
    notes: notes,
    is_private: isPrivate
  }), record, {
    onSuccess: function onSuccess() {
      notify("resources.workflow.move.success");
      refresh();
    },
    onFailure: function onFailure(_ref2) {
      var message = _ref2.message,
          body = _ref2.body,
          status = _ref2.status;
      onCancel();
      notify("resources.workflow.move.error", "error", {
        reason: message,
        message: message,
        body: body,
        status: status
      });
    }
  }),
      _useUpdate2 = _slicedToArray(_useUpdate, 2),
      handleUpdate = _useUpdate2[0],
      loading = _useUpdate2[1].loading;

  return /*#__PURE__*/React__default.createElement(Dialog, {
    open: open
  }, /*#__PURE__*/React__default.createElement(DialogTitle, null, translate("resources.workflow.move.title")), /*#__PURE__*/React__default.createElement(DialogContent, null, /*#__PURE__*/React__default.createElement(DialogContentText, {
    className: classnames(needsNotes && classes.required)
  }, translate("resources.workflow.move.message" + (needsNotes ? ".required" : ""))), /*#__PURE__*/React__default.createElement(TextField$1, {
    autoFocus: true,
    onChange: handleChange,
    margin: "dense",
    id: "notes",
    label: translate("resources.workflow.fields.notes"),
    type: "text",
    multiline: true,
    fullWidth: true
  }), admin && /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement(FormControlLabel, {
    control: /*#__PURE__*/React__default.createElement(Switch, {
      checked: isPrivate,
      onChange: handlePrivate,
      name: "is_private",
      color: "primary"
    }),
    label: translate("resources.workflow.fields.is_private")
  }), /*#__PURE__*/React__default.createElement(FormHelperText, null, translate("resources.workflow.fields.is_private.help")))), /*#__PURE__*/React__default.createElement(DialogActions, null, /*#__PURE__*/React__default.createElement(Button, {
    onClick: onCancel
  }, translate("ra.action.cancel")), /*#__PURE__*/React__default.createElement(Button, {
    onClick: handleUpdate,
    color: "primary",
    disabled: needsNotes && notes.length === 0 || loading
  }, translate("ra.action.confirm"))));
};

ConfirmMove.propTypes = {
  state: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string
  }),
  resource: PropTypes.string.isRequired,
  record: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
};

var _this = undefined;

var StateCollectionInput = function StateCollectionInput(_ref) {
  var _ref$readonly = _ref.readonly,
      readonly = _ref$readonly === void 0 ? false : _ref$readonly,
      _ref$admin = _ref.admin,
      admin = _ref$admin === void 0 ? false : _ref$admin,
      record = _ref.record,
      toResolve = _ref.resource;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useGetIdentity = useGetIdentity$1(),
      loading = _useGetIdentity.loading,
      loaded = _useGetIdentity.loaded,
      identity = _useGetIdentity.identity;

  var roles = useMemo$1(function () {
    return !loading && loaded ? identity === null || identity === void 0 ? void 0 : identity.roles : [];
  }, [loading, loaded, identity]);
  var resource = useMemo$1(function () {
    return toResolve.replace("workflow/transactions/", "");
  }, [toResolve]);

  var _useContext = useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var workflow = useMemo$1(function () {
    return getWorkflow(resource);
  }, [getWorkflow, resource]);

  var _useMemo = useMemo$1(function () {
    var currentState = workflow && workflow.getState(_objectSpread2(_objectSpread2({}, record), {}, {
      // If component is used inside TransactionLogsField the transaction is referencing
      // current record. I have to get it to make workflow work.
      transaction: get$2(record, "transaction", record)
    })) || undefined;
    var nextStates = workflow.getNextStates(roles, record);
    return {
      currentState: currentState,
      nextStates: nextStates
    };
  }, [roles, record, workflow]),
      currentState = _useMemo.currentState,
      nextStates = _useMemo.nextStates;

  var _React$useState = React__default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
    setState(null);
  };

  var handleChange = function handleChange(state) {
    setAnchorEl(null);
    setState(state);
  };

  if (readonly || nextStates.length === 0) {
    // If user is not admin and there are no next states, show current state
    return /*#__PURE__*/React__default.createElement(StateField, {
      record: record,
      resource: toResolve
    });
  }

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Button, {
    disableElevation: true,
    endIcon: /*#__PURE__*/React__default.createElement(ArrowDropDownIcon, null),
    color: "primary",
    variant: "contained",
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    style: {
      textAlign: "left"
    },
    size: "small",
    onClick: handleClick
  }, /*#__PURE__*/React__default.createElement(LongTextField, {
    record: currentState,
    source: "name",
    variant: "body2"
  })), /*#__PURE__*/React__default.createElement(Menu$3, {
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, nextStates.map(function (state) {
    return /*#__PURE__*/React__default.createElement(MenuItem$1, {
      key: get$2(state, "code"),
      onClick: handleChange.bind(_this, state)
    }, get$2(state, "label"));
  })), /*#__PURE__*/React__default.createElement(ConfirmMove, {
    admin: admin,
    open: state !== null,
    resource: resource,
    record: record,
    state: state,
    onCancel: handleClose
  }));
};

var _excluded$4 = ["label", "helperText", "admin"];

var TransactionNotesIsPrivateInput = function TransactionNotesIsPrivateInput(_ref) {
  var label = _ref.label,
      helperText = _ref.helperText,
      _ref$admin = _ref.admin,
      admin = _ref$admin === void 0 ? false : _ref$admin,
      props = _objectWithoutProperties(_ref, _excluded$4);

  var fieldLabel = useFieldLabel({
    resource: "transactions"
  });

  if (!admin) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement(BooleanInput, _extends({
    label: label || fieldLabel("is_private", false),
    helperText: helperText || fieldLabel("is_private.helper_text"),
    source: "is_private"
  }, props));
};

function useDebounce(value, delay) {
  // State and setters for debounced value
  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  useEffect(function () {
    // Update debounced value after delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return function () {
      clearTimeout(handler);
    };
  }, [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

var _excluded$3 = ["margin", "variant", "fullWidth", "maxLength", "multiline", "format", "rows", "disabled", "InputLabelProps"],
    _excluded2 = ["name", "onChange"];

var DebouncedTextInput = function DebouncedTextInput(_ref) {
  var _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? "dense" : _ref$margin,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "filled" : _ref$variant,
      fullWidth = _ref.fullWidth,
      maxLength$1 = _ref.maxLength,
      multiline = _ref.multiline,
      format = _ref.format,
      rows = _ref.rows,
      disabled = _ref.disabled,
      InputLabelProps = _ref.InputLabelProps,
      props = _objectWithoutProperties(_ref, _excluded$3);

  var className = props.className,
      source = props.source,
      resource = props.resource,
      label = props.label;
  var validationFn = maxLength(maxLength$1);
  var helperText = props.helperText;
  var validate = props.validate;

  if (!validate) {
    validate = [validationFn];
  } else if (Array.isArray(validate)) {
    if (validate.indexOf(validationFn) === -1) {
      validate.push(validationFn);
    }
  }

  var _useInput = useInput(_objectSpread2({
    validate: validate
  }, props)),
      _useInput$input = _useInput.input,
      name = _useInput$input.name,
      onChange = _useInput$input.onChange,
      rest = _objectWithoutProperties(_useInput$input, _excluded2),
      _useInput$meta = _useInput.meta,
      touched = _useInput$meta.touched,
      error = _useInput$meta.error,
      submitError = _useInput$meta.submitError,
      isRequired = _useInput.isRequired;

  var translate = useTranslate$2();
  var defaultValue = props.type === "number" ? 0 : "";

  var _React$useState = React__default.useState(rest.value !== undefined ? rest.value : defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var formState = useFormState();
  var formValue = get$2(formState.values, source, defaultValue);
  var didMountEffect = useRef(false);
  useEffect(function () {
    if (didMountEffect.current === false) {
      didMountEffect.current = true;
      return;
    }

    if (formValue && formValue !== null) {
      setValue(formValue);
    }
  }, [formValue]);
  var handleChange = useCallback(function (evt) {
    return setValue(evt.target.value);
  }, []);
  var debouncedValue = useDebounce(value, 500);
  var didMountChange = useRef(false);
  useEffect(function () {
    if (didMountChange.current === false) {
      didMountChange.current = true;
      return;
    }

    if (debouncedValue !== (formValue !== null ? formValue : defaultValue) && debouncedValue !== defaultValue) {
      onChange(debouncedValue);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [debouncedValue, onChange]);
  var usedCharsInfo = translate("app.input.max_length_info", {
    count: get$2(value, "length", 0),
    max: maxLength$1
  });

  if (maxLength$1) {
    helperText = helperText && helperText.length > 0 ? "".concat(usedCharsInfo, " - ").concat(translate(helperText)) : usedCharsInfo;
  }

  return /*#__PURE__*/React__default.createElement(TextField$2, _extends({}, rest, {
    disabled: disabled,
    name: name,
    className: className,
    fullWidth: fullWidth,
    multiline: multiline,
    rows: rows,
    variant: variant,
    margin: margin,
    value: format ? format(value) : value,
    label: label !== "" && label !== false && /*#__PURE__*/React__default.createElement(FieldTitle, {
      label: label,
      source: source,
      resource: resource,
      isRequired: isRequired
    }),
    onChange: handleChange,
    error: !!(touched && (error || submitError)),
    helperText: /*#__PURE__*/React__default.createElement(InputHelperText, {
      touched: touched,
      error: error || submitError,
      helperText: helperText
    }),
    InputLabelProps: InputLabelProps,
    required: isRequired
  }));
};

var TransactionNotesInput = function TransactionNotesInput(props) {
  var translate = useTranslate$1();
  var fieldLabel = useFieldLabel({
    resource: "transactions"
  });
  var label = useMemo$1(function () {
    return props.label || fieldLabel("notes");
  }, [props.label, fieldLabel]);
  var helperText = useMemo$1(function () {
    return translate(props.helperText);
  }, [props.helperText, translate]);
  return /*#__PURE__*/React__default.createElement(DebouncedTextInput, _extends({}, props, {
    label: label,
    helperText: helperText,
    maxLength: 1500,
    multiline: true
  }));
};

/**
 * Convert Date object to String
 *
 * @param {Date} value value to convert
 * @returns {String} A standardized date (yyyy-MM-dd), to be passed to an <input type="date" />
 */

var convertDateToString = function convertDateToString(value) {
  if (!(value instanceof Date) || isNaN(value.getDate())) return "";
  var pad = "00";
  var yyyy = value.getFullYear().toString();
  var MM = (value.getMonth() + 1).toString();
  var dd = value.getDate().toString();
  return "".concat(yyyy, "-").concat((pad + MM).slice(-2), "-").concat((pad + dd).slice(-2));
};

var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
var defaultInputLabelProps = {
  shrink: true
};

var getStringFromDate = function getStringFromDate(value) {
  // null, undefined and empty string values should not go through dateFormatter
  // otherwise, it returns undefined and will make the input an uncontrolled one.
  if (value == null || value === "") {
    return "";
  }

  if (value instanceof Date) {
    return convertDateToString(value);
  } // valid dates should not be converted


  if (dateRegex.test(value)) {
    return value;
  }

  return convertDateToString(new Date(value));
};

var DebouncedDateInput = function DebouncedDateInput(props) {
  return /*#__PURE__*/React__default.createElement(DebouncedTextInput, _extends({}, props, {
    type: "date",
    format: getStringFromDate,
    InputLabelProps: defaultInputLabelProps
  }));
};

var convertStringToNumber = function convertStringToNumber(value) {
  var float = parseFloat(value);
  return isNaN(float) ? null : float;
};

var DebouncedNumberInput = function DebouncedNumberInput(props) {
  return /*#__PURE__*/React__default.createElement(DebouncedTextInput, _extends({}, props, {
    type: "number",
    parse: convertStringToNumber
  }));
};

var inputs = {
  ReferenceCheckboxGroupInput: ReferenceCheckboxGroupInput,
  ReferenceAutocompleteInput: ReferenceAutocompleteInput,
  SearchInput: SearchInput,
  TextInput: TextInput,
  SelectInput: SelectInput,
  BooleanInput: BooleanInput,
  DateInput: DateInput,
  StateInput: StateInput,
  StateCollectionInput: StateCollectionInput,
  TransactionNotesIsPrivateInput: TransactionNotesIsPrivateInput,
  TransactionNotesInput: TransactionNotesInput,
  DebouncedDateInput: DebouncedDateInput,
  DebouncedNumberInput: DebouncedNumberInput,
  DebouncedTextInput: DebouncedTextInput
};

var _excluded$2 = ["record", "resource"];

var EditButton = function EditButton(_ref) {
  var record = _ref.record,
      resource = _ref.resource,
      props = _objectWithoutProperties(_ref, _excluded$2);

  var _useContext = useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var _useGetIdentity = useGetIdentity(),
      loaded = _useGetIdentity.loaded,
      loading = _useGetIdentity.loading,
      identity = _useGetIdentity.identity;

  var roles = useMemo$1(function () {
    return !loading && loaded ? identity === null || identity === void 0 ? void 0 : identity.roles : [];
  }, [loaded, identity, loading]);
  var workflow = useMemo$1(function () {
    return getWorkflow(resource);
  }, [getWorkflow, resource]);

  if (!workflow) {
    return /*#__PURE__*/React__default.createElement(EditButton$1, {
      disabled: true
    });
  }

  var canEdit = workflow.canEdit(roles, record);
  var label = canEdit ? "ra.action.edit" : "ra.action.view";
  var icon = canEdit ? /*#__PURE__*/React__default.createElement(ContentCreate, null) : /*#__PURE__*/React__default.createElement(ContentView, null);
  return /*#__PURE__*/React__default.createElement(EditButton$1, _extends({
    icon: icon,
    label: label,
    record: record
  }, props));
};

var buttons = {
  RaEditButton: EditButton$1,
  RaDeleteButton: DeleteButton,
  // Workflow smart buttons
  EditButton: EditButton
};

var _excluded$1 = ["source", "label", "component", "componentProps"];

var List = function List(props) {
  var _grid$filters, _grid$columns;

  var _React$useContext = React.useContext(CrudContext$1),
      getGrid = _React$useContext.getGrid,
      loading = _React$useContext.loading;

  var grid = getGrid(props.resource);
  var customComponents = useCustomComponents(props.resource);
  var isSmall = useMediaQuery(function (theme) {
    var _grid$mobileBreakpoin;

    return theme.breakpoints.down((_grid$mobileBreakpoin = grid === null || grid === void 0 ? void 0 : grid.mobileBreakpoint) !== null && _grid$mobileBreakpoin !== void 0 ? _grid$mobileBreakpoin : "sm");
  });

  if (loading) {
    return /*#__PURE__*/React.createElement(Loading, null);
  }

  if (grid === false || grid === null) {
    return null;
  }

  return /*#__PURE__*/React.createElement(List$2, _extends({}, props, {
    title: grid.title,
    filter: grid.filter || {},
    filterDefaultValues: grid.filterDefaultValues || {},
    sort: grid === null || grid === void 0 ? void 0 : grid.sort,
    perPage: grid === null || grid === void 0 ? void 0 : grid.perPage,
    filters: grid === null || grid === void 0 ? void 0 : (_grid$filters = grid.filters) === null || _grid$filters === void 0 ? void 0 : _grid$filters.map(function (_ref) {
      var source = _ref.source;
          _ref.label;
          var component = _ref.component,
          componentProps = _ref.componentProps,
          props = _objectWithoutProperties(_ref, _excluded$1);

      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        key: source,
        source: source,
        component: component,
        componentProps: componentProps,
        components: _objectSpread2(_objectSpread2({}, inputs), customComponents.inputs),
        alwaysOn: componentProps === null || componentProps === void 0 ? void 0 : componentProps.alwaysOn
      }));
    })
  }), isSmall ? /*#__PURE__*/React.createElement(SimpleList, {
    primaryText: function primaryText(record) {
      return get$2(record, grid === null || grid === void 0 ? void 0 : grid.mobilePrimaryText);
    },
    secondaryText: function secondaryText(record) {
      return get$2(record, grid === null || grid === void 0 ? void 0 : grid.mobileSecondaryText);
    },
    tertiaryText: function tertiaryText(record) {
      return get$2(record, grid === null || grid === void 0 ? void 0 : grid.mobileTertiaryText);
    },
    linkType: grid === null || grid === void 0 ? void 0 : grid.mobileLinkType
  }) : /*#__PURE__*/React.createElement(Datagrid, null, grid === null || grid === void 0 ? void 0 : (_grid$columns = grid.columns) === null || _grid$columns === void 0 ? void 0 : _grid$columns.map(function (_ref2) {
    var source = _ref2.source,
        label = _ref2.label,
        sortable = _ref2.sortable,
        component = _ref2.component,
        componentProps = _ref2.componentProps;
    return /*#__PURE__*/React.createElement(Component, {
      key: source,
      source: source,
      label: label,
      sortable: sortable,
      component: component,
      componentProps: componentProps,
      components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), buttons), customComponents.inputs), customComponents.fields), customComponents.buttons),
      addLabel: false
    });
  })));
};

var load = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var apiUrl, token, headers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiUrl = _ref.apiUrl, token = _ref.token;
            headers = new Headers();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer ".concat(token));
            return _context.abrupt("return", fetch("".concat(apiUrl, "/crud/load"), {
              headers: headers
            }).then(function (response) {
              return response.json();
            }).then(function (_ref3) {
              var data = _ref3.data;
              return data;
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function load(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var useCrud = function useCrud(_ref) {
  var apiUrl = _ref.apiUrl;

  var _useSafeSetState = useSafeSetState({
    loading: false,
    loaded: false,
    data: [],
    token: getToken()
  }),
      _useSafeSetState2 = _slicedToArray(_useSafeSetState, 2),
      _useSafeSetState2$ = _useSafeSetState2[0],
      loaded = _useSafeSetState2$.loaded,
      loading = _useSafeSetState2$.loading,
      data = _useSafeSetState2$.data,
      token = _useSafeSetState2$.token,
      setData = _useSafeSetState2[1];

  var handleLogin = useCallback(function (e) {
    if (token !== e.value) {
      setData(function (d) {
        return _objectSpread2(_objectSpread2({}, d), {}, {
          token: e.value,
          loaded: false
        });
      });
    }
  }, [setData, token]);
  useEffect(function () {
    return document.addEventListener("login", handleLogin);
  }, [handleLogin]);
  useEffect(function () {
    var loadAll = function loadAll(_ref2) {
      var apiUrl = _ref2.apiUrl,
          token = _ref2.token;

      if (loaded || loading || token === null) {
        return;
      }

      setData({
        loading: true
      });
      load({
        apiUrl: apiUrl,
        token: token
      }).then(function (data) {
        return setData({
          loaded: true,
          loading: false,
          data: data
        });
      });
    };

    var token = getToken();
    loadAll({
      apiUrl: apiUrl,
      token: token
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl, token]);
  return {
    loaded: loaded,
    loading: loading,
    data: data
  };
};

var CrudContext = /*#__PURE__*/createContext({});
var CrudProvider = function CrudProvider(_ref) {
  var children = _ref.children,
      apiUrl = _ref.apiUrl;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      entities = _useState2[0],
      setEntities = _useState2[1];

  var _useCrud = useCrud({
    apiUrl: apiUrl
  }),
      loading = _useCrud.loading,
      data = _useCrud.data;

  var getGrid = function getGrid(entity) {
    return get$2(entities, "".concat(entity, ".grid"), false);
  };

  var getForm = function getForm(entity) {
    return get$2(entities, "".concat(entity, ".form"), false);
  };

  useEffect(function () {
    return setEntities(data);
  }, [data]);
  return /*#__PURE__*/React__default.createElement(CrudContext.Provider, {
    value: {
      loading: loading,
      data: data,
      getGrid: getGrid,
      getForm: getForm
    }
  }, children);
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
    var errors = get$2(error, "body.data.errors", null);
    var message = get$2(error, "body.data.message", null);

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

var useSaveMutation = function useSaveMutation(_ref) {
  var basePath = _ref.basePath,
      _ref$errorMapper = _ref.errorMapper,
      errorMapper = _ref$errorMapper === void 0 ? createErrorMapper() : _ref$errorMapper,
      _ref$onSuccess = _ref.onSuccess,
      onSuccess = _ref$onSuccess === void 0 ? undefined : _ref$onSuccess,
      _ref$redir = _ref.redir,
      redir = _ref$redir === void 0 ? null : _ref$redir,
      redirect = _ref.redirect,
      refresh = _ref.refresh,
      resource = _ref.resource,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? undefined : _ref$transform,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? null : _ref$type;

  var _useMutation = useMutation(),
      _useMutation2 = _slicedToArray(_useMutation, 1),
      mutate = _useMutation2[0];

  var doRedirect = useRedirect();
  var doRefresh = useRefresh$1();
  var notify = useNotify$1();
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
                if (redir) {
                  redirect(redir);
                } else if (refresh === true) {
                  if (values.id > 0) {
                    doRefresh();
                  } else {
                    doRedirect("edit", basePath, response.data.id);
                  }
                } else {
                  doRedirect(redirect, basePath, response.data.id);
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
  }(), [basePath, doRedirect, doRefresh, errorMapper, mutate, notify, onSuccess, redir, redirect, refresh, resource, transform, type]);
  return save;
};

var _excluded = ["fullWidth"];

var Form = function Form(_ref) {
  var _form$inputs;

  var props = _extends({}, _ref);

  var _useContext = useContext(CrudContext),
      getForm = _useContext.getForm,
      loading = _useContext.loading;

  var form = getForm(props.resource);
  var customComponents = useCustomComponents(props.resource);
  var save = useSaveMutation(_objectSpread2({}, props));

  if (loading) {
    return /*#__PURE__*/React__default.createElement(Loading, null);
  }

  if (form === false || form === null) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement(SimpleForm, _extends({}, props, {
    save: save,
    initialValues: form === null || form === void 0 ? void 0 : form.initialValues,
    sanitizeEmptyValues: form === null || form === void 0 ? void 0 : form.sanitizeEmptyValues,
    warnWhenUnsavedChanges: form === null || form === void 0 ? void 0 : form.warnWhenUnsavedChanges,
    redirect: form === null || form === void 0 ? void 0 : form.redirect
  }), form === null || form === void 0 ? void 0 : (_form$inputs = form.inputs) === null || _form$inputs === void 0 ? void 0 : _form$inputs.map(function (_ref2) {
    var source = _ref2.source,
        label = _ref2.label,
        component = _ref2.component,
        _ref2$componentProps = _ref2.componentProps,
        fullWidth = _ref2$componentProps.fullWidth,
        restComponentProps = _objectWithoutProperties(_ref2$componentProps, _excluded);

    return /*#__PURE__*/React__default.createElement(Component, {
      key: source,
      source: source,
      label: label,
      fullWidth: fullWidth,
      component: component,
      componentProps: _objectSpread2({
        fullWidth: fullWidth
      }, restComponentProps),
      components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), customComponents.inputs), customComponents.fields)
    });
  }));
};

var Create$1 = function Create(props) {
  return /*#__PURE__*/React__default.createElement(Create$2, props, /*#__PURE__*/React__default.createElement(Form, null));
};

var Create = function Create(props) {
  return /*#__PURE__*/React__default.createElement(Edit, props, /*#__PURE__*/React__default.createElement(Form, null));
};

var createCrud = function createCrud(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {
    group: "admin",
    roles: ["admin"]
  } : _ref$options,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {
    grids: {},
    fields: {},
    forms: {},
    inputs: {}
  } : _ref$components;
  return {
    icon: icon,
    options: _objectSpread2(_objectSpread2({}, options), {}, {
      components: components
    }),
    list: List,
    edit: Create,
    create: Create$1
  };
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
        data: data
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
  }, [apiUrl, locale, loading]);
  return true;
};

export { AppBar, CrudContext, CrudProvider, Layout, Menu$1 as Menu, MenuGroup, MenuItem, Sidebar, UserMenu, UserMenuItem, WorkflowContext, WorkflowProvider, createAuthProvider, createCrud, createDataProvider, createI18nProvider, createManyFormatter, createManyParser, getHeaders, getToken, useAuthProvider, useCrud, useDataProvider, useI18nCatcher, useI18nLanguages, useI18nProvider, useManyFormatter, useManyParser, useSaveMutation, useToken, useWorkflow };
