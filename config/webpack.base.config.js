const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    },
                },
                'sass-loader',
            ],
        },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
          template: './src/index.html', 
          filename: './index.html' 
        }),
    ]
}