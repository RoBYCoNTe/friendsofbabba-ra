import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import {
  ExportButton,
  FilterButton,
  FilterForm,
  ListToolbar as RaListToolbar,
} from 'react-admin';

import {
  Box,
  Grid,
  Stack,
} from '@mui/material';

import { useResponsive } from '../../layout';
import ActionsMenu from '../mui/ActionsMenu';

const ListToolbar = ({ filters: _filters, actions, exporter, ...props }) => {
	const isMobile = useResponsive('down', 'lg');

	const filters = useMemo(() => {
		return _filters?.filter(
			(filter) => !isMobile || filter.props?.hideOnMobile === undefined
		);
	}, [_filters, isMobile]);

	if (!filters && !(actions?.length > 0) && exporter === false) {
		return null;
	}

	return (
		<Box
			sx={{
				'& .MuiMenuItem-root .MuiButtonBase-root': {
					color: 'red',
					backgroundColor: 'transparent'
				}
			}}
		>
			<Grid container spacing={0} alignItems="center">
				{filters && (
					<Grid item xs={12} md={9}>
						<FilterForm
							sx={{
								padding: 2,
								paddingTop: 1
							}}
							filters={filters}
						/>
					</Grid>
				)}
				<Grid item xs={12} md={filters && 3}>
					<Stack
						direction="row"
						justifyContent="flex-end"
						alignItems="center"
						sx={[
							{ paddingRight: 1, paddingLeft: 1 },
							!filters && { padding: 1 }
						]}
					>
						{filters && (
							<FilterButton
								filters={filters}
								sx={{
									'& .MuiButtonBase-root': {
										whiteSpace: 'nowrap',
										textTransform: 'uppercase'
									}
								}}
							/>
						)}
						<ActionsMenu>
							{actions.length > 0 && actions}
							{exporter !== false && <ExportButton />}
						</ActionsMenu>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
};

ListToolbar.defaultProps = {
	...RaListToolbar.defaultProps,
	actions: [],
	exporter: undefined
};

ListToolbar.propTypes = {
	...RaListToolbar.propTypes,
	actions: PropTypes.arrayOf(PropTypes.element),
	exporter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};

export default ListToolbar;
