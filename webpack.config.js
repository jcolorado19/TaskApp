const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        app: [
            "@babel/polyfill",
            "./src/js/index.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'bluid'),
        filename: "js/bluid.js"
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                  require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }

                ]
                    
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: [
                collapsewithespace = true
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        })
    ]
}