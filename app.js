/**
 * Created by ifchangetoclzp on 2016/7/13.
 */
import koa from 'koa'
import routing from './routers'
import send from 'koa-send'
import staticCache from 'koa-static-cache'
import staticServer from 'koa-static'
import bodyParser from 'koa-better-body'
import convert from 'koa-convert'
import logger from 'koa-logger'
import favicon from 'koa-favicon'
import path from 'path'

import response from './lib/koa-response'
import {default as photoDir,basePath as photoDirPath} from './lib/photodir'

var app=new koa();

app
    .use(logger())
    .use(convert(bodyParser({
        files:true
    })))
    .use(response())
    .use(favicon(path.join(__dirname,'public/favicon.ico')))

routing(app);

app
    .use(convert(staticCache(path.join(__dirname,'public/dist'),{
        maxAge: 1,//365 * 24 * 60 * 60,
        gzip:true,
        //buffer:true
    })))
    .use(staticServer(path.join(__dirname,photoDirPath)))
    .use(async (ctx,next)=>{
        await send(ctx,'public/dist/index.html');
    });
Promise.resolve().then(photoDir).then(function(){
    app.listen(3000);
}).then(()=>{
    console.log('应用启动成功！');
}).catch((e)=>{
    console.log('应用启动失败！');
    throw e;
});
