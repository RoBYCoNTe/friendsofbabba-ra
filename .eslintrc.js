module.exports = {
	root: true,
	extends: "react-app",
	overrides: [
		{
			files: ["*.js"],
			rules: {
				"comma-dnagle": "off",
				radix: "off",
				"react/no-unstable-nested-components": "off",
			},
		},
	],
};
