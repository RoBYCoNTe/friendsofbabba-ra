import { useMediaQuery, AppBar as AppBar$1, Toolbar as Toolbar$1, IconButton as IconButton$1, Badge as Badge$1, makeStyles as makeStyles$1, List as List$1, ListSubheader, Divider, ListItem, ListItemIcon, ListItemText, Drawer, Typography as Typography$1, MenuItem as MenuItem$1, Link as Link$1, Box, LinearProgress, FormHelperText, Button as Button$2, Grid, ListItemAvatar, Avatar, CircularProgress, TextField as TextField$2, Dialog, DialogTitle, DialogContent, DialogContentText, FormControlLabel, Switch, DialogActions, Menu as Menu$3, ThemeProvider as ThemeProvider$1, Stepper, Step, StepLabel, StepContent } from '@material-ui/core';
import { useTranslate as useTranslate$1, useGetIdentity, LoadingIndicator, getResources as getResources$2, defaultTheme, Notification, Button, DeleteWithConfirmButton as DeleteWithConfirmButton$1, EditButton as EditButton$1, useRefresh, useNotify as useNotify$1, useUnselectAll, useUpdateMany, SaveButton, DeleteButton, ArrayField, SingleFieldList, ChipField, DateField, useInput, ReferenceManyField, SimpleList, Datagrid as Datagrid$1, TopToolbar, TextField, Pagination, BooleanField, FormInput, Toolbar as Toolbar$2, useDataProvider as useDataProvider$1, Labeled, InputHelperText as InputHelperText$1, FileInput, ReferenceInput, AutocompleteInput, ReferenceArrayInput, CheckboxGroupInput, SelectInput, useUpdate, BooleanInput, DateInput, DateTimeInput, NullableBooleanInput, NumberInput, SearchInput, TextInput, TabbedForm as TabbedForm$1, FormTab as FormTab$1, Loading, SimpleForm, Create as Create$2, Edit, FilterContext, FilterButton, CreateButton, ExportButton as ExportButton$1, BulkDeleteButton, downloadCSV, List as List$2, Filter, Resource, LoginForm, Login, useRedirect as useRedirect$1, resolveBrowserLocale, useLocale as useLocale$1 } from 'react-admin';
export { BooleanField, BooleanInput, ChipField, DateField, DateInput, DateTimeInput, NullableBooleanInput, NumberInput, DeleteButton as RaDeleteButton, EditButton as RaEditButton, SearchInput, SelectInput, TextField, TextInput } from 'react-admin';
import * as React from 'react';
import React__default, { useMemo as useMemo$1, useCallback, createElement, useRef, useState, useEffect, createContext, useContext, Fragment, isValidElement, cloneElement } from 'react';
import { useAuthProvider as useAuthProvider$1, useRedirect, useNotify, toggleSidebar, usePermissions as usePermissions$1, useTranslate as useTranslate$2, useGetIdentity as useGetIdentity$1, useSafeSetState, useLocale, useFormContext, useFormGroup, FormGroupContextProvider, useFormGroupContext, maxLength, FieldTitle, useMutation, useRefresh as useRefresh$1, useListContext, useResourceContext, useResourceDefinition, sanitizeListRestProps, useGetResourceLabel, required, email, FormDataConsumer, useInput as useInput$1, useDataProvider as useDataProvider$2, HttpError } from 'ra-core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Menu$2 from '@material-ui/core/Menu';
import classnames from 'classnames';
import { makeStyles, withStyles, createStyles, createTheme, darken, lighten, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector as useSelector$1, connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, withRouter, useLocation } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import get$1 from 'lodash/get';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ThemeProvider } from '@material-ui/styles';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import BackIcon from '@material-ui/icons/ArrowBack';
import ContentCreate from '@material-ui/icons/Create';
import ContentView from '@material-ui/icons/Visibility';
import { get as get$2, set } from 'lodash';
import GetAppIcon from '@material-ui/icons/GetApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EmailIcon from '@material-ui/icons/Email';
import moment from 'moment';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useForm, useFormState, Form as Form$1, Field } from 'react-final-form';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button$1 from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import MenuItem$2 from '@material-ui/core/MenuItem';
import { FileField, InputHelperText, Notification as Notification$1, TextInput as TextInput$1, DateInput as DateInput$1 } from 'ra-ui-materialui';
import { stringify } from 'query-string';
import MuiTab from '@material-ui/core/Tab';
import { Warning, Close, CheckOutlined, ReportProblemOutlined, ErrorOutline, InfoOutlined } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import { capitalize } from '@material-ui/core/utils';
import clsx from 'clsx';
import TextField$1 from '@material-ui/core/TextField';
import Divider$1 from '@material-ui/core/Divider';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TableChart from '@material-ui/icons/TableChart';
import { CrudContext as CrudContext$1 } from 'friendsofbabba-ra';
import Inbox from '@material-ui/icons/Inbox';
import jsonExport from 'jsonexport/dist';
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

function notifyToken(token) {
  var event = new Event("login");
  event.key = "token";
  event.value = token;
  document.dispatchEvent(event);
}
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

var useIsImpersonating = function useIsImpersonating() {
  var impersonate = localStorage.getItem("impersonate");
  return impersonate === "true";
};
var useDoImpersonate = function useDoImpersonate(id) {
  var authProvider = useAuthProvider$1();
  var redirect = useRedirect();
  var notify = useNotify();
  var handle = useCallback(function () {
    return authProvider.impersonate(id).then(function () {
      notify("ra.auth.sign_in_success", "info");
      redirect("/");
      setTimeout(function () {
        return window.location.reload();
      }, 1000);
    }).catch(function () {
      notify("ra.auth.sign_in_error", "warning");
    });
  }, [authProvider, notify, redirect, id]);
  return handle;
};
var useUndoImpersonate = function useUndoImpersonate() {
  var authProvider = useAuthProvider$1();
  var redirect = useRedirect();
  var notify = useNotify();
  var handleImpersonateLogout = useCallback(function () {
    return authProvider.stopImpersonate().then(function () {
      redirect("/");
      notify("ra.auth.sign_out_success", "info");
      setTimeout(function () {
        return document.location.reload();
      }, 1000);
    }).catch(function (error) {
      return notify(error, "warning");
    });
  }, [authProvider, redirect, notify]);
  return handleImpersonateLogout;
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

        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.token);
        localStorage.setItem("roles", JSON.stringify(data.roles));
        localStorage.setItem("profile", JSON.stringify(data.profile));
        notifyToken(data.token);
      });
    },
    logout: function logout() {
      localStorage.removeItem("email");
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
        return Promise.reject(error === null || error === void 0 ? void 0 : error.message);
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
      var email = localStorage.getItem("email");
      return Promise.resolve(_objectSpread2(_objectSpread2({}, profile), {}, {
        roles: roles,
        email: email
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

        ["token", "roles", "username", "profile", "email"].forEach(function (param) {
          var toSaveParam = "admin_".concat(param);
          localStorage.setItem(toSaveParam, localStorage.getItem(param));
          localStorage.setItem(param, ["profile", "roles"].indexOf(param) !== -1 ? JSON.stringify(data[param]) : data[param]);
        });
        localStorage.setItem("impersonate", true);
      });
    },
    stopImpersonate: function stopImpersonate() {
      ["token", "roles", "username", "profile", "email"].forEach(function (param) {
        var savedParam = "admin_".concat(param);
        localStorage.setItem(param, localStorage.getItem(savedParam));
        localStorage.removeItem(savedParam);
      });
      localStorage.setItem("impersonate", false);
      return Promise.resolve();
    }
  };
};

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

var useStyles$p = makeStyles(function (theme) {
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
    },
    welcome: {
      lineHeight: "1.2em"
    },
    undoImpersonate: {
      display: "block",
      clear: "both",
      marginTop: -theme.spacing(0.5),
      fontSize: 12,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline"
      }
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
  var classes = useStyles$p({
    drawerWidth: drawerWidth
  });
  var dispatch = useDispatch();
  var translate = useTranslate$1();
  var isImpersonating = useIsImpersonating();
  var undoImpersonate = useUndoImpersonate();
  var handleUndoClick = useCallback(function (e) {
    e.stopPropagation();
    e.preventDefault();
    undoImpersonate();
  }, [undoImpersonate]);
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
  }, /*#__PURE__*/React__default.createElement(Toolbar$1, null, /*#__PURE__*/React__default.createElement(IconButton$1, {
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
    variant: "body1",
    component: "div",
    className: classes.welcome
  }, translate("app.welcome", identity), isImpersonating && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body1",
    display: "block",
    onClick: handleUndoClick,
    className: classes.undoImpersonate
  }, translate("ra.auth.impersonating.undo", identity))), /*#__PURE__*/React__default.createElement(LoadingIndicator, null), /*#__PURE__*/React__default.createElement(userMenu, {
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

var _excluded$Q = ["titleAccess", "children"];

var Badge = function Badge(_ref) {
  _ref.titleAccess;
      var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$Q);

  return /*#__PURE__*/React__default.createElement(Badge$1, props, children);
};

var _excluded$P = ["children", "open", "label"];
var useStyles$o = makeStyles$1(function (theme) {
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
      props = _objectWithoutProperties(_ref, _excluded$P);

  var classes = useStyles$o();
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

var _excluded$O = ["location", "badge", "to", "icon", "label", "sub", "onMenuClick", "permissions", "open"];

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
      props = _objectWithoutProperties(_ref, _excluded$O);

  return /*#__PURE__*/React__default.createElement(ListItem, _extends({}, props, {
    button: true,
    component: props.href ? "a" : Link,
    to: to,
    onClick: onMenuClick,
    selected: isSelected(location, to)
  }), /*#__PURE__*/React__default.createElement(ListItemIcon, null, badge && badge.show !== false ? /*#__PURE__*/React__default.createElement(Badge, {
    color: badge.color,
    variant: badge.variant,
    badgeContent: badge.value,
    overlap: "rectangular"
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

var useStyles$n = makeStyles$1(function (theme) {
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
    }, theme.mixins.toolbar),
    undoImpersonate: {
      display: "block",
      clear: "both",
      marginTop: -theme.spacing(0.5),
      fontSize: 12,
      cursor: "pointer",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: theme.palette.secondary,
      "&:hover": {
        textDecoration: "underline",
        color: theme.palette.primary.main
      }
    }
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
  var classes = useStyles$n({
    drawerWidth: drawerWidth
  });
  var dispatch = useDispatch();
  var handleToggleSidebar = useCallback(function () {
    return dispatch(toggleSidebar());
  }, [dispatch]);
  var isXSmall = useMediaQuery(function (theme) {
    return theme.breakpoints.down("xs");
  });
  var translate = useTranslate$2();

  var _useGetIdentity = useGetIdentity$1(),
      identity = _useGetIdentity.identity;

  var isImpersonating = useIsImpersonating();
  var undoImpersonate = useUndoImpersonate();
  var handleUndoClick = useCallback(function (e) {
    e.stopPropagation();
    e.preventDefault();
    undoImpersonate();
  }, [undoImpersonate]);
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
  }, appSubTitle, " (", appVersion, ")"), isImpersonating && isXSmall && /*#__PURE__*/React__default.createElement(Typography$1, {
    variant: "body1",
    display: "block",
    onClick: handleUndoClick,
    className: classes.undoImpersonate
  }, translate("ra.auth.impersonating.undo.short", identity))), /*#__PURE__*/React__default.createElement(IconButton$1, {
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

var _excluded$N = ["theme"];
var LayoutContext = /*#__PURE__*/React__default.createContext({
  drawerWidth: 0
});

var LayoutProvider = function LayoutProvider(_ref) {
  var children = _ref.children,
      drawerWidth = _ref.drawerWidth;
  return /*#__PURE__*/React__default.createElement(LayoutContext.Provider, {
    value: {
      drawerWidth: drawerWidth
    }
  }, children);
};

var styles$1 = function styles(theme) {
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
      return /*#__PURE__*/React__default.createElement(LayoutProvider, {
        drawerWidth: drawerWidth
      }, /*#__PURE__*/React__default.createElement("div", {
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
      }) : children), /*#__PURE__*/createElement(notification)));
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
), withRouter, withStyles(styles$1, {
  name: "RaLayout"
}))(LayoutWithoutTheme);

var Layout = function Layout(_ref2) {
  var themeOverride = _ref2.theme,
      props = _objectWithoutProperties(_ref2, _excluded$N);

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

var _excluded$M = ["className", "classes", "redirectTo", "icon", "label"];
var useStyles$m = makeStyles(function (theme) {
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
      rest = _objectWithoutProperties(props, _excluded$M);

  var classes = useStyles$m(props);
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

var _excluded$L = ["resource", "baseRecord", "to"];

var BackButton = function BackButton(_ref) {
  var resource = _ref.resource;
      _ref.baseRecord;
      var to = _ref.to,
      props = _objectWithoutProperties(_ref, _excluded$L);

  return /*#__PURE__*/React__default.createElement(Button, _extends({}, props, {
    component: Link,
    to: to || {
      pathname: "/".concat(resource)
    },
    label: "ra.action.back"
  }), /*#__PURE__*/React__default.createElement(BackIcon, null));
};

var _excluded$K = ["redirect", "reference"];
/**
 *
 * @param {string} props.redirect - The redirect path after the delete action.
 * @param {string} props.reference - The reference to the resource to delete.
 * @param {string} props.title - The title of the delete dialog.
 * @param {string} props.content - The message of the delete dialog.
 * @returns
 */

var DeleteWithConfirmButton = function DeleteWithConfirmButton(_ref) {
  var redirect = _ref.redirect;
      _ref.reference;
      var props = _objectWithoutProperties(_ref, _excluded$K);

  var translate = useTranslate$1();

  var _useMemo = useMemo$1(function () {
    var title = props.title ? typeof props.title === "function" ? props.confirmTitle(props.record, translate) : props.title : translate("ra.title.confirm_delete");
    var content = props.confirmTitle ? typeof props.content === "function" ? props.confirmTitle(props.record, translate) : props.content : translate("ra.message.confirm_delete");
    return {
      confirmTitle: title,
      confirmContent: content
    };
  }, [props, translate]),
      confirmTitle = _useMemo.confirmTitle,
      confirmContent = _useMemo.confirmContent;

  var record = props.record;

  if (!record) {
    // React-Admin original button soffer refreh's bug.
    // While trying to recover id of an non existing records it crash the application.
    // To avoid problems with this situation we have to return an empty component in this case.
    return null;
  }

  return /*#__PURE__*/React__default.createElement(DeleteWithConfirmButton$1, _extends({}, props, {
    redirect: redirect,
    confirmTitle: confirmTitle,
    confirmContent: confirmContent
  }));
};

DeleteWithConfirmButton.propTypes = {
  redirect: PropTypes.string,
  reference: PropTypes.string,
  record: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
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

  _createClass(Workflow, [{
    key: "canCreate",
    value: function canCreate(roles) {
      return this.check("create", roles);
    }
  }, {
    key: "canEdit",
    value: function canEdit(roles, record) {
      return this.check("edit", roles, record);
    }
  }, {
    key: "canRead",
    value: function canRead(roles, record) {
      return this.check("read", roles, record);
    }
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
  }, {
    key: "canEditField",
    value: function canEditField(fieldName, roles, record) {
      return this.checkField("edit", roles, fieldName, record);
    }
  }, {
    key: "canReadField",
    value: function canReadField(fieldName, roles, record) {
      return this.checkField("read", roles, fieldName, record);
    }
  }, {
    key: "canReadFields",
    value: function canReadFields(fields, roles, record) {
      var _this = this;

      return fields.some(function (field) {
        return _this.canReadField(field, roles, record);
      });
    }
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
      var check = permissions.some(function (permission) {
        return roles.some(function (role) {
          return permission.role === role.code;
        });
      });
      return check;
    }
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
      apiUrl: apiUrl,
      workflows: data,
      getWorkflow: getWorkflow
    }
  }, children);
};

var _excluded$J = ["record", "resource"];

var EditButton = function EditButton(_ref) {
  var record = _ref.record,
      resource = _ref.resource,
      props = _objectWithoutProperties(_ref, _excluded$J);

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

/**
 * Export a context that will be used to provide the crud instance to the children.
 */

var CrudContext = /*#__PURE__*/createContext({});
/**
 * CrudProvider component, used to provide the crud instance to the children.
 *
 * @param {Array|Object} props.children The children to render.
 * @param {Object} props.components List of additional components to render.
 * @param {string} props.apiUrl The api url.
 *
 * @returns {React.ReactElement}
 */

var CrudProvider = function CrudProvider(_ref) {
  var children = _ref.children,
      components = _ref.components,
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
      apiUrl: apiUrl,
      loading: loading,
      data: data,
      components: components,
      getGrid: getGrid,
      getForm: getForm
    }
  }, children);
};
CrudProvider.propTypes = {
  /**
   * The children to render.
   *
   * @type {Array|Object}
   */
  children: PropTypes.node.isRequired,

  /**
   * List of additional components to render.
   *
   * @type {Object}
   */
  components: PropTypes.object,

  /**
   * The api url from which to fetch the crud entities.
   *
   * @type {string}
   */
  apiUrl: PropTypes.string.isRequired
};

var ExportToXlsxButton = function ExportToXlsxButton(_ref, ref) {
  var currentSort = _ref.currentSort,
      filterValues = _ref.filterValues,
      baseUrl = _ref.baseUrl,
      onClick = _ref.onClick,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "ra.action.export" : _ref$label,
      _ref$menu = _ref.menu,
      menu = _ref$menu === void 0 ? false : _ref$menu,
      resource = _ref.resource,
      _ref$extension = _ref.extension,
      extension = _ref$extension === void 0 ? "xlsx" : _ref$extension,
      sort = _ref.sort;

  var _useContext = useContext(CrudContext),
      apiUrl = _useContext.apiUrl;

  var url = useMemo$1(function () {
    return baseUrl == null ? "".concat(apiUrl, "/crud/").concat(resource, "/export.").concat(extension) : baseUrl;
  }, [baseUrl, apiUrl, resource, extension]);
  var href = useMemo$1(function () {
    var filters = Object.keys(filterValues).filter(function (name) {
      return filterValues[name] !== undefined && filterValues[name] !== null;
    }).map(function (name) {
      return "".concat(name, "=").concat(filterValues[name]);
    }).join("&");
    var order = currentSort ? "&sort=".concat(currentSort.field, "&direction=").concat(currentSort.order) : "&sort=".concat(sort === null || sort === void 0 ? void 0 : sort.field, "&direction=").concat(sort === null || sort === void 0 ? void 0 : sort.order);
    return "".concat(url, "?token=").concat(getToken(), "&").concat(filters).concat(order);
  }, [filterValues, currentSort, url, sort]);
  return menu ? /*#__PURE__*/React__default.createElement(MenuItem$1, {
    ref: ref,
    component: Link$1,
    onClick: onClick,
    href: href
  }, extension === null || extension === void 0 ? void 0 : extension.toUpperCase()) : /*#__PURE__*/React__default.createElement(Button, {
    component: Link$1,
    href: href,
    label: label
  });
};

var ExportButton = /*#__PURE__*/React__default.forwardRef(ExportToXlsxButton);

var _excluded$I = ["exportTo", "label"];

var ExportToButton = function ExportToButton(_ref) {
  var _ref$exportTo = _ref.exportTo,
      exportTo = _ref$exportTo === void 0 ? ["csv", "xlsx"] : _ref$exportTo,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "ra.action.export" : _ref$label,
      props = _objectWithoutProperties(_ref, _excluded$I);

  var _React$useState = React__default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  if (exportTo.length === 0) {
    return null;
  }

  return (exportTo === null || exportTo === void 0 ? void 0 : exportTo.length) > 1 ? /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
    label: label,
    onClick: handleClick,
    startIcon: /*#__PURE__*/React__default.createElement(GetAppIcon, null)
  }), /*#__PURE__*/React__default.createElement(Menu$2, {
    id: "export-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, exportTo.map(function (extension) {
    return /*#__PURE__*/React__default.createElement(ExportButton, _extends({
      key: extension
    }, props, {
      extension: extension,
      menu: true
    }));
  }))) : /*#__PURE__*/React__default.createElement(ExportButton, _extends({}, props, {
    extension: exportTo[0]
  }));
};

