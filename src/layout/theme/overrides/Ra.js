export default function Ra(theme) {
	return {
		RaLoadingInput: {
			styleOverrides: {
				root: {
					'& input.Mui-disabled': {
						padding: '8.5px 14px'
					},
					'& .MuiFormLabel-root': {
						transform: 'translate(14px, 9px) scale(1)'
					}
				}
			}
		},
		RaSelectInput: {
			styleOverrides: {
				root: {
					marginTop: 0
				}
			}
		},
		RaSelectArrayInput: {
			styleOverrides: {
				root: {
					marginBottom: theme.spacing(0.5),
					'& .MuiFormLabel-root:not(.MuiInputLabel-shrink)': {
						transform: 'translate(14px, 9px) scale(1)'
					}
				}
			}
		},
		RaNullableBooleanInput: {
			styleOverrides: {
				root: {
					marginBottom: theme.spacing(0.5)
				}
			}
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					marginBottom: theme.spacing(0.5)
				}
			}
		},
		RaCheckboxGroupInput: {
			styleOverrides: {
				root: {
					margin: 0
				}
			}
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					marginTop: theme.spacing(1),
					marginBottom: theme.spacing(1),
					'& span': {
						display: 'none'
					}
				}
			}
		},
		MuiTab: {
			defaultProps: {
				disableRipple: true,
				iconPosition: 'start'
			},
			styleOverrides: {
				root: ({ ownerState }) => ({
					minHeight: 48
				})
			}
		}
	};
}
