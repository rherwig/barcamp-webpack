const { join } = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: join(__dirname, 'src/index'),
    output: {
        filename: 'presentation.js',
        path: join(__dirname, 'public'),
        publicPath: '/'
    },
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]__[hash:base64:5]'
                    }
                },
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]'
                }
            }
        }]
    },
    plugins: [
        new HtmlPlugin({
            template: join(__dirname, 'src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
