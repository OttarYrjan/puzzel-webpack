const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
entry: './src/main.js',
resolve: {
    extensions: ['.tsx', '.ts', '.js'],
},
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./dist')
},
mode : 'none',
module: {
    rules: [
        {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.(png|jpg)$/,
            type: 'asset'
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,'css-loader'
            ]
     
        }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({filename: 'styles.css'}),
    new HtmlWebpackPlugin({
        title: 'Puzzel Test',
        template: 'src/index.html'
    }),
  ]
};