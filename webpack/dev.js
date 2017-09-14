var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

const publicPath = null;

const plugins = [
    new CleanPlugin(['public'], {
        root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
        title: 'USERLIST MVC',
        template: './src/html/index.html',
        hash: true
    }),
    new ExtractTextPlugin('styles.css?[contenthash]')
];

const loaders = [
    {
        test: /\.jsx?$/,
        loaders: ['babel?presets[]=es2015,presets[]=react'],
        exclude: /node_modules/
    },
    {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap')
    },
    {
        test: /\.json$/,
        loaders: ['raw']
    },
    {
        test: /\.(jpg|png|svg)$/,
        loaders: ['file?name=[name].[ext]?[hash]']
    },
    {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loaders: ['url?name=[name].[ext]?[hash]']
    }
];

module.exports = { publicPath, plugins, loaders };
