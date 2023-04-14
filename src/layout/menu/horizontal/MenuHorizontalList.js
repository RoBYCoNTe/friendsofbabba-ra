import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import useActiveLink from '../../hooks/useActiveLink';
import MenuHorizontalItem from './MenuHorizontalItem';

const MenuHorizontalList = ({ data, depth, hasChild }) => {
	const navRef = useRef(null);
	const { pathname } = useLocation();
	const { active } = useActiveLink(data.path);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			handleClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	useEffect(() => {
		const appBarEl = Array.from(document.querySelectorAll(".MuiAppBar-root"));

		// Reset styles when hover
		const styles = () => {
			document.body.style.overflow = "";
			document.body.style.padding = "";
			// Apply for Window
			appBarEl.forEach((elem) => {
				elem.style.padding = "";
			});
		};

		if (open) {
			styles();
		} else {
			styles();
		}
	}, [open]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<MenuHorizontalItem
				ref={navRef}
				item={data}
				depth={depth}
				open={open}
				active={active}
				onMouseEnter={handleOpen}
				onMouseLeave={handleClose}
			/>
		</>
	);
};

MenuHorizontalList.propTypes = {
	data: PropTypes.object,
	depth: PropTypes.number,
	hasChild: PropTypes.bool,
};

export default MenuHorizontalList;
