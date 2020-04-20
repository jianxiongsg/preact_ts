var path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports={
    entry:"./src/index.tsx",
    mode:"development",
    output:{
        filename:"game.js",
        path:__dirname+"/dist"
    },
    module:{
        rules:[
            {
                test:/\.css?$/,
                exclude:/(node_modules | bower_components)/,
                use:[
                    {
                        loader:'stylesheet-loader'
                    }
                ]
            },
            {
                test:/\.ts|\.tsx?$/,
                exclude:/(node_modules | bower_components)/,
                use:[
                    {
                        loader:'babel-loader'
                    },
                    {
                        loader:'ts-loader'
                    }
                ]
            },
            {
                test:/\.js|\.jsx?$/,
                exclude:/(node_modules | bower_components)/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            },
            {
                test:/\.less?$/,
                exclude:/(node_modules | bower_components)/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            }
        ]
    },
    resolve:{
        extensions:['.ts','.tsx','.jsx','.js']
    },
    plugins:[
        new CopyWebpackPlugin([
            {
              from: 'src/index.html',
              to: path.resolve(__dirname, 'dist')
            }
        ]),
    ]
}