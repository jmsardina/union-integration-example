const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'tk-union.js',
    /*
     * This exposes the library under all the module definitions, allowing it
     * to work with CommonJS, AMD and as global variable.
     */
    libraryTarget: 'umd',
    library: {
      /*
       * Global namespace. This option is only relevant if AMD is not enabled.
       */
      root: 'TkUnion',
      /*
       * Name of AMD library.  This will allow you to immediately require the
       * modules, as long as AMD is available:
       ```
       require(['tk-union'], (union) => {
          // everything exported from the JS bundle will be accessible on the
          // local variable `union`
       })
       ```
       */
      amd: 'tk-union',
    },
    /*
     * This option is necessary to automatically define the modules in AMD
     */
    umdNamedDefine: true
  },
  resolve: {
    /*
     * Union's current build system exports styles as cssm files, which are then
     * reference in the Union source code wi no extention. This will allow us
     * to resolve those files.
     */
    extensions: ['.js', '.cssm'],
  },
  module: {
    rules: [
      {
        // Project Union css module config:
        // issuer must be specified when using the ExtractTextWebpackPlugin
        issuer: /\.js$/,
        // react-dates package is not compatible with this rule, so exclude it
        exclude: /react-dates/,
        test: /\.cssm?$/,
        // Tell ExtractTextWebpackPlugin to extract css contents from Union css modules
        // ExtractTextWebpackPlugin always needs a `use` option
        use: ExtractTextWebpackPlugin.extract({ use: [] })
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'a-css-loader',
              options: {
                mode: 'local',
                minimize: { zindex: false },
                scopedNameFormat: '[name]__[local]___[hash:base64:5]',
                camelize: false
              }
            },
            { loader: 'sass-loader' }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: 'tk-union.css',
      ignoreOrder: true
    }),
  ],
}
