const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        'container-block': './blocks/src/container-block.js'
    },
    output: {
        path: path.join(__dirname, 'assets/js'),
        filename: '[name]-build.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
}