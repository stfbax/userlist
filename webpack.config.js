var CONFIG = require('./webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: './public',
        publicPath: CONFIG.publicPath,
        filename: '/bundle.min.js'
    },
    devtools: 'inline-source-map',
    module: {
        loaders: CONFIG.loaders
    },
    plugins: CONFIG.plugins,
    node: {
        fs: "empty"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: {
      index: '/'
    }
  },

};
