const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const paths = require('./../paths');

module.exports = {
    entry: paths.clientMain,
    module: {
        rules: [
        {
            // transpile js/jsx source code with babel
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            // transpile sass/scss/plain css and
            // inject the styles into the page
            // also enable css modules for locally scoped rules
            test: /\.(?:sa|s?c)ss$/,
            exclude: [/node_modules/],
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: paths.dist,
        publicPath: paths.publicPath,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: paths.indexHtml, 
            filename: './index.html' 
        }),
        new Dotenv()
    ],
    devServer: {
        contentBase: paths.dist,
        hot: true
    }
}