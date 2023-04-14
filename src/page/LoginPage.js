import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";
import { LoginForm as DefaultLoginForm, useCheckAuth } from "react-admin";
import { useNavigate } from "react-router-dom";

import { Card, styled } from "@mui/material";

import { useFobContext } from "../context";

const LoginPage = (props) => {
	const { children, backgroundImage, ...rest } = props;
	const { logo } = useFobContext();
	const containerRef = useRef();
	let backgroundImageLoaded = false;
	const checkAuth = useCheckAuth();
	const navigate = useNavigate();
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
				{logo && (
					<div className={LoginClasses.avatar}>
						<img src={logo} alt="logo" />
					</div>
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
	[`& .${LoginClasses.avatar} img`]: {
		maxWidth: 200,
	},
	[`& .${LoginClasses.icon}`]: {
		backgroundColor: theme.palette.secondary[500],
	},
}));

LoginPage.propTypes = {
	backgroundImage: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
};

LoginPage.defaultProps = {
	children: <DefaultLoginForm />,
};

export default LoginPage;
