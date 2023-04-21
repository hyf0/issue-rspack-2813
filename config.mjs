import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index.js",
  },
  externals: ["react"],
  externalsType: "amd",
  ...(isRunningRspack ? {
    builtins: {
      react: {
        runtime: "automatic",
      },
    },
  }: {}),
  module: {
    rules: [
      {
        test: /\.js$/,
        resourceQuery: /raw/,
        type: "asset/source",
      },
    ],
  },
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
    filename: "[name]/[name].js",
  },
  resolve: {
    alias: {
      "./answer": path.resolve(__dirname, "./src/answer.js?raw"),
    },
  },
};

export default config;
