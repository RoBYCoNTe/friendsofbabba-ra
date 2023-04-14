import React, { useState } from 'react';

import {
  Error,
  Inspector,
  SkipNavigationButton,
} from 'react-admin';
import { ErrorBoundary } from 'react-error-boundary';

import {
  Container,
  styled,
} from '@mui/material';

import { useFobContext } from '../context';
import AppBar from './AppBar';
import { HEADER } from './config';
import useResponsive from './hooks/useResponsive';
import DefaultSidebar from './Sidebar';
import SidebarHorizontal from './SidebarHorizontal';
import SidebarMini from './SidebarMini';

const StyledRoot = styled("div")(({ theme, horizontal }) => ({
	display: "flex",
	minHeight: "100%",
	overflow: "hidden",
	paddingTop: horizontal && HEADER.H_MOBILE,
}));

const Main = styled("div")(({ theme }) => ({
	flexGrow: 1,
	overflow: "auto",
	minHeight: "100%",
	paddingTop: HEADER.H_MOBILE + 24,
	paddingBottom: theme.spacing(10),
	[theme.breakpoints.up("lg")]: {
		paddingTop: HEADER.H_DASHBOARD_DESKTOP + 24,
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
}));

const LayoutView = ({ errorComponent, title, children }) => {
	const { themeStretch } = useFobContext();
	const [errorInfo, setErrorInfo] = useState(null);
	const handleError = (error, info) => {
		setErrorInfo(info);
	};

	return (
		<Main>
			<Container maxWidth={themeStretch ? false : "xl"}>
				<ErrorBoundary
					onError={handleError}
					fallbackRender={({ error, resetErrorBoundary }) => (
						<Error
							error={error}
							errorComponent={errorComponent}
							errorInfo={errorInfo}
							resetErrorBoundary={resetErrorBoundary}
							title={title}
						/>
					)}
				>
					{children}
				</ErrorBoundary>
				<Inspector />
			</Container>
		</Main>
	);
};

const Layout = ({ children, ...props }) => {
	const {
		className,
		dashboard,
		error: errorComponent,
		menu: Menu,
		sidebar: Sidebar = DefaultSidebar,
		title,
		...rest
	} = props;
	const [open, setOpen] = useState(false);
	const { themeLayout } = useFobContext();
	const isDesktop = useResponsive("up", "lg");
	const isNavHorizontal = themeLayout === "horizontal";
	const isNavMini = themeLayout === "mini";
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const renderNavVertical = <Sidebar openNav={open} onCloseNav={handleClose} />;

	if (isNavHorizontal) {
		return (
			<StyledRoot {...rest} horizontal={isNavHorizontal && isDesktop}>
				<SkipNavigationButton />
				<AppBar onOpenNav={handleOpen} />
				{isDesktop ? <SidebarHorizontal /> : renderNavVertical}
				<LayoutView errorComponent={errorComponent} title={title}>
					{children}
				</LayoutView>
			</StyledRoot>
		);
	}

	if (isNavMini) {
		return (
			<StyledRoot {...rest}>
				<SkipNavigationButton />
				<AppBar onOpenNav={handleOpen} />
				{isDesktop ? <SidebarMini /> : renderNavVertical}
				<LayoutView errorComponent={errorComponent} title={title}>
					{children}
				</LayoutView>
			</StyledRoot>
		);
	}

	return (
		<StyledRoot {...rest}>
			<SkipNavigationButton />
			<AppBar onOpenNav={() => setOpen(true)} />
			<Sidebar openNav={open} onCloseNav={() => setOpen(false)} />
			<LayoutView errorComponent={errorComponent} title={title}>
				{children}
			</LayoutView>
		</StyledRoot>
	);
};

export default Layout;
