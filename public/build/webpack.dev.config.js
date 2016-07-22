/**
 * Created by Administrator on 2016/5/21.
 */
var baseConfig=require('./webpack.base.config.js');
var merge = require('webpack-merge');
var VAR=require('./webpack.var.config.js');
module.exports=merge(baseConfig,{
    output:{
        path:VAR.DEV_PATH,
        filename:'[name].js'
    },
    devtool:'#source-map',
    devServer: {
        proxy: {
            '/common/upload':{
                target: 'http://m.91ddcc.com/',
                secure: false,
                changeOrigin: true
            },
            '/activitymany/*': {
                target: 'http://m.91ddcc.com/',
                /*rewrite: function(req) {
                 req.url = req.url.replace(/^\/api/, '');
                 },*/
                secure: false,
                changeOrigin: true
            }
        }
    }
});
