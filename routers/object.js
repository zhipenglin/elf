/**
 * Created by ifchangetoclzp on 2016/7/19.
 */
import Router from 'koa-router'
import fs from 'fs-extra'
import path from 'path'
import crypto from 'crypto'
import {basePath,getPhotoDir,pushPhotoDir} from '../lib/photodir'
var router=new Router({
    prefix:'/api/object'
});

router.post('/upload',async (ctx,next)=>{
    var photo=ctx.request.files.photo;
    if(!photo){
        return ctx.error(2,'图片不存在');
    }
    var file=await new Promise((resolve,reject)=>{
        fs.readFile(photo.path,'binary',(err,file)=>{
            if(err) reject(err);
            resolve(file);
        });
    });
    var md5=crypto.createHash('md5').update(file).digest('hex');
    if(!getPhotoDir(md5)){
        var dir=path.join(basePath,(function(){
            var date=new Date();
            var format=function(num){
                var arr=['00','01','02','03','04','05','06','07','08','09'];
                return arr[num]||num;
            };
            return `${date.getFullYear()}${format(date.getMonth()+1)}${date.getDate()}`;
        })(),parseInt(Math.random()*1000).toString(),);
        await new Promise((resolve,reject)=>{
            fs.ensureDir(dir,(err)=>{
                if(err) reject(err);
                resolve();
            });
        });
        var filePath=path.join(dir,md5+(path.extname(photo.name)||'.jpg'));
        await new Promise((resolve,reject)=>{
            fs.writeFile(filePath,file,'binary',(err)=>{
                if(err) reject(err);
                resolve();
            });
        });
        pushPhotoDir(md5,filePath);
    }
    ctx.success(getPhotoDir(md5));
});

export default router;