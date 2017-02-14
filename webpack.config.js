
// webpack
const webpack = require('webpack');

// path
const path = require('path');

//
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// module exports
module.exports = {
  // entry, multiple entries
  entry: [
    // a little express server. Serve the client at http://localhost:5000
    "webpack-dev-server/client?http://localhost:5000",
    // webpack-hot-dev-server
    "webpack/hot/dev-server",
    // ./scripts/index.js
    "./client/index.js"
  ],
  
  // output, virtual output
  output: {
    // path, output to current dir
    path: __dirname,  
    filename: "bundle.js", // __dirname/bundle.js
    publicPath: "/" // load css, js, etc
  },
  
  // resolve file extension
  resolve: {
    extension: ["", ".js"]
  },

  // see source map
  devtool: "eval-source-map",

  plugins: [
    // able to add remove npm package, with no reloading
    new webpack.HotModuleReplacementPlugin(),
    // Basically, no error emit, when there is an error. Print error to console only.
    new webpack.NoErrorsPlugin()
  ],
  
  // module
  module: {
    // loaders
    loaders: [
      {
        // test, .jsx, what about .js
        test: /\.jsx?$/,
        // loaders, babel
        loaders: ['babel'],
        // include, means include dirs....?
        //include: path.join(__dirname, 'scripts')
        include: path.join(__dirname, 'client')
      },
      
      { test: /\.css$/, loader: "style-loader!css-loader" }
      
    ]
    
  }
};
