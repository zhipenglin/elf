
import fs from 'fs-extra'
import path from 'path'
export const basePath='photos';
var photoDirList={};
export default async function(){
    console.log('正在加载图片MD5索引...');
    var read=async function(dir){
        var files=await new Promise(function(resolve,reject){
            fs.readdir(dir,function(err,files){
                if(err) reject(err);
                resolve(files);
            });
        });
        for(let file of files){
            var dirPath=path.join(dir, file);
            var isDirectory=await new Promise((resolve,reject)=> {
                fs.stat(dirPath, (err, res)=> {
                    if (err) reject(err);
                    resolve(res.isDirectory());
                })
            });
            if(isDirectory){
                await read(dirPath);
            }else{
                photoDirList[path.basename(dirPath,path.extname(dirPath))]=dirPath;
            }
        }
    };
    await new Promise((resolve,reject)=>{
        fs.ensureDir(basePath,(err)=>{
            if(err) reject(err);
            resolve();
        });
    });
    await read(basePath);
}

export const getPhotoDir=function(md5){
    return photoDirList[md5]?path.relative(basePath,photoDirList[md5]):undefined;
};

export const pushPhotoDir=function(md5,dir){
    photoDirList[md5]=dir;
};