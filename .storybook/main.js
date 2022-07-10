module.exports = {
  stories: ["../src/design-system/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/preset-scss",
    "storybook-addon-sass-postcss",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        rule: {
          test: /\.(scss|sass)$/i,
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        // include: path.resolve(__dirname, "../src/design-system/**/*.scss"),
      }
      // {
      //   exclude: /\.(s?(a?|c)ss|js|html)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[hash:10].[ext]",
      //   },
      // }
    )

    // Return the altered config
    return config
  },
}
