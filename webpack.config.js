var path = require('path');
module.exports = {
    entry: './views/app.js',
    output: {
      path: path.resolve(__dirname, './assets/js'),
      filename: 'bundle.js'
      //filename: path.resolve(__dirname, 'assets/js/bundle.js'),
    },
    module: {
        rules: [
          {
            use: 'babel-loader',
            //test: /\.js$/,
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
          }
        ]
      },
    resolve: {
        extensions: ['.js', '.jsx']
    }
  };