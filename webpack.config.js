module.exports = {
    entry: './app/Communicator.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ["communicatorModularUMD"]
    },
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        inline: false
    }
};