var _excluded$H = ["label", "record"];

var ImpersonateUserButton = function ImpersonateUserButton(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "ra.auth.sign_in" : _ref$label,
      record = _ref.record,
      rest = _objectWithoutProperties(_ref, _excluded$H);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var doImpersonate = useDoImpersonate(record === null || record === void 0 ? void 0 : record.id);
  var handleClick = useCallback(function (e) {
    e.stopPropagation();
    e.preventDefault();
    setLoading(true);
    doImpersonate().then(function () {
      return setLoading(false);
    });
  }, [doImpersonate, setLoading]);
  return /*#__PURE__*/React__default.createElement(Button, _extends({
    disabled: loading,
    color: "primary",
    variant: "text",
    label: label,
    onClick: handleClick
  }, rest), /*#__PURE__*/React__default.createElement(VpnKeyIcon, null));
};

var MarkAsReadedButton = function MarkAsReadedButton(_ref) {
  var _ref$selectedIds = _ref.selectedIds,
      selectedIds = _ref$selectedIds === void 0 ? [] : _ref$selectedIds;
  var refresh = useRefresh();
  var notify = useNotify$1();
  var unselectAll = useUnselectAll();

  var _useUpdateMany = useUpdateMany("notifications", selectedIds, {
    readed: moment().format()
  }, {
    onSuccess: function onSuccess() {
      refresh();
      notify("resources.notifications.messages.readed.done");
      unselectAll("notifications");
    },
    onFailure: function onFailure() {
      return notify("resources.notifications.messages.readed.error", "warning");
    }
  }),
      _useUpdateMany2 = _slicedToArray(_useUpdateMany, 2),
      updateMany = _useUpdateMany2[0],
      loading = _useUpdateMany2[1].loading;

  var handleUpdateMany = useCallback(function (e) {
    e.stopPropagation();
    updateMany();
  }, [updateMany]);
  return /*#__PURE__*/React__default.createElement(Button, {
    label: "resources.notifications.buttons.mark_as_readed",
    disabled: loading,
    onClick: handleUpdateMany
  }, /*#__PURE__*/React__default.createElement(EmailIcon, null));
};

var MarkAsUnreadedButton = function MarkAsUnreadedButton(_ref) {
  var _ref$selectedIds = _ref.selectedIds,
      selectedIds = _ref$selectedIds === void 0 ? [] : _ref$selectedIds;
  var refresh = useRefresh();
  var notify = useNotify$1();
  var unselectAll = useUnselectAll();

  var _useUpdateMany = useUpdateMany("notifications", selectedIds, {
    readed: null
  }, {
    onSuccess: function onSuccess() {
      refresh();
      notify("resources.notifications.messages.unreaded.done");
      unselectAll("notifications");
    },
    onFailure: function onFailure() {
      return notify("resources.notifications.messages.unreaded.error", "warning");
    }
  }),
      _useUpdateMany2 = _slicedToArray(_useUpdateMany, 2),
      updateMany = _useUpdateMany2[0],
      loading = _useUpdateMany2[1].loading;

  var handleUpdateMany = useCallback(function (e) {
    e.stopPropagation();
    updateMany();
  }, [updateMany]);
  return /*#__PURE__*/React__default.createElement(Button, {
    color: "secondary",
    label: "resources.notifications.buttons.mark_as_unreaded",
    disabled: loading,
    onClick: handleUpdateMany
  }, /*#__PURE__*/React__default.createElement(DraftsIcon, null));
};

var _excluded$G = ["handleSubmitWithRedirect", "small", "state", "pristine"];
var useStyles$l = makeStyles(function (theme) {
  var _theme$props, _theme$props$MuiButto;

  return {
    button: {
      disableElevation: ((_theme$props = theme.props) === null || _theme$props === void 0 ? void 0 : (_theme$props$MuiButto = _theme$props.MuiButton) === null || _theme$props$MuiButto === void 0 ? void 0 : _theme$props$MuiButto.disableElevation) === true
    }
  };
});

var StateButton = function StateButton(_ref, ref) {
  var handleSubmitWithRedirect = _ref.handleSubmitWithRedirect;
      _ref.small;
      var state = _ref.state;
      _ref.pristine;
      var props = _objectWithoutProperties(_ref, _excluded$G);

  var classes = useStyles$l();
  var form = useForm();
  var handleClick = useCallback(function () {
    form.change("state", state.code);
    handleSubmitWithRedirect("list");
  }, [state, form, handleSubmitWithRedirect]);
  return /*#__PURE__*/React__default.createElement(SaveButton, _extends({}, props, {
    className: classes.button,
    redirect: "list",
    color: "primary",
    handleSubmitWithRedirect: handleClick,
    label: get$2(state, "label")
  }));
};

var StateButton$1 = /*#__PURE__*/React__default.forwardRef(StateButton);

var _excluded$F = ["states"];
var useStyles$k = makeStyles(function (theme) {
  var _theme$props, _theme$props$MuiButto;

  return {
    button: {
      disableElevation: ((_theme$props = theme.props) === null || _theme$props === void 0 ? void 0 : (_theme$props$MuiButto = _theme$props.MuiButton) === null || _theme$props$MuiButto === void 0 ? void 0 : _theme$props$MuiButto.disableElevation) === true
    }
  };
});

var StateButtonMenu = function StateButtonMenu(_ref) {
  var states = _ref.states,
      props = _objectWithoutProperties(_ref, _excluded$F);

  var classes = useStyles$k();
  var translate = useTranslate$1();

  var _React$useState = React__default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = React__default.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var handleState = useCallback(function (state) {
    return function (e) {
      setState(state.label);
      setAnchorEl(null);
    };
  }, []);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Button$1, {
    "aria-controls": "workflow-menu",
    "aria-haspopup": "true",
    variant: "contained",
    color: "primary",
    className: classes.button,
    onClick: handleClick
  }, /*#__PURE__*/React__default.createElement(DoubleArrowIcon, null), props.saving ? "".concat(state, "...") : translate("ra.workflow.do_action")), /*#__PURE__*/React__default.createElement(Menu$2, {
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, states.map(function (state) {
    return /*#__PURE__*/React__default.createElement(StateButton$1, _extends({}, props, {
      key: state.code,
      component: MenuItem$2,
      state: state,
      color: "default",
      variant: "text",
      icon: /*#__PURE__*/React__default.createElement(ArrowForwardIosIcon, null),
      onClick: handleState(state)
    }));
  })));
};

var buttons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  RaEditButton: EditButton$1,
  RaDeleteButton: DeleteButton,
  EditButton: EditButton,
  ExportToButton: ExportToButton,
  ImpersonateUserButton: ImpersonateUserButton,
  BackButton: BackButton,
  StateButton: StateButton$1,
  StateButtonMenu: StateButtonMenu,
  MarkAsReadedButton: MarkAsReadedButton,
  MarkAsUnreadedButton: MarkAsUnreadedButton,
  DeleteWithConfirmButton: DeleteWithConfirmButton
});

var _excluded$E = ["chipSource"];

var ChipArrayField = function ChipArrayField(_ref) {
  var chipSource = _ref.chipSource,
      props = _objectWithoutProperties(_ref, _excluded$E);

  return /*#__PURE__*/React__default.createElement(ArrayField, props, /*#__PURE__*/React__default.createElement(SingleFieldList, null, /*#__PURE__*/React__default.createElement(ChipField, {
    source: chipSource
  })));
};

var DateAgoField = function DateAgoField(_ref) {
  var record = _ref.record;
  var locale = useLocale();
  var fromNow = useMemo$1(function () {
    require("moment/locale/".concat(locale));

    moment.locale(locale);
    return moment(record === null || record === void 0 ? void 0 : record.created).fromNow();
  }, [record === null || record === void 0 ? void 0 : record.created, locale]);
  return /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement(Typography$1, {
    variant: "caption"
  }, fromNow), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement(DateField, {
    record: record,
    source: "created",
    addLabel: false,
    showTime: true
  }));
};

var _excluded$D = ["record", "source", "width", "minWidth", "maxWidth", "maxRows", "sortable", "basePath", "sortBy"];
var useStyles$j = makeStyles$1(function (theme) {
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
      var props = _objectWithoutProperties(_ref, _excluded$D);

  var classes = useStyles$j();
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

var MediaField = function MediaField(_ref) {
  var props = _extends({}, _ref);

  var id = get$2(props, "record.id", 0);
  var source = id > 0 ? "file.path" : "filepath";
  return /*#__PURE__*/React__default.createElement(FileField, _extends({}, props, {
    source: source
  }));
};

var useStyles$i = makeStyles(function (theme) {
  return {
    content: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      whiteSpace: "break-spaces"
    }
  };
});

var NotificationField = function NotificationField(_ref) {
  var record = _ref.record;
  var translate = useTranslate$2();
  var classes = useStyles$i();
  var readed = useMemo$1(function () {
    return record !== null && record !== void 0 && record.readed ? moment(record === null || record === void 0 ? void 0 : record.readed).format(translate("app.date_format.long")) : false;
  }, [record === null || record === void 0 ? void 0 : record.readed, translate]);
  return /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement(Typography$1, {
    variant: "subtitle1"
  }, /*#__PURE__*/React__default.createElement(Box, {
    fontWeight: "bold"
  }, " ", record === null || record === void 0 ? void 0 : record.title)), /*#__PURE__*/React__default.createElement(Typography$1, {
    variant: "body1",
    className: classes.content
  }, record === null || record === void 0 ? void 0 : record.content), readed && /*#__PURE__*/React__default.createElement(Typography$1, {
    variant: "caption",
    display: "block"
  }, translate("resources.notifications.readed", {
    readed: readed
  })), record !== null && record !== void 0 && record.readed ? /*#__PURE__*/React__default.createElement(MarkAsUnreadedButton, {
    selectedIds: [record === null || record === void 0 ? void 0 : record.id]
  }) : /*#__PURE__*/React__default.createElement(MarkAsReadedButton, {
    selectedIds: [record === null || record === void 0 ? void 0 : record.id]
  }));
};

var useStyles$h = makeStyles(function (theme) {
  return {
    progress: {
      height: 20 + theme.spacing(1),
      width: "100%",
      borderRadius: theme.spacing(0.5)
    },
    label: {
      position: "absolute",
      color: theme.palette.primary.contrastText
    }
  };
});

var ProgressField = function ProgressField(_ref) {
  var record = _ref.record,
      source = _ref.source;
  var classes = useStyles$h();
  return /*#__PURE__*/React__default.createElement(Box, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/React__default.createElement(LinearProgress, {
    classes: {
      root: classes.progress
    },
    variant: "determinate",
    color: get$2(record, source) >= 100 ? "primary" : "secondary",
    value: get$2(record, source)
  }), /*#__PURE__*/React__default.createElement(Typography$1, {
    className: classes.label
  }, get$2(record, source, 0).toFixed(2), "%"));
};

var _excluded$C = ["removeRedirect", "reference", "target", "tab", "filter", "empty", "sorry", "create", "createLabel", "modify", "modifyLabel", "remove", "removeLabel", "additionalData", "mobileBreakpoint", "mobilePrimaryText", "mobileSecondaryText", "mobileTertiaryText", "mobileLinkType"];
var makeRedirect = function makeRedirect(_ref) {
  var resource = _ref.resource,
      record = _ref.record,
      tab = _ref.tab;

  if (tab > 0) {
    return "/".concat(resource, "/").concat(record === null || record === void 0 ? void 0 : record.id, "/").concat(tab);
  }

  return "/".concat(resource, "/").concat(record === null || record === void 0 ? void 0 : record.id);
};
var useStyles$g = makeStyles(function (theme) {
  return {
    toolbar: {
      padding: theme.spacing(1)
    },
    sorry: {
      padding: theme.spacing(1)
    },
    empty: {
      padding: theme.spacing(1)
    },
    error: {
      padding: theme.spacing(1)
    }
  };
});

