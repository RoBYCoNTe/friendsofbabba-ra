import { AppBar as FobAppBar } from "ra-friendsofbabba";
import React from "react";
import UserMenu from "./UserMenu";

const AppBar = (props) => <FobAppBar {...props} userMenu={UserMenu} />;

export default AppBar;
