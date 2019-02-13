const HtmlWebPackPlugin = require('html-webpack-plugin');

const plugins = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|mp4|svg|eot|woff(2)?|ttf)$/,
                loaders: ['file-loader']
            }
        ]
    },
    plugins: [plugins]
};