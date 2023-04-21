export default function Ra(theme) {
	return {
		RaSelectInput: {
			styleOverrides: {
				root: {
					marginTop: 0,
				},
			},
		},
		RaNullableBooleanInput: {
			styleOverrides: {
				root: {
					marginBottom: theme.spacing(0.5),
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					marginBottom: theme.spacing(0.5),
				},
			},
		},
		RaCheckboxGroupInput: {
			styleOverrides: {
				root: {
					margin: 0,
				},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					marginTop: theme.spacing(1),
					marginBottom: theme.spacing(1),
					"& span": {
						display: "none",
					},
				},
			},
		},
	};
}
