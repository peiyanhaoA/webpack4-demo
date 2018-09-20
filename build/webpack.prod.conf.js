const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = require('./webpack.common.conf.js');
const env = require('../config/prod.env');
const utils = require('./utils');
const config = require('../config');
console.log(process.env.NODE_ENV)
module.exports = merge(common, {
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
        publicPath: config.build.assetsPublicPath
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: {
                  warnings: false
                }
            },
            sourceMap: config.build.productionSourceMap,
            parallel: true
        }),
        // new ExtractTextPlugin({
        //     filename: utils.assetsPath('css/[name].[contenthash].css'),
        //     allChunks: true,
        // }),
        // new OptimizeCssAssetsPlugin({
        //     cssProcessorOptions: config.build.productionSourceMap
        //     ? { safe: true, map: { inline: false } }
        //     : { safe: true }
        // }),
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'index.html',
            // inject: true
        }),
        new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, '../static'),
              to: config.build.assetsSubDirectory,
              ignore: ['.*']
            }
        ])
    ]
})