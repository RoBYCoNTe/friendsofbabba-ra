import React, { useCallback } from "react";

import { useTranslate } from "react-admin";

import { ArrowForwardIos, DoubleArrow } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";

import StateButton from "./StateButton";

const StateButtonMenu = ({ states, ...props }) => {
	const translate = useTranslate();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [state, setState] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleState = useCallback(
		(state) => (e) => {
			setState(state.label);
			setAnchorEl(null);
		},
		[]
	);

	return (
		<div>
			<Button
				aria-controls="workflow-menu"
				aria-haspopup="true"
				variant="contained"
				color="primary"
				onClick={handleClick}
			>
				<DoubleArrow />
				{props.saving ? `${state}...` : translate("ra.workflow.do_action")}
			</Button>
			<Menu
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{states.map((state) => (
					<StateButton
						{...props}
						key={state.code}
						component={MenuItem}
						state={state}
						color="default"
						variant="text"
						icon={<ArrowForwardIos />}
						onClick={handleState(state)}
					/>
				))}
			</Menu>
		</div>
	);
};

export default StateButtonMenu;
