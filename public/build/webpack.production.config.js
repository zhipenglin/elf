/**
 * Created by Administrator on 2016/5/21.
 */
var baseConfig=require('./webpack.base.config.js');
var webpack=require('webpack');
var merge = require('webpack-merge');
module.exports=merge(baseConfig,{
    plugins:[new webpack.optimize.UglifyJsPlugin({minimize:true})]
});