var ReferenceListField = function ReferenceListField(_ref2) {
  var removeRedirect = _ref2.removeRedirect,
      reference = _ref2.reference,
      target = _ref2.target,
      _ref2$tab = _ref2.tab,
      tab = _ref2$tab === void 0 ? 0 : _ref2$tab,
      filter = _ref2.filter,
      _ref2$empty = _ref2.empty,
      empty = _ref2$empty === void 0 ? "ra.no_results" : _ref2$empty,
      _ref2$sorry = _ref2.sorry,
      sorry = _ref2$sorry === void 0 ? "ra.reference_list.sorry" : _ref2$sorry,
      _ref2$create = _ref2.create,
      create = _ref2$create === void 0 ? true : _ref2$create,
      _ref2$createLabel = _ref2.createLabel,
      createLabel = _ref2$createLabel === void 0 ? "ra.action.create" : _ref2$createLabel,
      _ref2$modify = _ref2.modify,
      modify = _ref2$modify === void 0 ? true : _ref2$modify;
      _ref2.modifyLabel;
      var _ref2$remove = _ref2.remove,
      remove = _ref2$remove === void 0 ? true : _ref2$remove;
      _ref2.removeLabel;
      var additionalData = _ref2.additionalData,
      mobileBreakpoint = _ref2.mobileBreakpoint,
      _ref2$mobilePrimaryTe = _ref2.mobilePrimaryText,
      mobilePrimaryText = _ref2$mobilePrimaryTe === void 0 ? null : _ref2$mobilePrimaryTe,
      _ref2$mobileSecondary = _ref2.mobileSecondaryText,
      mobileSecondaryText = _ref2$mobileSecondary === void 0 ? null : _ref2$mobileSecondary,
      _ref2$mobileTertiaryT = _ref2.mobileTertiaryText,
      mobileTertiaryText = _ref2$mobileTertiaryT === void 0 ? null : _ref2$mobileTertiaryT,
      _ref2$mobileLinkType = _ref2.mobileLinkType,
      mobileLinkType = _ref2$mobileLinkType === void 0 ? false : _ref2$mobileLinkType,
      props = _objectWithoutProperties(_ref2, _excluded$C);

  var classes = useStyles$g();
  var resource = props.resource,
      record = props.record;

  var _useInput = useInput(_objectSpread2({}, props)),
      submitError = _useInput.meta.submitError;

  var translate = useTranslate$1();
  var isMobile = useMediaQuery(function (theme) {
    return theme.breakpoints.down(mobileBreakpoint !== null && mobileBreakpoint !== void 0 ? mobileBreakpoint : "sm");
  });

  if (!removeRedirect) {
    removeRedirect = makeRedirect({
      resource: resource,
      record: record,
      tab: tab
    });
  }

  return (record === null || record === void 0 ? void 0 : record.id) > 0 ? /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement(ReferenceManyField, _extends({}, props, {
    empty: /*#__PURE__*/React__default.isValidElement(empty) ? /*#__PURE__*/React__default.cloneElement(empty, {
      key: "empty"
    }) : /*#__PURE__*/React__default.createElement(Typography$1, {
      className: classes.empty,
      key: "empty"
    }, translate(empty)),
    reference: reference,
    target: target,
    filter: _objectSpread2(_defineProperty({}, target, record === null || record === void 0 ? void 0 : record.id), filter)
  }), isMobile && mobileBreakpoint !== false && mobilePrimaryText !== null ? /*#__PURE__*/React__default.createElement(SimpleList, {
    primaryText: mobilePrimaryText,
    secondaryText: mobileSecondaryText,
    tertiaryText: mobileTertiaryText,
    linkType: mobileLinkType
  }) : /*#__PURE__*/React__default.createElement(Datagrid$1, null, React__default.Children.map(props.children, function (field, index) {
    return /*#__PURE__*/React__default.isValidElement(field) ? /*#__PURE__*/React__default.cloneElement(field, {
      key: index
    }) : null;
  }), modify && /*#__PURE__*/React__default.createElement(EditButton$1, null), remove && /*#__PURE__*/React__default.createElement(DeleteWithConfirmButton, {
    redirect: removeRedirect
  }))), submitError && typeof submitError === "string" && /*#__PURE__*/React__default.createElement(FormHelperText, {
    error: true,
    className: classes.error
  }, submitError), create && (record === null || record === void 0 ? void 0 : record.id) > 0 && /*#__PURE__*/React__default.createElement(TopToolbar, {
    resource: resource,
    className: classes.toolbar
  }, /*#__PURE__*/React__default.createElement(Button$2, {
    component: Link,
    disableElevation: true,
    variant: "outlined",
    color: "primary",
    to: {
      pathname: "/".concat(reference, "/create"),
      search: stringify({
        source: JSON.stringify(_objectSpread2(_defineProperty({}, target, record === null || record === void 0 ? void 0 : record.id), additionalData))
      })
    }
  }, translate(createLabel)))) : /*#__PURE__*/React__default.isValidElement(sorry) ? /*#__PURE__*/React__default.cloneElement(sorry, {
    key: "sorry"
  }) : /*#__PURE__*/React__default.createElement(Typography$1, {
    className: classes.sorry,
    key: "sorry"
  }, translate(sorry));
};

ReferenceListField.propTypes = {
  tab: PropTypes.number,
  sorry: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  mobileBreakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mobilePrimaryText: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  mobileSecondaryText: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  mobileTertiaryText: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  mobileLinkType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  additionalData: PropTypes.object,
  removeRedirect: PropTypes.string,
  filter: PropTypes.object,
  create: PropTypes.bool,
  createLabel: PropTypes.string,
  modify: PropTypes.bool,
  modifyLabel: PropTypes.string,
  remove: PropTypes.bool,
  removeLabel: PropTypes.string,
  source: PropTypes.string,
  reference: PropTypes.string,
  target: PropTypes.string,
  record: PropTypes.object,
  resource: PropTypes.string,
  children: PropTypes.node.isRequired
};

var _excluded$B = ["label", "record", "resource"];

var StateField = function StateField(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "app.label.workflow.state" : _ref$label,
      record = _ref.record,
      toResolve = _ref.resource,
      props = _objectWithoutProperties(_ref, _excluded$B);

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

var useStyles$f = makeStyles$1(function (theme) {
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
      maxRows = _ref$maxRows === void 0 ? 3 : _ref$maxRows,
      component = _ref.component;
  var classes = useStyles$f();
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
    component: component,
    className: classes.root,
    style: {
      minWidth: minWidth,
      WebkitLineClamp: showMore ? null : maxRows
    },
    variant: "body2",
    color: value === null || value.length === 0 ? "textSecondary" : "textPrimary",
    display: "inline"
  }, tooLong === false ? value !== null && value.length > 0 ? value : fieldLabel("notes.empty") : null, tooLong && (showMore ? value : value.substring(0, 200) + "...")), admin && value !== null && value.length > 0 && /*#__PURE__*/React__default.createElement(Typography$1, {
    component: component,
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

var _excluded$A = ["fullWidth", "addLabel"],
    _excluded2$4 = ["admin", "label"];

var PaginationWrapper = function PaginationWrapper(_ref) {
  _ref.fullWidth;
      _ref.addLabel;
      var props = _objectWithoutProperties(_ref, _excluded$A);

  return /*#__PURE__*/React__default.createElement(Pagination, props);
};

var TransactionLogsField = function TransactionLogsField(_ref2) {
  var _ref2$admin = _ref2.admin,
      admin = _ref2$admin === void 0 ? false : _ref2$admin;
      _ref2.label;
      var props = _objectWithoutProperties(_ref2, _excluded2$4);

  var _useContext = useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var mobileBreakpoint = useMemo$1(function () {
    return get$2(props, "mobileBreakpoint", "sm");
  }, [props]);
  var isMobile = useMediaQuery(function (theme) {
    return theme.breakpoints.down(mobileBreakpoint !== null && mobileBreakpoint !== void 0 ? mobileBreakpoint : "sm");
  });
  var fieldLabel = useFieldLabel({
    resource: "transactions"
  });
  var workflow = useMemo$1(function () {
    return getWorkflow(props.resource);
  }, [getWorkflow, props.resource]);

  if (!workflow || !props.record) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement(ReferenceManyField, _extends({
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
  }), isMobile ? /*#__PURE__*/React__default.createElement(SimpleList, {
    primaryText: function primaryText(record) {
      return /*#__PURE__*/React__default.createElement(DateField, {
        label: fieldLabel("created"),
        record: record,
        source: "created",
        showTime: true
      });
    },
    secondaryText: function secondaryText(record) {
      return /*#__PURE__*/React__default.createElement(TransactionNotesField, {
        record: record,
        component: "span",
        label: fieldLabel("notes"),
        source: "notes",
        admin: admin,
        sortable: false,
        maxRows: 6
      });
    },
    linkType: false
  }) : /*#__PURE__*/React__default.createElement(Datagrid$1, null, admin && /*#__PURE__*/React__default.createElement(TextField, {
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
    sortable: false,
    maxRows: 6
  }), /*#__PURE__*/React__default.createElement(StateField, {
    label: fieldLabel("state"),
    sortBy: "Transactions.state"
  })));
};

var fields = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BooleanField: BooleanField,
  ChipArrayField: ChipArrayField,
  DateAgoField: DateAgoField,
  ChipField: ChipField,
  DateField: DateField,
  NotificationField: NotificationField,
  ProgressField: ProgressField,
  ReferenceListField: ReferenceListField,
  LongTextField: LongTextField,
  MediaField: MediaField,
  StateField: StateField,
  TextField: TextField,
  TransactionLogsField: TransactionLogsField,
  useFieldLabel: useFieldLabel
});

var _excluded$z = ["classes", "label", "value", "icon", "className", "syncWithLocation"];

var FormTabHeader = function FormTabHeader(_ref) {
  var classes = _ref.classes,
      label = _ref.label,
      value = _ref.value,
      icon = _ref.icon,
      className = _ref.className,
      syncWithLocation = _ref.syncWithLocation,
      rest = _objectWithoutProperties(_ref, _excluded$z);

  var translate = useTranslate$2();
  var location = useLocation();

  var _useFormState = useFormState(UseFormStateOptions),
      submitFailed = _useFormState.submitFailed,
      submitErrors = _useFormState.submitErrors;

  var formContext = useFormContext();
  var formGroup = useFormGroup(value.toString());
  var submitError = React.useMemo(function () {
    var fields = formContext.getGroupFields(value.toString());
    var errors = fields.some(function (field) {
      return get$2(submitErrors, field) != null;
    });
    return errors;
  }, [submitErrors, formContext, value]);
  var propsForLink = {
    component: Link,
    to: _objectSpread2(_objectSpread2({}, location), {}, {
      pathname: value
    })
  };
  return /*#__PURE__*/React.createElement(MuiTab, _extends({
    label: /*#__PURE__*/isValidElement(label) ? label : translate(label, {
      _: label
    }),
    value: value,
    icon: icon,
    className: classnames("form-tab", className, _defineProperty({}, classes.errorTabButton, submitError || formGroup.invalid && (formGroup.touched || submitFailed)))
  }, syncWithLocation ? propsForLink : {}, {
    // to avoid TypeScript screams, see https://github.com/mui-org/material-ui/issues/9106#issuecomment-451270521
    id: "tabheader-".concat(value),
    "aria-controls": "tabpanel-".concat(value)
  }, rest));
};

var UseFormStateOptions = {
  subscription: {
    submitFailed: true,
    submitErrors: true
  }
};

var _excluded$y = ["basePath", "className", "classes", "contentClassName", "children", "hidden", "icon", "intent", "label", "margin", "path", "record", "resource", "variant", "value"];
var hiddenStyle = {
  display: "none"
};

var FormTab = function FormTab(props) {
  var basePath = props.basePath,
      className = props.className,
      classes = props.classes,
      contentClassName = props.contentClassName,
      children = props.children,
      hidden = props.hidden,
      icon = props.icon,
      intent = props.intent,
      label = props.label,
      margin = props.margin;
      props.path;
      var record = props.record,
      resource = props.resource,
      variant = props.variant,
      value = props.value,
      rest = _objectWithoutProperties(props, _excluded$y);

  var renderHeader = function renderHeader() {
    return /*#__PURE__*/React.createElement(FormTabHeader, _extends({
      label: label,
      value: value,
      icon: icon,
      className: className,
      classes: classes
    }, rest));
  };

  var renderContent = function renderContent() {
    return /*#__PURE__*/React.createElement(FormGroupContextProvider, {
      name: value.toString()
    }, /*#__PURE__*/React.createElement("span", {
      style: hidden ? hiddenStyle : null,
      className: contentClassName,
      id: "tabpanel-".concat(value),
      "aria-labelledby": "tabheader-".concat(value) // Set undefined instead of false because WAI-ARIA Authoring Practices 1.1
      // notes that aria-hidden="false" currently behaves inconsistently across browsers.
      ,
      "aria-hidden": hidden || undefined
    }, React.Children.map(children, function (input) {
      return input && /*#__PURE__*/React.createElement(FormInput, {
        basePath: basePath,
        input: input,
        record: record,
        resource: resource,
        variant: input.props.variant || variant,
        margin: input.props.margin || margin
      });
    })));
  };

  return intent === "header" ? renderHeader() : renderContent();
};

var _excluded$x = ["children", "spacing", "wrapper"];

var Group = function Group(_ref) {
  var children = _ref.children,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 2 : _ref$spacing,
      _ref$wrapper = _ref.wrapper,
      wrapper = _ref$wrapper === void 0 ? false : _ref$wrapper,
      props = _objectWithoutProperties(_ref, _excluded$x);

  return !wrapper ? /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    spacing: spacing
  }, React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) ? /*#__PURE__*/React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, props), child.props)) : child;
  })) : React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) ? /*#__PURE__*/React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, props), child.props)) : child;
  });
};

var _excluded$w = ["children", "lg", "md", "sm", "xs", "spacing", "block"];

var GroupItem = function GroupItem(_ref) {
  var children = _ref.children,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? 4 : _ref$lg,
      _ref$md = _ref.md,
      md = _ref$md === void 0 ? 6 : _ref$md,
      _ref$sm = _ref.sm,
      sm = _ref$sm === void 0 ? 12 : _ref$sm,
      _ref$xs = _ref.xs,
      xs = _ref$xs === void 0 ? 12 : _ref$xs,
      spacing = _ref.spacing;
      _ref.block;
      var props = _objectWithoutProperties(_ref, _excluded$w);

  return /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    lg: lg,
    md: md,
    sm: sm,
    xs: xs,
    spacing: spacing
  }, React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) ? /*#__PURE__*/React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, props), child.props)) : child;
  }));
};

var useStyles$e = makeStyles(function (theme) {
  return {
    title: {
      margin: theme.spacing(1),
      fontWeight: "bold"
    },
    spacer: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    subTitle: {
      margin: theme.spacing(1)
    }
  };
});

var GroupTitle = function GroupTitle(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      _ref$divider = _ref.divider,
      divider = _ref$divider === void 0 ? true : _ref$divider,
      color = _ref.color;
  var classes = useStyles$e();
  return /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement(Typography$1, {
    color: color,
    classes: {
      root: classes.title
    },
    variant: "h6",
    gutterBottom: true
  }, title), divider && /*#__PURE__*/React__default.createElement(Divider, {
    classes: {
      root: classes.spacer
    }
  }), subTitle && /*#__PURE__*/React__default.createElement(Typography$1, {
    color: color,
    classes: {
      root: classes.subTitle
    },
    variant: "body1"
  }, subTitle));
};

var _excluded$v = ["backRedirect", "backReferenceTarget", "backReference", "backTab", "canSave", "canGoBack", "onSuccess"];
var useStyles$d = makeStyles(function (theme) {
  return {
    toolbar: {
      "& .MuiButton-root": {
        marginRight: theme.spacing(1)
      }
    }
  };
});

var ReferenceToolbar = function ReferenceToolbar(_ref) {
  var backRedirect = _ref.backRedirect,
      backReferenceTarget = _ref.backReferenceTarget,
      backReference = _ref.backReference,
      _ref$backTab = _ref.backTab,
      backTab = _ref$backTab === void 0 ? 1 : _ref$backTab,
      _ref$canSave = _ref.canSave,
      canSave = _ref$canSave === void 0 ? true : _ref$canSave,
      _ref$canGoBack = _ref.canGoBack,
      canGoBack = _ref$canGoBack === void 0 ? true : _ref$canGoBack,
      onSuccess = _ref.onSuccess,
      props = _objectWithoutProperties(_ref, _excluded$v);

  var classes = useStyles$d();
  var record = props.record;
  var referenceId = get$2(record, backReferenceTarget, 0);
  var backUrl = useMemo$1(function () {
    return referenceId === 0 ? backRedirect : backTab > 0 ? "/".concat(backReference, "/").concat(referenceId, "/").concat(backTab) : "/".concat(backReference, "/").concat(referenceId);
  }, [backRedirect, backReference, referenceId, backTab]);
  return /*#__PURE__*/React__default.createElement(Toolbar$2, _extends({}, props, {
    classes: classes
  }), /*#__PURE__*/React__default.createElement(SaveButton, {
    redirect: backUrl,
    disabled: !canSave,
    onSuccess: onSuccess ? onSuccess(backUrl) : undefined
  }), canGoBack && /*#__PURE__*/React__default.createElement(BackButton, {
    to: backUrl
  }), (record === null || record === void 0 ? void 0 : record.id) > 0 && /*#__PURE__*/React__default.createElement(DeleteWithConfirmButton$1, {
    redirect: backUrl
  }));
};

