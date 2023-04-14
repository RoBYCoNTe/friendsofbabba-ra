import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import generateDeclarations from 'rollup-plugin-generate-declarations';
import external from 'rollup-plugin-peer-deps-external';

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const config = [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs", globals: { react: 'React' } },
      { file: pkg.module, format: "esm", globals: { react: 'React' } },
    ],
    plugins: [
      external(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      del({ targets: ["dist/*.js"] }),
      generateDeclarations(),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}).concat([
      "@mui/icons-material",
      "@mui/material",
      "@mui/material/styles",
      "classnames",
      "clsx",
      "jsonexport/dist",
      "lodash",
      "lodash/merge",
      "framer-motion",
      "simplebar-react",
      "@iconify/react",
      "react-query",
      "moment",
      "prop-types",
      "query-string",
      "react-error-boundary",
      "react-router-dom",
      "ra-i18n-polyglot",
    ]),
  },
  {
    // Build the TypeScript definitions for javascript files.
    // This task can be done only after generateDeclarations() call that
    // will generate required files for standard definitions.
    input: "dist/index.d.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;
