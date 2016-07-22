/**
 * Created by Administrator on 2016/5/23.
 */
var path=require('path');
var ROOT_PATH=path.resolve(__dirname,'../'),
    APP_PATH=path.resolve(ROOT_PATH,'app'),
    DEV_PATH=ROOT_PATH,
    BUILD_PATH=path.resolve(ROOT_PATH,'dist'),
    TEM_PATH=path.resolve(ROOT_PATH,'tpl');
module.exports={
    ROOT_PATH:ROOT_PATH,
    APP_PATH:APP_PATH,
    DEV_PATH:BUILD_PATH,
    BUILD_PATH:BUILD_PATH,
    TEM_PATH:TEM_PATH
}