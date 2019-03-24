const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hotOnly: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};
