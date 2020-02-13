module.exports = {
    bail: true,
    entry: "./src/index.js",
    output: {
        path: `${__dirname}/build`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(css)$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        publicPath: "/build/",
        port: 9000,
        hot: true,
        historyApiFallback: {
            index: "public/index.html"
        }
    }
};
