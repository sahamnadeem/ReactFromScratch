import { Configuration } from 'webpack'
import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = (): Configuration => {
    return {
        mode: "production",
        entry: path.resolve(__dirname, "./src/index.tsx"),
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/i,
                    exclude: [/node_modules/, /\.(spec|test).(ts|js)x?$/i],
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        compact: true,
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ],
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
            alias: {
                src: path.resolve(__dirname, "./src/"),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "index.html",
                inject: true,
            }),
        ],
    }
}

export default config;