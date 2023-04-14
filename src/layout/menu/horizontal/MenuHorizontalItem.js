import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';
import { useTranslate } from 'react-admin';
import { Link as RouterLink } from 'react-router-dom';

import {
  Box,
  Link,
  ListItemText,
  Tooltip,
} from '@mui/material';

import Iconify from '../../Iconify';
import {
  StyledHorizontalIcon,
  StyledHorizontalItem,
} from './styles';

const MenuHorizontalItem = forwardRef(
	({ item, depth, open, active, isExternalLink, ...other }, ref) => {
		const translate = useTranslate();
		const { name, icon: Icon, disabled, path, caption } = item;

		const renderContent = (
			<StyledHorizontalItem
				ref={ref}
				open={open}
				depth={depth}
				active={active}
				disabled={disabled}
				{...other}
			>
				{Icon && <StyledHorizontalIcon>{<Icon />}</StyledHorizontalIcon>}
				<ListItemText
					primary={translate(`menu.items.${name}`)}
					primaryTypographyProps={{
						noWrap: true,
						component: "span",
						variant: active ? "subtitle2" : "body2",
					}}
				/>
				{caption && (
					<Tooltip title={translate(`menu.items.${name}.caption`)} arrow>
						<Box component="span" sx={{ ml: 0.5, lineHeight: 0 }}>
							<Iconify icon="eva:info-outline" width={16} />
						</Box>
					</Tooltip>
				)}
			</StyledHorizontalItem>
		);

		return (
			<Link component={RouterLink} to={path} underline="none">
				{renderContent}
			</Link>
		);
	}
);

MenuHorizontalItem.propTypes = {
	open: PropTypes.bool,
	active: PropTypes.bool,
	item: PropTypes.object,
	depth: PropTypes.number,
	isExternalLink: PropTypes.bool,
};

export default MenuHorizontalItem;
