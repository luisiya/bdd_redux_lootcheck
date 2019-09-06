let nodeExternals = require('webpack-node-externals');

let serverConfig = {
    externals: [nodeExternals()],
};