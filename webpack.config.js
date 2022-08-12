module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'sass-loader',
                    'pug-loader',
                    'pug-plain-loader',
                ],
            },
        ],
    },
};