var _excluded$u = ["children", "mutationMode", "validating", "maxButtonsToDisplay"];
var useStyles$c = makeStyles(function (theme) {
  return {
    toolbar: {
      "& .MuiButton-root": {
        marginRight: theme.spacing(1)
      }
    }
  };
});

var Toolbar = function Toolbar(_ref) {
  var children = _ref.children;
      _ref.mutationMode;
      _ref.validating;
      var _ref$maxButtonsToDisp = _ref.maxButtonsToDisplay,
      maxButtonsToDisplay = _ref$maxButtonsToDisp === void 0 ? 1 : _ref$maxButtonsToDisp,
      props = _objectWithoutProperties(_ref, _excluded$u);

  var form = useForm();
  var classes = useStyles$c();
  var handleSubmitWithRedirect = props.handleSubmitWithRedirect,
      record = props.record;

  var _useGetIdentity = useGetIdentity(),
      loading = _useGetIdentity.loading,
      loaded = _useGetIdentity.loaded,
      identity = _useGetIdentity.identity;

  var roles = useMemo$1(function () {
    return !loading && loaded ? identity === null || identity === void 0 ? void 0 : identity.roles : [];
  }, [loading, loaded, identity]);

  var _useContext = useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var workflow = useMemo$1(function () {
    return getWorkflow(props.resource);
  }, [getWorkflow, props.resource]);

  var _useMemo = useMemo$1(function () {
    var save = workflow && workflow.canEdit(roles, record) && get$2(record, "id", 0) > 0;
    var states = workflow && workflow.getNextStates(roles, record) || [];
    return {
      states: states,
      save: save
    };
  }, [workflow, record, roles]),
      states = _useMemo.states,
      save = _useMemo.save;

  var handleClick = useCallback(function () {
    form.change("state", get$2(record, "transaction.state", get$2(record, "state")));
    handleSubmitWithRedirect("list");
  }, [form, record, handleSubmitWithRedirect]);

  if (!record) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement(Toolbar$2, _extends({}, props, {
    classes: classes
  }), save && /*#__PURE__*/React__default.createElement(SaveButton, _extends({}, props, {
    color: "primary",
    handleSubmitWithRedirect: handleClick,
    disabled: props.saving
  })), states.length > maxButtonsToDisplay && /*#__PURE__*/React__default.createElement(StateButtonMenu, _extends({
    states: states
  }, props, {
    disabled: props.saving
  })), states.length <= maxButtonsToDisplay && states.map(function (state) {
    return /*#__PURE__*/React__default.createElement(StateButton$1, _extends({
      key: get$2(state, "code"),
      state: state
    }, props, {
      disabled: props.saving
    }));
  }), React__default.Children.count(children) > 0 && React__default.Children.map(children, function (child, key) {
    return /*#__PURE__*/React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, props), {}, {
      key: key
    }));
  }), /*#__PURE__*/React__default.createElement(BackButton, null));
};

var _excluded$t = ["children"];

var Unprop = function Unprop(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$t);

  return React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) ? /*#__PURE__*/React__default.cloneElement(child, _objectSpread2(_objectSpread2({}, props), child.props)) : child;
  });
};

var parseField = function parseField(field) {
  var match = field.match(/\d+/);
  var number = match ? parseInt(match[0], 10) + 1 : null;
  var name = field.replace(/\d+/, "n");
  return {
    number: number,
    name: name
  };
};

var useStyles$b = makeStyles(function (theme) {
  return {
    subheaderRoot: {
      padding: theme.spacing(1),
      paddingTop: 0,
      paddingBottom: 0
    },
    listItemRoot: {
      marginLeft: theme.spacing(1)
    },
    listRoot: {
      "& .MuiList-root": {
        margin: 0,
        padding: 0,
        paddingLeft: theme.spacing(3),
        "& li:last-child": {
          borderBottom: "1px solid ".concat(theme.palette.divider)
        }
      }
    }
  };
});

var ValidationItem = function ValidationItem(_ref) {
  var resource = _ref.resource,
      field = _ref.field,
      error = _ref.error,
      translate = _ref.translate,
      component = _ref.component;

  var _parseField = parseField(field),
      number = _parseField.number,
      name = _parseField.name;

  var classes = useStyles$b();
  return typeof error === "string" ? /*#__PURE__*/React__default.createElement(ListItem, {
    dense: true,
    disableGutters: true,
    classes: {
      root: classes.listItemRoot
    }
  }, /*#__PURE__*/React__default.isValidElement(component) ? /*#__PURE__*/React__default.cloneElement(component, {
    error: error,
    field: field,
    number: number,
    resource: resource
  }) : /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement(ListItemAvatar, null, /*#__PURE__*/React__default.createElement(Avatar, null, /*#__PURE__*/React__default.createElement(Warning, null))), /*#__PURE__*/React__default.createElement(ListItemText, {
    primary: translate("errors.".concat(resource, ".").concat(name), {
      number: number
    }),
    secondary: error
  }))) : /*#__PURE__*/React__default.createElement(List$1, {
    classes: {
      root: classes.listRoot
    }
  }, /*#__PURE__*/React__default.createElement(ListSubheader, {
    disableGutters: true,
    disableSticky: true,
    classes: {
      root: classes.subheaderRoot
    }
  }, translate("errors.".concat(resource, ".subheader.").concat(name), {
    number: number
  })), Object.keys(error).map(function (subField) {
    return /*#__PURE__*/React__default.createElement(ValidationItem, {
      key: subField,
      field: "".concat(field, ".").concat(subField),
      error: error[subField],
      resource: resource,
      translate: translate,
      component: component
    });
  }));
};

