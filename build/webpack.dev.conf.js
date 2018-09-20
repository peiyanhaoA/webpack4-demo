const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.conf.js');
const config = require('../config');
const FriendlyErrorsWebpackPlugin  = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        clientLogLevel: 'warning',
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? {warnings: false, errors: true} : false,
        progress: true,
        publicPath: config.dev.assetsPublicPath,
        quiet: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // template: path.join(__dirname, '..', 'index.html')
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsWebpackPlugin({
            clearConsole: true
        }),
        new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, '../static'),
              to: config.dev.assetsSubDirectory,
              ignore: ['.*']
            }
        ])
    ]
})