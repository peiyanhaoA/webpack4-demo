const path = require('path');



module.exports = {
    dev: {
        devtool: 'inline-source-map',
        host: 'localhost',
        port: 8880,
        autoOpenBrowser: false,
        errorOverlay: true,
        assetsPublicPath: '/',
        assetsSubDirectory: 'static'
    },
    
    build: {
        devtool: 'source-map',
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsSubDirectory: 'static',
        productionSourceMap: true,
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: './'
    }
}