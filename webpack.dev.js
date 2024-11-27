const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtools: "inline-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
});
