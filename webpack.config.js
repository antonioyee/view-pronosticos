var pkg =  require('./package.json');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './js/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: pkg.name + '.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'jsx?harmony', 'jsx-loader'],
                include: path.join(__dirname, 'js')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