var _excluded$s = ["action", "children", "classes", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant", "elevation"];
var styles = function styles(theme) {
  var getColor = theme.palette.type === "light" ? darken : lighten;
  var getBackgroundColor = theme.palette.type === "light" ? lighten : darken;
  return {
    /* Styles applied to the root element. */
    root: _objectSpread2(_objectSpread2({}, theme.typography.body2), {}, {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px"
    }),

    /* Styles applied to the root element if `variant="standard"` and `color="success"`. */
    standardSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.success.main, 0.9),
      "& $icon": {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="info"`. */
    standardInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.info.main, 0.9),
      "& $icon": {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="warning"`. */
    standardWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.warning.main, 0.9),
      "& $icon": {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="error"`. */
    standardError: {
      color: getColor(theme.palette.error.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.9),
      "& $icon": {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="success"`. */
    outlinedSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      border: "1px solid ".concat(theme.palette.success.main),
      "& $icon": {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="info"`. */
    outlinedInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      border: "1px solid ".concat(theme.palette.info.main),
      "& $icon": {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
    outlinedWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      border: "1px solid ".concat(theme.palette.warning.main),
      "& $icon": {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="error"`. */
    outlinedError: {
      color: getColor(theme.palette.error.main, 0.6),
      border: "1px solid ".concat(theme.palette.error.main),
      "& $icon": {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="filled"` and `color="success"`. */
    filledSuccess: {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="info"`. */
    filledInfo: {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.info.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="warning"`. */
    filledWarning: {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.warning.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="error"`. */
    filledError: {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.error.main
    },

    /* Styles applied to the icon wrapper element. */
    icon: {
      marginRight: 12,
      padding: "7px 0",
      display: "flex",
      fontSize: 22,
      opacity: 0.9
    },

    /* Styles applied to the message wrapper element. */
    message: {
      padding: "8px 0"
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var defaultIconMapping = {
  success: /*#__PURE__*/React.createElement(CheckOutlined, {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/React.createElement(ReportProblemOutlined, {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/React.createElement(ErrorOutline, {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/React.createElement(InfoOutlined, {
    fontSize: "inherit"
  })
};
var Alert = /*#__PURE__*/React.forwardRef(function Alert(props, ref) {
  var action = props.action,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? "Close" : _props$closeText,
      color = props.color,
      icon = props.icon,
      _props$iconMapping = props.iconMapping,
      iconMapping = _props$iconMapping === void 0 ? defaultIconMapping : _props$iconMapping,
      onClose = props.onClose,
      _props$role = props.role,
      role = _props$role === void 0 ? "alert" : _props$role,
      _props$severity = props.severity,
      severity = _props$severity === void 0 ? "success" : _props$severity,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? "standard" : _props$variant,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 0 : _props$elevation,
      other = _objectWithoutProperties(props, _excluded$s);

  return /*#__PURE__*/React.createElement(Paper, _extends({
    role: role,
    square: true,
    elevation: elevation,
    className: clsx(classes.root, classes["".concat(variant).concat(capitalize(color || severity))], className),
    ref: ref
  }, other), icon !== false ? /*#__PURE__*/React.createElement("div", {
    className: classes.icon
  }, icon || iconMapping[severity] || defaultIconMapping[severity]) : null, /*#__PURE__*/React.createElement("div", {
    className: classes.message
  }, children), action != null ? /*#__PURE__*/React.createElement("div", {
    className: classes.action
  }, action) : null, action == null && onClose ? /*#__PURE__*/React.createElement("div", {
    className: classes.action
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "small",
    "aria-label": closeText,
    title: closeText,
    color: "inherit",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Close, {
    fontSize: "small"
  }))) : null);
});
Alert.propTypes = {
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: PropTypes.node,

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText: PropTypes.string,

  /**
   * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
   */
  color: PropTypes.oneOf(["error", "info", "success", "warning"]),

  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   */
  icon: PropTypes.node,

  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: PropTypes.shape({
    error: PropTypes.node,
    info: PropTypes.node,
    success: PropTypes.node,
    warning: PropTypes.node
  }),

  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes.func,

  /**
   * The ARIA role attribute of the element.
   */
  role: PropTypes.string,

  /**
   * The severity of the alert. This defines the color and icon used.
   */
  severity: PropTypes.oneOf(["error", "info", "success", "warning"]),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["filled", "outlined", "standard"])
};
var Alert$1 = withStyles(styles, {
  name: "MuiAlert"
})(Alert);

var mapFieldErrors = function mapFieldErrors(field, errors) {
  var keys = Object.keys(errors);
  var messages = keys.filter(function (k) {
    return typeof errors[k] === "string";
  });

  if (typeof errors === "string") {
    return _defineProperty({}, field, errors);
  } else if (messages.length > 0 && isNaN(parseInt(field))) {
    return _defineProperty({}, field, messages.map(function (m) {
      return errors[m];
    }).join("\n"));
  } else {
    var out = keys.reduce(function (errorMap, key) {
      return _objectSpread2(_objectSpread2({}, errorMap), mapFieldErrors(key, errors[key]));
    }, {});
    return Object.keys(out).length > 0 ? _defineProperty({}, field, out) : {};
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
    var errors = get$2(error, "body.data.errors");
    var message = get$2(error, "body.data.message", error === null || error === void 0 ? void 0 : error.message);

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

var useValidationSummary = function useValidationSummary() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    groupName: undefined,
    source: "validationErrors"
  },
      groupName = _ref.groupName,
      source = _ref.source;

  var _useFormState = useFormState({
    subscription: {
      submitFailed: true,
      submitErrors: true
    }
  }),
      submitErrors = _useFormState.submitErrors;

  var formContext = useFormContext();
  var defaultGroupName = useFormGroupContext();
  var group = groupName || defaultGroupName;

  var _useFormState2 = useFormState({
    subscription: {
      values: true
    }
  }),
      values = _useFormState2.values;

  return useMemo$1(function () {
    var validationErrors = get$2(values, source);
    var loading = validationErrors === undefined && values.id > 0;
    var mode = values.id > 0 ? "edit" : "create";
    var fields = formContext.getGroupFields(group);
    var errors = fields.filter(function (field) {
      return get$2(submitErrors, field) != null || get$2(validationErrors, field) != null;
    });
    var errorMaps = errors.length > 0 ? errors.reduce(function (acc, field) {
      return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, field, get$2(submitErrors, field) || get$2(validationErrors, field)));
    }, {}) : {};
    var errorMap = cakephpErrorMapper(errorMaps);
    return {
      errorsCount: Object.keys(errorMap).length,
      errorKeys: errors,
      errorMap: errorMap,
      loading: loading,
      mode: mode
    };
  }, [submitErrors, formContext, values, source, group]);
};

var useStyles$a = makeStyles(function (theme) {
  return {
    progress: {
      margin: theme.spacing(1)
    },
    spaced: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    }
  };
});

var detectState = function detectState(_ref) {
  var errorsCount = _ref.errorsCount,
      mode = _ref.mode,
      loading = _ref.loading;
  return mode === "create" ? "explain" : loading ? "loading" : errorsCount > 0 ? "warning" : "success";
};

var ValidationSummary = function ValidationSummary(_ref2) {
  var _ref2$elevation = _ref2.elevation,
      elevation = _ref2$elevation === void 0 ? 1 : _ref2$elevation,
      _ref2$spaced = _ref2.spaced,
      spaced = _ref2$spaced === void 0 ? true : _ref2$spaced,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? "validationErrors" : _ref2$source,
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? {
    warning: "ra.validation_summary.title.warning",
    success: "ra.validation_summary.title.success",
    loading: "ra.validation_summary.title.loading",
    explain: "ra.validation_summary.title.explain"
  } : _ref2$title,
      _ref2$message = _ref2.message,
      message = _ref2$message === void 0 ? {
    warning: "ra.validation_summary.message.warning",
    success: "ra.validation_summary.message.success",
    loading: "ra.validation_summary.message.loading",
    explain: "ra.validation_summary.message.explain"
  } : _ref2$message,
      _ref2$showWhenNoError = _ref2.showWhenNoErrors,
      showWhenNoErrors = _ref2$showWhenNoError === void 0 ? true : _ref2$showWhenNoError,
      resource = _ref2.resource,
      children = _ref2.children;
  var classes = useStyles$a();
  var translate = useTranslate$2();

  var _useValidationSummary = useValidationSummary({
    source: source
  }),
      errorsCount = _useValidationSummary.errorsCount,
      errorKeys = _useValidationSummary.errorKeys,
      errorMap = _useValidationSummary.errorMap,
      loading = _useValidationSummary.loading,
      mode = _useValidationSummary.mode;

  var _useMemo = useMemo$1(function () {
    return {
      groupTitle: title[detectState({
        errorsCount: errorsCount,
        mode: mode,
        loading: loading
      })],
      groupMessage: message[detectState({
        errorsCount: errorsCount,
        mode: mode,
        loading: loading
      })],
      severity: loading || mode === "create" ? "info" : errorsCount > 0 ? "warning" : "success"
    };
  }, [errorsCount, loading, mode, message, title]),
      groupTitle = _useMemo.groupTitle,
      groupMessage = _useMemo.groupMessage,
      severity = _useMemo.severity;

  if (resource == null || errorsCount === 0 && !showWhenNoErrors) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement(Alert$1, {
    className: classnames(_defineProperty({}, classes.spaced, spaced)),
    icon: false,
    elevation: elevation,
    severity: severity
  }, /*#__PURE__*/React__default.createElement(Group, {
    wrapper: true
  }, /*#__PURE__*/React__default.createElement(GroupTitle, {
    title: translate(groupTitle, {
      count: errorsCount
    }),
    subTitle: translate(groupMessage, {
      count: errorsCount
    })
  }), loading && /*#__PURE__*/React__default.createElement(Group, null, /*#__PURE__*/React__default.createElement(GroupItem, {
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/React__default.createElement(CircularProgress, {
    className: classes.progress
  }))), /*#__PURE__*/React__default.createElement(Group, null, /*#__PURE__*/React__default.createElement(GroupItem, {
    lg: 10,
    md: 11,
    sm: 12
  }, /*#__PURE__*/React__default.createElement(List$1, {
    dense: true,
    component: "nav",
    color: "error"
  }, errorKeys.map(function (field) {
    return /*#__PURE__*/React__default.createElement(ValidationItem, {
      key: field,
      field: field,
      error: errorMap[field],
      resource: resource,
      translate: translate,
      component: children
    });
  }))))));
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

var _excluded$r = ["margin", "variant", "fullWidth", "maxLength", "multiline", "format", "rows", "disabled", "InputProps", "InputLabelProps"],
    _excluded2$3 = ["name", "onChange"];

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
      InputProps = _ref.InputProps,
      InputLabelProps = _ref.InputLabelProps,
      props = _objectWithoutProperties(_ref, _excluded$r);

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
      rest = _objectWithoutProperties(_useInput$input, _excluded2$3),
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

  var _useFormState = useFormState({
    subscription: {
      values: true
    }
  }),
      values = _useFormState.values;

  var formValue = get$2(values, source, defaultValue);
  var didMountEffect = useRef(false);
  var didUpdateValue = useRef(false);
  useEffect(function () {
    if (didMountEffect.current === false) {
      didMountEffect.current = true;
      return;
    }

    if (formValue && formValue !== null) {
      didUpdateValue.current = true;
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

    if (didUpdateValue.current === true) {
      didUpdateValue.current = false;
      return;
    }

    var compareToValue = formValue !== null ? formValue : defaultValue;

    if (debouncedValue !== compareToValue) {
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

  return /*#__PURE__*/React__default.createElement(TextField$1, _extends({}, rest, {
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
      resource: resource
    }),
    onChange: handleChange,
    error: !!(touched && (error || submitError)),
    helperText: /*#__PURE__*/React__default.createElement(InputHelperText, {
      touched: touched,
      error: error || submitError,
      helperText: helperText
    }),
    InputLabelProps: InputLabelProps,
    InputProps: InputProps,
    inputProps: {
      maxLength: maxLength$1
    },
    required: isRequired
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

var useWorkflowInput = function useWorkflowInput(_ref) {
  var resource = _ref.resource,
      source = _ref.source,
      record = _ref.record;

  var _useGetIdentity = useGetIdentity$1(),
      loaded = _useGetIdentity.loaded,
      loading = _useGetIdentity.loading,
      identity = _useGetIdentity.identity;

  var roles = useMemo$1(function () {
    return !loading && loaded ? identity === null || identity === void 0 ? void 0 : identity.roles : [];
  }, [identity, loading, loaded]);

  var _useContext = useContext(WorkflowContext),
      getWorkflow = _useContext.getWorkflow;

  var workflow = useMemo$1(function () {
    return getWorkflow(resource);
  }, [resource, getWorkflow]);

  var _useMemo = useMemo$1(function () {
    var visible = workflow && workflow.canReadField(source, roles, record);
    var disabled = workflow && !workflow.canEditField(source, roles, record);
    return {
      visible: visible,
      disabled: disabled
    };
  }, [workflow, source, record, roles]),
      visible = _useMemo.visible,
      disabled = _useMemo.disabled;

  return {
    visible: visible,
    disabled: disabled
  };
};

var _excluded$q = ["component", "disabled"];

var Input$1 = function Input(_ref) {
  var component = _ref.component;
      _ref.disabled;
      var props = _objectWithoutProperties(_ref, _excluded$q);

  var _useMemo = useMemo$1(function () {
    var resource = get$2(props, "resource", component.props.resource);
    var source = get$2(props, "source", component.props.source);
    var record = get$2(props, "record", component.props.record);
    return {
      resource: resource,
      source: source,
      record: record
    };
  }, [props, component]),
      resource = _useMemo.resource,
      source = _useMemo.source,
      record = _useMemo.record;

  var _useWorkflowInput = useWorkflowInput(_objectSpread2(_objectSpread2({}, props), {}, {
    resource: resource,
    source: source,
    record: record
  })),
      visible = _useWorkflowInput.visible,
      disable = _useWorkflowInput.disable;

  if (!visible) {
    return null;
  }

  return /*#__PURE__*/React__default.cloneElement(component, _objectSpread2(_objectSpread2(_objectSpread2({}, component.props), props), {}, {
    disabled: disable,
    resource: resource,
    source: source,
    record: record
  }));
};

var InlineTextInput = function InlineTextInput(_ref) {
  var source = _ref.source,
      record = _ref.record,
      resource = _ref.resource,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 300 : _ref$minWidth;

  var _useState = useState(get$2(record, source, "")),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      updating = _useState4[0],
      setUpdating = _useState4[1];

  var handleChange = useCallback(function (evt) {
    return setValue(evt.target.value);
  }, []);
  var dataProvider = useDataProvider$1();
  var handleKeyPress = useCallback(function (evt) {
    if (evt.key !== "Enter") {
      return;
    }

    setUpdating(true);
    dataProvider.update(resource, {
      id: record.id,
      data: _objectSpread2(_objectSpread2({}, record), {}, _defineProperty({}, source, value))
    }).then(function () {
      return setUpdating(false);
    });
  }, [value, dataProvider, resource, record, source]);
  var handleBlur = useCallback(function () {
    if (get$2(record, source) === value) {
      return;
    }

    setUpdating(true);
    dataProvider.update(resource, {
      id: record.id,
      data: _objectSpread2(_objectSpread2({}, record), {}, _defineProperty({}, source, value))
    }).then(function () {
      return setUpdating(false);
    });
  }, [value, dataProvider, resource, source, record]);
  useEffect(function () {
    return setValue(get$2(record, source));
  }, [record, source]);
  return /*#__PURE__*/React__default.createElement(TextField$2, {
    value: value,
    disabled: updating,
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    onBlur: handleBlur,
    style: {
      minWidth: minWidth,
      width: "100%"
    },
    multiline: true,
    InputProps: {
      "arial-label": "naked"
    }
  });
};

var LanguageMessageInput = function LanguageMessageInput(props) {
  return /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement(TextField, _extends({}, props, {
    source: "code",
    variant: "caption",
    fullWidth: true
  })), /*#__PURE__*/React__default.createElement(Divider$1, null), /*#__PURE__*/React__default.createElement(InlineTextInput, _extends({}, props, {
    fullWidth: true
  })));
};

var _excluded$p = ["title", "disabled"];
var useStyles$9 = makeStyles(function (theme) {
  return {
    labeled: {
      padding: theme.spacing(1)
    },
    list: {
      margin: theme.spacing(1)
    }
  };
});

var MediaInput = function MediaInput(_ref) {
  var title = _ref.title,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded$p);

  var classes = useStyles$9();

  if (disabled) {
    var value = get$2(props.record, props.source);
    var files = value ? Array.isArray(value) ? value : [value] : [];
    return /*#__PURE__*/React__default.createElement(Labeled, _extends({}, props, {
      className: classes.labeled
    }), /*#__PURE__*/React__default.createElement(Fragment, null, files.map(function (file, index) {
      return /*#__PURE__*/React__default.createElement(MediaField, {
        key: index,
        record: file,
        source: "filepath",
        title: title
      });
    }), /*#__PURE__*/React__default.createElement(FormHelperText, null, /*#__PURE__*/React__default.createElement(InputHelperText$1, {
      touched: false,
      error: false,
      helperText: props.helperText
    }))));
  }

  return /*#__PURE__*/React__default.createElement(FileInput, props, /*#__PURE__*/React__default.createElement(MediaField, {
    source: "filepath",
    title: title
  }));
};

var _excluded$o = ["optionText"];

var ReferenceAutocompleteInput$1 = function ReferenceAutocompleteInput(_ref) {
  var optionText = _ref.optionText,
      props = _objectWithoutProperties(_ref, _excluded$o);

  return /*#__PURE__*/React__default.createElement(ReferenceInput, props, /*#__PURE__*/React__default.createElement(AutocompleteInput, {
    optionText: optionText
  }));
};

var createManyFormatter = function createManyFormatter() {
  return function (many) {
    var array = many ? many.map(function (p) {
      return p.id;
    }) : [];
    return array;
  };
};

var useManyFormatter = function useManyFormatter() {
  var memoizedFn = useMemo$1(function () {
    return createManyFormatter();
  }, []);
  return memoizedFn;
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

var useManyParser = function useManyParser() {
  var memoizedFn = useMemo$1(function () {
    return createManyParser();
  }, []);
  return memoizedFn;
};

var _excluded$n = ["optionText"];

var ReferenceCheckboxGroupInput = function ReferenceCheckboxGroupInput(_ref) {
  var optionText = _ref.optionText,
      props = _objectWithoutProperties(_ref, _excluded$n);

  var parse = useManyParser();
  var format = useManyFormatter();
  return /*#__PURE__*/React__default.createElement(ReferenceArrayInput, _extends({}, props, {
    parse: parse,
    format: format
  }), /*#__PURE__*/React__default.createElement(CheckboxGroupInput, {
    optionText: optionText
  }));
};

var _excluded$m = ["optionText"];

var ReferenceAutocompleteInput = function ReferenceAutocompleteInput(_ref) {
  var optionText = _ref.optionText,
      props = _objectWithoutProperties(_ref, _excluded$m);

  return /*#__PURE__*/React__default.createElement(ReferenceInput, props, /*#__PURE__*/React__default.createElement(SelectInput, {
    optionText: optionText
  }));
};

var stopPropagation = function stopPropagation(e) {
  return e.stopPropagation();
};

var useStyles$8 = makeStyles$1(function (theme) {
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
  var classes = useStyles$8();
  var refresh = useRefresh();
  var notify = useNotify$1();

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
    user: null,
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
    open: open,
    onClick: stopPropagation
  }, /*#__PURE__*/React__default.createElement(DialogTitle, null, translate("resources.workflow.move.title"), /*#__PURE__*/React__default.createElement(Typography$1, {
    variant: "caption",
    display: "block"
  }, state === null || state === void 0 ? void 0 : state.label)), /*#__PURE__*/React__default.createElement(DialogContent, null, /*#__PURE__*/React__default.createElement(DialogContentText, {
    className: classnames(needsNotes && classes.required)
  }, translate("resources.workflow.move.message" + (needsNotes ? ".required" : ""))), /*#__PURE__*/React__default.createElement(TextField$2, {
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
  }), /*#__PURE__*/React__default.createElement(FormHelperText, null, translate("resources.workflow.fields.is_private.help")))), /*#__PURE__*/React__default.createElement(DialogActions, null, /*#__PURE__*/React__default.createElement(Button$2, {
    onClick: onCancel
  }, translate("ra.action.cancel")), /*#__PURE__*/React__default.createElement(Button$2, {
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

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  var handleClose = function handleClose(e) {
    e.stopPropagation();
    e.preventDefault();
    setAnchorEl(null);
    setState(null);
  };

  var handleChange = useCallback(function (state) {
    return function (e) {
      e.stopPropagation();
      e.preventDefault();
      setAnchorEl(null);
      setState(state);
    };
  }, []);

  if (readonly || nextStates.length === 0) {
    // If user is not admin and there are no next states, show current state
    return /*#__PURE__*/React__default.createElement(StateField, {
      record: record,
      resource: toResolve
    });
  }

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Button$2, {
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
      onClick: handleChange(state)
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

var _excluded$l = ["filter"];

var StateInput = function StateInput(_ref) {
  var _ref$filter = _ref.filter,
      filter = _ref$filter === void 0 ? undefined : _ref$filter,
      props = _objectWithoutProperties(_ref, _excluded$l);

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
    optionValue: "code",
    allowEmpty: true,
    emptyText: "ra.action.all"
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

var _excluded$k = ["label", "helperText", "admin"];

var TransactionNotesIsPrivateInput = function TransactionNotesIsPrivateInput(_ref) {
  var label = _ref.label,
      helperText = _ref.helperText,
      _ref$admin = _ref.admin,
      admin = _ref$admin === void 0 ? false : _ref$admin,
      props = _objectWithoutProperties(_ref, _excluded$k);

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

var inputs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BooleanInput: BooleanInput,
  DateInput: DateInput,
  DateTimeInput: DateTimeInput,
  DebouncedDateInput: DebouncedDateInput,
  DebouncedNumberInput: DebouncedNumberInput,
  DebouncedTextInput: DebouncedTextInput,
  Input: Input$1,
  LanguageMessageInput: LanguageMessageInput,
  MediaInput: MediaInput,
  NullableBooleanInput: NullableBooleanInput,
  NumberInput: NumberInput,
  RecordInput: InlineTextInput,
  ReferenceAutocompleteInput: ReferenceAutocompleteInput$1,
  ReferenceCheckboxGroupInput: ReferenceCheckboxGroupInput,
  ReferenceSelectInput: ReferenceAutocompleteInput,
  SearchInput: SearchInput,
  SelectInput: SelectInput,
  StateCollectionInput: StateCollectionInput,
  StateInput: StateInput,
  TextInput: TextInput,
  TransactionNotesInput: TransactionNotesInput,
  TransactionNotesIsPrivateInput: TransactionNotesIsPrivateInput
});

var _excluded$j = ["children", "evenOdd"];

var getWidthToSubtract = function getWidthToSubtract(w) {
  return w + (window.innerWidth - document.documentElement.clientWidth);
};

var useStyles$7 = makeStyles$1(function (theme) {
  return {
    container: function container(_ref) {
      var sidebarOpen = _ref.sidebarOpen,
          drawerWidth = _ref.drawerWidth;
      return _defineProperty({
        maxWidth: "calc(100vw - ".concat(sidebarOpen ? getWidthToSubtract(drawerWidth + theme.spacing(6) - 1) : getWidthToSubtract(58 + theme.spacing(6) - 1), "px)"),
        borderRadius: theme.shape.borderRadius,
        overflowX: "auto",
        overflowY: "hidden"
      }, theme.breakpoints.down("xs"), {
        width: "100vw",
        maxWidth: "100vw"
      });
    },
    rowEven: {
      backgroundColor: theme.palette.background.default
    }
  };
});

var Datagrid = function Datagrid(_ref3) {
  var children = _ref3.children,
      _ref3$evenOdd = _ref3.evenOdd,
      evenOdd = _ref3$evenOdd === void 0 ? true : _ref3$evenOdd,
      props = _objectWithoutProperties(_ref3, _excluded$j);

  var _useContext = useContext(LayoutContext),
      drawerWidth = _useContext.drawerWidth;

  var sidebarOpen = useSelector$1(function (state) {
    return state.admin.ui.sidebarOpen;
  });
  var classes = useStyles$7({
    sidebarOpen: sidebarOpen,
    drawerWidth: drawerWidth
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React__default.createElement(Datagrid$1, _extends({
    classes: evenOdd ? {
      rowEven: classes.rowEven
    } : undefined
  }, props), children));
};

var handleRowClick = function handleRowClick(id, basePath, record) {
  return record === null || record === void 0 ? void 0 : record.resource;
};

var NotificationList = function NotificationList(_ref) {
  var props = _extends({}, _ref);

  var theme = useTheme();
  var handleRowStyle = useCallback(function (record) {
    return {
      marginLeft: -2,
      borderLeftWidth: 2,
      borderLeftStyle: "solid",
      borderLeftColor: record !== null && record !== void 0 && record.readed ? lighten(theme.palette.primary.light, 0.9) : theme.palette.warning.light,
      backgroundColor: record !== null && record !== void 0 && record.readed ? lighten(theme.palette.primary.light, 0.9) : lighten(theme.palette.warning.light, 0.8)
    };
  }, [theme]);
  return /*#__PURE__*/React__default.createElement(Datagrid, _extends({}, props, {
    evenOdd: false,
    rowClick: handleRowClick,
    rowStyle: handleRowStyle
  }), /*#__PURE__*/React__default.createElement(NotificationField, {
    source: "notification",
    sortable: false
  }), /*#__PURE__*/React__default.createElement(DateAgoField, {
    source: "created"
  }));
};

var lists = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Datagrid: Datagrid,
  NotificationList: NotificationList
});

var _excluded$i = ["component", "componentProps", "components", "addLabel", "sortBy"];

var Component = function Component(_ref) {
  var component = _ref.component,
      componentProps = _ref.componentProps,
      components = _ref.components,
      _ref$addLabel = _ref.addLabel,
      addLabel = _ref$addLabel === void 0 ? true : _ref$addLabel;
      _ref.sortBy;
      var props = _objectWithoutProperties(_ref, _excluded$i);

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
  return useMemo$1(function () {
    var r = resources.find(function (r) {
      return r.name === resource;
    });
    return get(r, "options.components");
  }, [resources, resource]);
};

var _excluded$h = ["tabs"],
    _excluded2$2 = ["componentProps"],
    _excluded3$1 = ["fullWidth"];

var TabbedForm = function TabbedForm(_ref) {
  var tabs = _ref.tabs,
      props = _objectWithoutProperties(_ref, _excluded$h);

  var _useContext = useContext(CrudContext),
      getForm = _useContext.getForm;

  var _useContext2 = useContext(WorkflowContext),
      getWorkflow = _useContext2.getWorkflow;

  var form = useMemo$1(function () {
    return getForm(props.resource);
  }, [props.resource, getForm]);
  var workflow = useMemo$1(function () {
    return form !== null && form !== void 0 && form.useWorkflow ? getWorkflow(props.resource) : null;
  }, [props.resource, getWorkflow, form]);
  var customComponents = useCustomComponents(props.resource);
  return /*#__PURE__*/React__default.createElement(TabbedForm$1, props, tabs.map(function (_ref2, index) {
    var _tab$inputs;

    var label = _ref2.componentProps.label,
        tab = _objectWithoutProperties(_ref2, _excluded2$2);

    return /*#__PURE__*/React__default.createElement(FormTab$1, {
      key: index,
      label: label
    }, tab === null || tab === void 0 ? void 0 : (_tab$inputs = tab.inputs) === null || _tab$inputs === void 0 ? void 0 : _tab$inputs.map(function (_ref3) {
      var source = _ref3.source,
          label = _ref3.label,
          component = _ref3.component,
          useWorkflow = _ref3.useWorkflow,
          _ref3$componentProps = _ref3.componentProps,
          fullWidth = _ref3$componentProps.fullWidth,
          restComponentProps = _objectWithoutProperties(_ref3$componentProps, _excluded3$1);

      return form !== null && form !== void 0 && form.useWorkflow && workflow !== null && useWorkflow === true ? /*#__PURE__*/React__default.createElement(Input$1, {
        key: source,
        source: source,
        fullWidth: true,
        component: /*#__PURE__*/React__default.createElement(Component, {
          key: source,
          source: source,
          label: label,
          fullWidth: fullWidth,
          component: component,
          componentProps: _objectSpread2({
            fullWidth: fullWidth
          }, restComponentProps),
          components: _objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), customComponents)
        })
      }) : /*#__PURE__*/React__default.createElement(Component, {
        key: source,
        source: source,
        label: label,
        fullWidth: fullWidth,
        component: component,
        componentProps: _objectSpread2({
          fullWidth: fullWidth
        }, restComponentProps),
        components: _objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), customComponents)
      });
    }));
  }));
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
      _ref$refresh = _ref.refresh,
      refresh = _ref$refresh === void 0 ? true : _ref$refresh,
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
  var notify = useNotify();
  var save = useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
      var response, errors;
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
              _context.next = 10;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              errors = errorMapper(_context.t0, notify);
              return _context.abrupt("return", errors);

            case 10:
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

            case 11:
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

var _excluded$g = ["fullWidth"];

var Form = function Form(_ref) {
  var _form$inputs;

  var props = _extends({}, _ref);

  var _useContext = useContext(CrudContext),
      getForm = _useContext.getForm,
      loading = _useContext.loading,
      components = _useContext.components;

  var _useContext2 = useContext(WorkflowContext),
      getWorkflow = _useContext2.getWorkflow;

  var form = useMemo$1(function () {
    return getForm(props.resource);
  }, [props.resource, getForm]);
  var workflow = useMemo$1(function () {
    return form !== null && form !== void 0 && form.useWorkflow ? getWorkflow(props.resource) : null;
  }, [props.resource, getWorkflow, form]);
  var customComponents = useCustomComponents(props.resource);
  var save = useSaveMutation(_objectSpread2(_objectSpread2({}, props), {}, {
    refresh: form === null || form === void 0 ? void 0 : form.refresh,
    redirect: form === null || form === void 0 ? void 0 : form.redirect
  }));

  if (loading) {
    return /*#__PURE__*/React__default.createElement(Loading, null);
  }

  if (form === false || form === null) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement(Component, _extends({}, props, {
    save: save,
    toolbar: form !== null && form !== void 0 && form.useWorkflow ? /*#__PURE__*/React__default.createElement(Toolbar, null) : undefined,
    initialValues: form === null || form === void 0 ? void 0 : form.initialValues,
    sanitizeEmptyValues: form === null || form === void 0 ? void 0 : form.sanitizeEmptyValues,
    warnWhenUnsavedChanges: form === null || form === void 0 ? void 0 : form.warnWhenUnsavedChanges,
    redirect: form === null || form === void 0 ? void 0 : form.redirect,
    component: form === null || form === void 0 ? void 0 : form.component,
    componentProps: form === null || form === void 0 ? void 0 : form.componentProps,
    components: _objectSpread2(_objectSpread2({
      SimpleForm: SimpleForm,
      TabbedForm: TabbedForm
    }, components), customComponents)
  }), form === null || form === void 0 ? void 0 : (_form$inputs = form.inputs) === null || _form$inputs === void 0 ? void 0 : _form$inputs.map(function (_ref2) {
    var source = _ref2.source,
        label = _ref2.label,
        component = _ref2.component,
        useWorkflow = _ref2.useWorkflow,
        _ref2$componentProps = _ref2.componentProps,
        fullWidth = _ref2$componentProps.fullWidth,
        restComponentProps = _objectWithoutProperties(_ref2$componentProps, _excluded$g);

    return form !== null && form !== void 0 && form.useWorkflow && workflow !== null && useWorkflow === true ? /*#__PURE__*/React__default.createElement(InputHelperText$1, {
      key: source,
      source: source,
      fullWidth: true,
      component: /*#__PURE__*/React__default.createElement(Component, {
        key: source,
        source: source,
        label: label,
        fullWidth: fullWidth,
        component: component,
        componentProps: _objectSpread2({
          fullWidth: fullWidth
        }, restComponentProps),
        components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), components), customComponents)
      })
    }) : /*#__PURE__*/React__default.createElement(Component, {
      key: source,
      source: source,
      label: label,
      fullWidth: fullWidth,
      component: component,
      componentProps: _objectSpread2({
        fullWidth: fullWidth
      }, restComponentProps),
      components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), components), customComponents)
    });
  }));
};

var Create$1 = function Create(props) {
  return /*#__PURE__*/React__default.createElement(Create$2, props, /*#__PURE__*/React__default.createElement(Form, null));
};

var Create = function Create(props) {
  return /*#__PURE__*/React__default.createElement(Edit, props, /*#__PURE__*/React__default.createElement(Form, null));
};

var _excluded$f = ["grid", "customComponents"],
    _excluded2$1 = ["className", "exporter", "filters"],
    _excluded3 = ["label", "component", "componentProps"];

var Actions = function Actions(_ref) {
  var grid = _ref.grid,
      customComponents = _ref.customComponents,
      props = _objectWithoutProperties(_ref, _excluded$f);

  var className = props.className,
      exporter = props.exporter,
      filtersProp = props.filters,
      rest = _objectWithoutProperties(props, _excluded2$1);

  var _useListContext = useListContext(props),
      currentSort = _useListContext.currentSort,
      displayedFilters = _useListContext.displayedFilters,
      filterValues = _useListContext.filterValues,
      basePath = _useListContext.basePath,
      showFilter = _useListContext.showFilter,
      total = _useListContext.total;

  var resource = useResourceContext(rest);

  var _useResourceDefinitio = useResourceDefinition(rest),
      hasCreate = _useResourceDefinitio.hasCreate;

  var filters = useContext(FilterContext) || filtersProp;
  return useMemo$1(function () {
    var _grid$exportTo, _grid$actions;

    return /*#__PURE__*/React.createElement(TopToolbar, _extends({
      className: className
    }, sanitizeListRestProps(rest)), filtersProp ? /*#__PURE__*/cloneElement(filtersProp, {
      resource: resource,
      showFilter: showFilter,
      displayedFilters: displayedFilters,
      filterValues: filterValues,
      context: "button"
    }) : filters && /*#__PURE__*/React.createElement(FilterButton, null), (grid === null || grid === void 0 ? void 0 : grid.canCreate) !== false && hasCreate && /*#__PURE__*/React.createElement(CreateButton, {
      basePath: basePath
    }), (grid === null || grid === void 0 ? void 0 : (_grid$exportTo = grid.exportTo) === null || _grid$exportTo === void 0 ? void 0 : _grid$exportTo.length) > 0 ? /*#__PURE__*/React.createElement(ExportToButton, {
      exportTo: grid === null || grid === void 0 ? void 0 : grid.exportTo,
      disabled: total === 0,
      resource: resource,
      sort: currentSort,
      filterValues: filterValues
    }) : exporter !== false && /*#__PURE__*/React.createElement(ExportButton$1, {
      disabled: total === 0,
      resource: resource,
      sort: currentSort,
      filterValues: filterValues
    }), grid === null || grid === void 0 ? void 0 : (_grid$actions = grid.actions) === null || _grid$actions === void 0 ? void 0 : _grid$actions.map(function (_ref2, index) {
      var label = _ref2.label,
          component = _ref2.component,
          componentProps = _ref2.componentProps,
          props = _objectWithoutProperties(_ref2, _excluded3);

      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        key: index,
        label: label,
        component: component,
        componentProps: componentProps,
        components: _objectSpread2(_objectSpread2({}, buttons), customComponents)
      }));
    }));
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [resource, displayedFilters, filterValues, showFilter, filters, total, basePath, className, currentSort, exporter, hasCreate]);
};

Actions.propTypes = {
  basePath: PropTypes.string,
  className: PropTypes.string,
  currentSort: PropTypes.any,
  displayedFilters: PropTypes.object,
  exporter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  filters: PropTypes.element,
  filterValues: PropTypes.object,
  hasCreate: PropTypes.bool,
  resource: PropTypes.string,
  onUnselectItems: PropTypes.func.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.any),
  showFilter: PropTypes.func,
  total: PropTypes.number
};
Actions.defaultProps = {
  selectedIds: [],
  onUnselectItems: function onUnselectItems() {
    return null;
  }
};

var _excluded$e = ["grid", "customComponents"];

var BulkActionButtons = function BulkActionButtons(_ref) {
  var _grid$bulkActionButto;

  var grid = _ref.grid,
      customComponents = _ref.customComponents,
      props = _objectWithoutProperties(_ref, _excluded$e);

  return /*#__PURE__*/React__default.createElement(Fragment, null, grid === null || grid === void 0 ? void 0 : (_grid$bulkActionButto = grid.bulkActionButtons) === null || _grid$bulkActionButto === void 0 ? void 0 : _grid$bulkActionButto.map(function (_ref2, index) {
    var component = _ref2.component,
        componentProps = _ref2.componentProps;
    return /*#__PURE__*/React__default.createElement(Component, _extends({}, props, {
      key: index,
      component: component,
      componentProps: componentProps,
      components: _objectSpread2(_objectSpread2({}, buttons), customComponents)
    }));
  }), (grid === null || grid === void 0 ? void 0 : grid.canDelete) !== false && /*#__PURE__*/React__default.createElement(BulkDeleteButton, props));
};

var _excluded$d = ["grid"];

var Empty = function Empty(_ref) {
  var grid = _ref.grid,
      props = _objectWithoutProperties(_ref, _excluded$d);

  var _useListContext = useListContext(props),
      basePath = _useListContext.basePath,
      hasCreate = _useListContext.hasCreate;

  var resource = useResourceContext(props);
  var classes = useStyles$6(props);
  var translate = useTranslate$2();
  var getResourceLabel = useGetResourceLabel();
  var resourceName = translate("resources.".concat(resource, ".forcedCaseName"), {
    smart_count: 0,
    _: getResourceLabel(resource, 0)
  });
  var emptyMessage = translate("ra.page.empty", {
    name: resourceName
  });
  var inviteMessage = translate("ra.page.invite");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.message
  }, /*#__PURE__*/React.createElement(Inbox, {
    className: classes.icon
  }), /*#__PURE__*/React.createElement(Typography$1, {
    variant: "h4",
    paragraph: true
  }, translate("resources.".concat(resource, ".empty"), {
    _: emptyMessage
  })), hasCreate && (grid === null || grid === void 0 ? void 0 : grid.canCreate) !== false && /*#__PURE__*/React.createElement(Typography$1, {
    variant: "body1"
  }, translate("resources.".concat(resource, ".invite"), {
    _: inviteMessage
  }))), hasCreate && (grid === null || grid === void 0 ? void 0 : grid.canCreate) !== false && /*#__PURE__*/React.createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/React.createElement(CreateButton, {
    variant: "contained",
    basePath: basePath,
    label: translate("resources.".concat(resource, ".create"), {
      _: "ra.action.create"
    })
  })));
};

var useStyles$6 = makeStyles(function (theme) {
  return {
    message: {
      textAlign: "center",
      opacity: theme.palette.type === "light" ? 0.5 : 0.8,
      margin: "0 1em",
      color: theme.palette.type === "light" ? "inherit" : theme.palette.text.primary
    },
    icon: {
      width: "9em",
      height: "9em"
    },
    toolbar: {
      textAlign: "center",
      marginTop: "2em"
    }
  };
}, {
  name: "RaEmpty"
});

var exporter = function exporter(grid, data, translate) {
  var columns = ((grid === null || grid === void 0 ? void 0 : grid.columns) || []).filter(function (c) {
    return c.exportable === true;
  });
  var headers = columns.map(function (c) {
    return get$2(c, "label", c.source);
  });
  var csvData = data.map(function (record) {
    var row = {};
    columns.forEach(function (column) {
      var value = get$2(record, column.source);
      row[column.label] = value;
    });
    return row;
  });
  jsonExport(csvData, {
    rowDelimiter: ";",
    headers: headers
  }, function (err, csv) {
    return downloadCSV("\uFEFF" + csv, translate(grid === null || grid === void 0 ? void 0 : grid.title));
  });
};

var _excluded$c = ["source", "component", "componentProps"];

var List = function List(props) {
  var _grid$filters, _grid$columns;

  var translate = useTranslate$1();

  var _React$useContext = React.useContext(CrudContext$1),
      getGrid = _React$useContext.getGrid,
      loading = _React$useContext.loading;

  var grid = getGrid(props.resource);
  var customComponents = useCustomComponents(props.resource);
  var isMobile = useMediaQuery(function (theme) {
    var _grid$mobileBreakpoin;

    return theme.breakpoints.down((_grid$mobileBreakpoin = grid === null || grid === void 0 ? void 0 : grid.mobileBreakpoint) !== null && _grid$mobileBreakpoin !== void 0 ? _grid$mobileBreakpoin : "sm");
  }) && grid.mobilePrimaryText != null;

  if (loading) {
    return /*#__PURE__*/React.createElement(Loading, null);
  }

  if (grid === false || grid === null) {
    return null;
  }

  return /*#__PURE__*/React.createElement(List$2, _extends({}, props, {
    title: grid.title,
    filter: grid.filter || {},
    actions: /*#__PURE__*/React.createElement(Actions, {
      grid: grid,
      customComponents: customComponents
    }),
    pagination: grid === null || grid === void 0 ? void 0 : grid.pagination,
    exporter: (grid === null || grid === void 0 ? void 0 : grid.exporter) !== false ? function (data) {
      return exporter(grid, data, translate);
    } : false,
    filterDefaultValues: grid.filterDefaultValues || {},
    sort: grid === null || grid === void 0 ? void 0 : grid.sort,
    empty: /*#__PURE__*/React.createElement(Empty, {
      grid: grid
    }),
    perPage: grid === null || grid === void 0 ? void 0 : grid.perPage,
    bulkActionButtons: /*#__PURE__*/React.createElement(BulkActionButtons, {
      grid: grid,
      customComponents: customComponents
    }),
    filters: grid !== null && grid !== void 0 && grid.filters ? /*#__PURE__*/React.createElement(Filter, null, grid === null || grid === void 0 ? void 0 : (_grid$filters = grid.filters) === null || _grid$filters === void 0 ? void 0 : _grid$filters.map(function (_ref) {
      var source = _ref.source,
          component = _ref.component,
          componentProps = _ref.componentProps,
          props = _objectWithoutProperties(_ref, _excluded$c);

      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        key: source,
        source: source,
        component: component,
        componentProps: componentProps,
        components: _objectSpread2(_objectSpread2({}, inputs), customComponents),
        alwaysOn: componentProps === null || componentProps === void 0 ? void 0 : componentProps.alwaysOn
      }));
    })) : null
  }), grid !== null && grid !== void 0 && grid.component && (grid === null || grid === void 0 ? void 0 : grid.component) !== "Datagrid" ? /*#__PURE__*/React.createElement(Component, {
    component: grid.component,
    componentProps: grid.componentProps,
    components: _objectSpread2(_objectSpread2({
      Datagrid: Datagrid,
      SimpleList: SimpleList
    }, lists), customComponents)
  }) : isMobile ? /*#__PURE__*/React.createElement(SimpleList, {
    primaryText: function primaryText(record) {
      return grid !== null && grid !== void 0 && grid.mobilePrimaryComponent ? /*#__PURE__*/React.createElement(Component, _extends({}, grid.mobilePrimaryComponent, {
        record: record,
        source: grid === null || grid === void 0 ? void 0 : grid.mobilePrimaryText,
        components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), buttons), customComponents)
      })) : get$2(record, grid === null || grid === void 0 ? void 0 : grid.mobilePrimaryText);
    },
    secondaryText: function secondaryText(record) {
      return grid !== null && grid !== void 0 && grid.mobileSecondaryComponent ? /*#__PURE__*/React.createElement(Component, _extends({}, grid.mobileSecondaryComponent, {
        record: record,
        source: grid === null || grid === void 0 ? void 0 : grid.mobileSecondaryText,
        components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), buttons), customComponents)
      })) : get$2(record, grid === null || grid === void 0 ? void 0 : grid.mobileSecondaryText);
    },
    tertiaryText: function tertiaryText(record) {
      return grid !== null && grid !== void 0 && grid.mobileTertiaryComponent ? /*#__PURE__*/React.createElement(Component, _extends({}, grid.mobileTertiaryComponent, {
        record: record,
        source: grid === null || grid === void 0 ? void 0 : grid.mobileTertiaryText,
        components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), buttons), customComponents)
      })) : get$2(record, grid === null || grid === void 0 ? void 0 : grid.mobileTertiaryText);
    },
    linkType: grid === null || grid === void 0 ? void 0 : grid.mobileLinkType
  }) : /*#__PURE__*/React.createElement(Datagrid, grid === null || grid === void 0 ? void 0 : grid.componentProps, grid === null || grid === void 0 ? void 0 : (_grid$columns = grid.columns) === null || _grid$columns === void 0 ? void 0 : _grid$columns.map(function (_ref2) {
    var source = _ref2.source,
        label = _ref2.label,
        sortable = _ref2.sortable,
        component = _ref2.component,
        sortBy = _ref2.sortBy,
        componentProps = _ref2.componentProps;
    return /*#__PURE__*/React.createElement(Component, _extends({
      key: source
    }, component.indexOf("Button") === -1 ? {
      source: source,
      label: label,
      sortable: sortable,
      sortBy: sortBy,
      addLabel: false
    } : {}, {
      component: component,
      componentProps: componentProps,
      components: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fields), inputs), buttons), customComponents)
    }));
  })));
};

