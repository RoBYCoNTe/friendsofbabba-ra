export default function Ra(theme) {
	return {
		FobForm: {
			styleOverrides: {
				root: {
					"& .MuiInputBase-root": {
						minWidth: theme.spacing(35),
					},
					[theme.breakpoints.down("sm")]: {
						"& .MuiFormControl-root": {
							width: "100%",
						},
					},
				},
			},
		},
	};
}
