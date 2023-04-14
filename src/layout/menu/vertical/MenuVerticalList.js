import React, {
  useEffect,
  useState,
} from 'react';

import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import useActiveLink from '../../hooks/useActiveLink';
import MenuItem from './MenuVerticalItem';

const MenuVerticalList = ({ data, depth, hasChild }) => {
	const { pathname } = useLocation();
	const { active } = useActiveLink(data.path);
	const [open, setOpen] = useState(active);

	useEffect(() => {
		if (!active) {
			handleClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const handleToggle = () => {
		setOpen(!open);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<MenuItem
			item={data}
			depth={depth}
			open={open}
			active={active}
			onClick={handleToggle}
		/>
	);
};

MenuVerticalList.propTypes = {
	data: PropTypes.object,
	depth: PropTypes.number,
	hasChild: PropTypes.bool,
};

export default MenuVerticalList;
