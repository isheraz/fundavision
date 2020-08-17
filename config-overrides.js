const TerserPlugin = require("terser-webpack-plugin");

module.exports = (config, ...rest) => {
  return {
    ...config,
    resolve: { ...config.resolve, symlinks: false },
    optimization: { minimizer: [new TerserPlugin({ parallel: 2 })] }
  };
};
