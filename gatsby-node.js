/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
          options: {
              "jsc": {
                "parser": {
                  "syntax": "ecmascript",
                  "jsx": true,
                  "dynamicImport": true,
                  "privateMethod": true,
                  "functionBind": true,
                  "exportDefaultFrom": true,
                  "exportNamespaceFrom": true,
                  "decorators": true,
                  "decoratorsBeforeExport": true,
                  "topLevelAwait": true,
                  "importMeta": true
                }
              }
          }
        }
      }
    ]
  }
  })
}
