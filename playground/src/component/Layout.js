import { APP_SUB_TITLE, APP_TITLE, DRAWER_WIDTH } from "../config";

import AppBar from "./AppBar";
import { Layout as FobLayout } from "ra-friendsofbabba";
import Menu from "./Menu";
import React from "react";
import logo from "../assets/logo512.png";

const Layout = (props) => (
  <FobLayout
    {...props}
    logo={
      <img
        src={logo}
        alt="logo"
        width="48"
        style={{ float: "left", display: "block" }}
      />
    }
    title={APP_TITLE}
    subTitle={APP_SUB_TITLE}
    drawerWidth={DRAWER_WIDTH}
    menu={Menu}
    appBar={AppBar}
  />
);
export default Layout;
