import EXIF from './exif'
import zip from './zip'
import getFetch from '../../../lib/fetch'
const fetch=getFetch({
  baseUrl:'/api/object/upload'
});
const url='/api/object/upload';
export default  async(file,item,errHandler)=>{
  await new Promise((resolve,reject)=>{
    if(!file){
      reject('您没有选择任何照片');
    }
    if(file.type!=''){
      if(!/image\/*/.test(file.type)){
        reject('只允许上传jpg,,jpeg,gif,png格式的图片');
        return;
      }
    }else{
      if(!/\.(jpg|jpeg|gif|png)$/.test(file.name)){
        reject('只允许上传jpg,,jpeg,gif,png格式的图片');
        return;
      }
    }
    if(file.size>5*1024*1024){
      reject('只允许上传5M以内的图片');
      return;
    }
    resolve();
  });
  var orientation=new Promise((resolve,reject)=>{
    EXIF.getData(file,function(){
      EXIF.getAllTags(this);
      resolve(file,EXIF.getTag(this, 'Orientation'));
    });
  });
  try{
    file=await zip(file,orientation);
  }catch(e){}
  return fetch.upload(`?orientation=${orientation}`,{photo:file});
}
