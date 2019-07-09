const TsConfigPathPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = ({ config, storybookBaseConfig }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader")
        },
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.plugins = [new TsConfigPathPlugin({
      configFile: "./tsconfig.json"
    })]
    return config;
  };

