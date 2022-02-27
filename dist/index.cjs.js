'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactAdmin = require('react-admin');
var React = require('react');
var styles$1 = require('@material-ui/core/styles');
var core = require('@material-ui/core');
var MenuIcon = require('@material-ui/icons/Menu');
var PropTypes = require('prop-types');
var Typography = require('@material-ui/core/Typography');
var AccountCircle = require('@material-ui/icons/AccountCircle');
var IconButton = require('@material-ui/core/IconButton');
var Menu$2 = require('@material-ui/core/Menu');
var classnames = require('classnames');
var raCore = require('ra-core');
var reactRedux = require('react-redux');
var CssBaseline = require('@material-ui/core/CssBaseline');
var DashboardTwoToneIcon = require('@material-ui/icons/DashboardTwoTone');
var reactRouterDom = require('react-router-dom');
var DashboardIcon = require('@material-ui/icons/Dashboard');
var get = require('lodash/get');
var SettingsIcon = require('@material-ui/icons/SettingsOutlined');
var ChevronLeftIcon = require('@material-ui/icons/ChevronLeft');
var styles$2 = require('@material-ui/styles');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var MenuIcon__default = /*#__PURE__*/_interopDefaultLegacy(MenuIcon);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var AccountCircle__default = /*#__PURE__*/_interopDefaultLegacy(AccountCircle);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var Menu__default = /*#__PURE__*/_interopDefaultLegacy(Menu$2);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
var CssBaseline__default = /*#__PURE__*/_interopDefaultLegacy(CssBaseline);
var DashboardTwoToneIcon__default = /*#__PURE__*/_interopDefaultLegacy(DashboardTwoToneIcon);
var DashboardIcon__default = /*#__PURE__*/_interopDefaultLegacy(DashboardIcon);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var SettingsIcon__default = /*#__PURE__*/_interopDefaultLegacy(SettingsIcon);
var ChevronLeftIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronLeftIcon);

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
  var logout = _ref.logout;

  var _React$useState = React__default["default"].useState(null),
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

  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(IconButton__default["default"], {
    onClick: handleMenu,
    color: "inherit"
  }, /*#__PURE__*/React__default["default"].createElement(AccountCircle__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(Menu__default["default"], {
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
  }, logout));
};

UserMenu.propTypes = {
  logout: PropTypes__default["default"].element.isRequired
};

var useStyles$2 = styles$1.makeStyles(function (theme) {
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
      drawerWidth = _ref2.drawerWidth;
  var classes = useStyles$2({
    drawerWidth: drawerWidth
  });
  var dispatch = reactRedux.useDispatch();
  var translate = reactAdmin.useTranslate();
  var isXSmall = core.useMediaQuery(function (theme) {
    return theme.breakpoints.down("xs");
  });

  var _useGetIdentity = reactAdmin.useGetIdentity(),
      identity = _useGetIdentity.identity;

  var handleToggleSidebar = React.useCallback(function () {
    return dispatch(raCore.toggleSidebar());
  }, [dispatch]);
  return /*#__PURE__*/React__default["default"].createElement(core.AppBar, {
    position: "fixed",
    color: "secondary",
    className: classnames__default["default"](classes.appBar, _defineProperty({}, classes.appBarShift, open && !isXSmall))
  }, /*#__PURE__*/React__default["default"].createElement(core.Toolbar, null, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleToggleSidebar,
    edge: "start",
    className: classnames__default["default"](classes.menuButton, _defineProperty({}, classes.hide, open && !isXSmall))
  }, /*#__PURE__*/React__default["default"].createElement(MenuIcon__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
    className: classnames__default["default"](classes.title, _defineProperty({}, classes.titleSidebarClose, !open)),
    variant: "h6",
    id: "react-admin-title",
    noWrap: true
  }), !isXSmall && /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.spacer
  }), !isXSmall && /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
    variant: "body1"
  }, translate("app.welcome", identity)), /*#__PURE__*/React__default["default"].createElement(reactAdmin.LoadingIndicator, null), /*#__PURE__*/React__default["default"].createElement(UserMenu, {
    logout: logout
  })));
};

AppBar.propTypes = {
  open: PropTypes__default["default"].bool.isRequired,
  logout: PropTypes__default["default"].element.isRequired,
  drawerWidth: PropTypes__default["default"].number.isRequired
};

var _excluded$1 = ["titleAccess", "children"];

var Badge = function Badge(_ref) {
  _ref.titleAccess;
      var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React__default["default"].createElement(core.Badge, props, children);
};

var isSelected = function isSelected(location, resource) {
  var selected = location.pathname === resource.to || location.pathname.indexOf("".concat(resource.to, "?")) === 0 || location.pathname.indexOf("".concat(resource.to, "/")) === 0;
  return selected;
};