var createCrud = function createCrud(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      _ref$list = _ref.list,
      list = _ref$list === void 0 ? List : _ref$list,
      _ref$create = _ref.create,
      create = _ref$create === void 0 ? Create$1 : _ref$create,
      _ref$edit = _ref.edit,
      edit = _ref$edit === void 0 ? Create : _ref$edit,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {
    group: "admin",
    roles: ["admin"]
  } : _ref$options,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components;
  return {
    icon: icon,
    options: _objectSpread2(_objectSpread2({}, options), {}, {
      components: components
    }),
    list: list,
    edit: edit,
    create: create
  };
};

var _excluded$b = ["icon", "roles", "group", "options", "workflow", "components"];
var defaultIcon = TableChart;
var defaultGroup = "dashboard";

var CrudResource = function CrudResource(_ref) {
  var icon = _ref.icon,
      roles = _ref.roles,
      group = _ref.group,
      options = _ref.options;
      _ref.workflow;
      var components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded$b);

  var crudProps = useMemo$1(function () {
    return createCrud({
      icon: icon,
      options: _objectSpread2(_objectSpread2({}, options), {}, {
        roles: roles,
        group: group
      }),
      components: components
    });
  }, [icon, roles, group, options, components]);
  return /*#__PURE__*/React__default.createElement(Resource, _extends({}, crudProps, props));
};

