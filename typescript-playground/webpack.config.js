// webpack.config.js
module.exports = {
    entry: './main.ts',
    output: { filename: 'bundle.js' },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{ loader: "ts-loader" }]
            }
        ]
    }
}