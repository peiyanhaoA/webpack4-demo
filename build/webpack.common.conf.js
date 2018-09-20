const path = require('path');
const config = require('../config')

module.exports = {
    entry:{
        app: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '..', 'dist'),
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(svg|gif|jpg|png)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json"],
    }
}