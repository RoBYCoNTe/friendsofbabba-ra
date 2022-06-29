import babel from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import generateDeclarations from "rollup-plugin-generate-declarations";
import pkg from "./package.json";

const config = [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],

    plugins: [
      external(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),

      del({ targets: ["dist/*.js"] }),
      generateDeclarations(),
    ],
    external: Object.keys(pkg.peerDependencies || {}).concat(
      "@material-ui/core",
      "@material-ui/core/styles",
      "@material-ui/core/utils",
      "@material-ui/icons",
      "@material-ui/styles",
      "classnames",
      "clsx",
      "jsonexport/dist",
      "lodash",
      "moment",
      "prop-types",
      "query-string",
      "ra-i18n-polyglot",
      "ra-ui-materialui",
      "react-error-boundary",
      "react-final-form",
      "react-redux",
      "react-router-dom"
    ),
  },
  {
    // Build the TypeScript definitions for javascript files.
    // This task can be done only after generateDeclarations() call that
    // will generate required files for standard definitions.
    input: "./dist/index.d.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;
