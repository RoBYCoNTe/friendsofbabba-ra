import React, {
  Fragment,
  useMemo,
  useState,
} from 'react';

import PropTypes from 'prop-types';
import { useRecordContext } from 'react-admin';

import {
  Link,
  Typography,
} from '@mui/material';

import useFieldLabel from './useFieldLabel';

const TransactionNotesField = ({
	admin = false,
	source,
	minWidth = 150,
	maxRows = 3,
	component,
	...props
}) => {
	const fieldLabel = useFieldLabel({ resource: "transactions" });
	const record = useRecordContext(props);
	const { isPrivate, value, tooLong } = useMemo(() => {
		const isPrivate = record?.is_private || true;
		const value = isPrivate && !admin ? null : record?.[source] || null;
		const tooLong = value !== null && value.length > 200;
		return { isPrivate, value, tooLong };
	}, [record, admin, source]);
	const [showMore, setShowMore] = useState(false);
	const handleToggle = () => setShowMore(!showMore);

	return (
		<Fragment>
			<Typography
				component={component}
				sx={{
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
					whiteSpace: "break-spaces",
				}}
				style={{ minWidth, WebkitLineClamp: showMore ? null : maxRows }}
				variant="body2"
				color={
					value === null || value.length === 0 ? "textSecondary" : "textPrimary"
				}
				display="inline"
			>
				{tooLong === false
					? value !== null && value.length > 0
						? value
						: fieldLabel("notes.empty")
					: null}
				{tooLong && (showMore ? value : value.substring(0, 200) + "...")}
			</Typography>
			{admin && value !== null && value.length > 0 && (
				<Typography
					component={component}
					color={isPrivate ? "error" : "textSecondary"}
					sx={{ display: "block", clear: "both" }}
					variant="caption"
				>
					{fieldLabel(`notes.${isPrivate ? "private" : "public"}`)}
				</Typography>
			)}
			{tooLong && (
				<Link
					underline="hover"
					sx={{ cursor: "pointer", fontWeight: "bold" }}
					onClick={handleToggle}
				>
					{fieldLabel(`notes.${showMore ? "show_less" : "show_more"}`)}
				</Link>
			)}
		</Fragment>
	);
};

TransactionNotesField.propTypes = {
	minWidth: PropTypes.number,
	maxRows: PropTypes.number,
};

export default TransactionNotesField;
