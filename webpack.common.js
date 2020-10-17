module.exports = {
    entry: {
        main: "./src/index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ["source-map-loader"]
            },
            {
                test: /\.html$/,   
                use: ["html-loader"] // Let require images in files
            },
            {
                test: /\.(svg|png|jpg|gif)$/i, //handles sepcified file types
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "images",
                    }
                }
            }
        ]
    }
};