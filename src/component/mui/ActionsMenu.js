import React, {
  Children,
  useState,
} from 'react';

import PropTypes from 'prop-types';

import { MoreVert } from '@mui/icons-material';
import {
  IconButton,
  MenuItem,
  styled,
} from '@mui/material';

import MenuPopover from '../../layout/menu-popover/MenuPopover';

const StyledRoot = styled('div', {
	// Configure which props should be forwarded on DOM
	shouldForwardProp: (prop) =>
		prop !== 'color' && prop !== 'variant' && prop !== 'sx',
	slot: 'Root',
	name: 'FobActionsMenu',
	// We are specifying here how the styleOverrides are being applied based on props
	overridesResolver: (props, styles) => [styles.root]
})(({ theme }) => ({}));

const ActionsMenu = ({ sx, children, disabledArrow, arrow = 'right-top' }) => {
	const [open, setOpen] = useState(null);
	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setOpen(e.currentTarget);
	};
	const handleClose = () => {
		setOpen(null);
	};

	if (
		!children ||
		React.Children.count(children) === 0 ||
		children.filter((c) => React.isValidElement(c) || Array.isArray(c))
			.length === 0
	) {
		return null;
	}

	return (
		<StyledRoot>
			<IconButton
				aria-label="more"
				aria-haspopup="true"
				onClick={handleClick}
				color={open ? 'inherit' : 'default'}
			>
				<MoreVert />
			</IconButton>
			<MenuPopover
				open={open}
				onClose={handleClose}
				arrow="right-top"
				// sx={{ width: 140 }}
			>
				{Children.map(children, (action, index) => {
					if (Array.isArray(action)) {
						return action.map((a, i) => (
							<MenuItem
								key={i}
								onClick={handleClose}
								sx={{
									'& button, & a': {
										width: '100%',
										margin: '0 auto',
										padding: 0,
										height: 24,
										justifyContent: 'flex-start',
										'&:hover': {
											backgroundColor: 'transparent!important'
										}
									}
								}}
							>
								{React.cloneElement(a)}
							</MenuItem>
						));
					} else if (React.isValidElement(action)) {
						return (
							<MenuItem
								key={index}
								onClick={handleClose}
								sx={{
									'& button, & a': {
										width: '100%',
										margin: '0 auto',
										padding: 0,
										height: 24,
										justifyContent: 'flex-start',
										'&:hover': {
											backgroundColor: 'transparent!important'
										}
									}
								}}
							>
								{React.cloneElement(action)}
							</MenuItem>
						);
					} else {
						return null;
					}
				})}
			</MenuPopover>
		</StyledRoot>
	);
};

ActionsMenu.propTypes = {
	...MenuPopover.propTypes,
	children: PropTypes.node.isRequired
};

export default ActionsMenu;
