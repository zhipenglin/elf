/**
 * Created by ifchangetoclzp on 2016/7/14.
 */
export default function(Vue){
    Vue.prototype.$getUUID=(()=>{
        var UUID=0;
        return (start)=>{
            return start+UUID++;
        }
    })();
}