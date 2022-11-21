const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
})

const cssPlugin = new MiniCssExtractPlugin({
    filename: "./bundle.css"
})

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                type: "asset",
                test: /\.(gif|png|jpe?g|svg)$/i
            }
        ]
    },
    plugins: [htmlPlugin, cssPlugin]
}