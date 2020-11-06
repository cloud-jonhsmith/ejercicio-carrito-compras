const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    output: {
        filename: 'js/[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    mode: 'development',
    devtool: "cheap-source-map",
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
        ]
    }
})