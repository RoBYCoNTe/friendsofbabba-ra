import React, { useState } from 'react';

import {
  Error,
  Inspector,
} from 'react-admin';
import { ErrorBoundary } from 'react-error-boundary';

import {
  Container,
  styled,
} from '@mui/material';

import { useFobContext } from '../context/FobContext';
import { HEADER } from './config';

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

export default LayoutView;
