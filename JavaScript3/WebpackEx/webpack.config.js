module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    watch: true,
    devtool: 'source-map',
    module: {

        loaders: [

            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {


                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {

                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: "file-loader"
            }
        ],
    }
};

