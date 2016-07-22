/**
 * Created by ifchangetoclzp on 2016/7/14.
 */
import FastClick from 'fastclick'
import adaption from './adaption'
import UUID from './UUID'
export default {
    install(Vue,options){
        options=Object.assign({},options,{
            fastclick:true,
            adaption:{}
        });
        //添加fastclick
        options.fastclick&&FastClick.attach(document.body);
        //添加屏幕适配
        adaption(Vue,options.adaption);
        //UUID生成器
        UUID(Vue);
    }
}