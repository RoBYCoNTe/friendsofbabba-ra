import React, { Children, useState } from "react";

import PropTypes from "prop-types";

import { MoreVert } from "@mui/icons-material";
import { IconButton, MenuItem, styled } from "@mui/material";

import MenuPopover from "../../layout/menu-popover/MenuPopover";

const StyledRoot = styled("div", {
	// Configure which props should be forwarded on DOM
	shouldForwardProp: (prop) =>
		prop !== "color" && prop !== "variant" && prop !== "sx",
	slot: "Root",
	name: "FobActionsMenu",
	// We are specifying here how the styleOverrides are being applied based on props
	overridesResolver: (props, styles) => [styles.root],
})(({ theme }) => ({}));

const ActionsMenu = ({
	actions,
	sx,
	children,
	disabledArrow,
	arrow = "right-top",
}) => {
	const [open, setOpen] = useState(null);
	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setOpen(e.currentTarget);
	};
	const handleClose = () => {
		setOpen(null);
	};

	if (!actions || actions.length === 0) {
		return null;
	}

	return (
		<StyledRoot>
			<IconButton
				aria-label="more"
				aria-haspopup="true"
				onClick={handleClick}
				color={open ? "inherit" : "default"}
			>
				<MoreVert />
			</IconButton>
			<MenuPopover
				open={open}
				onClose={handleClose}
				arrow="right-top"
				// sx={{ width: 140 }}
			>
				{actions
					? actions.map((action, index) => (
							<MenuItem key={index} onClick={handleClose}>
								{React.cloneElement(action, {
									...action.props,
									sx: {
										"&:hover": {
											backgroundColor: "transparent!important",
										},
										width: "100%",
										margin: "0 auto",
										padding: 0,
										height: 24,
										...(action.props?.sx || {}),
									},
								})}
							</MenuItem>
					  ))
					: Children.map(children, (child) => {
							return React.cloneElement(child, {
								...child.props,
							});
					  })}
			</MenuPopover>
		</StyledRoot>
	);
};

ActionsMenu.propTypes = {
	...MenuPopover.propTypes,
	actions: PropTypes.arrayOf(PropTypes.element),
	children: PropTypes.node,
};

export default ActionsMenu;
