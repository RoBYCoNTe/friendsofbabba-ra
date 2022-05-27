import { AppBar as FobAppBar } from "friendsofbabba-ra";
import React from "react";
import UserMenu from "./UserMenu";

const AppBar = (props) => <FobAppBar {...props} userMenu={UserMenu} />;

export default AppBar;