var MenuItem = function MenuItem(_ref) {
  var location = _ref.location,
      resource = _ref.resource,
      onMenuClick = _ref.onMenuClick;
  var translate = reactAdmin.useTranslate();
  return /*#__PURE__*/React__default["default"].createElement(core.ListItem, {
    button: true,
    component: reactRouterDom.Link,
    to: resource.to,
    onClick: onMenuClick,
    selected: isSelected(location, resource)
  }, /*#__PURE__*/React__default["default"].createElement(core.ListItemIcon, null, resource.badge && resource.badge.show ? /*#__PURE__*/React__default["default"].createElement(Badge, {
    color: resource.badge.type,
    variant: resource.badge.variant,
    badgeContent: resource.badge.value
  }, /*#__PURE__*/React.createElement(resource.icon)) : /*#__PURE__*/React.createElement(resource.icon)), /*#__PURE__*/React__default["default"].createElement(core.ListItemText, {
    primary: resource.localize !== false ? translate("menu.items.".concat(resource.label)) : resource.label
  }));
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

var createMenuItem = function createMenuItem(resource, badges) {
  return {
    badge: get__default["default"](badges, "".concat(resource.name), null),
    order: get__default["default"](resource, "options.order", 0),
    label: resource.name,
    icon: resource.icon,
    to: resource.path || "/".concat(resource.name)
  };
};

var createGroups = function createGroups(config, resources, permissions, badges, hasDashboard) {
  var groups = (hasDashboard ? [{
    path: "/",
    name: "dashboard",
    icon: DashboardIcon__default["default"],
    options: {
      group: "dashboard"
    }
  }] : []).concat(resources.filter(function (r) {
    return r.hasList && r.options && r.icon;
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
      group.content.push(createMenuItem(resource, badges));
      group.content.sort(function (a, b) {
        return a.order > b.order ? 1 : a.order < b.order ? -1 : 0;
      });
    } else {
      group = {
        icon: get__default["default"](config, "[".concat(groupName, "].icon")),
        label: groupName,
        order: get__default["default"](config, "[".concat(groupName, "].order"), 1000),
        content: [createMenuItem(resource, badges)],
        expanded: get__default["default"](config, "[".concat(groupName, "].expanded"), false)
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
    getResources = _require.getResources;

var _require2 = require("react"),
    useMemo = _require2.useMemo;

var _require3 = require("react-redux"),
    shallowEqual = _require3.shallowEqual;

var useMenu = function useMenu(_ref) {
  var hasDashboard = _ref.hasDashboard,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;

  // const { data: badges } = useBadges();
  var _usePermissions = usePermissions(),
      loaded = _usePermissions.loaded,
      permissions = _usePermissions.permissions;

  var resources = reactRedux.useSelector(getResources, shallowEqual);
  var menu = useMemo(function () {
    return loaded ? createGroups(config, resources, permissions, [], hasDashboard) : [];
  }, [resources, permissions, loaded, config, hasDashboard]);
  return menu;
};

var useStyles$1 = core.makeStyles(function (theme) {
  return {
    subHeader: {
      backgroundColor: theme.palette.background.paper,
      zIndex: theme.zIndex.appBar,
      fontWeight: "bold",
      color: theme.palette.text.primary
    }
  };
});

var Menu = function Menu(_ref) {
  var hasDashboard = _ref.hasDashboard,
      open = _ref.open,
      location = _ref.location,
      onMenuClick = _ref.onMenuClick,
      menuConfig = _ref.menuConfig;

  var _useGetIdentity = reactAdmin.useGetIdentity(),
      loading = _useGetIdentity.loading,
      loaded = _useGetIdentity.loaded,
      identity = _useGetIdentity.identity;

  var menu = useMenu({
    hasDashboard: hasDashboard,
    config: menuConfig
  });
  var classes = useStyles$1();
  var translate = reactAdmin.useTranslate();

  if (loading || !loaded || identity === null || identity.id <= 0) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement(core.List, {
    component: "nav",
    className: classes.root
  }, menu.map(function (group, idx) {
    return /*#__PURE__*/React__default["default"].createElement(core.List, {
      key: idx,
      subheader: open ? /*#__PURE__*/React__default["default"].createElement(core.ListSubheader, {
        className: classes.subHeader
      }, translate("menu.groups.".concat(group.label))) : null
    }, group.content.map(function (resource, index) {
      return /*#__PURE__*/React__default["default"].createElement(MenuItem, {
        key: index,
        resource: resource,
        location: location,
        onMenuClick: onMenuClick
      });
    }), /*#__PURE__*/React__default["default"].createElement(core.Divider, null));
  }));
};

var Menu$1 = compose(reactRouterDom.withRouter, reactRedux.connect(function (state) {
  return {
    open: state.admin.ui.sidebarOpen,
    resources: reactAdmin.getResources(state)
  };
}))(Menu);

var useStyles = core.makeStyles(function (theme) {
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
  var classes = useStyles({
    drawerWidth: drawerWidth
  });
  var dispatch = reactRedux.useDispatch();
  var handleToggleSidebar = React.useCallback(function () {
    return dispatch(raCore.toggleSidebar());
  }, [dispatch]);
  var isXSmall = core.useMediaQuery(function (theme) {
    return theme.breakpoints.down("xs");
  });
  return /*#__PURE__*/React__default["default"].createElement(core.Drawer, {
    open: open,
    onClose: handleToggleSidebar,
    variant: isXSmall ? "temporary" : "permanent",
    className: classnames__default["default"](classes.drawer, (_classnames = {}, _defineProperty(_classnames, classes.drawerOpen, open), _defineProperty(_classnames, classes.drawerClose, !open), _classnames)),
    classes: {
      paper: classnames__default["default"]((_classnames2 = {}, _defineProperty(_classnames2, classes.drawerOpen, open), _defineProperty(_classnames2, classes.drawerClose, !open), _classnames2))
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.brand
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    className: classes.title,
    href: "/",
    variant: "h6",
    color: "inherit"
  }, appTitle), /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    color: "textSecondary",
    variant: "caption"
  }, appSubTitle, " (", appVersion, ")")), /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    onClick: handleToggleSidebar
  }, /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon__default["default"], null))), React__default["default"].Children.map(children, function (child) {
    return /*#__PURE__*/React__default["default"].cloneElement(child, {
      onMenuClick: isXSmall ? handleToggleSidebar : undefined
    });
  }));
};

