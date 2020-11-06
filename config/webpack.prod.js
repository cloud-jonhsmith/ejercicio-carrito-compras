const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    output: {
        filename: 'js/[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    mode: 'production',
    devtool: "source-map",
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
        ]
    }
})