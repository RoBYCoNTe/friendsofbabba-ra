import React from 'react';

import { useTranslate } from 'react-admin';
import { Link as RouterLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import {
  Box,
  Breadcrumbs,
  Link,
} from '@mui/material';

import { slugify } from '../util';

const Breadcrumb = ({ sx }) => {
	const translate = useTranslate();
	const breadcrumbs = useBreadcrumbs([
		{
			path: '/',
			breadcrumb: translate('breadcrumbs.items.home', {
				_: 'Home'
			})
		},
		{
			path: '/:resource/create/*',
			breadcrumb: ({ match }) =>
				translate(`breadcrumbs.items.${match?.params?.resource}.create`, {
					_: 'Create'
				})
		},
		{
			path: '/:resource/:id/show/*',
			breadcrumb: ({ match }) =>
				translate(`breadcrumbs.items.${match?.params?.resource}.show`, {
					_: 'Show'
				})
		},
		{
			path: '/:resource/:id/',
			breadcrumb: ({ match }) =>
				translate(`breadcrumbs.items.${match?.params?.resource}.edit`, {
					_: 'Edit'
				})
		},
		{
			path: '/:resource/*',
			breadcrumb: ({ match }) => {
				const resource = match?.params?.resource;
				if (!resource) {
					return translate('breadcrumbs.items.list', { _: 'List' });
				}
				const defaultName =
					resource.charAt(0).toUpperCase() + resource.slice(1);
				return translate(`breadcrumbs.items.${resource}.list`, {
					_: defaultName
				});
			}
		}
	]);

	return (
		<Breadcrumbs
			sx={sx}
			aria-label="breadcrumb"
			separator={
				<Box
					component="span"
					sx={{
						width: 4,
						height: 4,
						borderRadius: '50%',
						bgcolor: 'text.disabled'
					}}
				/>
			}
		>
			{breadcrumbs.map(({ match, breadcrumb }, index) => {
				const render =
					typeof breadcrumb.props?.children === 'string'
						? translate(
								`breadcrumbs.${slugify(
									breadcrumb.props?.children?.toLowerCase()
								)}`,
								{
									_: breadcrumb.props?.children
								}
						  )
						: breadcrumb;

				if (index === breadcrumbs.length - 1) {
					return <span key={index}>{render}</span>;
				}

				return (
					<Link
						component={RouterLink}
						underline="hover"
						color="inherit"
						key={index}
						to={match.pathname}
					>
						{render}
					</Link>
				);
			})}
		</Breadcrumbs>
	);
};

export default Breadcrumb;
