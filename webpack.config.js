const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./demo/index.ts',
    output:{
        path:path.resolve(__dirname,'./public'),
        filename:'app.bundle.js'
    },
    devServer:{
        //设置服务器访问的基本目录
        contentBase:path.resolve(__dirname,'./public'),
        port: 8888, // 设置端口号
        inline:true
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'assets/'
                    }
                }
            }
        ]
    },
    resolve:{
        extensions:['.ts','.tsx','.js']
    },
    devtool:"eval",
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}
