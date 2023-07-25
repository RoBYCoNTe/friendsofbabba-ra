import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import generateDeclarations from 'rollup-plugin-generate-declarations';
import external from 'rollup-plugin-peer-deps-external';

import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const config = [
	{
		input: pkg.source,
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'esm' }
		],
		plugins: [
			external(),
			babel({
				exclude: 'node_modules/**',
				babelHelpers: 'bundled'
			}),
			del({ targets: ['dist/*.js'] }),
			generateDeclarations(),
			resolve({
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}),
			image()
		],
		external: Object.keys(pkg.peerDependencies || {}).concat([
			'@mui/icons-material',
			'@mui/material',
			'@mui/material/styles',
			'@mui/x-date-pickers',
			'@mui/x-date-pickers/AdapterDayjs',
			'dayjs',
			'dayjs/plugin/relativeTime',
			'dayjs/plugin/timezone',
			'dayjs/plugin/utc',
			'dayjs/locale/it',
			'dayjs/locale/de',
			'dayjs/locale/fr',
			'dayjs/locale/es',
			'classnames',
			'clsx',
			'jsonexport/dist',
			'lodash',
			'lodash/merge',
			'framer-motion',
			'simplebar-react',
			'@iconify/react',
			'react-query',
			'prop-types',
			'query-string',
			'react-error-boundary',
			'react-router-dom',
			'ra-i18n-polyglot',
			'react-hook-form',
			'use-react-router-breadcrumbs',
			'react-color',
			'@hello-pangea/dnd'
		])
	},
	{
		// Build the TypeScript definitions for javascript files.
		// This task can be done only after generateDeclarations() call that
		// will generate required files for standard definitions.
		input: 'dist/index.d.ts',
		output: [{ file: 'dist/types.d.ts', format: 'es' }],
		plugins: [dts()]
	}
];

export default config;
