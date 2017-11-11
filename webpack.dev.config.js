const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const VENDOR_LIBS = [
    'react',
    'react-dom',
];

module.exports = {
    entry: {
        bundle: ['./src/app/index.jsx', './src/scss/main.scss'],
        vendor: VENDOR_LIBS,
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js',
        publicPath: './',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        stats: {
            chunkModules: false,
            colors: true,
            path: path.resolve(__dirname, 'public'),
        },
        contentBase: `${__dirname}/public`,
        publicPath: 'http://localhost:3000/',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        historyApiFallback: true,
        proxy: {
            '/': {
                target: 'http://localhost:8080',
            },
        },
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                use: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template.html',
            filename: 'index.html',
            appMountId: 'app',
            inject: true,
        }),
        new WriteFilePlugin({ log: true }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
        }),
    ]
};
