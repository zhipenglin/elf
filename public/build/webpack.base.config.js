var path=require('path');
var webpack=require('webpack');
var HtmlwebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var VAR=require('./webpack.var.config.js');
var ROOT_PATH=VAR.ROOT_PATH,
    APP_PATH=VAR.APP_PATH,
    BUILD_PATH=VAR.BUILD_PATH,
    TEM_PATH=VAR.TEM_PATH;
module.exports={
    entry:{
        app:path.resolve(APP_PATH,'index.js')
    },
    output:{
        path:BUILD_PATH,
        filename:'[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test:/\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css!autoprefixer!less"),
                include:APP_PATH
            },{
                test:/\.(png|jpg|svg|gif)$/,
                loader:'url',
                query:{
                    limit:50000,
                    name:'images/[name].[ext]'
                }
            },{
                test:/\.js$/,
                loader:'babel',
                include:APP_PATH
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins:[
        new ExtractTextPlugin("[name].css"),
        new HtmlwebpackPlugin({
            filename:'index.html',
            title:'hello world app',
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks:['app'],
            inject: 'body'
        })
    ]
};
