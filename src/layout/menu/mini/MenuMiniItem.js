import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';
import { useTranslate } from 'react-admin';
import { Link as RouterLink } from 'react-router-dom';

import {
  Link,
  ListItemText,
  Tooltip,
} from '@mui/material';

import Iconify from '../../Iconify';
import {
  StyledMiniIcon,
  StyledMiniItem,
} from './styles';

const MenuMiniItem = forwardRef(({ item, open, active, ...other }, ref) => {
	const translate = useTranslate();
	const { name, icon: Icon, disabled, path, caption } = item;

	const renderContent = (
		<StyledMiniItem
			ref={ref}
			open={open}
			active={active}
			disabled={disabled}
			{...other}
		>
			{Icon && <StyledMiniIcon>{<Icon />}</StyledMiniIcon>}
			<ListItemText
				primary={translate(`menu.items.${name}`)}
				primaryTypographyProps={{
					noWrap: true,
					sx: {
						width: 72,
						fontSize: 10,
						lineHeight: "16px",
						textAlign: "center",
						...(active && {
							fontWeight: "fontWeightMedium",
						}),
					},
				}}
			/>
			{caption && (
				<Tooltip
					title={translate(`menu.items.${name}.caption`)}
					arrow
					placement="right"
				>
					<Iconify
						icon="eva:info-outline"
						width={16}
						sx={{
							top: 11,
							left: 6,
							position: "absolute",
						}}
					/>
				</Tooltip>
			)}
		</StyledMiniItem>
	);

	return (
		<Link component={RouterLink} to={path} underline="none">
			{renderContent}
		</Link>
	);
});

MenuMiniItem.propTypes = {
	open: PropTypes.bool,
	active: PropTypes.bool,
	item: PropTypes.object,
	depth: PropTypes.number,
	isExternalLink: PropTypes.bool,
};

export default MenuMiniItem;
