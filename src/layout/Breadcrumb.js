import React from 'react';

import { useTranslate } from 'react-admin';
import { Link as RouterLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import {
  Box,
  Breadcrumbs,
  Link,
} from '@mui/material';

const Breadcrumb = ({ sx }) => {
	const translate = useTranslate();
	const breadcrumbs = useBreadcrumbs();

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
						borderRadius: "50%",
						bgcolor: "text.disabled",
					}}
				/>
			}
		>
			{breadcrumbs.map(({ match, breadcrumb }, index) => {
				const render =
					typeof breadcrumb.props?.children === "string"
						? translate(
								`breadcrumbs.${breadcrumb.props?.children?.toLowerCase()}`,
								{
									_: breadcrumb.props?.children,
								}
						  )
						: breadcrumb;

				if (index === breadcrumbs.length - 1) {
					return <span>{render}</span>;
				}

				return (
					<Link
						component={RouterLink}
						underline="hover"
						color="inherit"
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
