const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const port = process.env.PORT || 3080;

module.exports = {
    mode: 'development',
    entry: './src/index.js',

    output: {
        filename: 'bundle.[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s?css$/,
                use: [ 'style-loader', 'css-loader' ]

            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader?$!expose-loader?jQuery"
            },
            {
                test: /\.(woff|woff2|eot|ttf|jpe?g|png|gif|svg)$/i,
                loader: "url-loader?name=src/[name].[ext]"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/setcolbd.png'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
};