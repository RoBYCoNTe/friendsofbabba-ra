import { Notification, defaultTheme } from "react-admin";
import React, { createElement, useEffect, useRef, useState } from "react";
import {
  createStyles,
  createTheme,
  withStyles,
} from "@material-ui/core/styles";

import AppBar from "./AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import Menu from "./Menu";
import PropTypes from "prop-types";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import Sidebar from "./Sidebar";
import { ThemeProvider } from "@material-ui/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const styles = (theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  });

class LayoutWithoutTheme extends React.Component {
  state = { hasError: false, errorMessage: null, errorInfo: null };

  constructor(props) {
    super(props);
    /**
     * Reset the error state upon navigation
     *
     * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
     */
    props.history.listen(() => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentDidCatch(errorMessage, errorInfo) {
    this.setState({ hasError: true, errorMessage, errorInfo });
  }

  render() {
    const {
      config,
      appBar = AppBar,
      children,
      classes,
      error,
      dashboard,
      logout,
      menu = Menu,
      notification = Notification,
      open,
      sidebar = Sidebar,
      title,

      appTitle,
      appSubTitle,
      appVersion,

      drawerWidth,
    } = this.props;
    const { hasError, errorMessage, errorInfo } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        {createElement(sidebar, {
          open,
          appTitle,
          appSubTitle,
          appVersion,
          drawerWidth,
          children: createElement(menu, {
            open,
            config,
            logout,
            hasDashboard: !!dashboard,
            menuConfig: this.props.menu,
          }),
        })}

        <main id="main-content" className={classes.content}>
          {createElement(appBar, { title, open, logout, drawerWidth })}
          <div className={classes.toolbar} />
          {hasError
            ? createElement(error, {
                error: errorMessage,
                errorInfo,
                title,
              })
            : children}
        </main>
        {createElement(notification)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.admin.ui.sidebarOpen,
});

// const EnhancedLayout = compose(
//   connect(
//     mapStateToProps,
//     {} // Avoid connect passing dispatch in props
//   ),
//   withRouter,
//   withStyles(styles, { name: "RaLayout" })
// )(LayoutWithoutTheme);

let EnhancedLayout = withStyles(styles, { name: "RaLayout" })(
  LayoutWithoutTheme
);
EnhancedLayout = withRouter(EnhancedLayout);
EnhancedLayout = connect(mapStateToProps, {})(EnhancedLayout);

const Layout = ({ theme: themeOverride, ...props }) => {
  const themeProp = useRef(themeOverride);
  const [theme, setTheme] = useState(() => createTheme(themeOverride));

  useEffect(() => {
    if (themeProp.current !== themeOverride) {
      themeProp.current = themeOverride;
      setTheme(createTheme(themeOverride));
    }
  }, [themeOverride, themeProp, theme, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <EnhancedLayout {...props} />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  theme: PropTypes.object,
  appTitle: PropTypes.string.isRequired,
  appSubTitle: PropTypes.string,
  appVersion: PropTypes.string,
  drawerWidth: PropTypes.number,
  menu: PropTypes.object,
};

Layout.defaultProps = {
  theme: defaultTheme,
  appTitle: "React Admin",
  appSubTitle: "Material-UI",
  appVersion: "1.0.0",
  drawerWidth: 240,
  config: {
    dashboard: {
      icon: DashboardTwoToneIcon,
      order: 5,
      expanded: true,
    },
    admin: {
      icon: SettingsIcon,
      order: 100,
      expanded: true,
    },
  },
};

export default Layout;
