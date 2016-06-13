var path = require('path');
var pathToReact = path.join(__dirname, "./node_modules/react/dist/react.js");
var pathToReactDOM = path.join(__dirname, "./node_modules/react-dom/dist/react-dom.js");

function rewriteUrl(replacePath) {
    return function (req, opt) {
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";

        req.url = req.path.replace(opt.path, replacePath) + query;
        console.log("rewriting ", req.originalUrl, req.url);
    };
}
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename:'bundle.js',//'[name].js'

    },
    module: {
        // noParse:[],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude:/node_modules/
            },
            {
                test: /\.css/,
                loader: 'style!css'
            },
            {
                test: /\.less/,
                loader: 'style!css!less'
            }
        ],
        noParse: [pathToReact, pathToReactDOM]
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".css", ".json"],
        alias: {
            'react': pathToReact,
            'react-dom': pathToReactDOM
        }
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        progress: true,
        contentBase:'build',
        stats: {colors:true},
        inline: true,
        publicPath:'/static/',
        proxy: [
            {
                path: /^\/api\/(.*)/,
                target: "http://localhost:8080/",
                rewrite: rewriteUrl('/$1\.json'),
                changeOrigin: true
            }
        ]
    },
}