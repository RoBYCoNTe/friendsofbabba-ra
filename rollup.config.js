import babel from "@rollup/plugin-babel";
import { defineConfig } from "rollup";
import del from "rollup-plugin-delete";
import external from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

const config = defineConfig({
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
  external: Object.keys(pkg.peerDependencies || {}),
});

export default config;