CrudResource.propTypes = {
  name: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string),
  group: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  list: PropTypes.elementType,
  edit: PropTypes.elementType,
  create: PropTypes.elementType,
  options: PropTypes.object,
  components: PropTypes.object
};
CrudResource.defaultProps = {
  icon: defaultIcon,
  group: defaultGroup,
  components: {},
  workflow: true
};

var _excluded$a = ["children"];

var BaseProfileForm = function BaseProfileForm(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$a);

  var notify = useNotify$1();
  var save = useSaveMutation(_objectSpread2(_objectSpread2({}, props), {}, {
    resource: "users/profile",
    redirect: "/",
    onSuccess: function onSuccess(_ref2) {
      var _ref2$data = _ref2.data,
          email = _ref2$data.email,
          profile = _ref2$data.profile;
      localStorage.setItem("profile", JSON.stringify(_objectSpread2({
        email: email
      }, profile)));
      notify("ra.message.profile_updated");
    }
  }));
  return /*#__PURE__*/React__default.createElement(SimpleForm, _extends({}, props, {
    toolbar: /*#__PURE__*/React__default.createElement(Toolbar$2, null, /*#__PURE__*/React__default.createElement(SaveButton, null)),
    save: save
  }), React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) ? /*#__PURE__*/React__default.cloneElement(child, _objectSpread2({}, props)) : child;
  }));
};

var _excluded$9 = ["formData"];

var ProfileForm = function ProfileForm(props) {
  return /*#__PURE__*/React__default.createElement(BaseProfileForm, props, /*#__PURE__*/React__default.createElement(DebouncedTextInput, {
    source: "email",
    validate: [required(), email()]
  }), /*#__PURE__*/React__default.createElement(DebouncedTextInput, {
    source: "profile.name",
    validate: required(),
    maxLength: 50
  }), /*#__PURE__*/React__default.createElement(DebouncedTextInput, {
    source: "profile.surname",
    validate: required(),
    maxLength: 50
  }), /*#__PURE__*/React__default.createElement(FormDataConsumer, null, function (_ref) {
    var formData = _ref.formData,
        props = _objectWithoutProperties(_ref, _excluded$9);

    return formData.auth === "local" && /*#__PURE__*/React__default.createElement(DebouncedTextInput, _extends({}, props, {
      type: "password",
      source: "password"
    }));
  }));
};

var LocalLoginForm = function LocalLoginForm(props) {
  return /*#__PURE__*/React__default.createElement(LoginForm, props);
};

var _excluded$8 = ["logo", "children"];
var useStyles$5 = makeStyles(function (theme) {
  return {
    main: {
      overflow: "hidden",
      minHeight: "98vh",
      backgroundImage: "none",
      backgroundColor: theme.palette.background.default,
      "& [class*=MuiAvatar-root]": {
        display: "none",
        visibility: "hidden"
      }
    }
  };
});

var LoginPage = function LoginPage(_ref) {
  var logo = _ref.logo,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$8);

  var location = props.location;
  var search = location.search;
  var classes = useStyles$5();
  var theme = useTheme();
  var action = useMemo$1(function () {
    if (search) {
      var params = new URLSearchParams(search);
      return params.get("action");
    }

    return null;
  }, [search]);
  return /*#__PURE__*/React__default.createElement(ThemeProvider$1, {
    theme: theme
  }, /*#__PURE__*/React__default.createElement(Login, {
    backgroundImage: "",
    classes: classes
  }, logo, React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) ? /*#__PURE__*/React__default.cloneElement(child, _objectSpread2({
      action: action
    }, props)) : child;
  })));
};

LoginPage.propTypes = {
  action: PropTypes.string,
  logo: PropTypes.element
};

var _excluded$7 = ["children", "staticContext", "title"];

var ProfilePage = function ProfilePage(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? /*#__PURE__*/React__default.createElement(ProfileForm, null) : _ref$children;
      _ref.staticContext;
      var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "ra.page.profile.title" : _ref$title,
      props = _objectWithoutProperties(_ref, _excluded$7);

  return /*#__PURE__*/React__default.createElement(Edit, _extends({}, props, {
    id: "profile",
    title: title,
    resource: "users",
    basePath: "users"
  }), /*#__PURE__*/React__default.isValidElement(children) ? /*#__PURE__*/React__default.cloneElement(children, _objectSpread2({}, props)) : children);
};

ProfilePage.propTypes = {
  children: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

var useStyles$4 = makeStyles(function (theme) {
  return {
    button: {
      margin: theme.spacing(1),
      width: "calc(100% - ".concat(theme.spacing(2), "px)")
    }
  };
});

var ResetPasswordButton = function ResetPasswordButton(_ref) {
  var _ref$href = _ref.href,
      href = _ref$href === void 0 ? "/#/reset-password" : _ref$href,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "primary" : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "outlined" : _ref$variant,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "ra.auth.reset_password" : _ref$label;
  var classes = useStyles$4();
  var translate = useTranslate$2();
  return /*#__PURE__*/React__default.createElement(Button$1, {
    className: classes.button,
    href: href,
    color: color,
    type: "button",
    variant: variant
  }, translate(label));
};

var _excluded$6 = ["siteKey", "reset"];

var addScript = function addScript(_ref) {
  var src = _ref.src,
      id = _ref.id,
      onLoad = _ref.onLoad;
  var existing = document.getElementById(id);

  if (existing) {
    return existing;
  } else {
    var script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.async = true;

    script.onload = function () {
      if (onLoad) {
        onLoad();
      }
    };

    document.body.appendChild(script);
    return script;
  }
};

var removeScript = function removeScript(_ref2) {
  var id = _ref2.id;
  var script = document.getElementById(id);

  if (script) {
    document.body.removeChild(script);
  }
};

var RecaptchaInput = function RecaptchaInput(_ref3) {
  var siteKey = _ref3.siteKey;
      _ref3.reset;
      var props = _objectWithoutProperties(_ref3, _excluded$6);

  var _useInput = useInput$1(_objectSpread2({}, props)),
      onChange = _useInput.input.onChange;

  useEffect(function () {
    addScript({
      src: "https://www.google.com/recaptcha/api.js?render=".concat(siteKey),
      id: "recaptcha-api",
      onLoad: function onLoad() {
        // eslint-disable-next-line no-undef
        grecaptcha.ready(function () {
          // eslint-disable-next-line no-undef
          grecaptcha.execute(siteKey, {
            action: "submit"
          }).then(onChange);
        });
      }
    });
    return function () {
      return removeScript({
        id: "recaptcha-api"
      });
    };
  }, [siteKey, onChange]);
  return null;
};

var useResetPassword = function useResetPassword() {
  var dataProvider = useDataProvider$2();
  var handler = useCallback(function (_ref) {
    var account = _ref.account,
        token = _ref.token;
    return dataProvider.post("users/reset-password", {
      account: account,
      token: token
    });
  }, [dataProvider]);
  return handler;
};

var _excluded$5 = ["meta", "input"];
var useStyles$3 = makeStyles(function (theme) {
  return {
    form: {
      padding: "0 1em 1em 1em"
    },
    input: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    button: {
      width: "100%",
      display: "block",
      clear: "both",
      marginTop: theme.spacing(1)
    },
    icon: {
      marginRight: theme.spacing(1)
    }
  };
}, {
  name: "RaResetPasswordForm"
});

var Input = function Input(_ref) {
  var _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      inputProps = _ref.input,
      props = _objectWithoutProperties(_ref, _excluded$5);

  return /*#__PURE__*/React.createElement(TextField$2, _extends({
    error: !!(touched && error),
    helperText: touched && error
  }, inputProps, props, {
    fullWidth: true
  }));
};

var ResetPasswordForm = function ResetPasswordForm(_ref2) {
  var recaptchaSiteApiKey = _ref2.recaptchaSiteApiKey,
      _ref2$redirectTo = _ref2.redirectTo,
      redirectTo = _ref2$redirectTo === void 0 ? "/login" : _ref2$redirectTo;

  var _useSafeSetState = useSafeSetState(false),
      _useSafeSetState2 = _slicedToArray(_useSafeSetState, 2),
      loading = _useSafeSetState2[0],
      setLoading = _useSafeSetState2[1];

  var resetPassword = useResetPassword();
  var translate = useTranslate$2();
  var redirect = useRedirect();
  var notify = useNotify();
  var classes = useStyles$3();

  var validate = function validate(values) {
    var errors = {
      account: undefined
    };

    if (!values.account) {
      errors.account = translate("ra.validation.required");
    }

    return errors;
  };

  var _React$useState = React.useState(Date.now()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      timestamp = _React$useState2[0],
      setTimestamp = _React$useState2[1];

  var submit = function submit(values) {
    setLoading(true);
    resetPassword(values).then(function (_ref3) {
      var data = _ref3.data;
      setLoading(false);
      setTimestamp(Date.now());
      notify(data === null || data === void 0 ? void 0 : data.message, {
        variant: "info"
      });
      redirect(redirectTo);
    }).catch(function (error) {
      setLoading(false);
      setTimestamp(Date.now());
      notify(error === null || error === void 0 ? void 0 : error.message, {
        type: "warning"
      });
    });
  };

  return /*#__PURE__*/React.createElement(Form$1, {
    onSubmit: submit,
    validate: validate,
    render: function render(_ref4) {
      var handleSubmit = _ref4.handleSubmit;
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: handleSubmit,
        noValidate: true
      }, /*#__PURE__*/React.createElement("div", {
        className: classes.form
      }, /*#__PURE__*/React.createElement("div", {
        className: classes.input
      }, /*#__PURE__*/React.createElement(Field, {
        autoFocus: true,
        id: "account",
        name: "account",
        component: Input,
        label: translate("ra.auth.account"),
        disabled: loading
      }), /*#__PURE__*/React.createElement(Field, {
        id: "token",
        key: timestamp,
        name: "token",
        source: "token",
        component: RecaptchaInput,
        siteKey: recaptchaSiteApiKey
      })), /*#__PURE__*/React.createElement(Button$2, {
        variant: "contained",
        type: "submit",
        color: "primary",
        disabled: loading,
        className: classes.button
      }, loading && /*#__PURE__*/React.createElement(CircularProgress, {
        className: classes.icon,
        size: 18,
        thickness: 2
      }), translate("ra.auth.password_reset.button")), /*#__PURE__*/React.createElement(Button$2, {
        className: classes.button,
        href: "/#/login",
        color: "primary",
        type: "button",
        disabled: loading
      }, "\u2190", translate("ra.auth.back_to_login"))));
    }
  });
};

ResetPasswordForm.propTypes = {
  redirectTo: PropTypes.string
};

var _excluded$4 = ["logo", "children"];
var useStyles$2 = makeStyles(function (theme) {
  return {
    main: {
      overflow: "hidden",
      minHeight: "98vh",
      backgroundImage: "none",
      backgroundColor: theme.palette.background.default,
      "& [class*=MuiAvatar-root]": {
        display: "none",
        visibility: "hidden"
      }
    }
  };
});

var ResetPasswordPage = function ResetPasswordPage(_ref) {
  var logo = _ref.logo,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? /*#__PURE__*/React__default.createElement(ResetPasswordForm, null) : _ref$children,
      props = _objectWithoutProperties(_ref, _excluded$4);

  var location = props.location;
  var search = location.search;
  var classes = useStyles$2();
  var theme = useTheme();
  var action = useMemo$1(function () {
    if (search) {
      var params = new URLSearchParams(search);
      return params.get("action");
    }

    return null;
  }, [search]);
  return /*#__PURE__*/React__default.createElement(ThemeProvider$1, {
    theme: theme
  }, /*#__PURE__*/React__default.createElement(Login, {
    backgroundImage: "",
    classes: classes
  }, logo, React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) ? /*#__PURE__*/React__default.cloneElement(child, _objectSpread2({
      action: action
    }, props)) : child;
  })));
};

ResetPasswordPage.propTypes = {
  action: PropTypes.string,
  logo: PropTypes.element,
  recaptchaSiteApiKey: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

var _excluded$3 = ["staticContext", "children"];

var SignupPage = function SignupPage(_ref) {
  _ref.staticContext;
      var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$3);

  var theme = useTheme();
  return /*#__PURE__*/React__default.createElement(ThemeProvider$1, {
    theme: theme
  }, React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) ? /*#__PURE__*/React__default.cloneElement(child, _objectSpread2({}, props)) : child;
  }), /*#__PURE__*/React__default.createElement(Notification$1, null));
};

