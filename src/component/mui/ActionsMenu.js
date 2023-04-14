import React, {
  Children,
  useState,
} from 'react';

import PropTypes from 'prop-types';

import { MoreVert } from '@mui/icons-material';
import {
  IconButton,
  Menu,
  MenuItem,
  styled,
} from '@mui/material';

const ITEM_HEIGHT = 48;

const StyledRoot = styled("div", {
	// Configure which props should be forwarded on DOM
	shouldForwardProp: (prop) =>
		prop !== "color" && prop !== "variant" && prop !== "sx",
	slot: "Root",
	name: "FobActionsMenu",
	// We are specifying here how the styleOverrides are being applied based on props
	overridesResolver: (props, styles) => [styles.root],
})(({ theme }) => ({}));

const ActionsMenu = ({ actions, children }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setAnchorEl(e.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	if (!actions || actions.length === 0) {
		return null;
	}

	return (
		<StyledRoot>
			<IconButton aria-label="more" aria-haspopup="true" onClick={handleClick}>
				<MoreVert />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
					},
				}}
			>
				{actions
					? actions.map((action, index) => (
							<MenuItem
								key={index}
								onClick={handleClose}
								sx={{
									"&:hover": {
										backgroundColor: "transparent",
									},
								}}
							>
								{React.cloneElement(action, {
									...action.props,
								})}
							</MenuItem>
					  ))
					: Children.map(children, (child) => {
							return React.cloneElement(child, {
								...child.props,
							});
					  })}
			</Menu>
		</StyledRoot>
	);
};

ActionsMenu.propTypes = {
	actions: PropTypes.arrayOf(PropTypes.element),
	children: PropTypes.node,
};

export default ActionsMenu;