Sidebar.propTypes = {
  children: PropTypes__default["default"].node,
  open: PropTypes__default["default"].bool.isRequired,
  config: PropTypes__default["default"].object,
  drawerWidth: PropTypes__default["default"].number.isRequired,
  appName: PropTypes__default["default"].string,
  appSubTitle: PropTypes__default["default"].string,
  appVersion: PropTypes__default["default"].string
};

var _excluded = ["theme"];

var styles = function styles(theme) {
  return styles$1.createStyles({
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
          config = _this$props.config,
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
          notification = _this$props$notificat === void 0 ? reactAdmin.Notification : _this$props$notificat,
          open = _this$props.open,
          _this$props$sidebar = _this$props.sidebar,
          sidebar = _this$props$sidebar === void 0 ? Sidebar : _this$props$sidebar,
          title = _this$props.title,
          appTitle = _this$props.appTitle,
          appSubTitle = _this$props.appSubTitle,
          appVersion = _this$props.appVersion,
          drawerWidth = _this$props.drawerWidth;
      var _this$state = this.state,
          hasError = _this$state.hasError,
          errorMessage = _this$state.errorMessage,
          errorInfo = _this$state.errorInfo;
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/React__default["default"].createElement(CssBaseline__default["default"], null), /*#__PURE__*/React.createElement(sidebar, {
        open: open,
        appTitle: appTitle,
        appSubTitle: appSubTitle,
        appVersion: appVersion,
        drawerWidth: drawerWidth,
        children: /*#__PURE__*/React.createElement(menu, {
          open: open,
          config: config,
          logout: logout,
          hasDashboard: !!dashboard,
          menuConfig: this.props.menu
        })
      }), /*#__PURE__*/React__default["default"].createElement("main", {
        id: "main-content",
        className: classes.content
      }, /*#__PURE__*/React.createElement(appBar, {
        title: title,
        open: open,
        logout: logout,
        drawerWidth: drawerWidth
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.toolbar
      }), hasError ? /*#__PURE__*/React.createElement(error, {
        error: errorMessage,
        errorInfo: errorInfo,
        title: title
      }) : children), /*#__PURE__*/React.createElement(notification));
    }
  }]);

  return LayoutWithoutTheme;
}(React__default["default"].Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    open: state.admin.ui.sidebarOpen
  };
};

var EnhancedLayout = compose(reactRedux.connect(mapStateToProps, {} // Avoid connect passing dispatch in props
), reactRouterDom.withRouter, styles$1.withStyles(styles, {
  name: "RaLayout"
}))(LayoutWithoutTheme);

var Layout = function Layout(_ref) {
  var themeOverride = _ref.theme,
      props = _objectWithoutProperties(_ref, _excluded);

  var themeProp = React.useRef(themeOverride);

  var _useState = React.useState(function () {
    return styles$1.createTheme(themeOverride);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  React.useEffect(function () {
    if (themeProp.current !== themeOverride) {
      themeProp.current = themeOverride;
      setTheme(styles$1.createTheme(themeOverride));
    }
  }, [themeOverride, themeProp, theme, setTheme]);
  return /*#__PURE__*/React__default["default"].createElement(styles$2.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default["default"].createElement(EnhancedLayout, props));
};

Layout.propTypes = {
  theme: PropTypes__default["default"].object,
  appTitle: PropTypes__default["default"].string.isRequired,
  appSubTitle: PropTypes__default["default"].string,
  appVersion: PropTypes__default["default"].string,
  drawerWidth: PropTypes__default["default"].number,
  menu: PropTypes__default["default"].object
};
Layout.defaultProps = {
  theme: reactAdmin.defaultTheme,
  appTitle: "React Admin",
  appSubTitle: "Material-UI",
  appVersion: "1.0.0",
  drawerWidth: 240,
  config: {
    dashboard: {
      icon: DashboardTwoToneIcon__default["default"],
      order: 5,
      expanded: true
    },
    admin: {
      icon: SettingsIcon__default["default"],
      order: 100,
      expanded: true
    }
  }
};

exports.Layout = Layout;
