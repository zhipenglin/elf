/**
 * Created by ifchangetoclzp on 2016/7/25.
 */
export default function(type){
    return ({dispatch},...args)=>dispatch(type,...args);
}