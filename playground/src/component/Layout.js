import { APP_SUB_TITLE, APP_TITLE, APP_VERSION, DRAWER_WIDTH } from "../config";

import AppBar from "./AppBar";
import { Layout as FobLayout } from "friendsofbabba-ra";
import Menu from "./Menu";
import React from "react";

const Layout = (props) => (
  <FobLayout
    {...props}
    appTitle={APP_TITLE}
    appSubTitle={APP_SUB_TITLE}
    appVersion={APP_VERSION}
    drawerWidth={DRAWER_WIDTH}
    menu={Menu}
    appBar={AppBar}
  />
);
export default Layout;
