/**
 * Created by ifchangetoclzp on 2016/7/14.
 */

export default function(Vue,options){
    options=Object.assign({},{
        base:32,
        design:828
    },options);
    Vue.prototype.$pageInfo={
        height:document.documentElement.clientHeight,
        width:document.documentElement.clientWidth
    };
}