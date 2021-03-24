const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s?css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                    test: /\.(png|ttf|jpe?g|svg|ico)$/,
                    type: ['asset/resource', 'javascript/auto']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCSSExtractPlugin ({
            filename: '[name].css'
        }),
        new GenerateSW()
    ]
}