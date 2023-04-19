import React, { useEffect, useMemo, useRef } from "react";

import PropTypes from "prop-types";
import { LoginForm as DefaultLoginForm, useCheckAuth } from "react-admin";
import { useNavigate } from "react-router-dom";

import { Card, styled } from "@mui/material";

import DefaultLogo from "../layout/Logo";

const LoginPage = ({ logo, ...props }) => {
	const { children, backgroundImage, ...rest } = props;
	const containerRef = useRef();
	let backgroundImageLoaded = false;
	const checkAuth = useCheckAuth();
	const navigate = useNavigate();
	const Logo = useMemo(() => {
		const logoType = typeof logo;
		switch (logoType) {
			case "string":
				return <DefaultLogo src={logo} sx={{ maxWidth: 80 }} />;
			case "function":
				const CustomLogo = logo;
				return <CustomLogo sx={{ maxWidth: 80 }} />;
			default:
				return undefined;
		}
	}, [logo]);

	useEffect(() => {
		checkAuth({}, false)
			.then(() => {
				// already authenticated, redirect to the home page
				navigate("/");
			})
			.catch(() => {
				// not authenticated, stay on the login page
			});
	}, [checkAuth, navigate]);

	const updateBackgroundImage = () => {
		if (!backgroundImageLoaded && containerRef.current) {
			containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
			backgroundImageLoaded = true;
		}
	};

	// Load background image asynchronously to speed up time to interactive
	const lazyLoadBackgroundImage = () => {
		if (backgroundImage) {
			const img = new Image();
			img.onload = updateBackgroundImage;
			img.src = backgroundImage;
		}
	};

	useEffect(() => {
		if (!backgroundImageLoaded) {
			lazyLoadBackgroundImage();
		}
	});
	return (
		<Root {...rest} ref={containerRef}>
			<Card className={LoginClasses.card}>
				{Logo && (
					<div className={LoginClasses.avatar}>{React.cloneElement(Logo)}</div>
				)}
				{children}
			</Card>
		</Root>
	);
};

const PREFIX = "FobLogin";
export const LoginClasses = {
	card: `${PREFIX}-card`,
	avatar: `${PREFIX}-avatar`,
	icon: `${PREFIX}-icon`,
};

const Root = styled("div", {
	name: PREFIX,
	overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	minHeight: "100vh",
	height: "1px",
	alignItems: "center",
	justifyContent: "center",

	[`& .${LoginClasses.card}`]: {
		minWidth: 300,
	},
	[`& .${LoginClasses.avatar}`]: {
		margin: "1em",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	[`& .${LoginClasses.icon}`]: {
		backgroundColor: theme.palette.secondary[500],
	},
}));

LoginPage.propTypes = {
	backgroundImage: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	logo: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

LoginPage.defaultProps = {
	children: <DefaultLoginForm />,
};

export default LoginPage;