var _excluded$2 = ["children"];
var SignupStepperContext = /*#__PURE__*/React__default.createContext({
  activeStep: 0,
  isLastStep: false
});
var SignupStepperProvider = function SignupStepperProvider(_ref) {
  var children = _ref.children;

  var _React$useState = React__default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var _React$useState3 = React__default.useState(React__default.Children.toArray(children).length === 1),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isLastStep = _React$useState4[0],
      setIsLastStep = _React$useState4[1];

  return /*#__PURE__*/React__default.createElement(SignupStepperContext.Provider, {
    value: {
      activeStep: activeStep,
      isLastStep: isLastStep,
      setActiveStep: setActiveStep,
      setIsLastStep: setIsLastStep
    }
  }, children);
};

var SignupStepper = function SignupStepper(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded$2);

  var form = useForm();

  var _React$useContext = React__default.useContext(SignupStepperContext),
      activeStep = _React$useContext.activeStep,
      setActiveStep = _React$useContext.setActiveStep,
      setIsLastStep = _React$useContext.setIsLastStep;

  var handleNext = useCallback(function () {
    form.batch(function () {
      var formState = form.getState();
      var fields = Object.keys(formState.visited);
      fields.forEach(function (field) {
        return form.blur(field);
      });
      var stepErrors = fields.map(function (field) {
        return get$2(formState.errors, field, undefined);
      }).filter(function (fieldError) {
        return fieldError !== undefined;
      });

      if (stepErrors.length === 0) {
        setActiveStep(function (prevActiveStep) {
          return prevActiveStep + 1;
        });
        setIsLastStep(activeStep + 1 === children.length - 1);
      }
    });
  }, [form, activeStep, children.length, setActiveStep, setIsLastStep]);
  var handleBack = useCallback(function () {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
    setIsLastStep(false);
  }, [setActiveStep, setIsLastStep]);
  var translate = useTranslate$2();
  return /*#__PURE__*/React__default.createElement(Stepper, {
    activeStep: activeStep,
    orientation: "vertical"
  }, React__default.Children.map(children, function (field, index) {
    return /*#__PURE__*/React__default.isValidElement(field) ? /*#__PURE__*/React__default.createElement(Step, {
      key: index
    }, /*#__PURE__*/React__default.createElement(StepLabel, null, field.props.title || field.props.source), /*#__PURE__*/React__default.createElement(StepContent, {
      TransitionProps: {
        unmountOnExit: true
      }
    }, /*#__PURE__*/React__default.cloneElement(field, _objectSpread2({}, props)), activeStep > 0 && /*#__PURE__*/React__default.createElement(Button$2, {
      disabled: activeStep === 0,
      onClick: handleBack
    }, "\u2190 ", translate("ra.action.back")), activeStep < children.length - 1 && /*#__PURE__*/React__default.createElement(Button$2, {
      onClick: handleNext
    }, translate("ra.action.next"), " \u2192"))) : undefined;
  }));
};

var useStyles$1 = makeStyles(function (theme) {
  return {
    root: {
      margin: theme.spacing(1),
      textAlign: "center"
    }
  };
});
var setLoggedIn = function setLoggedIn(_ref) {
  var data = _ref.data;
  localStorage.setItem("email", data.email);
  localStorage.setItem("token", data.token);
  localStorage.setItem("roles", JSON.stringify(data.roles));
  localStorage.setItem("username", data.username);
  localStorage.setItem("profile", JSON.stringify(data.profile));
};
var setSignResponse = function setSignResponse(r) {
  return localStorage.setItem("r", r);
};
var getSignResponse = function getSignResponse() {
  return localStorage.getItem("r");
};
var clearSignResponse = function clearSignResponse() {
  return localStorage.removeItem("r");
};

var doAuthentication = function doAuthentication(_ref2) {
  var authenticationUrl = _ref2.authenticationUrl,
      search = _ref2.search;
  return fetch("".concat(authenticationUrl).concat(search), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).catch(function (error) {
    return error;
  });
};

var SpidLoginForm = function SpidLoginForm(_ref3) {
  var apiUrl = _ref3.apiUrl,
      search = _ref3.location.search,
      loginUrl = _ref3.loginUrl,
      authenticationUrl = _ref3.authenticationUrl,
      redirectUrl = _ref3.redirectUrl,
      signup = _ref3.signup,
      action = _ref3.action;
  var notify = useNotify$1();
  var classes = useStyles$1();
  var redirect = useRedirect$1();
  var translate = useTranslate$1();

  var _useMemo = useMemo$1(function () {
    return {
      login: loginUrl || "".concat(apiUrl, "/spid/auth?b=client"),
      authenticate: authenticationUrl || "".concat(apiUrl, "/spid/authenticate")
    };
  }, [apiUrl, loginUrl, authenticationUrl]),
      login = _useMemo.login,
      authenticate = _useMemo.authenticate;

  useEffect(function () {
    if (action !== "callback") {
      return;
    }

    var doAuth = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$doAuthenticati, success, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return doAuthentication({
                  authenticationUrl: authenticate,
                  search: search
                });

              case 2:
                _yield$doAuthenticati = _context.sent;
                success = _yield$doAuthenticati.success;
                data = _yield$doAuthenticati.data;

                if (!success) {
                  if (signup !== false) {
                    setSignResponse(search);
                    document.location = signup;
                  } else {
                    notify((data === null || data === void 0 ? void 0 : data.message) || "error.login.failed", "error");
                    document.location = "#/login";
                  }
                } else {
                  clearSignResponse();
                  setLoggedIn({
                    data: data
                  });
                  redirect(typeof redirectUrl === "function" ? redirectUrl(data) : redirectUrl);
                  notifyToken(data.token);
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function doAuth() {
        return _ref4.apply(this, arguments);
      };
    }();

    doAuth();
  }, [action, redirectUrl, search, signup, authenticate, redirect, notify]);

  var stopPropagation = function stopPropagation(e) {
    return e.stopPropagation();
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.root
  }, action === "callback" ? /*#__PURE__*/React__default.createElement(CircularProgress, null) : /*#__PURE__*/React__default.createElement(Button$2, {
    onClick: stopPropagation,
    component: "a",
    color: "primary",
    type: "button",
    variant: "contained",
    href: login,
    fullWidth: true
  }, translate("ra.auth.login.spid")));
};

SpidLoginForm.propTypes = {
  apiUrl: PropTypes.string,
  location: PropTypes.object,
  loginUrl: PropTypes.string,
  authenticationUrl: PropTypes.string,
  redirectUrl: PropTypes.string,
  signup: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  action: PropTypes.string
};
SpidLoginForm.defaultProps = {
  signup: false,
  redirectUrl: "/"
};

var _excluded$1 = ["record", "initialValues"];

var SpidSignupAccountStep = function SpidSignupAccountStep(_ref) {
  _ref.record;
      var initialValues = _ref.initialValues,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React__default.createElement(Fragment, null, /*#__PURE__*/React__default.createElement(TextInput$1, _extends({}, props, {
    source: "profile.name",
    validate: required(),
    fullWidth: true,
    maxLength: 50,
    disabled: get$2(initialValues, "profile.name") !== null
  })), /*#__PURE__*/React__default.createElement(TextInput$1, _extends({}, props, {
    source: "profile.surname",
    validate: required(),
    fullWidth: true,
    maxLength: 50,
    disabled: get$2(initialValues, "profile.surname") !== null
  })), /*#__PURE__*/React__default.createElement(TextInput$1, _extends({}, props, {
    source: "profile.fiscal_code",
    validate: required(),
    fullWidth: true,
    maxLength: 16,
    disabled: true
  })), /*#__PURE__*/React__default.createElement(TextInput$1, _extends({}, props, {
    source: "email",
    maxLength: 255,
    validate: [required(), email()],
    fullWidth: true
  })), /*#__PURE__*/React__default.createElement(DebouncedTextInput, _extends({}, props, {
    source: "profile.birth_place",
    validate: required(),
    fullWidth: true,
    maxLength: 50
  })), /*#__PURE__*/React__default.createElement(DateInput$1, _extends({}, props, {
    source: "profile.birth_date",
    validate: required(),
    disabled: true,
    fullWidth: true
  })), /*#__PURE__*/React__default.createElement(TextInput$1, _extends({}, props, {
    source: "profile.phone",
    maxLength: 30
  })));
};

var _excluded = ["basePath"],
    _excluded2 = ["apiUrl", "loadUrl", "staticContext", "children", "logo", "title", "subTitle", "resource", "recaptchaSiteApiKey"];

var getProfile = function getProfile(_ref) {
  var loadUrl = _ref.loadUrl,
      search = _ref.search;
  return fetch("".concat(loadUrl).concat(search), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).catch(function (error) {
    return error;
  });
};

var useStyles = makeStyles(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.background.default,
      height: "98vh"
    }
  };
});

var SignupToolbar = function SignupToolbar(_ref2) {
  _ref2.basePath;
      var props = _objectWithoutProperties(_ref2, _excluded);

  var _useContext = useContext(SignupStepperContext),
      isLastStep = _useContext.isLastStep;

  return /*#__PURE__*/React__default.createElement(Toolbar$2, props, /*#__PURE__*/React__default.createElement(SaveButton, {
    label: "ra.auth.signup",
    disabled: !isLastStep
  }));
};

var SpidSignupForm = function SpidSignupForm(_ref3) {
  var apiUrl = _ref3.apiUrl,
      loadUrl = _ref3.loadUrl;
      _ref3.staticContext;
      var children = _ref3.children,
      logo = _ref3.logo,
      title = _ref3.title,
      subTitle = _ref3.subTitle,
      resource = _ref3.resource,
      recaptchaSiteApiKey = _ref3.recaptchaSiteApiKey,
      props = _objectWithoutProperties(_ref3, _excluded2);

  var _useState = useState(Date.now()),
      _useState2 = _slicedToArray(_useState, 2),
      timestamp = _useState2[0],
      setTimestamp = _useState2[1];

  var classes = useStyles();

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      initialValues = _useState4[0],
      setInitialValues = _useState4[1];

  var redirect = useRedirect$1();
  var search = getSignResponse();
  var save = useSaveMutation({
    resource: resource,
    onSuccess: function onSuccess() {
      setTimeout(function () {
        document.location.href = "#/login".concat(search);
        document.location.reload();
      }, 100);
    },
    onError: function onError() {
      setTimestamp(Date.now());
    }
  });

  var _useMemo = useMemo$1(function () {
    return {
      load: loadUrl || "".concat(apiUrl, "/spid/load")
    };
  }, [apiUrl, loadUrl]),
      load = _useMemo.load;

  useEffect(function () {
    var doLoad = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$getProfile, success, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!search) {
                  redirect("/login");
                }

                _context.next = 3;
                return getProfile({
                  loadUrl: load,
                  search: search
                });

              case 3:
                _yield$getProfile = _context.sent;
                success = _yield$getProfile.success;
                data = _yield$getProfile.data;

                if (success) {
                  setInitialValues(data);
                } else {
                  redirect("/login");
                  clearSignResponse();
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function doLoad() {
        return _ref4.apply(this, arguments);
      };
    }();

    doLoad();
  }, [search, load, redirect]);
  console.info(children);
  return /*#__PURE__*/React__default.createElement(SignupStepperProvider, null, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    justifyContent: "center",
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    lg: 5,
    md: 8,
    sm: 10,
    xs: 12
  }, logo, /*#__PURE__*/React__default.isValidElement(title) ? title : /*#__PURE__*/React__default.createElement(Typography$1, {
    variant: "h3",
    gutterBottom: true,
    display: "block",
    color: "textPrimary"
  }, title), subTitle, initialValues == null && /*#__PURE__*/React__default.createElement(CircularProgress, null), initialValues != null && /*#__PURE__*/React__default.createElement(Create$2, _extends({
    basePath: resource,
    resource: resource
  }, props), /*#__PURE__*/React__default.createElement(SimpleForm, {
    save: save,
    initialValues: initialValues,
    toolbar: /*#__PURE__*/React__default.createElement(SignupToolbar, null)
  }, /*#__PURE__*/React__default.createElement(SignupStepper, {
    fullWidth: true
  }, /*#__PURE__*/React__default.createElement(SpidSignupAccountStep, {
    title: "General Infoes",
    fullWidth: true
  }), React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) ? /*#__PURE__*/React__default.cloneElement(child, _objectSpread2({}, props)) : child;
  })), /*#__PURE__*/React__default.createElement(RecaptchaInput, {
    key: timestamp,
    source: "token",
    siteKey: recaptchaSiteApiKey
  }))))));
};

SpidSignupForm.propTypes = {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  subTitle: PropTypes.element,
  logo: PropTypes.element,
  apiUrl: PropTypes.string,
  loadUrl: PropTypes.string,
  recaptchaSiteApiKey: PropTypes.string.isRequired,
  staticContext: PropTypes.object,
  children: PropTypes.node
};
SpidSignupForm.defaultProps = {
  resource: "spid"
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

var queued = [];

var putMessage = function putMessage(apiUrl, locale, message) {
  return message != null && message !== "undefined" && message.indexOf("[") === -1 && message.indexOf("]") === -1 && queued.indexOf("".concat(locale, "-").concat(message)) === -1 && queued.push("".concat(locale, "-").concat(message)) && fetch("".concat(apiUrl, "/languages/put-message"), {
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
  var locale = useLocale$1();
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
      var _json, _json$data, _json2, _json2$data;

      return Promise.reject(new HttpError(((_json = json) === null || _json === void 0 ? void 0 : (_json$data = _json.data) === null || _json$data === void 0 ? void 0 : _json$data.message) || statusText, ((_json2 = json) === null || _json2 === void 0 ? void 0 : (_json2$data = _json2.data) === null || _json2$data === void 0 ? void 0 : _json2$data.code) || status, json));
    }

    return Promise.resolve({
      status: status,
      headers: headers,
      body: body,
      json: json
    });
  });
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
      var options = {
        body: JSON.stringify(params),
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
      var queryString = stringify(params);
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

var useDataFormatter = function useDataFormatter() {
  var memoizedFn = useMemo$1(function () {
    return createDataFormatter();
  }, []);
  return memoizedFn;
};

function beep() {
  var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
  snd.play();
}

var useTabVisibiliy = function useTabVisibiliy(tab) {
  var _useLocation = useLocation(),
      pathname = _useLocation.pathname;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  useEffect(function () {
    var args = pathname.split("/");

    if (tab === 0 && args.length === 3 || pathname.endsWith("/".concat(tab))) {
      setVisible(true);
    }
  }, [pathname, tab]);
  return visible;
};

export { AppBar, BackButton, Badge, ProfileForm as BaseProfileForm, ChipArrayField, CrudContext, CrudProvider, CrudResource, Datagrid, DateAgoField, DebouncedDateInput, DebouncedNumberInput, DebouncedTextInput, DeleteWithConfirmButton, EditButton, Empty, ExportToButton, FormTab, Group, GroupItem, GroupTitle, ImpersonateUserButton, Input$1 as Input, LanguageMessageInput, Layout, LocalLoginForm, LoginPage, LongTextField, MarkAsReadedButton, MarkAsUnreadedButton, MediaField, MediaInput, Menu$1 as Menu, MenuGroup, MenuItem, NotificationField, NotificationList, ProfileForm, ProfilePage, ProgressField, InlineTextInput as RecordInput, ReferenceAutocompleteInput$1 as ReferenceAutocompleteInput, ReferenceCheckboxGroupInput, ReferenceListField, ReferenceAutocompleteInput as ReferenceSelectInput, ReferenceToolbar, ResetPasswordButton, ResetPasswordPage, Sidebar, SignupPage, SignupStepper, SpidLoginForm, SpidSignupForm, StateButton$1 as StateButton, StateButtonMenu, StateCollectionInput, StateField, StateInput, Toolbar, TransactionLogsField, TransactionNotesInput, TransactionNotesIsPrivateInput, Unprop, UserMenu, UserMenuItem, ValidationItem, ValidationSummary, WorkflowContext, WorkflowProvider, beep, convertFile, createAuthProvider, createDataFormatter, createDataProvider, createErrorMapper, createFilesParser, createI18nProvider, createManyFormatter, createManyParser, getHeaders, getToken, useAuthProvider, useCrud, useDataFormatter, useDataProvider, useDebounce, useFieldLabel, useI18nCatcher, useI18nLanguages, useI18nProvider, useManyFormatter, useManyParser, useSaveMutation, useTabVisibiliy as useTabVisibility, useToken, useWorkflow, useWorkflowInput };
