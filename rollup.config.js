import babel from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
import external from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

const config = {
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
    del({ targets: ["dist/*"] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}).concat([
    "@material-ui/core",
    "@material-ui/core/styles",
    "@material-ui/icons",
    "@material-ui/styles",
    "classnames",
    "lodash",
    "moment",
    "prop-types",
    "ra-i18n-polyglot",
    "react-redux",
    "react-router-dom",
    "react-final-form",
    "query-string",
    "ra-ui-materialui",
  ]),
};

export default config;
